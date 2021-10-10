import { NextFunction, Request, Response } from "express";

export function cors(req: Request, res: Response, next: NextFunction) {
  let origin = req.headers.origin || req.headers.referer;

  if (origin && origin.match(/localhost/gi)) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "OPTIONS, GET, POST, PUT, DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Accept, APPKEY, withCredentials"
    );
  }

  if (req.method === "OPTIONS") {
    res.status(200).json({});
  } else {
    next();
  }
}
