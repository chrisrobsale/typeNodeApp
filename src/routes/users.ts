import { Router } from "express";
import { getUsers, getUsersById, createUser } from "../handlers/users";

const router = Router();

// GET /api/users
router.get("/", getUsers);
// GET /api/users/:id
router.get("/:id", getUsersById);
// POST /api/users
router.post("/", createUser);

export default router;
