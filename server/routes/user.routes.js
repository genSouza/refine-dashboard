import express from "express";
import {
  getAllUsers,
  createUser,
  getUserById,
} from "../controllers/user.controller.js";

const router = express.Router();

//  All routes
router.get("/", getAllUsers);
router.post("/", createUser);
router.get("/:id", getUserById);

export default router;
