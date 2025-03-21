
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen pt-20 pb-12 flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Financial Solutions
            </div>
            <h1 className="heading-xl mb-6 text-balance">
              Innovative Financial Solutions for Tomorrow's Needs
            </h1>
            <p className="text-foreground/70 text-lg mb-8 max-w-xl">
              We provide cutting-edge financial services and products that help businesses and individuals achieve their financial goals with confidence and clarity.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={scrollToContact} className="btn-primary flex items-center gap-2">
                Get Started <ArrowRight size={18} />
              </button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
          <div className="lg:col-span-5 order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative w-full">
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
              <div className="card-glass overflow-hidden w-full h-48 md:h-64">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                  alt="Financial dashboard" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
