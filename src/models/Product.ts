import mongoose, { Schema, model, models } from "mongoose";

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String },
    category: { type: String },
    stock: { type: Number },
    rating: { type: Number },
    features: { type: [String] },
    image: { type: String },
  },
  { collection: "products" } // Explicit collection name
);

export const Product = models.Product || model("Product", productSchema);
