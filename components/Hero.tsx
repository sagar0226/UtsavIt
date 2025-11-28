import React from 'react';
import { ArrowRight, GraduationCap, Briefcase } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
         <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
         <div className="absolute top-1/2 right-0 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-800/50 px-4 py-1.5 rounded-full border border-blue-400/30 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-sm font-medium tracking-wide text-blue-100">Admissions Open for 2025 Batch</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Empowering Institutions & Corporates with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">Future-Ready Skills</span>
          </h1>
          
          <p className="text-lg md:text-xl text-blue-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join UtsavIT to master Data Science, Java, Digital Marketing, and Soft Skills. 
            We bridge the gap between academic knowledge and industry requirements.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl"
            >
              Request Workshop <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#courses"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              View Courses
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white mb-1">1000+</span>
              <span className="text-sm text-blue-300 uppercase tracking-wider">Students Trained</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white mb-1">10+</span>
              <span className="text-sm text-blue-300 uppercase tracking-wider">Corporate Partners</span>
            </div>
             <div className="flex flex-col items-center col-span-2 md:col-span-1">
              <span className="text-3xl font-bold text-white mb-1">100%</span>
              <span className="text-sm text-blue-300 uppercase tracking-wider">Practical Learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};