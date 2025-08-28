// app/global-error.tsx
'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { 
  AlertTriangle, 
  RefreshCw, 
  Home, 
  Mail, 
  Bug,
  ArrowLeft,
  Shield,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global Error:', error);
    
    // You can add error reporting service here
    // Example: Sentry, LogRocket, etc.
    // Sentry.captureException(error);
  }, [error]);

  const handleReset = () => {
    // Clear any cached data or reset state if needed
    if (typeof window !== 'undefined') {
      // Clear localStorage if needed
      // localStorage.clear();
      
      // Clear sessionStorage if needed
      // sessionStorage.clear();
    }
    
    reset();
  };

  const handleReload = () => {
    window.location.reload();
  };

  const errorDetails = {
    timestamp: new Date().toISOString(),
    userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'Unknown',
    url: typeof window !== 'undefined' ? window.location.href : 'Unknown',
    errorMessage: error.message,
    errorStack: error.stack,
    errorDigest: error.digest
  };

  const copyErrorDetails = () => {
    const errorInfo = `
Error Report - ElectroMart
=========================
Timestamp: ${errorDetails.timestamp}
URL: ${errorDetails.url}
Error: ${errorDetails.errorMessage}
Digest: ${errorDetails.errorDigest || 'N/A'}
User Agent: ${errorDetails.userAgent}

Stack Trace:
${errorDetails.errorStack || 'No stack trace available'}
    `.trim();

    navigator.clipboard.writeText(errorInfo).then(() => {
      alert('Error details copied to clipboard!');
    }).catch(() => {
      alert('Could not copy error details. Please manually copy the information above.');
    });
  };

  return (
    <html>
      <body>
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center p-4">
          <div className="max-w-4xl mx-auto">
            {/* Error Header */}
            <div className="text-center mb-8">
              <div className="relative mb-6">
                {/* Animated Error Icon */}
                <div className="relative mx-auto w-32 h-32 mb-6">
                  <div className="absolute inset-0 bg-red-100 rounded-full animate-ping opacity-20"></div>
                  <div className="absolute inset-4 bg-red-200 rounded-full animate-pulse opacity-40"></div>
                  <div className="absolute inset-8 bg-red-500 rounded-full flex items-center justify-center">
                    <AlertTriangle className="w-12 h-12 text-white animate-bounce" />
                  </div>
                  
                  {/* Floating Warning Icons */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                    <Zap className="w-3 h-3 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center animate-bounce">
                    <Bug className="w-3 h-3 text-white" />
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Something Went Wrong
                </h1>
                <p className="text-lg text-gray-600 mb-2">
                  We encountered an unexpected error while processing your request.
                </p>
                <p className="text-gray-500">
                  Our technical team has been automatically notified and is working on a fix.
                </p>
              </div>
            </div>

            {/* Error Alert */}
            <Alert className="mb-6 border-red-200 bg-red-50">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-red-800">
                <strong>Error Details:</strong> {error.message || 'An unexpected error occurred'}
                {error.digest && (
                  <span className="block text-sm mt-1 text-red-600">
                    Error ID: {error.digest}
                  </span>
                )}
              </AlertDescription>
            </Alert>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                onClick={handleReset}
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Try Again
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                onClick={handleReload}
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Reload Page
              </Button>
              
              <Button variant="outline" size="lg" asChild>
                <Link href="/">
                  <Home className="w-5 h-5 mr-2" />
                  Go Home
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Recovery Options */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    Recovery Options
                  </CardTitle>
                  <CardDescription>
                    Try these steps to resolve the issue
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-blue-600">1</span>
                      </div>
                      <div>
                        <p className="font-medium">Refresh the page</p>
                        <p className="text-sm text-gray-600">Sometimes a simple refresh fixes temporary issues</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-blue-600">2</span>
                      </div>
                      <div>
                        <p className="font-medium">Clear browser cache</p>
                        <p className="text-sm text-gray-600">Old cached data might be causing conflicts</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-blue-600">3</span>
                      </div>
                      <div>
                        <p className="font-medium">Try a different browser</p>
                        <p className="text-sm text-gray-600">Browser compatibility issues are sometimes the culprit</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-blue-600">4</span>
                      </div>
                      <div>
                        <p className="font-medium">Check your connection</p>
                        <p className="text-sm text-gray-600">Ensure you have a stable internet connection</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Support Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-green-600" />
                    Need Help?
                  </CardTitle>
                  <CardDescription>
                    Contact our support team for assistance
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link href="/contact">
                        <Mail className="w-4 h-4 mr-2" />
                        Contact Support
                      </Link>
                    </Button>
                    
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link href="/help">
                        <AlertTriangle className="w-4 h-4 mr-2" />
                        Help Center
                      </Link>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={copyErrorDetails}
                    >
                      <Bug className="w-4 h-4 mr-2" />
                      Copy Error Details
                    </Button>
                  </div>

                  <Separator />

                  <div className="text-sm text-gray-600 space-y-1">
                    <p><strong>Error Time:</strong> {new Date().toLocaleString()}</p>
                    {error.digest && (
                      <p><strong>Error ID:</strong> {error.digest}</p>
                    )}
                    <p className="text-xs">
                      Include these details when contacting support
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Navigation */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Continue Shopping</CardTitle>
                <CardDescription>
                  Dont let this error stop you from finding great products
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <Button variant="ghost" asChild className="h-auto p-4 flex flex-col items-center gap-2">
                    <Link href="/products?category=smartphones">
                      <span className="text-2xl">📱</span>
                      <span className="text-sm">Smartphones</span>
                    </Link>
                  </Button>
                  
                  <Button variant="ghost" asChild className="h-auto p-4 flex flex-col items-center gap-2">
                    <Link href="/products?category=laptops">
                      <span className="text-2xl">💻</span>
                      <span className="text-sm">Laptops</span>
                    </Link>
                  </Button>
                  
                  <Button variant="ghost" asChild className="h-auto p-4 flex flex-col items-center gap-2">
                    <Link href="/products?category=audio">
                      <span className="text-2xl">🎧</span>
                      <span className="text-sm">Audio</span>
                    </Link>
                  </Button>
                  
                  <Button variant="ghost" asChild className="h-auto p-4 flex flex-col items-center gap-2">
                    <Link href="/products">
                      <span className="text-2xl">🛍️</span>
                      <span className="text-sm">All Products</span>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Footer */}
            <div className="text-center text-sm text-gray-500">
              <p>
                If this problem persists, please contact our support team at{' '}
                <Link 
                  href="mailto:support@electromart.com" 
                  className="text-blue-600 hover:text-blue-700"
                >
                  support@electromart.com
                </Link>
              </p>
              <p className="mt-2">
                <Link 
                  href="/" 
                  className="text-blue-600 hover:text-blue-700 flex items-center justify-center gap-1"
                >
                  <ArrowLeft className="w-3 h-3" />
                  Return to ElectroMart Home
                </Link>
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}