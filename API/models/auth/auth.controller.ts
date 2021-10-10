import { NextFunction, Request, Response } from "express";
import { AuthService } from "./auth.service";

export class AuthController {
  static async registerUser(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    try {
      const response = await AuthService.registerNewUser(email, password);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async loginUser(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    try {
      const response = await AuthService.loginUser(email, password);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async logoutUser(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await AuthService.logoutUser();
      res.status(200).json({
        message: "User logged out.",
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async getCurrentUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await AuthService.getCurrentUser();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
