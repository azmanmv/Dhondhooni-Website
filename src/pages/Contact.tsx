import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, CheckCircle2, Send, ExternalLink } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link to mail@dhondhooni.edu.mv
    const fullSubject = `[${formData.subject}] Message from ${formData.firstName} ${formData.lastName}`;
    const bodyContent = `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`;
    const mailtoUrl = `mailto:mail@dhondhooni.edu.mv?subject=${encodeURIComponent(fullSubject)}&body=${encodeURIComponent(bodyContent)}`;
    
    // Open email client
    window.location.href = mailtoUrl;
    setIsSubmitted(true);
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
                    <a href="tel:+9607960669" className="text-primary-600 hover:text-primary-700 font-semibold mt-1 inline-block">
                      +960 796-0669
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Admin Office: Sun–Thu, 8:00 AM – 4:00 PM</p>
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
                Working & Operating Hours
              </h3>
              <ul className="space-y-3 text-primary-100">
                <li className="flex justify-between border-b border-primary-800 pb-2">
                  <span>School Operating Hours</span>
                  <span className="font-bold">6:55 AM – 6:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-primary-800 pb-2">
                  <span>Admin Office Open Hours</span>
                  <span className="font-bold">8:00 AM – 4:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-primary-800 pb-2 text-primary-300/70">
                  <span>Friday</span>
                  <span>Closed</span>
                </li>
                <li className="flex justify-between text-primary-300/70">
                  <span>Saturday & Public Holidays</span>
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

            {isSubmitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Email Client Opened!</h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto leading-relaxed">
                  Your message has been formatted to send directly to <strong className="text-primary-700">mail@dhondhooni.edu.mv</strong>.
                </p>
                <div className="space-y-3 max-w-sm mx-auto">
                  <a
                    href={`mailto:mail@dhondhooni.edu.mv?subject=${encodeURIComponent(`[${formData.subject}] Message from ${formData.firstName} ${formData.lastName}`)}&body=${encodeURIComponent(`Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`)}`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary-600 text-white font-bold py-3.5 px-6 rounded-xl hover:bg-primary-700 transition-colors shadow-md"
                  >
                    <Send className="w-4 h-4" /> Open Email Client Again
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        subject: 'General Inquiry',
                        message: ''
                      });
                    }}
                    className="w-full text-gray-600 font-semibold py-2.5 hover:text-primary-600 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">First Name *</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-gray-50 text-gray-900" 
                      placeholder="Ali" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Last Name *</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-gray-50 text-gray-900" 
                      placeholder="Zahir" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-gray-50 text-gray-900" 
                    placeholder="ali@example.com" 
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Subject</label>
                  <select 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-gray-50 text-gray-900 font-medium appearance-none"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Admissions & Enrollment">Admissions & Enrollment</option>
                    <option value="Jobs & Vacancies">Jobs & Vacancies</option>
                    <option value="Feedback">Feedback</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Message *</label>
                  <textarea 
                    rows={5} 
                    required 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-gray-50 text-gray-900 resize-none" 
                    placeholder="How can we help you today?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white font-bold py-4 rounded-xl hover:bg-primary-700 transition-colors shadow-md text-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" /> Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
