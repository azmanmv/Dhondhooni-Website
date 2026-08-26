import { Briefcase, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  return (
    <div className="animate-in fade-in duration-700 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">Jobs at Dhondhooni</h1>
          <p className="text-xl text-gray-600">
            Join a team of passionate educators and professionals dedicated to shaping the future.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-2">
            <Briefcase className="w-6 h-6 text-primary-600" />
            Active Openings
          </h2>
          
          <div className="grid gap-6">
            {activeJobs.map((job) => (
              <div 
                key={job.id}
                className="rounded-2xl p-6 md:p-8 bg-slate-50 border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all duration-200 flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-gray-900 text-xl">{job.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-semibold">{job.department}</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-semibold">{job.type}</span>
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-md text-xs font-semibold">{job.location}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {job.description}
                  </p>
                </div>
                <div className="shrink-0 pt-4 md:pt-0 md:pl-6 md:border-l border-gray-200 flex items-center justify-center">
                  <Link
                    to="/apply"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#633F83] text-white rounded-xl font-bold hover:bg-[#800080] transition-colors shadow-sm whitespace-nowrap"
                  >
                    Apply Now
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
