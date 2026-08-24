import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
  };

  return (
    <div className="animate-in fade-in duration-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Have questions about our programs, admissions, or anything else? We're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Visit Us</h4>
                    <p className="text-gray-600 mt-1">Ma. Shaheen, Buruzu Magu,<br />Malé, Maldives</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Call Us</h4>
                    <p className="text-gray-600 mt-1">+960 796-0669</p>
                    <p className="text-sm text-gray-500 mt-1">Available Sun-Thu, 8am - 2pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Email Us</h4>
                    <a href="mailto:mail@dhondhooni.edu.mv" className="text-primary-600 hover:text-primary-700 font-medium mt-1 inline-block">
                      mail@dhondhooni.edu.mv
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary-900 rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Clock className="w-6 h-6 text-primary-400" />
                Office Hours
              </h3>
              <ul className="space-y-3 text-primary-100">
                <li className="flex justify-between border-b border-primary-800 pb-2">
                  <span>Sunday - Thursday</span>
                  <span className="font-bold">7:30 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-primary-800 pb-2 text-primary-300/70">
                  <span>Friday</span>
                  <span>Closed</span>
                </li>
                <li className="flex justify-between text-primary-300/70">
                  <span>Saturday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-xl shadow-gray-200/40">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Send a Message</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">First Name</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-gray-50 text-gray-900" placeholder="Ali" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Last Name</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-gray-50 text-gray-900" placeholder="Zahir" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Email Address</label>
                <input type="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-gray-50 text-gray-900" placeholder="ali@example.com" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Subject</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-gray-50 text-gray-900 font-medium appearance-none">
                  <option>General Inquiry</option>
                  <option>Admissions & Enrollment</option>
                  <option>Careers</option>
                  <option>Feedback</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Message</label>
                <textarea rows={5} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-gray-50 text-gray-900 resize-none" placeholder="How can we help you today?"></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white font-bold py-4 rounded-xl hover:bg-primary-700 transition-colors shadow-md text-lg"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
