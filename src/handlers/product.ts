import { Request, Response } from "express-serve-static-core";
import { CommonResponse } from "../types/response";
import Product, { IProduct } from "../models/Product";
import Category from "../models/Category";

export async function getProducts(req: Request, res: Response<CommonResponse>) {
  try {
    const productList = await Product.find();
    res.status(200).send({
      message: "Successfully fetched products",
      data: productList,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error fetching products",
      data: [],
    });
  }
}

export async function getProductsById(
  req: Request,
  res: Response<CommonResponse>
) {
  try {
    const category = await Product.findById(req.params.id);
    if (!category) {
      res.status(404).send({
        message: "Product not found",
        data: [],
      });
    }
    res.status(200).send({
      message: "Successfully fetched product",
      data: [category],
    });
  } catch (error) {
    res.status(500).send({
      message: "Error fetching product",
      data: [],
    });
  }
}

export async function createProduct(
  req: Request<{}, {}, IProduct>,
  res: Response<CommonResponse>
) {
  try {
    const { name, price, quantity, category } = req.body;

    const existingProduct = await Product.findOne({
      name: { $regex: new RegExp("^" + name + "$", "i") },
    });

    const existingCategory = await Category.findOne({
      name: { $regex: new RegExp("^" + category + "$", "i") },
    });

    if (existingProduct) {
      res.status(400).send({
        message: "Product with this name already exists",
        data: [],
      });
      return;
    }

    if (!existingCategory) {
      res.status(400).send({
        message: "Category name doesn't exists",
        data: [],
      });
      return;
    }

    if (price <= 0 || quantity <= 0) {
      res.status(400).send({
        message: "Price or quantity must be greater than 0",
        data: [],
      });
      return;
    }

    const categoryId = existingCategory?._id;

    const newProduct = new Product({
      name,
      price,
      quantity,
      category: categoryId,
    });
    await newProduct.save();

    res.status(201).send({
      message: "Product created successfully",
      data: [newProduct],
    });
  } catch (error) {
    res.status(500).send({
      message: "Error creating product",
      data: [],
    });
  }
}
