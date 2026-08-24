import React, { useState } from 'react';
import { Briefcase, ChevronRight, UploadCloud, CheckCircle2 } from 'lucide-react';

const activeJobs = [
  {
    id: 1,
    title: 'Assistant Teacher (Early Years)',
    department: 'Academics',
    type: 'Full-time',
    location: 'Malé Campus',
    description: 'Supporting the lead teacher in planning and implementing the daily curriculum, managing classroom behavior, and providing individualized attention to students.'
  },
  {
    id: 2,
    title: 'Special Education Needs (SEN) Coordinator',
    department: 'Student Support',
    type: 'Full-time',
    location: 'Malé Campus',
    description: 'Identifying and supporting children with special educational needs, developing individualized education plans (IEPs), and collaborating with parents and teachers.'
  },
  {
    id: 3,
    title: 'Campus Administrator',
    department: 'Operations',
    type: 'Full-time',
    location: 'Hulhumalé Phase 2 (Opening 2027)',
    description: 'Pre-opening role to assist in the setup, staffing, and operational readiness of the upcoming Hulhumalé Phase 2 Campus.'
  }
];

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(activeJobs[0].title);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission for static site
    setTimeout(() => setIsSubmitted(true), 1000);
  };

  return (
    <div className="animate-in fade-in duration-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">Jobs at Dhondhooni</h1>
          <p className="text-xl text-gray-600">
            Join a team of passionate educators and professionals dedicated to shaping the future.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          
          {/* Active Vacancies List */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-primary-600" />
              Active Openings
            </h2>
            
            {activeJobs.map((job) => (
              <div 
                key={job.id} 
                onClick={() => setSelectedJob(job.title)}
                className={`cursor-pointer rounded-2xl p-6 border transition-all duration-200 ${
                  selectedJob === job.title 
                    ? 'bg-primary-50 border-primary-500 shadow-md ring-1 ring-primary-500' 
                    : 'bg-white border-gray-200 hover:border-primary-300 hover:shadow-sm'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-gray-900 text-lg">{job.title}</h3>
                  <ChevronRight className={`w-5 h-5 transition-transform ${selectedJob === job.title ? 'text-primary-600 rotate-90' : 'text-gray-400'}`} />
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-semibold">{job.department}</span>
                  <span className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-semibold">{job.type}</span>
                  <span className="px-2.5 py-1 bg-primary-100 text-primary-700 rounded-md text-xs font-semibold">{job.location}</span>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {job.description}
                </p>
              </div>
            ))}
          </div>

          {/* Application Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-xl shadow-gray-200/40">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Apply Online</h2>
              <p className="text-gray-600 mb-8 pb-6 border-b border-gray-100">
                Applying for: <strong className="text-primary-700">{selectedJob}</strong>
              </p>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Received!</h3>
                  <p className="text-gray-600 mb-6 max-w-sm mx-auto">
                    Thank you for applying. Our HR team will review your CV and contact you if your profile matches our requirements.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-primary-600 font-bold hover:text-primary-700 transition-colors"
                  >
                    Submit another application
                  </button>
                </div>
              ) : (
                <form 
                  onSubmit={handleSubmit}
                  action="https://formspree.io/f/placeholder" 
                  method="POST" 
                  encType="multipart/form-data" 
                  className="space-y-6"
                >
                  <input type="hidden" name="applied_position" value={selectedJob} />
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">Full Name *</label>
                      <input type="text" name="name" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-gray-50 text-gray-900 font-medium" placeholder="Jane Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">Email Address *</label>
                      <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-gray-50 text-gray-900 font-medium" placeholder="jane@example.com" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Phone Number *</label>
                    <input type="tel" name="phone" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-gray-50 text-gray-900 font-medium" placeholder="+960 700-0000" />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Cover Letter / Message</label>
                    <textarea name="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-gray-50 text-gray-900 font-medium resize-none" placeholder="Briefly explain why you are a good fit for this role..."></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Upload CV/Resume (PDF) *</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl hover:border-primary-400 hover:bg-primary-50 transition-colors group cursor-pointer relative">
                      <div className="space-y-1 text-center">
                        <UploadCloud className="mx-auto h-12 w-12 text-gray-400 group-hover:text-primary-500 transition-colors" />
                        <div className="flex text-sm text-gray-600 justify-center">
                          <label htmlFor="file-upload" className="relative cursor-pointer bg-transparent rounded-md font-bold text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500">
                            <span>Upload a file</span>
                            <input id="file-upload" name="resume" type="file" accept=".pdf" required className="sr-only" />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PDF up to 5MB
                        </p>
                      </div>
                      <input type="file" accept=".pdf" required className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-600 text-white font-bold py-4 rounded-xl hover:bg-primary-700 transition-colors shadow-md text-lg"
                  >
                    Submit Application
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
