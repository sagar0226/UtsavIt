import React from 'react';
import { CLIENTS } from '../constants';
import { Building2, GraduationCap } from 'lucide-react';

export const Clients: React.FC = () => {
  return (
    <section id="clients" className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-slate-900">Trusted by Leading Institutions & Corporates</h2>
          <p className="text-slate-500 mt-2">Training partners across South India</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {CLIENTS.map((client, idx) => (
            <div key={idx} className="flex items-center justify-center p-6 bg-slate-50 rounded-lg border border-slate-100 hover:border-blue-200 transition-colors group">
               <div className="flex flex-col items-center gap-2 text-center">
                  {client.type === 'corporate' ? (
                    <Building2 className="w-8 h-8 text-slate-300 group-hover:text-blue-500 transition-colors" />
                  ) : (
                    <GraduationCap className="w-8 h-8 text-slate-300 group-hover:text-green-500 transition-colors" />
                  )}
                  <span className="font-semibold text-slate-700">{client.name}</span>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};