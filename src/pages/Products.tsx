
import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CreditCard, BarChart3, Shield, Zap } from 'lucide-react';

const Products = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-slide-up');
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const products = [
    {
      icon: <CreditCard className="h-10 w-10 text-primary" />,
      title: 'Smart Credit Cards',
      description: 'Advanced credit solutions with real-time spending analytics and customizable rewards for your business needs.'
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: 'Investment Platform',
      description: 'A comprehensive investment solution with AI-driven portfolio recommendations and real-time market analysis.'
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: 'Secure Savings',
      description: 'High-yield savings accounts with enhanced security features and flexible access to your funds.'
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: 'Instant Transfers',
      description: 'Lightning-fast money transfers across borders with minimal fees and maximum security.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="section bg-secondary/50 pt-24" ref={sectionRef}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-on-scroll">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Our Products
              </div>
              <h2 className="heading-lg mb-4">Financial Products Designed for You</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Discover our suite of financial products created to simplify your financial journey and maximize your potential.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <div 
                  key={index} 
                  className="card-glass p-8 flex flex-col items-start transition-all duration-300 hover:shadow-xl animate-on-scroll"
                >
                  <div className="p-3 bg-primary/10 rounded-lg mb-6">
                    {product.icon}
                  </div>
                  <h3 className="heading-sm mb-4">{product.title}</h3>
                  <p className="text-muted-foreground">{product.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
