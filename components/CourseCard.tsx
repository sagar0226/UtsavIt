import React from 'react';
import { Course } from '../types';
import { Clock, Users, CheckCircle2 } from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group flex flex-col h-full">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
          {course.icon}
        </div>
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Certificate</span>
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-2">{course.title}</h3>
      
      <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" /> {course.duration}
        </div>
      </div>

      <div className="mb-6 flex-grow">
        <h4 className="text-sm font-semibold text-slate-900 mb-3">What you'll learn:</h4>
        <ul className="space-y-2">
          {course.topics.slice(0, 4).map((topic, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" /> {topic}
            </li>
          ))}
          {course.topics.length > 4 && (
            <li className="text-sm text-blue-600 italic pl-6">+ {course.topics.length - 4} more modules</li>
          )}
        </ul>
      </div>

      <div className="mt-auto pt-6 border-t border-slate-100">
         <p className="text-xs text-slate-500 mb-3 flex items-center gap-1">
            <Users className="w-3 h-3" /> Best for: {course.targetAudience}
         </p>
         <a 
            href={`#contact`} 
            className="block w-full text-center bg-slate-900 text-white py-2.5 rounded-lg font-medium hover:bg-blue-600 transition-colors"
         >
           Enroll / Request Info
         </a>
      </div>
    </div>
  );
};