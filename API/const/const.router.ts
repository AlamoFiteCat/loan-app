import { Router } from "express";
const router = Router();
import loansRoutes from "../models/loans/loans.routes";
import authRoutes from '../models/auth/auth.routes';

router.use("/loans", loansRoutes);
router.use("/auth", authRoutes);

export default router;