import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutTrainer } from './components/AboutTrainer';
import { CourseCard } from './components/CourseCard';
import { Clients } from './components/Clients';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { COURSES } from './constants';
import { ArrowUp } from 'lucide-react';

function App() {
  const [showScroll, setShowScroll] = React.useState(false);

  React.useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400){
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400){
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <AboutTrainer />
        
        <section id="courses" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Our Programs</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Upskill for the Future</h2>
              <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                Comprehensive courses designed for both students aiming for placements and professionals looking for career growth.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {COURSES.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </section>

        <Clients />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      {/* Floating Action Button for Scroll to Top */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 ${showScroll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      {/* Sticky WhatsApp/Contact for Mobile - Mimicking App UI */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-3 z-40 flex justify-between gap-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <a href="tel:7559399395" className="flex-1 flex items-center justify-center gap-2 bg-slate-100 text-slate-900 font-semibold py-3 rounded-lg">
          Call Now
        </a>
        <a href="#contact" className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold py-3 rounded-lg">
          Enquire
        </a>
      </div>
    </div>
  );
}

export default App;