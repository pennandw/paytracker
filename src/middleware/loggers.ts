import { RequestHandler } from "express";

export const middlewareLogger: RequestHandler = (req, _res, next) => {
  console.log("Getting URL ==> " + req.url);
  next();
};
