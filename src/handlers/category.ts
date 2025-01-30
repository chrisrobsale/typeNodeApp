import { Request, Response } from "express-serve-static-core";
import { CreateCategoryDto } from "../types/dto";
import { CommonResponse } from "../types/response";
import Category from "../models/Category";

export async function getCategories(
  req: Request,
  res: Response<CommonResponse>
) {
  try {
    const categoryList = await Category.find();
    res.status(200).send({
      message: "Successfully fetched categories",
      data: categoryList,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error fetching categories",
      data: [],
    });
  }
}

export async function getCategoriesById(
  req: Request,
  res: Response<CommonResponse>
) {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      res.status(404).send({
        message: "Category not found",
        data: [],
      });
    }
    res.status(200).send({
      message: "Successfully fetched category",
      data: [category],
    });
  } catch (error) {
    res.status(500).send({
      message: "Error fetching category",
      data: [],
    });
  }
}

export async function createCategory(
  req: Request<{}, {}, CreateCategoryDto>,
  res: Response<CommonResponse>
) {
  try {
    const { name } = req.body;
    const newCategory = new Category({ name });

    const existingCategory = await Category.findOne({
      name: { $regex: new RegExp("^" + name + "$", "i") },
    });

    if (existingCategory) {
      res.status(400).send({
        message: "Category with this name already exists",
        data: [],
      });
    } else {
      await newCategory.save();

      res.status(201).send({
        message: "Category created successfully",
        data: [newCategory],
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Error creating category",
      data: [],
    });
  }
}
