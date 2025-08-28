"use client";
import { Product } from "@/types/ProductTypes";
import Link from "next/link";


interface DetailsButtonProps {
  product: Product;
}

export default function DetailsButton({ product }: DetailsButtonProps) {
  return (
    <Link
      href={`/products/${product._id}`}
      className="mt-3 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Details
    </Link>
  );
}
