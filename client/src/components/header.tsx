import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/hooks/useCart";
import CartModal from "./cart-modal";
import { 
  Phone, 
  Mail, 
  Search, 
  Heart, 
  ShoppingCart, 
  User,
  Menu,
  ChevronDown
} from "lucide-react";

export default function Header() {
  const { user, isAuthenticated } = useAuth();
  const { cartItemCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <>
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
              <a href="#" className="hover:text-primary transition-colors">Track Order</a>
              <a href="#" className="hover:text-primary transition-colors">Help</a>
              <div className="flex items-center space-x-2">
                <span>USD</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>
          
          {/* Main Header */}
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-8">
              <a href="/" className="text-2xl font-bold text-gray-800">EliteStore</a>
              <nav className="hidden md:flex space-x-8">
                <a href="/" className="text-gray-800 hover:text-primary transition-colors font-medium">Home</a>
                <a href="/products" className="text-gray-800 hover:text-primary transition-colors font-medium">Products</a>
                <a href="#categories" className="text-gray-800 hover:text-primary transition-colors font-medium">Categories</a>
                <a href="#deals" className="text-gray-800 hover:text-primary transition-colors font-medium">Deals</a>
                {user?.role === 'admin' && (
                  <a href="/admin" className="text-gray-800 hover:text-primary transition-colors font-medium">Admin</a>
                )}
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <form onSubmit={handleSearch} className="relative hidden md:block">
                <Input 
                  type="text" 
                  placeholder="Search products..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-80 pl-10"
                />
                <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              </form>
              
              <button className="text-gray-700 hover:text-primary transition-colors relative">
                <Heart className="w-6 h-6" />
                <Badge className="absolute -top-2 -right-2 bg-accent text-white text-xs w-5 h-5 flex items-center justify-center p-0">
                  0
                </Badge>
              </button>
              
              <button 
                className="text-gray-700 hover:text-primary transition-colors relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="w-6 h-6" />
                {cartItemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-accent text-white text-xs w-5 h-5 flex items-center justify-center p-0">
                    {cartItemCount}
                  </Badge>
                )}
              </button>
              
              {isAuthenticated ? (
                <div className="flex items-center space-x-2">
                  {user?.profileImageUrl && (
                    <img 
                      src={user.profileImageUrl} 
                      alt="Profile" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  )}
                  <span className="text-sm font-medium">{user?.firstName || user?.email}</span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.location.href = "/api/logout"}
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <Button onClick={() => window.location.href = "/api/login"}>
                  <User className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
