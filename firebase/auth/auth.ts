import { app } from "../core";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const auth = getAuth(app);

export const getCurrentUser = async () => {
  const promisifiedOnAuthStateChanged = () => {
    return new Promise((resolve, _reject) => {
      auth.onAuthStateChanged((user) => {
        if (user)
          resolve(user.uid);
        else
          resolve(null);
      });
    });
  };

  const uid = await promisifiedOnAuthStateChanged();
  return uid;
};

export const signUpUserWithEmailAndPassword = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log(userCredential.user);
    console.log(auth);
  } catch (error) {
    console.log(error);
  }
};

export const signInUserWithEmailAndPassword = async (email: string, password: string) => {
  try {
    console.log("hi");
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log(userCredential.user);
  } catch (error) {
    console.log(error);
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
