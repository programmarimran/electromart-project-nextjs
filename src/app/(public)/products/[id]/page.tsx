// app/products/[id]/page.tsx
import Image from "next/image";
import { type Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2, ShoppingCart } from "lucide-react";

// It's a good practice to define your types in a separate file (e.g., types/index.ts)
// but for this example, we'll define it here.
export interface Product {
  _id: { $oid: string };
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

interface ProductPageProps {
  params: { id: string };
}

// Fetch product data with ISR revalidation
// NOTE: I removed `cache: "no-store"` to allow ISR to work as intended.
// `revalidate` requires the default cache behavior.
async function fetchProduct(id: string): Promise<Product> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`, {
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  });
  if (!res.ok) {
    // In a real app, you might want to use the `notFound()` function from 'next/navigation'
    // if the status is 404.
    throw new Error("Failed to fetch product");
  }
  return res.json();
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = await fetchProduct(params.id);
  return {
    title: `${product.name} | E-Commerce`,
    description: product.description,
  };
}

const ProductDetailsPage = async ({ params }: ProductPageProps) => {
  const product = await fetchProduct(params.id);

  return (
    <main className="container mx-auto py-8 px-4">
      <Card className="overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image Section */}
          <div className="bg-gray-100 dark:bg-gray-800 flex items-center justify-center p-8">
            <Image
              src={product.image.trim()}
              alt={product.name}
              width={500}
              height={500}
              className="object-contain aspect-square rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Product Details Section */}
          <div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="secondary">{product.category}</Badge>
                {product.stock > 0 ? (
                  <Badge variant="default" className="bg-green-600 text-white">
                    In Stock
                  </Badge>
                ) : (
                  <Badge variant="destructive">Out of Stock</Badge>
                )}
              </div>
              <CardTitle className="text-4xl font-bold mt-4">{product.name}</CardTitle>
              <CardDescription className="text-lg">{product.brand}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">{product.description}</p>
              
              <h3 className="font-semibold text-lg mb-2">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex-col items-start gap-4">
              <p className="text-4xl font-extrabold text-primary">${product.price.toFixed(2)}</p>
              <Button size="lg" className="w-full md:w-auto" disabled={product.stock === 0}>
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
            </CardFooter>
          </div>
        </div>
      </Card>
    </main>
  );
};

export default ProductDetailsPage;