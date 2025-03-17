
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-md bg-primary"></div>
            <span className="font-display text-xl font-bold">FinancePro</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="nav-link">
              Home
            </button>
            <button onClick={() => scrollToSection('products')} className="nav-link">
              Products
            </button>
            <button onClick={() => scrollToSection('services')} className="nav-link">
              Services
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="nav-link">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg animate-fade-in">
          <nav className="container mx-auto py-6 flex flex-col space-y-4">
            <button onClick={() => scrollToSection('home')} className="nav-link w-full text-left px-6 py-2">
              Home
            </button>
            <button onClick={() => scrollToSection('products')} className="nav-link w-full text-left px-6 py-2">
              Products
            </button>
            <button onClick={() => scrollToSection('services')} className="nav-link w-full text-left px-6 py-2">
              Services
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="nav-link w-full text-left px-6 py-2">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link w-full text-left px-6 py-2">
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
