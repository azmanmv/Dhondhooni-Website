import React, { useState } from 'react';
import { Briefcase, ChevronRight, UploadCloud, CheckCircle2, FileText, X, Send, Mail } from 'lucide-react';

const activeJobs = [
  {
    id: 1,
    title: "Assistant Teachers, Male' Campus",
    department: 'Academics',
    type: 'Full-time',
    location: "Male' Campus",
    description: 'Passionate educators to support lead teachers in planning and implementing the daily curriculum, managing classroom activities, and providing nurturing guidance to young learners.'
  },
  {
    id: 2,
    title: "Support Staff (Masaiykathu dhahtha), Male' Campus",
    department: 'Support Services',
    type: 'Full-time',
    location: "Male' Campus",
    description: 'Dedicated support staff to assist in maintaining classroom cleanliness, hygiene, meal time support, and ensuring a safe, welcoming environment for students.'
  },
  {
    id: 3,
    title: "Admin Assistants, Male' Campus",
    department: 'Administration',
    type: 'Full-time',
    location: "Male' Campus",
    description: 'Enthusiastic and organized administrative staff to assist in front-desk communication, student records, parent support, and general school operations.'
  }
];

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(activeJobs[0].title);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct email content
    const subject = `Job Application: ${selectedJob} - ${formData.name}`;
    const body = `Position: ${selectedJob}\nApplicant Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nCover Letter / Message:\n${formData.message}\n\n(Note: Please attach your CV / Resume "${selectedFile ? selectedFile.name : 'Resume.pdf'}" to this email).`;
    
    const mailtoUrl = `mailto:mail@dhondhooni.edu.mv?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoUrl;
    setIsSubmitted(true);
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
                  <ChevronRight className={`w-5 h-5 transition-transform shrink-0 ${selectedJob === job.title ? 'text-primary-600 rotate-90' : 'text-gray-400'}`} />
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
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Form Formatted!</h3>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto leading-relaxed">
                    Your application email for <strong className="text-primary-700">{selectedJob}</strong> has been prepared for <strong className="text-gray-900">mail@dhondhooni.edu.mv</strong>.
                  </p>
                  
                  <div className="bg-primary-50 border border-primary-200 rounded-2xl p-5 mb-6 text-left max-w-md mx-auto">
                    <h4 className="font-bold text-primary-900 text-sm mb-1 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary-600" /> Direct Email Submission
                    </h4>
                    <p className="text-xs text-primary-700 leading-relaxed">
                      If your email app did not open automatically, you can also directly send your CV and portfolio to:
                    </p>
                    <p className="font-bold text-primary-900 text-sm mt-1">mail@dhondhooni.edu.mv</p>
                  </div>

                  <div className="space-y-3 max-w-sm mx-auto">
                    <a 
                      href={`mailto:mail@dhondhooni.edu.mv?subject=${encodeURIComponent(`Job Application: ${selectedJob} - ${formData.name}`)}&body=${encodeURIComponent(`Position: ${selectedJob}\nApplicant Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nCover Letter / Message:\n${formData.message}`)}`}
                      className="w-full inline-flex items-center justify-center gap-2 bg-primary-600 text-white font-bold py-3.5 px-6 rounded-xl hover:bg-primary-700 transition-colors shadow-md"
                    >
                      <Send className="w-4 h-4" /> Open Email Client Again
                    </a>
                    <button 
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', message: '' });
                        setSelectedFile(null);
                      }}
                      className="text-primary-600 font-bold hover:text-primary-700 transition-colors block w-full py-2"
                    >
                      Submit another application
                    </button>
                  </div>
                </div>
              ) : (
                <form 
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">Full Name *</label>
                      <input 
                        type="text" 
                        name="name" 
                        required 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-gray-50 text-gray-900 font-medium" 
                        placeholder="Jane Doe" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">Email Address *</label>
                      <input 
                        type="email" 
                        name="email" 
                        required 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-gray-50 text-gray-900 font-medium" 
                        placeholder="jane@example.com" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Phone Number *</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      required 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-gray-50 text-gray-900 font-medium" 
                      placeholder="+960 700-0000" 
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Cover Letter / Message</label>
                    <textarea 
                      name="message" 
                      rows={4} 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-gray-50 text-gray-900 font-medium resize-none" 
                      placeholder="Briefly explain your experience and why you are a good fit for this role..."
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Upload CV / Resume (PDF / Doc)</label>
                    
                    {selectedFile ? (
                      <div className="flex items-center justify-between p-4 bg-primary-50 border-2 border-primary-200 rounded-xl">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center text-primary-700">
                            <FileText className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-gray-900 truncate max-w-xs">{selectedFile.name}</p>
                            <p className="text-xs text-gray-500">{(selectedFile.size / 1024).toFixed(1)} KB</p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => setSelectedFile(null)}
                          className="p-1.5 hover:bg-primary-100 rounded-lg text-gray-500 hover:text-red-500 transition-colors"
                          title="Remove file"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    ) : (
                      <label className="flex flex-col items-center justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl hover:border-primary-400 hover:bg-primary-50/50 transition-colors cursor-pointer group">
                        <UploadCloud className="h-10 w-10 text-gray-400 group-hover:text-primary-500 transition-colors mb-2" />
                        <span className="text-sm font-bold text-primary-600 group-hover:text-primary-700">
                          Click to select a file
                        </span>
                        <span className="text-xs text-gray-500 mt-1">PDF or DOCX up to 10MB</span>
                        <input 
                          type="file" 
                          accept=".pdf,.doc,.docx" 
                          onChange={handleFileChange}
                          className="hidden" 
                        />
                      </label>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-600 text-white font-bold py-4 rounded-xl hover:bg-primary-700 transition-colors shadow-md text-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" /> Submit Application
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
