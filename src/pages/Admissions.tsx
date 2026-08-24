import React, { useState } from 'react';
import { Calculator, CreditCard, ArrowRight, Building2 } from 'lucide-react';

export default function Admissions() {
  const [dob, setDob] = useState('');
  const [calcResult, setCalcResult] = useState<{ text: string, color: string, program: string | null } | null>(null);

  const calculateEligibility = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dob) return;

    const dobDate = new Date(dob);
    
    // Intake is January 2027.
    const admissionDate = new Date(2027, 0, 1);
    
    // Strict age cutoff is Dec 31, 2026 for most programs
    const cutoffDate = new Date(2026, 11, 31);
    
    let ageAtCutoff = cutoffDate.getFullYear() - dobDate.getFullYear();
    const monthDiffCutoff = cutoffDate.getMonth() - dobDate.getMonth();
    if (monthDiffCutoff < 0 || (monthDiffCutoff === 0 && cutoffDate.getDate() < dobDate.getDate())) {
      ageAtCutoff--;
    }

    // Play School uses 18 months at time of admission (Jan 2027)
    let ageInMonthsAtAdmission = (admissionDate.getFullYear() - dobDate.getFullYear()) * 12 + (admissionDate.getMonth() - dobDate.getMonth());
    if (admissionDate.getDate() < dobDate.getDate()) {
      ageInMonthsAtAdmission--;
    }

    let result = { text: '', color: 'text-primary-700', program: null as string | null };

    if (ageAtCutoff >= 5 && ageAtCutoff < 6) {
      result = { text: 'Eligible Program:', color: 'text-primary-700', program: 'Upper Kindergarten (UKG)' };
    } else if (ageAtCutoff === 4) {
      result = { text: 'Eligible Program:', color: 'text-primary-700', program: 'Lower Kindergarten (LKG)' };
    } else if (ageAtCutoff === 3) {
      result = { text: 'Eligible Program:', color: 'text-primary-700', program: 'Nursery (N)' };
    } else if (ageAtCutoff === 2) {
      result = { text: 'Eligible Program:', color: 'text-primary-700', program: 'Baby Nursery (BN)' };
    } else if (ageInMonthsAtAdmission >= 18 && ageAtCutoff < 2) {
      result = { text: 'Eligible Program:', color: 'text-primary-700', program: 'Play School (PS)' };
    } else if (ageInMonthsAtAdmission < 18) {
      result = { text: 'Child is under entry age (18 months) for Play School. Check back for upcoming intakes.', color: 'text-amber-600', program: null };
    } else {
      result = { text: 'Child exceeds preschool age. Eligible for Primary School entry.', color: 'text-blue-600', program: null };
    }

    setCalcResult(result);
  };

  return (
    <div className="animate-in fade-in duration-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">Admissions & Fees</h1>
          <p className="text-xl text-gray-600">
            Everything you need to know about joining the Dhondhooni Little Learners family for the 2027 intake.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Age Eligibility Calculator */}
          <div className="bg-white rounded-3xl p-8 border-4 border-gray-100 shadow-xl shadow-primary-900/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Calculator className="w-48 h-48" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Age Eligibility Calculator</h2>
              </div>
              <p className="text-gray-600 mb-8">
                Not sure which program your child is eligible for in 2027? Enter their date of birth below to find out.
              </p>

              <form onSubmit={calculateEligibility} className="space-y-6">
                <div>
                  <label htmlFor="childDob" className="block text-sm font-bold text-gray-900 mb-2">
                    Child's Date of Birth
                  </label>
                  <input
                    type="date"
                    id="childDob"
                    required
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-gray-50 text-gray-900 font-medium"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white font-bold py-4 rounded-xl hover:bg-primary-700 transition-colors shadow-md"
                >
                  Determine Grade
                </button>
              </form>

              {calcResult && (
                <div className="mt-8 p-6 rounded-2xl bg-primary-50 border-2 border-primary-100 animate-in slide-in-from-bottom-4">
                  <p className={`font-semibold ${calcResult.color}`}>
                    {calcResult.text}
                  </p>
                  {calcResult.program && (
                    <p className="text-2xl font-black text-primary-900 mt-2">
                      {calcResult.program}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Online Application Integration */}
          <div className="bg-primary-900 rounded-3xl p-8 lg:p-12 text-white shadow-2xl flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
            <p className="text-primary-100 text-lg mb-8 leading-relaxed">
              We are currently accepting applications for the January 2027 academic year. Our application process is fully digital via our admissions portal.
            </p>
            
            <a 
              href="https://dllapply.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-primary-900 px-8 py-5 rounded-2xl font-bold text-xl hover:bg-primary-50 transition-all shadow-xl hover:shadow-2xl flex items-center justify-between"
            >
              <span>Go to dllapply.com</span>
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowRight className="w-5 h-5 text-primary-700" />
              </div>
            </a>

            <div className="mt-10 pt-8 border-t border-primary-800">
              <h3 className="font-bold text-primary-200 mb-3 text-sm uppercase tracking-wider">Required Documents</h3>
              <ul className="space-y-2 text-primary-50">
                <li className="flex items-center gap-2">• Child's Birth Certificate or ID Card</li>
                <li className="flex items-center gap-2">• Vaccination Records</li>
                <li className="flex items-center gap-2">• Parents' ID Cards</li>
                <li className="flex items-center gap-2">• Recent Passport-sized Photo</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Fee Structure Display */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Fee Schedule (2027)</h2>
          </div>

          <div className="bg-white rounded-3xl border-4 border-gray-100 shadow-xl shadow-gray-200/40 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="py-5 px-6 font-bold text-gray-900 uppercase text-sm tracking-wider">Program</th>
                    <th className="py-5 px-6 font-bold text-gray-900 uppercase text-sm tracking-wider">Admission Fee (One-time)</th>
                    <th className="py-5 px-6 font-bold text-gray-900 uppercase text-sm tracking-wider">Monthly Tuition</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-5 px-6 font-bold text-gray-900">Play School (PS)</td>
                    <td className="py-5 px-6 text-gray-600">MVR 2,000</td>
                    <td className="py-5 px-6 text-gray-900 font-semibold">MVR 2,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-5 px-6 font-bold text-gray-900">Baby Nursery (BN)</td>
                    <td className="py-5 px-6 text-gray-600">MVR 2,000</td>
                    <td className="py-5 px-6 text-gray-900 font-semibold">MVR 2,500</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-5 px-6 font-bold text-gray-900">Nursery (N)</td>
                    <td className="py-5 px-6 text-gray-600">MVR 2,000</td>
                    <td className="py-5 px-6 text-gray-900 font-semibold">MVR 2,500</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-5 px-6 font-bold text-gray-900">Lower Kindergarten (LKG)</td>
                    <td className="py-5 px-6 text-gray-600">MVR 2,000</td>
                    <td className="py-5 px-6 text-gray-900 font-semibold">MVR 2,500</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-5 px-6 font-bold text-gray-900">Upper Kindergarten (UKG)</td>
                    <td className="py-5 px-6 text-gray-600">MVR 2,000</td>
                    <td className="py-5 px-6 text-gray-900 font-semibold">MVR 2,500</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-gray-50 p-6 md:p-8 border-t border-gray-100">
              <h4 className="font-bold text-gray-900 mb-6 text-xl">Payment Information</h4>
              <div className="grid lg:grid-cols-3 gap-8">
                
                <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
                  {/* BML */}
                  <div className="bg-white p-6 rounded-2xl border-2 border-red-100 flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-red-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500 pointer-events-none"></div>
                    <div className="flex items-start justify-between mb-6 relative z-10">
                      <div className="w-16 h-16 bg-[#E31837] rounded-xl flex items-center justify-center shrink-0 shadow-md">
                        <svg viewBox="0 0 100 100" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
                          <polygon points="30,68 64,68 64,15" fill="white" />
                          <polygon points="26,72 30,80 68,80 68,72" fill="white" />
                          <path d="M26,85 Q32,89 38,85 T50,85 T62,85 T68,85" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                          <path d="M26,91 Q32,95 38,91 T50,91 T62,91 T68,91" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                        </svg>
                      </div>
                      <span className="text-xs font-bold text-[#E31837] uppercase tracking-wider bg-red-50 px-3 py-1.5 rounded-lg border border-red-100">MVR Account</span>
                    </div>
                    <div className="relative z-10 mt-auto">
                      <p className="font-mono font-black text-gray-900 text-xl tracking-wider mb-1">7770 0000 07585</p>
                      <p className="text-gray-500 text-sm font-semibold">Dhondhooni School Pvt Ltd</p>
                    </div>
                  </div>

                  {/* MIB */}
                  <div className="bg-white p-6 rounded-2xl border-2 border-emerald-100 flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-emerald-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500 pointer-events-none"></div>
                    <div className="flex items-start justify-between mb-6 relative z-10">
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-md border border-gray-100 p-2">
                        <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                          <g transform="translate(0, -5)">
                            <path d="M15,85 C15,45 35,25 45,25 L65,55 L50,85 L42,65 C38,55 25,55 25,85 Z" fill="#006C45"/>
                            <path d="M85,85 C85,45 65,25 55,25 L35,55 L50,85 L58,65 C62,55 75,55 75,85 Z" fill="#002060"/>
                          </g>
                        </svg>
                      </div>
                      <span className="text-xs font-bold text-[#006C45] uppercase tracking-wider bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100">MVR & USD</span>
                    </div>
                    <div className="relative z-10 mt-auto space-y-4">
                      <div>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-0.5">MVR Account</p>
                        <p className="font-mono font-black text-gray-900 text-lg tracking-wider">9010 1480 0127 11000</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-0.5">USD Account</p>
                        <p className="font-mono font-black text-gray-900 text-lg tracking-wider">9010 1480 0127 12000</p>
                      </div>
                      <div className="pt-3 border-t border-gray-100">
                        <p className="text-gray-500 text-sm font-semibold">Dhondhooni School Pvt Ltd</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h5 className="font-bold text-gray-900 mb-5 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-gray-400" />
                    Instructions
                  </h5>
                  <ul className="space-y-4 text-sm text-gray-600">
                    <li className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary-50 flex items-center justify-center shrink-0">
                        <span className="text-primary-600 font-bold text-xs">1</span>
                      </div>
                      <span>Monthly tuition is due by the <strong>10th of each month</strong>.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary-50 flex items-center justify-center shrink-0">
                        <span className="text-primary-600 font-bold text-xs">2</span>
                      </div>
                      <span>Admission fee is one-time and non-refundable.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary-50 flex items-center justify-center shrink-0">
                        <span className="text-primary-600 font-bold text-xs">3</span>
                      </div>
                      <span>Transfer slips must include the <strong>Student Index, Name, and Class</strong> in the remarks.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary-50 flex items-center justify-center shrink-0">
                        <span className="text-primary-600 font-bold text-xs">4</span>
                      </div>
                      <span>Send transfer slips via VIBER to <strong>7919960</strong>.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
