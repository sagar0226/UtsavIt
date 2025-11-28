import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => (
  <a 
    href={href} 
    onClick={onClick}
    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50 transition-colors"
  >
    {children}
  </a>
);

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
             {/* Logo updated to use 'logo.jpg'. User should ensure the file is present. */}
            <img 
              src="logo.jpg" 
              alt="UtsavIT Logo" 
              className="h-12 w-12 rounded-full object-cover border-2 border-blue-600 shadow-sm"
              onError={(e) => {
                // Fallback if image not found
                (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Utsav+IT&background=0D8ABC&color=fff";
              }}
            />
            <div className="flex flex-col">
              <span className="font-bold text-xl text-blue-900 leading-tight">UtsavIT</span>
              <span className="text-xs text-gray-500 font-medium tracking-wide">SOLUTIONS</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">About Trainer</a>
            <a href="#courses" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">Courses</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">Testimonials</a>
            <a href="#contact" className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30">
              Enquire Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
            <NavLink href="#about" onClick={closeMenu}>About Trainer</NavLink>
            <NavLink href="#courses" onClick={closeMenu}>Courses</NavLink>
            <NavLink href="#clients" onClick={closeMenu}>Clients</NavLink>
            <NavLink href="#testimonials" onClick={closeMenu}>Testimonials</NavLink>
            <NavLink href="#contact" onClick={closeMenu}>Contact Us</NavLink>
            
            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col space-y-3">
               <a href="tel:7559399395" className="flex items-center gap-2 text-gray-600">
                 <Phone className="w-4 h-4 text-blue-600" /> +91 7559399395
               </a>
               <a href="mailto:s.jadhav226@gmail.com" className="flex items-center gap-2 text-gray-600">
                 <Mail className="w-4 h-4 text-blue-600" /> s.jadhav226@gmail.com
               </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};