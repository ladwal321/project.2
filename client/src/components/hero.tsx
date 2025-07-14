import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">Premium Products for Modern Living</h1>
            <p className="text-xl mb-8 text-gray-300">
              Discover our curated collection of high-quality products designed to elevate your lifestyle.
            </p>
            <div className="flex space-x-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90"
                onClick={() => window.location.href = "/products"}
              >
                Shop Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-gray-800"
                onClick={() => window.location.href = "/products?featured=true"}
              >
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
            <Card className="absolute -bottom-6 -right-6 bg-accent text-white border-0">
              <CardContent className="p-6">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm">Premium Brands</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
