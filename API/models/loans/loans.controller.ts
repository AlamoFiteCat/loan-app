import { NextFunction, Request, Response } from "express";
import { LoanService } from "./loans.service";

export class LoansController {
  static async getAllLoans(req: Request, res: Response, next: NextFunction) {
    try {
      const loans = await LoanService.getAllLoans();
      res.status(200).json(loans);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async postNewLoan(req: Request, res: Response, next: NextFunction) {
    const newLoan = req.body;
    try {
      const response = await LoanService.postNewLoan(newLoan);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async updateLoan(req: Request, res: Response, next: NextFunction) {
    const loanToUpdate = req.body;
    const loanID = req.params.id;

    try {
      const response = await LoanService.updateLoan(loanID, loanToUpdate);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async deleteLoan(req: Request, res: Response, next: NextFunction) {
    const loanID = req.params.id;
    try {
      const response = await LoanService.deleteLoan(loanID);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
