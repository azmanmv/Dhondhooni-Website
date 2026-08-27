import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Heart, Users, CheckCircle2, Sparkles, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, MouseEvent, useState, useEffect } from 'react';

const bgImages = [
  '/back.jpg',
  '/back1.jpg',
  '/back2.jpg',
  '/back3.jpg',
  '/back4.jpg',
  '/back5.jpg'
];

export default function Home() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const lastTrailTime = useRef(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % bgImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % bgImages.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + bgImages.length) % bgImages.length);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const now = Date.now();
    if (now - lastTrailTime.current < 40) return;
    lastTrailTime.current = now;

    if (!bannerRef.current) return;

    const rect = bannerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const star = document.createElement('div');
    star.className = 'absolute pointer-events-none text-amber-300 drop-shadow-[0_0_12px_rgba(252,211,77,1)] z-0';
    star.innerHTML = `<svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
    star.style.left = `${x - 32}px`;
    star.style.top = `${y - 32}px`;
    star.style.animation = 'star-fade 1s forwards ease-out';
    
    bannerRef.current.appendChild(star);
    setTimeout(() => {
      if (star.parentNode) {
        star.parentNode.removeChild(star);
      }
    }, 1000);
  };

  return (
    <div className="animate-in fade-in duration-700 relative overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-amber-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-40 w-72 h-72 bg-sky-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      {/* Hero Banner */}
      <section 
        ref={bannerRef}
        onMouseMove={handleMouseMove}
        className="relative bg-primary-800 text-white overflow-hidden rounded-b-[3rem] lg:rounded-b-[5rem] shadow-xl group"
      >
        {bgImages.map((src, idx) => (
          <div 
            key={src}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${idx === currentImageIndex ? 'opacity-100' : 'opacity-0'}`} 
            style={{ 
              backgroundImage: `linear-gradient(to bottom right, rgba(76, 29, 149, 0.95), rgba(91, 33, 182, 0.9), rgba(124, 58, 237, 0.8)), url('${src}')`,
              backgroundBlendMode: 'multiply'
            }}
          ></div>
        ))}

        {/* Slideshow Controls */}
        <button 
          onClick={prevImage}
          className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button 
          onClick={nextImage}
          className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
          aria-label="Next image"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {bgImages.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'bg-amber-400 scale-125 shadow-[0_0_8px_rgba(252,211,77,0.8)]' : 'bg-white/40 hover:bg-white/70'}`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-amber-400 text-primary-900 text-sm font-bold tracking-widest mb-6 shadow-md transform hover:scale-105 transition-transform duration-300">
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
                <p className="text-primary-100 text-xl mb-10 max-w-xl font-medium leading-relaxed">
                  We are excited to share that our Campus at Hulhumalé Phase 2 will open in January 2027, offering a thoughtfully designed environment for early learning.
                </p>
                <Link to="/campuses" className="inline-flex items-center justify-center px-8 py-4 bg-amber-400 text-primary-900 rounded-full font-black text-lg hover:bg-amber-300 hover:scale-105 transition-all shadow-lg">
                  Learn More
                </Link>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="aspect-[4/3] rounded-[2rem] border-8 border-white overflow-hidden shadow-2xl relative transform hover:scale-105 transition-transform duration-500">
                   <img 
                    src="./newadventure1.jpg" 
                    alt="School Campus rendering" 
                    className="w-full h-full object-cover"
                   />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
