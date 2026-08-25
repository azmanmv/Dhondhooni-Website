import { Outlet, Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, Mail, Menu, X, Facebook, Instagram, Twitter } from 'lucide-react';
import { useState } from 'react';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', active: 'bg-rose-500 text-white shadow-inner', default: 'bg-rose-100 text-rose-700 hover:bg-rose-500 hover:text-white' },
    { name: 'About', path: '/about', active: 'bg-amber-400 text-amber-950 shadow-inner', default: 'bg-amber-100 text-amber-800 hover:bg-amber-400 hover:text-amber-950' },
    { name: 'Programs', path: '/programs', active: 'bg-emerald-500 text-white shadow-inner', default: 'bg-emerald-100 text-emerald-800 hover:bg-emerald-500 hover:text-white' },
    { name: 'Admissions', path: '/admissions', active: 'bg-sky-500 text-white shadow-inner', default: 'bg-sky-100 text-sky-800 hover:bg-sky-500 hover:text-white' },
    { name: 'Campuses', path: '/campuses', active: 'bg-indigo-500 text-white shadow-inner', default: 'bg-indigo-100 text-indigo-700 hover:bg-indigo-500 hover:text-white' },
    { name: 'Media', path: '/social-media', active: 'bg-fuchsia-500 text-white shadow-inner', default: 'bg-fuchsia-100 text-fuchsia-700 hover:bg-fuchsia-500 hover:text-white' },
    { name: 'Jobs', path: '/jobs', active: 'bg-pink-500 text-white shadow-inner', default: 'bg-pink-100 text-pink-700 hover:bg-pink-500 hover:text-white' },
    { name: 'Contact', path: '/contact', active: 'bg-teal-500 text-white shadow-inner', default: 'bg-teal-100 text-teal-800 hover:bg-teal-500 hover:text-white' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-gray-50">
      {/* Announcement Bar */}
      <div className="bg-primary-700 text-white text-center py-2 px-4 text-sm font-medium">
        Admissions Open 2026 / Hulhumalé Phase 2 Campus Opening January 2027
      </div>

      {/* Global Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-3">
                <img 
                  src="/logohead2%20color.png" 
                  alt="Dhondhooni Little Learners Preschool" 
                  className="h-12 sm:h-14 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-full text-sm font-black transition-all duration-200 border-2 border-transparent ${
                    location.pathname === link.path
                      ? link.active + ' border-black/10'
                      : link.default
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>



            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary-700 hover:bg-gray-100 focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-gray-100">
            <div className="px-4 pt-4 pb-3 space-y-2 sm:px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-full text-base font-black transition-all border-2 border-transparent ${
                    location.pathname === link.path
                      ? link.active + ' border-black/10'
                      : link.default
                  }`}
                >
                  {link.name}
                </Link>
              ))}

            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Quick Contact Floating Actions */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a
          href="viber://chat?number=+9607919960"
          className="bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-transform hover:scale-110 flex items-center justify-center"
          aria-label="Viber"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-primary-900 text-primary-50 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">Dhondhooni</h2>
              <p className="text-primary-200 mb-4 max-w-sm">
                Nurturing young minds through sensory exploration, structured inquiry, and holistic development.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/dhondhoonipreschool" target="_blank" rel="noopener noreferrer" className="text-primary-200 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/dhondhoonipreschool" target="_blank" rel="noopener noreferrer" className="text-primary-200 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/programs" className="text-primary-200 hover:text-white transition-colors">Academic Programs</Link></li>
                <li><Link to="/admissions" className="text-primary-200 hover:text-white transition-colors">Admissions & Fees</Link></li>
                <li><Link to="/campuses" className="text-primary-200 hover:text-white transition-colors">Our Campuses</Link></li>
                <li><Link to="/jobs" className="text-primary-200 hover:text-white transition-colors">Jobs</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
                  <span className="text-primary-200">Ma. Shaheen, Buruzu Magu,<br />Malé, Maldives</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary-400 shrink-0" />
                  <span className="text-primary-200">+960 796-0669</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary-400 shrink-0" />
                  <a href="mailto:mail@dhondhooni.edu.mv" className="text-primary-200 hover:text-white transition-colors">
                    mail@dhondhooni.edu.mv
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-400">
            <p>&copy; {new Date().getFullYear()} Dhondhooni Little Learners Preschool. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
