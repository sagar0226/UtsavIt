import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Success Stories</h2>
          <p className="text-lg text-slate-600">Hear from our students and partner institutions</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm relative">
              <Quote className="w-10 h-10 text-blue-100 absolute top-6 right-6" />
              <p className="text-slate-600 text-lg italic mb-6 relative z-10">"{t.text}"</p>
              
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl ${t.type === 'student' ? 'bg-blue-500' : 'bg-purple-500'}`}>
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{t.author}</h4>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};