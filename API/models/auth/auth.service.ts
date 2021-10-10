import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
} from "@firebase/auth";
import { firebaseAuth } from "../../const/firebase.const";

export class AuthService {
  constructor() {}

  static registerNewUser(
    email: string,
    password: string
  ): Promise<{ message: string; credentials: UserCredential }> {
    return new Promise(async (resolve, reject) => {
      try {
        const userCreds = await createUserWithEmailAndPassword(
          firebaseAuth,
          email,
          password
        );
        resolve({
          message: "User created!",
          credentials: userCreds,
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  static loginUser(
    email: string,
    password: string
  ): Promise<{ message: string; credentials: UserCredential }> {
    return new Promise(async (resolve, reject) => {
      try {
        const userCreds = await signInWithEmailAndPassword(
          firebaseAuth,
          email,
          password
        );
        resolve({
          message: "Logged in!",
          credentials: userCreds,
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  static logoutUser() {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await signOut(firebaseAuth);
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  }

  static getCurrentUser() {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(firebaseAuth.currentUser);
      } catch (error) {
        reject(error);
      }
    });
  }
}
