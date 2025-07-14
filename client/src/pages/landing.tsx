import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Laptop, 
  ShirtIcon as Shirt, 
  Home, 
  Dumbbell, 
  Book, 
  Gamepad2,
  Phone,
  Mail,
  Heart,
  ShoppingCart,
  Star,
  Shield,
  Truck,
  RotateCcw
} from "lucide-react";

export default function Landing() {
  const categories = [
    { name: "Electronics", icon: Laptop, count: "250+ items" },
    { name: "Fashion", icon: Shirt, count: "180+ items" },
    { name: "Home & Garden", icon: Home, count: "320+ items" },
    { name: "Sports", icon: Dumbbell, count: "150+ items" },
    { name: "Books", icon: Book, count: "200+ items" },
    { name: "Gaming", icon: Gamepad2, count: "90+ items" },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 199.99,
      originalPrice: 249.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&w=400&h=300&fit=crop",
      category: "Electronics",
      rating: 4.2,
      badge: "20% OFF",
      badgeColor: "bg-yellow-500"
    },
    {
      id: 2,
      name: "Luxury Smartwatch",
      price: 399.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&w=400&h=300&fit=crop",
      category: "Accessories",
      rating: 4.8,
      badge: "NEW",
      badgeColor: "bg-green-500"
    },
    {
      id: 3,
      name: "Professional Coffee Machine",
      price: 599.99,
      originalPrice: 799.99,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&w=400&h=300&fit=crop",
      category: "Home & Kitchen",
      rating: 4.6,
      badge: "BESTSELLER",
      badgeColor: "bg-red-500"
    },
    {
      id: 4,
      name: "Designer Sneakers",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&w=400&h=300&fit=crop",
      category: "Fashion",
      rating: 4.3,
      badge: "LIMITED",
      badgeColor: "bg-yellow-500"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          {/* Top Bar */}
          <div className="flex justify-between items-center py-2 text-sm text-gray-600 border-b">
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +1 (555) 123-4567
              </span>
              <span className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                support@elitestore.com
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-blue-600 transition-colors">Track Order</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Help</a>
              <div className="flex items-center space-x-2">
                <span>USD</span>
              </div>
            </div>
          </div>
          
          {/* Main Header */}
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold text-gray-800">EliteStore</div>
              <nav className="hidden md:flex space-x-8">
                <a href="#home" className="text-gray-800 hover:text-blue-600 transition-colors font-medium">Home</a>
                <a href="#products" className="text-gray-800 hover:text-blue-600 transition-colors font-medium">Products</a>
                <a href="#categories" className="text-gray-800 hover:text-blue-600 transition-colors font-medium">Categories</a>
                <a href="#deals" className="text-gray-800 hover:text-blue-600 transition-colors font-medium">Deals</a>
                <a href="#about" className="text-gray-800 hover:text-blue-600 transition-colors font-medium">About</a>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="w-80 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute left-3 top-3 text-gray-400">🔍</div>
              </div>
              <button className="text-gray-700 hover:text-blue-600 transition-colors relative">
                <Heart className="w-6 h-6" />
                <Badge className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs w-5 h-5 flex items-center justify-center p-0">3</Badge>
              </button>
              <button className="text-gray-700 hover:text-blue-600 transition-colors relative">
                <ShoppingCart className="w-6 h-6" />
                <Badge className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs w-5 h-5 flex items-center justify-center p-0">2</Badge>
              </button>
              <Button onClick={() => window.location.href = "/api/login"}>
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Premium Products for Modern Living</h1>
              <p className="text-xl mb-8 text-gray-300">Discover our curated collection of high-quality products designed to elevate your lifestyle.</p>
              <div className="flex space-x-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Shop Now
                </Button>
                <Button variant="outline" size="lg" className="border-white hover:bg-white hover:text-gray-800 text-[#1f2937] text-right">
                  Explore Collection
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&w=800&h=600&fit=crop" 
                alt="Premium lifestyle products display" 
                className="rounded-lg shadow-2xl"
              />
              <Card className="absolute -bottom-6 -right-6 bg-yellow-500 text-white border-0">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm">Premium Brands</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Shop by Category</h2>
            <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors font-medium">View All Categories</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-4 group-hover:scale-110 transition-transform text-blue-600">
                      <IconComponent className="w-8 h-8 mx-auto" />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-600">{category.count}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Discover our handpicked selection of premium products, carefully chosen for their quality, design, and value.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className={`absolute top-3 left-3 ${product.badgeColor} text-white`}>
                    {product.badge}
                  </Badge>
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-gray-600 hover:text-red-500 p-2 rounded-full shadow-md transition-colors">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700" size="sm">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">{product.category}</span>
                    <div className="flex items-center">
                      <div className="flex text-yellow-400 mr-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">({product.rating})</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-gray-800">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                    <span className="text-sm text-green-600">In Stock</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Load More Products
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">Free shipping on orders over $100</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <RotateCcw className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
              <p className="text-gray-600">30-day hassle-free returns</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600">Your payment information is safe</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">EliteStore</div>
              <p className="text-gray-300 mb-4">Your premium destination for quality products and exceptional service.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">📘</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">🐦</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">📷</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">🎥</a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Shipping Info</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Track Order</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-300 mb-4">Stay updated with our latest offers and products.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-4 py-2 rounded-l-lg text-gray-800"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 rounded-l-none">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 EliteStore. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
