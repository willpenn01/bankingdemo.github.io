
import { useEffect, useRef } from 'react';

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
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81'
    },
    {
      title: 'Wealth Management',
      description: 'Comprehensive wealth management services to grow and protect your assets for generations to come.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'
    },
    {
      title: 'Tax Planning',
      description: 'Strategic tax planning to minimize liabilities and maximize returns through legal optimization strategies.',
      image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334'
    }
  ];

  return (
    <section id="services" className="section" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="heading-lg mb-4">Comprehensive Financial Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We offer a range of specialized services designed to address your financial challenges and help you achieve your objectives.
          </p>
        </div>
        
        <div className="space-y-24">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-on-scroll ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <h3 className="heading-md mb-4">{service.title}</h3>
                <p className="text-muted-foreground text-lg mb-6">{service.description}</p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Personalized approach</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Expert team of advisors</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Data-driven strategies</span>
                  </li>
                </ul>
                <button className="btn-secondary mt-8">Learn More</button>
              </div>
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="card-glass overflow-hidden h-[300px] sm:h-[400px]">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
