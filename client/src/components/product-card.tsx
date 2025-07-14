import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/hooks/useCart";
import { Star, Heart, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: any;
  viewMode?: "grid" | "list";
}

export default function ProductCard({ product, viewMode = "grid" }: ProductCardProps) {
  const { addToCart, isAddingToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({ productId: product.id, quantity: 1 });
  };

  const handleProductClick = () => {
    window.location.href = `/products/${product.id}`;
  };

  const discount = product.originalPrice 
    ? Math.round(((parseFloat(product.originalPrice) - parseFloat(product.price)) / parseFloat(product.originalPrice)) * 100)
    : 0;

  const getBadgeInfo = () => {
    if (discount > 0) return { text: `${discount}% OFF`, color: "bg-red-500" };
    if (product.isFeatured) return { text: "FEATURED", color: "bg-blue-500" };
    if (product.stock <= 10 && product.stock > 0) return { text: "LOW STOCK", color: "bg-yellow-500" };
    return null;
  };

  const badgeInfo = getBadgeInfo();

  if (viewMode === "list") {
    return (
      <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer" onClick={handleProductClick}>
        <CardContent className="p-4">
          <div className="flex space-x-4">
            <div className="relative w-24 h-24 flex-shrink-0">
              <img 
                src={product.imageUrl || "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&w=200&h=200&fit=crop"} 
                alt={product.name} 
                className="w-full h-full object-cover rounded"
              />
              {badgeInfo && (
                <Badge className={`absolute top-1 left-1 ${badgeInfo.color} text-white text-xs`}>
                  {badgeInfo.text}
                </Badge>
              )}
            </div>
            
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-500">{product.category?.name || "Product"}</span>
                <div className="flex items-center">
                  <div className="flex text-yellow-400 mr-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3 h-3 ${i < Math.floor(parseFloat(product.rating || "0")) ? 'fill-current' : ''}`} />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({product.rating || "0"})</span>
                </div>
              </div>
              
              <h3 className="font-semibold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-gray-800">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                  )}
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className={`text-sm ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                  </span>
                  <Button 
                    size="sm"
                    onClick={handleAddToCart}
                    disabled={product.stock <= 0 || isAddingToCart}
                  >
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300 cursor-pointer" onClick={handleProductClick}>
      <div className="relative overflow-hidden">
        <img 
          src={product.imageUrl || "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&w=400&h=300&fit=crop"} 
          alt={product.name} 
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {badgeInfo && (
          <Badge className={`absolute top-3 left-3 ${badgeInfo.color} text-white`}>
            {badgeInfo.text}
          </Badge>
        )}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white text-gray-600 hover:text-red-500 p-2 rounded-full shadow-md transition-colors">
            <Heart className="w-4 h-4" />
          </button>
        </div>
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button 
            className="w-full bg-primary hover:bg-primary/90" 
            size="sm"
            onClick={handleAddToCart}
            disabled={product.stock <= 0 || isAddingToCart}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            {isAddingToCart ? "Adding..." : "Add to Cart"}
          </Button>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500">{product.category?.name || "Product"}</span>
          <div className="flex items-center">
            <div className="flex text-yellow-400 mr-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-3 h-3 ${i < Math.floor(parseFloat(product.rating || "0")) ? 'fill-current' : ''}`} />
              ))}
            </div>
            <span className="text-sm text-gray-600">({product.rating || "0"})</span>
          </div>
        </div>
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-800">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
            )}
          </div>
          <span className={`text-sm ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
