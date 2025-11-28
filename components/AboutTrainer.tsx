import React from 'react';
import { TRAINER_PROFILE } from '../constants';
import { BadgeCheck, GraduationCap, Briefcase, Award } from 'lucide-react';

export const AboutTrainer: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Meet Your Mentor
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              {TRAINER_PROFILE.name}
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              {TRAINER_PROFILE.role} with a strong foundation in {TRAINER_PROFILE.background}. 
              Dedicated to transforming students into industry-ready professionals through hands-on training.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Briefcase className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">Experience</h4>
                  <p className="text-slate-600">{TRAINER_PROFILE.experience}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">Core Expertise</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {TRAINER_PROFILE.expertise.map((skill, index) => (
                      <span key={index} className="bg-slate-100 text-slate-700 px-3 py-1 rounded text-sm border border-slate-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Gallery Grid */}
          <div className="grid grid-cols-2 gap-4">
            {TRAINER_PROFILE.lecturePhotos.map((photo, idx) => (
              <div key={idx} className={`relative rounded-xl overflow-hidden shadow-lg ${idx === 0 ? 'col-span-2 row-span-2' : ''}`}>
                 <img 
                  src={photo} 
                  alt={`Lecture ${idx + 1}`} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  style={{ minHeight: idx === 0 ? '300px' : '140px' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};