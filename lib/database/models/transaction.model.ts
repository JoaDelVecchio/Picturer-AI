import { Schema, model } from "mongoose";

interface ITransaction {
  stripeId: string;
  amount: number;
  plan?: string;
  credits?: number;
  buyer: Schema.Types.ObjectId;
}

const TransactionSchema = new Schema(
  {
    stripeId: {
      type: String,
      required: true,
      unique: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    plan: {
      type: String,
    },
    credits: {
      type: Number,
    },
    buyer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const TransactionModel = model("Transaction", TransactionSchema);

export default TransactionModel;
