import { Router } from "express";
import {
  getCategories,
  createCategory,
  getCategoriesById,
} from "../handlers/category";

const router = Router();

// GET /api/users
router.get("/", getCategories);
// GET /api/users/:id
router.get("/:id", getCategoriesById);
// POST /api/users
router.post("/", createCategory);

export default router;
