// types/product.ts
"use client";
export interface Product {
  _id: {
    $oid: string;
  };
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

// components/ProductDetailsPage.tsx

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Star, 
  ShoppingCart, 
  Heart, 
  Share2, 
  Plus, 
  Minus,
  Truck,
  Shield,
  RotateCcw,
  Check
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';

interface ProductDetailsPageProps {
  product: Product;
}
export const revalidate = 60
 
export async function generateStaticParams() {
  const posts: Post[] = await fetch('https://api.vercel.app/blog').then((res) =>
    res.json()
  )
  return posts.map((post) => ({
    id: String(post.id),
  }))
}
const ProductDetailsPage: React.FC<ProductDetailsPageProps> = ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {


  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleQuantityChange = (action: 'increment' | 'decrement') => {
    if (action === 'increment' && quantity < product.stock) {
      setQuantity(prev => prev + 1);
    } else if (action === 'decrement' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = async () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success(`Added ${quantity} ${product.name} to cart!`);
    }, 1000);
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast.success(
      isWishlisted 
        ? 'Removed from wishlist' 
        : 'Added to wishlist'
    );
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: product.description,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Share cancelled');
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard!');
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? 'fill-yellow-400 text-yellow-400'
            : i < rating
            ? 'fill-yellow-200 text-yellow-400'
            : 'fill-gray-200 text-gray-300'
        }`}
      />
    ));
  };

  const stockStatus = product.stock > 10 ? 'In Stock' : 
                     product.stock > 0 ? 'Low Stock' : 'Out of Stock';
  
  const stockColor = product.stock > 10 ? 'text-green-600' : 
                     product.stock > 0 ? 'text-yellow-600' : 'text-red-600';

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex space-x-2 text-sm text-gray-500 mb-8">
          <span>Home</span>
          <span>/</span>
          <span>Products</span>
          <span>/</span>
          <span>{product.category}</span>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square relative overflow-hidden rounded-xl bg-white shadow-lg">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
            
            {/* Thumbnails - placeholder for multiple images */}
            <div className="flex gap-4 overflow-x-auto">
              {[1, 2, 3, 4].map((_, index) => (
                <div
                  key={index}
                  className="w-20 h-20 relative overflow-hidden rounded-lg bg-white border-2 border-gray-200 hover:border-blue-500 transition-colors cursor-pointer flex-shrink-0"
                >
                  <Image
                    src={product.image}
                    alt={`${product.name} view ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex gap-2">
                <Badge variant="secondary" className="text-xs">
                  {product.category}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {product.brand}
                </Badge>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {renderStars(product.rating)}
                  <span className="text-sm text-gray-600 ml-1">
                    ({product.rating})
                  </span>
                </div>
                <Separator orientation="vertical" className="h-4" />
                <span className={`text-sm font-medium ${stockColor}`}>
                  {stockStatus} ({product.stock} available)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">
                {formatPrice(product.price)}
              </div>
              <p className="text-gray-600 text-lg">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quantity & Actions */}
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {/* Quantity Selector */}
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity</Label>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuantityChange('decrement')}
                        disabled={quantity <= 1}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <Input
                        id="quantity"
                        type="number"
                        value={quantity}
                        onChange={(e) => {
                          const value = parseInt(e.target.value) || 1;
                          if (value >= 1 && value <= product.stock) {
                            setQuantity(value);
                          }
                        }}
                        className="w-20 text-center"
                        min="1"
                        max={product.stock}
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuantityChange('increment')}
                        disabled={quantity >= product.stock}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <Button
                      onClick={handleAddToCart}
                      disabled={product.stock === 0 || isLoading}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12"
                    >
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      {isLoading ? 'Adding...' : 'Add to Cart'}
                    </Button>
                    
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        onClick={handleWishlist}
                        className={`flex-1 h-12 ${
                          isWishlisted ? 'text-red-500 border-red-500' : ''
                        }`}
                      >
                        <Heart 
                          className={`w-5 h-5 mr-2 ${
                            isWishlisted ? 'fill-current' : ''
                          }`} 
                        />
                        {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
                      </Button>
                      
                      <Button variant="outline" onClick={handleShare} className="h-12 px-6">
                        <Share2 className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Delivery & Services */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="flex items-center gap-3 p-4">
                  <Truck className="w-8 h-8 text-green-600" />
                  <div>
                    <p className="font-medium text-sm">Free Shipping</p>
                    <p className="text-xs text-gray-500">Orders over $50</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="flex items-center gap-3 p-4">
                  <RotateCcw className="w-8 h-8 text-blue-600" />
                  <div>
                    <p className="font-medium text-sm">30-Day Returns</p>
                    <p className="text-xs text-gray-500">Easy returns</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="flex items-center gap-3 p-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                  <div>
                    <p className="font-medium text-sm">2 Year Warranty</p>
                    <p className="text-xs text-gray-500">Full coverage</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Additional Information Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Product Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    {product.description} This premium smartphone combines cutting-edge technology 
                    with elegant design, delivering exceptional performance for both professional 
                    and personal use. With its advanced camera system and powerful processor, 
                    it s perfect for capturing memories and handling demanding applications.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="specifications" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Technical Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">General</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Brand:</span>
                          <span>{product.brand}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Category:</span>
                          <span>{product.category}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Model:</span>
                          <span>{product.name}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Features</h4>
                      <div className="space-y-2">
                        {product.features.map((feature, index) => (
                          <div key={index} className="text-sm">
                            • {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Customer Reviews</CardTitle>
                  <CardDescription>
                    See what our customers are saying about this product
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="text-4xl font-bold">{product.rating}</div>
                      <div>
                        <div className="flex items-center gap-1">
                          {renderStars(product.rating)}
                        </div>
                        <p className="text-sm text-gray-500">Based on customer reviews</p>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-4">
                      {/* Sample review - replace with real reviews */}
                      <div className="border-l-4 border-blue-500 pl-4">
                        <div className="flex items-center gap-2 mb-2">
                          {renderStars(5)}
                          <span className="text-sm font-medium">John D.</span>
                        </div>
                        <p className="text-gray-700">
                          Excellent product! The camera quality is outstanding and the performance 
                          is top-notch. Highly recommend this device.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;