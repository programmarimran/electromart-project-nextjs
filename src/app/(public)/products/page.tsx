"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  brand: string;
  category: string;
  stock: number;
  rating: number;
  features: string[];
  image: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data: Product[] = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading products...</p>;

  return (
    <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product?._id}
          className="border rounded-lg p-4 shadow hover:shadow-lg transition"
        >
          <div className="w-full h-48 relative">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>
          <h2 className="text-lg font-bold mt-2">{product.name}</h2>
          <p className="text-gray-600 mt-1 line-clamp-2">{product.description}</p>
          <p className="text-blue-600 font-semibold mt-2">${product.price}</p>
          <Link
            href={`/products/${product._id}`}
            className="mt-3 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Details
          </Link>
        </div>
      ))}
    </div>
  );
}
