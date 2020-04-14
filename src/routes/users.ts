import { Router } from "express";
import User, { UserI } from "../models/user.model";

export const userRouter = Router();

//Get a list of users
userRouter.get("/", (_req, res, _next) => {
  User.findAll().then((result) => res.json(result));
});

//Get a user
userRouter.get("/:userID", (req, res, next) => {
  const userid = req.params.userID;
  User.findByPk(userid).then((result) => res.json(result));
});

//Create a user
userRouter.post("/", (req, res, next) => {
  User.create(req.body).then((result) => res.json(result));
});

//Update a user
userRouter.put("/:userID", (req, res, _next) => {
  User.update(req.body, {
    where: {
      id: req.params.userID,
    },
  }).then((result) => res.json(result));
});

//Delete a user
userRouter.delete("/:userID", (req, res, _next) => {
  User.destroy({
    where: {
      id: req.params.userID,
    },
  }).then((result) => res.json(result));
});
