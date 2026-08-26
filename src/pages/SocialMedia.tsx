import React from 'react';
import { Facebook, Instagram, Youtube, ExternalLink } from 'lucide-react';

export default function SocialMedia() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50 pb-16">
      {/* Header */}
      <div className="bg-primary-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-800 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-800 rounded-full blur-3xl opacity-50"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-6">Media</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto font-medium">
            Stay connected with us! Follow our pages for the latest updates, activities, and preschool news.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 relative z-20">
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Facebook Feed & Link */}
          <div className="bg-blue-50/50 rounded-[2rem] p-6 md:p-8 shadow-xl border border-blue-100 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                <Facebook className="w-8 h-8 text-blue-600 fill-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Facebook</h2>
                <a href="https://www.facebook.com/dhondhoonipreschool" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 group">
                  @dhondhoonipreschool <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6">
              Check out our Facebook page for the latest photos, events, and daily preschool activities. We regularly update our gallery here!
            </p>
            
            <div className="bg-gray-50 rounded-2xl flex-grow overflow-hidden flex items-center justify-center p-4">
              {/* Facebook Page Plugin Iframe */}
              <div className="w-full max-w-[500px] overflow-hidden rounded-xl mx-auto shadow-sm">
                <iframe 
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdhondhoonipreschool&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                  width="500" 
                  height="600" 
                  style={{ border: 'none', overflow: 'hidden', width: '100%', maxWidth: '500px' }} 
                  scrolling="no" 
                  frameBorder="0" 
                  allowFullScreen={true} 
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Dhondhooni Facebook Page"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Other Links (Viber, Instagram) */}
          <div className="space-y-8">
            
            <div className="bg-red-50/50 rounded-[2rem] p-6 md:p-8 shadow-xl border border-red-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                    <Youtube className="w-8 h-8 text-red-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">YouTube</h2>
                    <a href="https://www.youtube.com/@DhondhooniPreschool" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700 font-medium flex items-center gap-1 group">
                      @DhondhooniPreschool <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-2xl overflow-hidden mb-6 aspect-video">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/D0c66qqcLpI" 
                  title="Dhondhooni Preschool YouTube Video" 
                  style={{ border: 'none' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              
              <a href="https://www.youtube.com/@DhondhooniPreschool" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold transition-all shadow-md gap-2">
                <Youtube className="w-5 h-5" /> Visit our YouTube Channel
              </a>
            </div>

            <div className="bg-pink-50/50 rounded-[2rem] p-6 md:p-8 shadow-xl border border-pink-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center shrink-0">
                    <Instagram className="w-8 h-8 text-pink-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Instagram</h2>
                    <a href="https://www.instagram.com/dhondhoonipreschool" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 font-medium flex items-center gap-1 group">
                      @dhondhoonipreschool <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-pink-50 rounded-2xl p-6 border border-pink-100 mb-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 p-0.5">
                    <div className="w-full h-full bg-slate-50 rounded-full flex items-center justify-center">
                      <Instagram className="w-5 h-5 text-pink-600" />
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Dhondhooni Little Learners</p>
                    <p className="text-xs text-gray-500">Official Instagram Feed</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Explore our latest reels, student events, cultural days, classroom explorations, and stories directly on our Instagram feed.
                </p>
                <div className="grid grid-cols-3 gap-2">
                  <div className="aspect-square bg-pink-100/70 rounded-lg flex items-center justify-center text-pink-400 text-xs font-semibold text-center p-1">
                    Stories & Reels
                  </div>
                  <div className="aspect-square bg-purple-100/70 rounded-lg flex items-center justify-center text-purple-500 text-xs font-semibold text-center p-1">
                    Events & Activities
                  </div>
                  <div className="aspect-square bg-amber-100/70 rounded-lg flex items-center justify-center text-amber-600 text-xs font-semibold text-center p-1">
                    Classroom Moments
                  </div>
                </div>
              </div>
              
              <a href="https://www.instagram.com/dhondhoonipreschool" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:opacity-90 text-white rounded-xl font-bold transition-all shadow-md gap-2">
                <Instagram className="w-5 h-5" /> View Latest Posts on Instagram
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
