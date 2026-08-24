import { MapPin, Clock, Phone, Mail, Building2, ExternalLink } from 'lucide-react';

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
            <div className="h-64 relative">
              <img 
                src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80" 
                alt="Malé Campus" 
                className="w-full h-full object-cover"
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
                    <h4 className="font-bold text-gray-900">Operating Hours</h4>
                    <p className="text-gray-600">Sunday - Thursday: 7:30 AM - 2:00 PM<br />Closed on weekends and public holidays</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Contact</h4>
                    <p className="text-gray-600">+960 796-0669</p>
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
            
            <div className="h-64 relative">
              <img 
                src="https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?auto=format&fit=crop&q=80" 
                alt="Hulhumalé Campus Rendering" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute top-4 left-4 bg-amber-500 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-md">
                Opening Jan 2027
              </div>
            </div>
            
            <div className="p-8 flex-grow relative z-10">
              <h2 className="text-2xl font-bold text-white mb-4">Hulhumalé Phase 2 Campus</h2>
              <p className="text-primary-100 mb-8 leading-relaxed">
                Currently under construction, our new state-of-the-art facility in Phase 2 will offer expansive indoor and outdoor learning environments, specifically designed for next-generation early education.
              </p>

              <div className="bg-primary-800/50 rounded-2xl p-6 border border-primary-700 mb-8 backdrop-blur-sm">
                <h4 className="font-bold text-primary-50 mb-3">Planned Facilities:</h4>
                <ul className="space-y-2 text-primary-100/90 text-sm">
                  <li className="flex items-center gap-2">• Interactive Sensory Gardens</li>
                  <li className="flex items-center gap-2">• Indoor Climate-Controlled Gym</li>
                  <li className="flex items-center gap-2">• Early Years Science Lab</li>
                  <li className="flex items-center gap-2">• Drop-off / Pick-up Driveway</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-primary-50 mb-4">Register Interest</h4>
                <form className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-grow bg-primary-800/50 border border-primary-700 rounded-xl px-4 py-3 text-white placeholder-primary-300/50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  <button type="button" className="bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold px-6 py-3 rounded-xl transition-colors shrink-0">
                    Notify Me
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
