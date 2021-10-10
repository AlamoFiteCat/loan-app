import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "@firebase/firestore";
import { firebaseDb } from "../../const/firebase.const";
import { Loan } from "../../interfaces/loan.interface";

export class LoanService {
  constructor() {}

  static getAllLoans() {
    return new Promise(async (resolve, reject) => {
      const data = [];
      try {
        const querySnapshot = await getDocs(collection(firebaseDb, "loans"));
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
        });
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  }

  static postNewLoan(loan: Loan) {
    return new Promise(async (resolve, reject) => {
      try {
        await setDoc(doc(firebaseDb, "loans", loan.id), loan);
        resolve({
          message: "Loan added!",
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  static updateLoan(loanID: string, loanData: Loan) {
    return new Promise(async (resolve, reject) => {
      try {
        await setDoc(doc(firebaseDb, "loans", loanID), loanData);
        resolve({
          message: "Loan updated!",
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  static deleteLoan(loanID: string) {
    return new Promise(async (resolve, reject) => {
      try {
        await deleteDoc(doc(firebaseDb, "loans", loanID));
        resolve({
          message: `Loan ${loanID} deleted.`,
        });
      } catch (error) {
        reject(error);
      }
    });
  }
}
