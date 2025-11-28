import React from 'react';
import { Course, Testimonial, Client, TrainerProfile } from './types';
import { Database, Coffee, Megaphone, BarChart3, CheckSquare, Users } from 'lucide-react';

export const TRAINER_PROFILE: TrainerProfile = {
  name: "Sagar Jadhav",
  role: "Founder & Lead Trainer",
  background: "Mechanical Engineer | Certified Data Analyst",
  experience: "7+ Years Industrial Experience in Data, Analytics, and Software Development",
  expertise: [
    "Data Science, Analytics, Power BI, SQL",
    "Java Development (Core, OOPs)",
    "Digital Marketing (SEO, Ads)",
    "Software Testing (Manual, Automation)",
    "Soft Skills & Personality Development"
  ],
  lecturePhotos: [
    "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800"
  ]
};

export const COURSES: Course[] = [
  {
    id: 'data-science',
    title: 'Data Science & Analytics',
    duration: '3–6 Months',
    targetAudience: 'Students, Freshers, Professionals',
    topics: ['Python', 'SQL', 'Excel', 'Power BI', 'Tableau', 'Statistics', 'ML Basics', 'Real Projects'],
    icon: <Database className="w-8 h-8 text-blue-600" />
  },
  {
    id: 'java-dev',
    title: 'Java Development',
    duration: '3–5 Months',
    targetAudience: 'Engineering Students, Aspiring Devs',
    topics: ['Core Java', 'OOPs', 'Collections', 'JDBC', 'Spring Basics', 'Mini-Projects'],
    icon: <Coffee className="w-8 h-8 text-orange-600" />
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    duration: '2–4 Months',
    targetAudience: 'Students, Entrepreneurs',
    topics: ['SEO', 'Social Media', 'Google Ads', 'Email Marketing', 'Analytics'],
    icon: <Megaphone className="w-8 h-8 text-purple-600" />
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst Training',
    duration: '2–4 Months',
    targetAudience: 'Graduates, Career Switchers',
    topics: ['Excel', 'SQL', 'Power BI', 'Data Visualization', 'Dashboarding', 'Case Studies'],
    icon: <BarChart3 className="w-8 h-8 text-green-600" />
  },
  {
    id: 'software-testing',
    title: 'Software Testing',
    duration: '2–3 Months',
    targetAudience: 'Freshers, IT Professionals',
    topics: ['Manual Testing', 'SDLC', 'Test Cases', 'Selenium', 'JIRA', 'Agile'],
    icon: <CheckSquare className="w-8 h-8 text-red-600" />
  },
  {
    id: 'soft-skills',
    title: 'Soft Skills & Personality Dev',
    duration: '1–2 Months (Workshops)',
    targetAudience: 'College Students, Employees',
    topics: ['Communication', 'Interview Skills', 'Resume Building', 'Confidence', 'Leadership'],
    icon: <Users className="w-8 h-8 text-indigo-600" />
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    text: "The Data Analyst training was very practical. I got my first job within 2 months of completing the course. Highly recommended!",
    author: "Arun",
    role: "Final Year Student",
    type: "student"
  },
  {
    id: 't2',
    text: "Java program helped me clear technical interviews. The trainer explained complex topics in a simple way with real examples.",
    author: "Priya",
    role: "Fresher",
    type: "student"
  },
  {
    id: 't3',
    text: "UtsavIT’s corporate training on Data Science was well-structured and industry-relevant. Our employees found it extremely useful.",
    author: "HR Head",
    role: "IT Company",
    type: "institution"
  },
  {
    id: 't4',
    text: "The personality development program for our final year students was excellent. Students’ communication and interview skills improved significantly.",
    author: "Training Coordinator",
    role: "Engineering College",
    type: "institution"
  }
];

export const CLIENTS: Client[] = [
  { name: "TCS", type: "corporate" },
  { name: "Wipro", type: "corporate" },
  { name: "Infosys", type: "corporate" },
  { name: "Cognizant", type: "corporate" },
  { name: "HCL Technologies", type: "corporate" },
  { name: "Tech Mahindra", type: "corporate" },
  { name: "Rathinam College", type: "institution" },
  { name: "PSG College", type: "institution" },
  { name: "Anna University", type: "institution" }
];