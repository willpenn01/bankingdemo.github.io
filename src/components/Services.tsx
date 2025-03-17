
import { useEffect, useRef } from 'react';
import { LightbulbIcon, TrendingUp, Shield, ArrowUpRight } from 'lucide-react';

const Services = () => {
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

  const services = [
    {
      title: 'Financial Consulting',
      description: 'Expert guidance tailored to your specific financial needs and goals, helping you make informed decisions.',
      icon: LightbulbIcon,
      features: [
        { icon: ArrowUpRight, text: 'Personalized approach' },
        { icon: TrendingUp, text: 'Expert team of advisors' },
        { icon: Shield, text: 'Data-driven strategies' }
      ]
    },
    {
      title: 'Wealth Management',
      description: 'Comprehensive wealth management services to grow and protect your assets for generations to come.',
      icon: TrendingUp,
      features: [
        { icon: ArrowUpRight, text: 'Long-term growth planning' },
        { icon: TrendingUp, text: 'Risk-adjusted strategies' },
        { icon: Shield, text: 'Portfolio diversification' }
      ]
    },
    {
      title: 'Tax Planning',
      description: 'Strategic tax planning to minimize liabilities and maximize returns through legal optimization strategies.',
      icon: Shield,
      features: [
        { icon: ArrowUpRight, text: 'Tax optimization' },
        { icon: TrendingUp, text: 'Compliance management' },
        { icon: Shield, text: 'Future planning' }
      ]
    }
  ];

  return (
    <section id="services" className="section" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 animate-on-scroll">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="heading-lg mb-4">Comprehensive Financial Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We offer a range of specialized services designed to address your financial challenges and help you achieve your objectives.
          </p>
        </div>
        
        <div className="space-y-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card-glass p-8 animate-on-scroll"
            >
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <service.icon className="text-primary h-6 w-6" />
                </div>
                <h3 className="heading-md">{service.title}</h3>
              </div>
              
              <p className="text-muted-foreground text-lg mb-6">{service.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center p-4 bg-background/50 rounded-lg hover:bg-background/80 transition-colors">
                    <feature.icon className="h-5 w-5 text-primary mr-3" />
                    <span className="font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
              
              <button className="btn-secondary mt-6">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
