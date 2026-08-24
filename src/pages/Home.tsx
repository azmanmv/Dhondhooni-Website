import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Heart, Users, CheckCircle2, Sparkles, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="animate-in fade-in duration-700 relative overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-amber-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-40 w-72 h-72 bg-sky-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      {/* Hero Banner */}
      <section className="relative bg-primary-800 text-white overflow-hidden rounded-b-[3rem] lg:rounded-b-[5rem] shadow-xl">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/90 to-primary-600/80"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-amber-400 text-primary-900 text-sm font-bold tracking-widest mb-6 shadow-md transform -rotate-2 hover:rotate-0 transition-transform">
            <Sparkles className="w-4 h-4" /> DISCOVER THE JOY OF LEARNING
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tight mb-6 max-w-5xl text-white drop-shadow-sm leading-tight">
            Where Little Learners <span className="text-amber-300 inline-block transform rotate-1 hover:scale-105 transition-transform">Blossom</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-50 max-w-2xl mb-10 font-semibold leading-relaxed">
            With over 13 years of expertise, we provide a nurturing, stimulating, and safe environment rooted in authentic Islamic values and modern pedagogical standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link 
              to="/programs" 
              className="px-8 py-4 bg-white text-primary-800 rounded-full font-black text-xl hover:bg-amber-50 hover:text-primary-900 hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2 border-b-4 border-gray-200 active:border-b-0 active:mt-1"
            >
              Explore Programs <ArrowRight className="w-6 h-6" />
            </Link>
            <a 
              href="https://dllapply.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-amber-400 text-primary-900 rounded-full font-black text-xl hover:bg-amber-300 hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2 border-b-4 border-amber-500 active:border-b-0 active:mt-1"
            >
              Apply for 2027
            </a>
          </div>
        </div>
      </section>

      {/* School Mission & Highlights */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16 relative">
            <Star className="absolute -top-6 -left-6 w-10 h-10 text-amber-400 fill-amber-400 opacity-50 transform -rotate-12" />
            <h2 className="text-4xl lg:text-5xl font-black text-primary-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              To ensure students achieve their best social, emotional, intellectual, and physical success in a safe, child-friendly environment that serves the best Islamic education and values.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-sky-50 rounded-[2.5rem] p-8 border-4 border-sky-100 hover:border-sky-300 hover:shadow-2xl hover:-translate-y-2 transition-all group">
              <div className="w-16 h-16 bg-sky-400 rounded-full flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8 text-white fill-white" />
              </div>
              <h3 className="text-2xl font-black text-primary-900 mb-3">Islamic Values</h3>
              <p className="text-gray-600 font-medium text-lg leading-relaxed">
                Grounded in authentic Islamic teachings, helping students instil a deep love, respect, and moral character from an early age.
              </p>
            </div>
            
            <div className="bg-amber-50 rounded-[2.5rem] p-8 border-4 border-amber-100 hover:border-amber-300 hover:shadow-2xl hover:-translate-y-2 transition-all group">
              <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                <BookOpen className="w-8 h-8 text-white fill-white" />
              </div>
              <h3 className="text-2xl font-black text-primary-900 mb-3">Child-Centered</h3>
              <p className="text-gray-600 font-medium text-lg leading-relaxed">
                Prioritizing individual development, recognizing strengths, and guiding students through engaging, interest-led learning.
              </p>
            </div>

            <div className="bg-pink-50 rounded-[2.5rem] p-8 border-4 border-pink-100 hover:border-pink-300 hover:shadow-2xl hover:-translate-y-2 transition-all group">
              <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white fill-white" />
              </div>
              <h3 className="text-2xl font-black text-primary-900 mb-3">Inclusive & Accessible</h3>
              <p className="text-gray-600 font-medium text-lg leading-relaxed">
                Ensuring equitable opportunities for all learners regardless of background or ability, with specialized SEN support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight/Event Banner */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-900 rounded-[3rem] p-8 lg:p-16 border-8 border-primary-100 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-800 rounded-full mix-blend-multiply opacity-50 transform translate-x-1/3 -translate-y-1/3"></div>
            
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
              <div className="lg:w-1/2">
                <span className="inline-block px-4 py-2 bg-pink-500 text-white font-bold rounded-full text-sm mb-4 transform -rotate-2">NEW ADVENTURE</span>
                <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white leading-tight">Expanding to <br/>Hulhumalé</h2>
                <p className="text-primary-100 text-xl mb-8 max-w-xl font-medium">
                  We are thrilled to announce our upcoming Phase 2 Campus opening in January 2027. State-of-the-art facilities designed for modern early education.
                </p>
                <ul className="space-y-4 mb-10">
                  {['Spacious outdoor play areas', 'Purpose-built sensory rooms', 'Expanded capacity for all tiers'].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-white text-lg font-bold bg-primary-800/50 p-3 rounded-2xl">
                      <div className="bg-amber-400 rounded-full p-1 shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-primary-900" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/campuses" className="inline-flex items-center justify-center px-8 py-4 bg-amber-400 text-primary-900 rounded-full font-black text-lg hover:bg-amber-300 hover:scale-105 transition-all shadow-lg">
                  Learn More
                </Link>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="aspect-[4/3] bg-primary-800 rounded-[2rem] border-8 border-primary-800 overflow-hidden shadow-2xl relative transform rotate-2 hover:rotate-0 transition-transform duration-500">
                   <img 
                    src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80" 
                    alt="School Campus rendering" 
                    className="w-full h-full object-cover opacity-90"
                   />
                   <div className="absolute inset-0 bg-primary-900/10"></div>
                   <div className="absolute bottom-6 left-6 bg-white text-primary-900 px-6 py-3 rounded-2xl font-black text-lg shadow-xl flex items-center gap-2">
                     <Star className="w-5 h-5 text-amber-500 fill-amber-500" /> Concept Rendering - 2027
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
