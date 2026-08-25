import { MapPin, Clock, Phone, Building2, ExternalLink } from 'lucide-react';
import hulhumaleCampusImg from '../assets/images/hulhumale_campus_1787676996132.jpg';

export default function Campuses() {
  return (
    <div className="animate-in fade-in duration-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">Our Campuses</h1>
          <p className="text-xl text-gray-600">
            Conveniently located facilities designed for safety, accessibility, and optimal learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Malé Campus */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden flex flex-col">
            <div className="h-64 relative bg-gray-100">
              <img 
                src="./bc_inner.jpg" 
                alt="Malé Campus" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  if (e.currentTarget.src.includes('bc_inner.jpg')) {
                    e.currentTarget.src = "./bc_inner1.jpg";
                  } else {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80";
                  }
                }}
              />
              <div className="absolute top-4 left-4 bg-primary-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-md">
                Main Campus
              </div>
            </div>
            <div className="p-8 flex-grow">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Malé Campus</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Address</h4>
                    <p className="text-gray-600">Ma. Shaheen, Buruzu Magu,<br />Malé, Maldives</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Operating & Office Hours</h4>
                    <p className="text-gray-600">
                      <span className="font-semibold text-gray-800">School Hours:</span> Sunday – Thursday: 6:55 AM – 6:00 PM<br />
                      <span className="font-semibold text-gray-800">Admin Office:</span> Sunday – Thursday: 8:00 AM – 4:00 PM<br />
                      <span className="text-sm text-gray-500">Closed on weekends and public holidays</span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Contact</h4>
                    <a href="tel:+9607960669" className="text-primary-600 hover:text-primary-700 font-semibold">
                      +960 796-0669
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="bg-gray-100 rounded-2xl h-64 w-full border border-gray-200 overflow-hidden relative shadow-inner">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.300647182283!2d73.50800041426462!3d4.175402096996384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b3f7ebe75883ea5%3A0x673ed1a007b8979c!2sDhondhooni%20Little%20Learners%20Preschool!5e0!3m2!1sen!2smv!4v1707567891234!5m2!1sen!2smv" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dhondhooni Little Learners Male Campus Map"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Hulhumalé Phase 2 Campus */}
          <div className="bg-primary-900 rounded-3xl border border-primary-800 shadow-xl overflow-hidden text-white flex flex-col relative">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Building2 className="w-64 h-64" />
            </div>
            
            <div className="h-64 relative bg-primary-950">
              <img 
                src="./hulhumale1.jpg" 
                alt="Hulhumalé Phase 2 Campus Concept" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = hulhumaleCampusImg;
                }}
              />
              <div className="absolute top-4 left-4 bg-amber-500 text-primary-950 px-4 py-1.5 rounded-full text-sm font-bold shadow-md">
                Opening Jan 2027
              </div>
            </div>
            
            <div className="p-8 flex-grow relative z-10 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Hulhumalé Phase 2 Campus</h2>
                <p className="text-primary-100 mb-6 leading-relaxed">
                  We are excited to share that our Campus at Hulhumalé Phase 2 will open in January 2027, offering a thoughtfully designed environment for early learning.
                </p>

                {/* Waitlist Notice Box */}
                <div className="bg-primary-800/70 rounded-2xl p-6 border border-primary-700/80 mb-6 backdrop-blur-sm">
                  <h4 className="font-bold text-amber-300 text-lg mb-2 flex items-center gap-2">
                    <Phone className="w-5 h-5" /> Join the Waitlist
                  </h4>
                  <p className="text-primary-100 text-base mb-4 leading-relaxed">
                    If you are interested in enrolling your child, please contact <strong className="text-white font-bold underline decoration-amber-400 decoration-2">7960669</strong> to get waitlisted.
                  </p>
                  <a 
                    href="tel:7960669" 
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-primary-900 font-bold rounded-xl transition-all shadow-md"
                  >
                    <Phone className="w-4 h-4" /> Call 796-0669
                  </a>
                </div>
              </div>

              {/* Location Google Maps */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-bold text-primary-200 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-amber-400" /> Hulhumalé Phase 2 Location
                  </span>
                  <a 
                    href="https://maps.app.goo.gl/VJtqfzJhsyNzzgySA" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs text-amber-300 hover:text-white flex items-center gap-1 font-semibold transition-colors underline underline-offset-2"
                  >
                    Open in Google Maps <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <div className="bg-primary-950 rounded-2xl h-48 w-full border border-primary-700 overflow-hidden relative shadow-inner">
                  <iframe 
                    src="https://maps.google.com/maps?q=4.225,73.548&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dhondhooni Hulhumale Phase 2 Campus Map"
                  ></iframe>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
