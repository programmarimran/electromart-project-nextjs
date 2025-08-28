// components/Footer.tsx
"use client";

import Link from "next/link";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
  CreditCard, 
  Shield,
  Truck,
  RotateCcw,
  ArrowUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useState, useEffect } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll to top button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Add your newsletter subscription logic here
      console.log("Newsletter subscription:", email);
      setEmail("");
      // You can add a toast notification here
    }
  };

  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Story", href: "/story" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
      { name: "Blog", href: "/blog" }
    ],
    customerService: [
      { name: "Contact Us", href: "/contact" },
      { name: "Help Center", href: "/help" },
      { name: "Track Your Order", href: "/track-order" },
      { name: "Returns & Refunds", href: "/returns" },
      { name: "Size Guide", href: "/size-guide" }
    ],
    categories: [
      { name: "Smartphones", href: "/products?category=smartphones" },
      { name: "Laptops", href: "/products?category=laptops" },
      { name: "Tablets", href: "/products?category=tablets" },
      { name: "Audio", href: "/products?category=audio" },
      { name: "Smart Home", href: "/products?category=smart-home" }
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "Shipping Policy", href: "/shipping" },
      { name: "Warranty", href: "/warranty" }
    ]
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/electromart", color: "hover:text-blue-600" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/electromart", color: "hover:text-blue-400" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/electromart", color: "hover:text-pink-600" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com/electromart", color: "hover:text-red-600" }
  ];

  const paymentMethods = [
    "Visa", "Mastercard", "PayPal", "Apple Pay", "Google Pay", "American Express"
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 relative">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 rounded-full w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all duration-300"
          size="icon"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}

      {/* Service Features Section */}
      <div className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Free Shipping</h3>
                <p className="text-sm">On orders over $50</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-green-600 p-3 rounded-full">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Secure Payment</h3>
                <p className="text-sm">100% secure transactions</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-purple-600 p-3 rounded-full">
                <RotateCcw className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Easy Returns</h3>
                <p className="text-sm">30-day return policy</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-orange-600 p-3 rounded-full">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">24/7 Support</h3>
                <p className="text-sm">Customer service</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-white">ElectroMart</span>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted destination for the latest electronics and technology. 
              We bring you premium quality products with exceptional service and 
              competitive prices.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>123 Tech Street, Digital City, DC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-green-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-red-400" />
                <span>hello@electromart.com</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Customer Service</h3>
            <ul className="space-y-3">
              {footerLinks.customerService.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-white mb-4">Categories</h3>
            <ul className="space-y-3">
              {footerLinks.categories.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for the latest deals and tech news.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-500"
                required
              />
              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Subscribe
              </Button>
            </form>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-medium text-white mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      className={`p-2 bg-gray-800 rounded-full text-gray-400 ${social.color} transition-colors duration-200`}
                      aria-label={social.name}
                    >
                      <Icon className="w-4 h-4" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-700" />

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          {/* Copyright */}
          <div className="text-sm text-gray-400">
            © 2024 ElectroMart. All rights reserved. Built with ❤️ for tech enthusiasts.
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center lg:justify-end space-x-6 text-sm">
            {footerLinks.legal.map((link, index) => (
              <span key={link.name} className="flex items-center">
                <Link 
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
                {index < footerLinks.legal.length - 1 && (
                  <span className="text-gray-600 ml-6">•</span>
                )}
              </span>
            ))}
          </div>

          {/* Payment Methods */}
          <div className="flex items-center space-x-2">
            <CreditCard className="w-4 h-4 text-gray-400" />
            <span className="text-xs text-gray-400">
              We accept: {paymentMethods.join(", ")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;