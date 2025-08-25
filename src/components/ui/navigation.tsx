import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Cloud, Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-primary rounded-xl transition-all duration-300 group-hover:shadow-glow">
              <Cloud className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">Vastcloud</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
                <span>Products</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 w-64 bg-white shadow-soft rounded-lg border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-2">
                <div className="p-2">
                  <Link to="/cloud-hosting" className="block px-4 py-3 rounded-md hover:bg-muted transition-colors">
                    <div className="font-medium text-foreground">Cloud Hosting</div>
                    <div className="text-sm text-muted-foreground">Performa fleksibel dengan cPanel</div>
                  </Link>
                  <Link to="/shared-hosting" className="block px-4 py-3 rounded-md hover:bg-muted transition-colors">
                    <div className="font-medium text-foreground">Shared Hosting</div>
                    <div className="text-sm text-muted-foreground">Hosting terjangkau untuk pemula</div>
                  </Link>
                  <Link to="/vps-hosting" className="block px-4 py-3 rounded-md hover:bg-muted transition-colors">
                    <div className="font-medium text-foreground">VPS Hosting</div>
                    <div className="text-sm text-muted-foreground">Kontrol penuh dengan dedicated resources</div>
                  </Link>
                  <Link to="/vastpod" className="block px-4 py-3 rounded-md hover:bg-muted transition-colors">
                    <div className="font-medium text-foreground">VASTPOD</div>
                    <div className="text-sm text-muted-foreground">Container hosting modern</div>
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link>
            <Link to="/support" className="text-muted-foreground hover:text-primary transition-colors">Support</Link>
            <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
            <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="text-muted-foreground hover:text-primary transition-colors">Login</Link>
            <Button variant="default" className="bg-gradient-primary hover:shadow-glow transition-all">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="space-y-4">
              <div>
                <div className="font-medium mb-2">Products</div>
                <div className="pl-4 space-y-2">
                  <Link to="/cloud-hosting" className="block py-2 text-muted-foreground hover:text-primary">Cloud Hosting</Link>
                  <Link to="/shared-hosting" className="block py-2 text-muted-foreground hover:text-primary">Shared Hosting</Link>
                  <Link to="/vps-hosting" className="block py-2 text-muted-foreground hover:text-primary">VPS Hosting</Link>
                  <Link to="/vastpod" className="block py-2 text-muted-foreground hover:text-primary">VASTPOD</Link>
                </div>
              </div>
              <Link to="/pricing" className="block py-2 text-muted-foreground hover:text-primary">Pricing</Link>
              <Link to="/support" className="block py-2 text-muted-foreground hover:text-primary">Support</Link>
              <Link to="/about" className="block py-2 text-muted-foreground hover:text-primary">About</Link>
              <Link to="/contact" className="block py-2 text-muted-foreground hover:text-primary">Contact</Link>
              <div className="pt-4 space-y-2">
                <Link to="/login" className="block py-2 text-center border border-border rounded-lg">Login</Link>
                <Button className="w-full bg-gradient-primary">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;