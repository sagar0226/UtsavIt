import React from 'react';

export interface Course {
  id: string;
  title: string;
  duration: string;
  targetAudience: string;
  topics: string[];
  icon: React.ReactNode;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
  type: 'student' | 'institution';
}

export interface Client {
  name: string;
  type: 'corporate' | 'institution';
}

export interface TrainerProfile {
  name: string;
  role: string;
  background: string;
  experience: string;
  expertise: string[];
  lecturePhotos: string[];
}