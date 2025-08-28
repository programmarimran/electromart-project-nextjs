// "use client";
// import Link from "next/link";
// import { 
//   Home, 
//   Search, 
//   ShoppingBag, 
//   ArrowLeft, 
//   RefreshCw,
//   Mail,
//   Phone
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Separator } from "@/components/ui/separator";

// export default function NotFound() {
//   const popularCategories = [
//     { name: "Smartphones", href: "/products?category=smartphones", icon: "📱" },
//     { name: "Laptops", href: "/products?category=laptops", icon: "💻" },
//     { name: "Audio", href: "/products?category=audio", icon: "🎧" },
//     { name: "Smart Home", href: "/products?category=smart-home", icon: "🏠" }
//   ];

//   const quickLinks = [
//     { name: "Home", href: "/", icon: Home },
//     { name: "All Products", href: "/products", icon: ShoppingBag },
//     { name: "Contact Us", href: "/contact", icon: Mail },
//     { name: "Help Center", href: "/help", icon: Phone }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
//       <div className="max-w-4xl mx-auto text-center">
//         {/* 404 Illustration */}
//         <div className="mb-8">
//           <div className="relative">
//             {/* Animated 404 Text */}
//             <div className="text-8xl md:text-9xl font-bold text-gray-200 select-none">
//               4
//               <span className="inline-block animate-bounce text-blue-300">0</span>
//               4
//             </div>
            
//             {/* Floating Elements */}
//             <div className="absolute top-4 left-1/4 w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
//             <div className="absolute top-8 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
//             <div className="absolute bottom-4 left-1/3 w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
            
//             {/* Search Icon Overlay */}
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="bg-white rounded-full p-6 shadow-lg">
//                 <Search className="w-12 h-12 text-gray-400" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Error Message */}
//         <div className="mb-8">
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Oops! Page Not Found
//           </h1>
//           <p className="text-lg text-gray-600 mb-2">
//             The page youre looking for seems to have vanished into the digital void.
//           </p>
//           <p className="text-gray-500">
//             Dont worry though, our tech experts are working around the clock to fix any issues!
//           </p>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
//           <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
//             <Link href="/">
//               <Home className="w-5 h-5 mr-2" />
//               Back to Home
//             </Link>
//           </Button>
          
//           <Button variant="outline" size="lg" onClick={() => window.history.back()}>
//             <ArrowLeft className="w-5 h-5 mr-2" />
//             Go Back
//           </Button>
          
//           <Button variant="outline" size="lg" onClick={() => window.location.reload()}>
//             <RefreshCw className="w-5 h-5 mr-2" />
//             Refresh Page
//           </Button>
//         </div>

//         {/* Search Section */}
//         <Card className="mb-8">
//           <CardHeader>
//             <CardTitle className="flex items-center justify-center gap-2">
//               <Search className="w-5 h-5" />
//               Search Our Store
//             </CardTitle>
//             <CardDescription>
//               Cant find what youre looking for? Try searching our products
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => {
//               e.preventDefault();
//               const formData = new FormData(e.currentTarget);
//               const query = formData.get('search');
//               if (query) {
//                 window.location.href = `/products?search=${encodeURIComponent(query.toString())}`;
//               }
//             }}>
//               <Input
//                 name="search"
//                 placeholder="Search for products, brands, or categories..."
//                 className="flex-1"
//               />
//               <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
//                 <Search className="w-4 h-4 mr-2" />
//                 Search
//               </Button>
//             </form>
//           </CardContent>
//         </Card>

//         {/* Popular Categories */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//           <Card>
//             <CardHeader>
//               <CardTitle>Popular Categories</CardTitle>
//               <CardDescription>Browse our most popular product categories</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div className="grid grid-cols-2 gap-3">
//                 {popularCategories.map((category) => (
//                   <Button
//                     key={category.name}
//                     variant="ghost"
//                     asChild
//                     className="h-auto p-4 flex flex-col items-center gap-2 hover:bg-blue-50 hover:text-blue-700"
//                   >
//                     <Link href={category.href}>
//                       <span className="text-2xl">{category.icon}</span>
//                       <span className="text-sm font-medium">{category.name}</span>
//                     </Link>
//                   </Button>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader>
//               <CardTitle>Quick Links</CardTitle>
//               <CardDescription>Navigate to important pages</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-2">
//                 {quickLinks.map((link) => {
//                   const Icon = link.icon;
//                   return (
//                     <Button
//                       key={link.name}
//                       variant="ghost"
//                       asChild
//                       className="w-full justify-start hover:bg-blue-50 hover:text-blue-700"
//                     >
//                       <Link href={link.href}>
//                         <Icon className="w-4 h-4 mr-3" />
//                         {link.name}
//                       </Link>
//                     </Button>
//                   );
//                 })}
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         <Separator className="mb-8" />

//         {/* Help Section */}
//         <div className="bg-white rounded-lg p-6 shadow-sm">
//           <h3 className="text-lg font-semibold text-gray-900 mb-4">
//             Still Need Help?
//           </h3>
//           <p className="text-gray-600 mb-4">
//             If you believe this is an error or if you were expecting to find something here, 
//             please dont hesitate to reach out to our support team.
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button variant="outline" asChild>
//               <Link href="/contact">
//                 <Mail className="w-4 h-4 mr-2" />
//                 Contact Support
//               </Link>
//             </Button>
            
//             <Button variant="outline" asChild>
//               <Link href="/help">
//                 <Phone className="w-4 h-4 mr-2" />
//                 Help Center
//               </Link>
//             </Button>
//           </div>
//         </div>

//         {/* Footer Note */}
//         <div className="mt-8 text-sm text-gray-500">
//           <p>
//             Error Code: 404 | 
//             <Link href="/" className="text-blue-600 hover:text-blue-700 ml-1">
//               Return to ElectroMart Home
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

//******************************************************************** */

// Alternative version with more animation (optional)
// components/AnimatedNotFound.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Home, Search, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AnimatedNotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated Robot/Tech Element */}
        <div className="mb-8 relative">
          <div className="relative mx-auto w-64 h-64 mb-6">
            {/* Circuit Board Background */}
            <svg
              className="absolute inset-0 w-full h-full text-gray-200 animate-pulse"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <circle cx="20" cy="20" r="2" />
              <circle cx="80" cy="20" r="2" />
              <circle cx="20" cy="80" r="2" />
              <circle cx="80" cy="80" r="2" />
              <circle cx="50" cy="50" r="3" />
              <path d="M20 20 L50 50 L80 20 M20 80 L50 50 L80 80" stroke="currentColor" strokeWidth="0.5" fill="none" />
            </svg>
            
            {/* Main 404 */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                404
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-4 right-4">
              <Zap className="w-6 h-6 text-yellow-400 animate-bounce" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            Connection Lost!
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in-delay">
            The page youre looking for has been disconnected from our network.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Link href="/">
              <Home className="w-5 h-5 mr-2" />
              Reconnect to Home
            </Link>
          </Button>
          
          <Button variant="outline" size="lg" asChild>
            <Link href="/products">
              <Search className="w-5 h-5 mr-2" />
              Browse Products
            </Link>
          </Button>
        </div>

        <style jsx>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .animate-fade-in {
            animation: fade-in 0.6s ease-out;
          }
          
          .animate-fade-in-delay {
            animation: fade-in 0.6s ease-out 0.2s both;
          }
          
          .animate-fade-in-delay-2 {
            animation: fade-in 0.6s ease-out 0.4s both;
          }
        `}</style>
      </div>
    </div>
  );
}