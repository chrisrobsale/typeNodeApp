import mongoose, { Document, Schema } from "mongoose";
import { ICategory } from "./Category";

export interface IProduct extends Document {
  name: string;
  price: number;
  quantity: number;
  category: string;
}

const ProductSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model<IProduct>("Products", ProductSchema);

export default Product;
