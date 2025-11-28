import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'Student',
    course: 'Data Science',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Construct mailto link
    const subject = `Enquiry from ${formData.name} - ${formData.type}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AType: ${formData.type}%0D%0AInterested In: ${formData.course}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    
    window.location.href = `mailto:s.jadhav226@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Skill Up Together</h2>
            <p className="text-slate-300 mb-10 text-lg">
              Ready to start your journey? Contact us for workshop bookings, corporate training inquiries, or individual course admissions.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg backdrop-blur-sm border border-white/10">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Call / WhatsApp</p>
                  <a href="tel:7559399395" className="text-xl font-bold hover:text-blue-400 transition-colors">+91 7559399395</a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg backdrop-blur-sm border border-white/10">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email Us</p>
                  <a href="mailto:s.jadhav226@gmail.com" className="text-xl font-bold hover:text-blue-400 transition-colors">s.jadhav226@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg backdrop-blur-sm border border-white/10">
                 <div className="bg-blue-600 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                 <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="text-lg font-semibold">Pune, Dange Chowk (Serving All Over India)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 text-slate-900">
            <h3 className="text-2xl font-bold mb-6">Request a Workshop / Demo</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="+91..."
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700">Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">I am a</label>
                  <select 
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                  >
                    <option value="Student">Student</option>
                    <option value="Professional">Professional</option>
                    <option value="Institution Rep">Institution Rep</option>
                    <option value="Corporate Rep">Corporate Rep</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Interested In</label>
                  <select 
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                  >
                    <option value="Data Science">Data Science</option>
                    <option value="Java Development">Java Development</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Data Analyst">Data Analyst</option>
                    <option value="Software Testing">Software Testing</option>
                    <option value="Soft Skills">Soft Skills</option>
                    <option value="Corporate Training">Corporate Training</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Send Enquiry <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};