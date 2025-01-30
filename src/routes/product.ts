import { Router } from "express";
import {
  getProducts,
  getProductsById,
  createProduct,
} from "../handlers/product";

const router = Router();

// GET /api/users
router.get("/", getProducts);
// GET /api/users/:id
router.get("/:id", getProductsById);
// POST /api/users
router.post("/", createProduct);

export default router;
