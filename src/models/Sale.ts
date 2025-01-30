import mongoose, { Document, Schema } from "mongoose";
import { IProduct } from "./Product";

export interface ISale extends Document {
  transactionDate: Date;
  totalCost: number;
  amountPaid: number;
  isCredit: boolean;
  isPaid: boolean;
}

const Salechema: Schema = new mongoose.Schema(
  {
    transactionDate: {
      type: Date,
      default: Date.now,
      required: true,
    },
    totalCost: {
      type: Number,
      required: true,
    },
    amountPaid: {
      type: Number,
      required: true,
    },
    isCredit: {
      type: Boolean,
      default: false,
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Sale = mongoose.model<ISale>("Sales", Salechema);

export default Sale;
