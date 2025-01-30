import mongoose, { Document, Schema } from "mongoose";

export interface ISalesProduct extends Document {
  salesId: mongoose.Types.ObjectId;
  products: {
    productId: mongoose.Types.ObjectId;
    quantity: number;
  }[];
}

const SalesProductSchema: Schema = new mongoose.Schema(
  {
    salesId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Sales",
      required: true,
    },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const SalesProduct = mongoose.model<ISalesProduct>(
  "SalesProduct",
  SalesProductSchema
);

export default SalesProduct;
