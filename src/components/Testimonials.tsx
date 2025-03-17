
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    content: "The financial guidance provided by this team transformed our business operations. Their strategic approach to our finances helped us achieve a 30% growth in just one year.",
    author: "Sarah Johnson",
    position: "CEO, TechInnovate",
    rating: 5
  },
  {
    content: "I've worked with many financial advisors over the years, but none have delivered the level of personalized service and results that this team has. Highly recommended.",
    author: "Michael Chen",
    position: "Founder, Horizon Ventures",
    rating: 5
  },
  {
    content: "Their wealth management services have been instrumental in helping me plan for retirement. The attention to detail and proactive communication sets them apart.",
    author: "Emma Rodriguez",
    position: "CFO, Creative Solutions",
    rating: 5
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const maxIndex = testimonials.length - 1;

  const next = () => {
    setCurrent(current === maxIndex ? 0 : current + 1);
  };

  const prev = () => {
    setCurrent(current === 0 ? maxIndex : current - 1);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach((el) => {
              el.classList.add('animate-slide-up');
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

  return (
    <section id="testimonials" className="section bg-secondary/50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className="heading-lg mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear directly from our clients about their experiences working with our financial experts.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto animate-on-scroll">
          <div className="overflow-hidden">
            <div 
              className="transition-all duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="card-glass p-8 md:p-12 rounded-xl">
                    <div className="flex mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 text-primary fill-primary" />
                      ))}
                    </div>
                    <blockquote className="text-xl md:text-2xl font-display mb-8">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="font-semibold">{testimonial.author}</div>
                        <div className="text-muted-foreground text-sm">{testimonial.position}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prev}
            className="absolute top-1/2 -left-6 -translate-y-1/2 h-12 w-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={next}
            className="absolute top-1/2 -right-6 -translate-y-1/2 h-12 w-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === index ? 'w-8 bg-primary' : 'w-2 bg-primary/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
