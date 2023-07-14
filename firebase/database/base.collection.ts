import { app } from "../core";
import {
  addDoc,
  collection,
  CollectionReference,
  DocumentData,
  Firestore,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  getDoc,
  setDoc,
  onSnapshot,
  Unsubscribe,
  getFirestore,
} from "firebase/firestore";
import { type Collection } from "../models/collection";

abstract class BaseCollection<T extends Collection> {
  protected store: Firestore = getFirestore(app);
  public path: string | "";
  protected collection: CollectionReference<DocumentData>;

  constructor(path: string) {
    this.path = path;
    this.collection = collection(this.store, path);
  }

  async getAll(): Promise<T[]> {
    const snapshot = await getDocs(this.collection);
    const list = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return list as (T & { id: string })[];
  }

  async create(data: Omit<T, "id">): Promise<T> {
    const { id } = await addDoc(this.collection, data);
    return {
      ...data,
      id,
    } as T;
  }

  async createWithId({ id, ...data }: T): Promise<boolean> {
    try {
      if (!id) throw new Error("Id not found");
      await setDoc(doc(this.collection, id), data);

      return await this.exists(id);
    } catch {
      return false;
    }
  }

  async delete(id: string): Promise<boolean> {
    const reference = doc(this.collection, id);
    await deleteDoc(reference);
    return !(await this.exists(id));
  }

  async update({ id, ...data }: Partial<T> & { id: string }): Promise<void> {
    const reference = doc(this.collection, id);
    return await updateDoc(reference, data);
  }

  async exists(id: string | null | undefined): Promise<boolean> {
    if (!id) return false;

    const reference = doc(this.collection, id);
    const snapshot = await getDoc(reference);

    return snapshot.data() !== undefined;
  }

  async get(id: string): Promise<T | undefined> {
    const reference = doc(this.collection, id);
    const snapshot = await getDoc(reference);

    if (!snapshot.data()) return undefined;

    return {
      ...snapshot.data(),
      id: snapshot.id,
    } as T;
  }

  subscribe = (id: string, callback: (element: T) => void): Unsubscribe => {
    const reference = doc(this.collection, id);
    const unsubscribe = onSnapshot(reference, (doc) => {
      callback &&
        callback({
          ...doc.data(),
          id: doc.id,
        } as T);
    });
    return unsubscribe;
  };

  subscribeToAll = (callback?: (elements: T[]) => void): Unsubscribe => {
    const unsubscribe = onSnapshot(this.collection, ({ docs }) => {
      const elements = docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as T[];

      callback && callback(elements);
    });

    return unsubscribe;
  };
}

export { BaseCollection as BaseService };
