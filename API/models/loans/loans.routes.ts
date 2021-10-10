import { Router } from "express";
const router = Router();
import { LoansController } from "./loans.controller";

router.get("", LoansController.getAllLoans);
router.post("", LoansController.postNewLoan);
router.put("/:id", LoansController.updateLoan);
router.delete("/:id", LoansController.deleteLoan);

export default router;
