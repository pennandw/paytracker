import { RequestHandler } from "express";

export const userRoute: RequestHandler = (req, res, _next) => {
  res.send("THis is what is sent to the page!");
};
