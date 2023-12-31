import { BaseService } from "./base.collection";
import { Rate, type Project } from "../models";
import { CURRENT_EDITION } from "~/constants";
import { collectionGroup, getDocs, onSnapshot } from "firebase/firestore";

class ProjectCollection extends BaseService<Project> {
  constructor() {
    super(`Editions/${CURRENT_EDITION}/Projects`);
  }

  subscribeToGroup(callback?: (elements: Rate[]) => void) {
    const unsubscribe = onSnapshot(collectionGroup(this.store, 'Rates'), ({ docs }) => {
      const elements = docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as Rate[];

      callback && callback(elements);
    });

    return unsubscribe;
  }

  async getRates() {
    const snapshot = await getDocs(collectionGroup(this.store, 'Rates'));
    const list = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return list as Rate[];
  }
}

export default ProjectCollection;
