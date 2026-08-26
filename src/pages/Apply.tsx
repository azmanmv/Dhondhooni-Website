import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function Apply() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#633F83] mb-6">
          Building Bright Futures
        </h2>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Where every child's journey of growth begins! Join us in fostering creativity, curiosity, and confidence in a nurturing environment.
        </p>
      </section>

      {/* Applications Section */}
      <section className="bg-purple-50/30 py-16 border-y border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800">Admissions & Opportunities</h2>
            <p className="text-slate-500 mt-2">Select the appropriate form below to apply</p>
          </div>

          {/* Admissions Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* 2027 Admissions (Male' Campus) */}
            <div className="flex flex-col items-center p-8 bg-purple-50 rounded-2xl shadow-sm border border-purple-100 hover:shadow-md transition-shadow">
              <div className="bg-purple-100 text-purple-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
                UPCOMING
              </div>
              <h3 className="text-xl font-bold text-purple-900 mb-1">Admission for 2027</h3>
              <h4 className="text-md font-semibold text-purple-800 mb-2">Bageecha Campus (Malé)</h4>
              <p className="text-sm text-center text-purple-700 mb-6">
                To enroll your child for the academic year starting January 2027.<br />
                <span className="font-dhivehi mt-1 block">ޖަނަވަރީ 2027 ގައި ފެށޭ ތައުލީމީ އަހަރު ސްކޫލަށް ވެއްދުމަށް</span>
              </p>
              <a href="https://forms.gle/Q38xy28qFzVLZuQU6" target="_blank" rel="noopener noreferrer" className="block transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 w-full max-w-[280px] mt-auto">
                <div className="relative bg-[#633F83] rounded-2xl shadow-lg pt-10 pb-5 px-4 flex flex-col items-center">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#f43f5e] text-white px-4 py-1.5 rounded-lg shadow-md w-[90%] text-center border-b-4 border-[#e11d48] z-10">
                    <div className="text-[10px] font-bold tracking-widest uppercase opacity-90">Academic Year</div>
                    <div className="text-2xl font-extrabold tracking-wider leading-tight">2027</div>
                  </div>
                  <div className="text-white text-2xl font-dhivehi mb-1 mt-2 text-center" dir="rtl">ސްކޫލަށް ވަނުމަށް އެދޭ ފޯމު</div>
                  <div className="text-white font-bold text-[1.1rem] text-center tracking-wide flex items-center gap-2">School Application <ExternalLink className="w-4 h-4" /></div>
                </div>
              </a>
            </div>

            {/* 2027 Admissions (Hulhumalé Campus) */}
            <div className="flex flex-col items-center p-8 bg-indigo-50 rounded-2xl shadow-sm border border-indigo-100 hover:shadow-md transition-shadow">
              <div className="bg-indigo-100 text-indigo-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
                COMING SOON
              </div>
              <h3 className="text-xl font-bold text-indigo-900 mb-1">Admission for 2027</h3>
              <h4 className="text-md font-semibold text-indigo-800 mb-2">Hulhumalé Campus</h4>
              <p className="text-sm text-center text-indigo-700 mb-6">
                Admission will open once registration is complete, Insha Allah in November 2026.
              </p>
              <div className="block w-full max-w-[280px] opacity-70 grayscale cursor-not-allowed mt-auto">
                <div className="relative bg-[#633F83] rounded-2xl shadow-lg pt-10 pb-5 px-4 flex flex-col items-center">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gray-500 text-white px-4 py-1.5 rounded-lg shadow-md w-[90%] text-center border-b-4 border-gray-700 z-10">
                    <div className="text-[10px] font-bold tracking-widest uppercase opacity-90">Academic Year</div>
                    <div className="text-2xl font-extrabold tracking-wider leading-tight">2027</div>
                  </div>
                  <div className="text-white text-2xl font-dhivehi mb-1 mt-2 text-center" dir="rtl">ސްކޫލަށް ވަނުމަށް އެދޭ ފޯމު</div>
                  <div className="text-white font-bold text-[1.1rem] text-center tracking-wide">School Application Form</div>
                </div>
              </div>
            </div>

            {/* 2026 Admissions (Closed) */}
            <div className="flex flex-col items-center p-8 bg-slate-100 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="bg-slate-200 text-slate-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
                CLOSED
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Admission for 2026</h3>
              <p className="text-sm text-center text-slate-600 mb-6">
                We have stopped new admissions for the ongoing 2026 academic year as we have started enrollment for 2027.
              </p>
              <div className="block w-full max-w-[280px] opacity-70 grayscale cursor-not-allowed mt-auto">
                <div className="relative bg-[#633F83] rounded-2xl shadow-lg pt-10 pb-5 px-4 flex flex-col items-center">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gray-500 text-white px-4 py-1.5 rounded-lg shadow-md w-[90%] text-center border-b-4 border-gray-700 z-10">
                    <div className="text-[10px] font-bold tracking-widest uppercase opacity-90">Academic Year</div>
                    <div className="text-2xl font-extrabold tracking-wider leading-tight">2026</div>
                  </div>
                  <div className="text-white text-2xl font-dhivehi mb-1 mt-2 text-center" dir="rtl">ސްކޫލަށް ވަނުމަށް އެދޭ ފޯމު</div>
                  <div className="text-white font-bold text-[1.1rem] text-center tracking-wide">Admissions Closed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Jobs Row */}
          <div className="grid grid-cols-1 max-w-2xl mx-auto">
            {/* Job Opportunities */}
            <div className="flex flex-col items-center p-8 bg-blue-50 rounded-2xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
              <div className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
                WE'RE HIRING
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Job Opportunities</h3>
              <p className="text-sm text-center text-blue-700 mb-6">
                If you are looking for a job, use the following link to apply.
              </p>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSf7CDo-vg8PA8khWt8bhQDNeUJUN0VwHFRO7rLij0-dxtDh-g/viewform" target="_blank" rel="noopener noreferrer" className="block transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 w-full max-w-[280px] mt-auto">
                <div className="relative bg-[#633F83] rounded-2xl shadow-lg py-6 px-4 flex flex-col items-center border-b-4 border-[#4d2d69]">
                  <div className="text-white text-3xl font-dhivehi mb-2 text-center" dir="rtl">ވަޒީފާއަށް އެދޭ ފޯމު</div>
                  <div className="text-white font-bold text-[1.2rem] text-center tracking-wide mt-1 flex items-center gap-2">Job Application <ExternalLink className="w-5 h-5" /></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
