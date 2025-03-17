
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-8 w-8 rounded-md bg-primary"></div>
              <span className="font-display text-xl font-bold">FinancePro</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Providing innovative financial solutions for businesses and individuals since 2010.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-background flex items-center justify-center transition-colors hover:bg-primary hover:text-white"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-background flex items-center justify-center transition-colors hover:bg-primary hover:text-white"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-background flex items-center justify-center transition-colors hover:bg-primary hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-background flex items-center justify-center transition-colors hover:bg-primary hover:text-white"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#products" className="text-muted-foreground hover:text-primary transition-colors">Products</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
              <li><a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Financial Planning</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Investment Management</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Retirement Planning</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Insurance Solutions</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Tax Planning</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest financial insights and updates.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-2 border border-border rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2023 FinancePro. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
