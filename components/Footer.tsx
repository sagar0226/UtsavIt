import React from 'react';
import { Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
           <span className="font-bold text-xl text-white">UtsavIT</span>
           <p className="text-sm mt-1">&copy; {new Date().getFullYear()} UtsavIT Skill Development. All rights reserved.</p>
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="hover:text-blue-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
          <a href="#" className="hover:text-pink-500 transition-colors"><Instagram className="w-5 h-5" /></a>
          <a href="#" className="hover:text-blue-400 transition-colors"><Twitter className="w-5 h-5" /></a>
          <a href="#" className="hover:text-blue-600 transition-colors"><Facebook className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  );
};