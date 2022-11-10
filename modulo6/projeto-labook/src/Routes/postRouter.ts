import express from "express";
import { PostController } from "../Controller/PostController";

export const postRouter = express.Router()
const postController = new PostController()

postRouter.post("/", postController.create)