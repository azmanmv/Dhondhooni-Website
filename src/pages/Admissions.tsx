import React, { useState } from 'react';
import { Calculator, Users, Heart, CreditCard, ArrowRight, Building2, ChevronDown, ChevronUp } from 'lucide-react';

export default function Admissions() {
  const [dob, setDob] = useState('');
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
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
          <div className="bg-yellow-50 rounded-3xl p-8 border-4 border-yellow-100 shadow-xl shadow-yellow-900/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Calculator className="w-48 h-48" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-yellow-200 flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-yellow-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Age Eligibility Calculator</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Not sure which program your child is eligible for in 2027? Enter their date of birth below to find out.
              </p>
              
              <div className="mb-8 p-4 rounded-xl bg-yellow-100/50 text-yellow-800 text-sm font-medium border border-yellow-200">
                Please note: The age criteria is enforced by the Ministry of Education.
              </div>

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
                <div className="mt-8 p-6 rounded-2xl bg-yellow-100/50 border-2 border-yellow-200 animate-in slide-in-from-bottom-4">
                  {calcResult.program ? (
                    <p className="font-semibold text-gray-800 text-lg leading-relaxed">
                      Your child is eligible for <span className="font-black text-yellow-900">{calcResult.program}</span> in the academic year 2027.
                    </p>
                  ) : (
                    <p className={`font-semibold ${calcResult.color}`}>
                      {calcResult.text}
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
            <h2 className="text-3xl font-bold text-gray-900">Fee Schedule and School Timings</h2>
          </div>

          <div className="mb-8 max-w-lg mx-auto bg-amber-50 rounded-2xl border-2 border-amber-100 p-6 flex flex-col items-center justify-center text-center shadow-md">
            <span className="font-bold text-amber-900 uppercase tracking-widest text-sm mb-1">One-Time Admission Fee</span>
            <span className="font-black text-amber-700 text-3xl mb-1">MVR 2,000</span>
            <span className="text-amber-800 text-xs font-semibold bg-amber-200/50 px-3 py-1 rounded-full">(Non-Refundable)</span>
          </div>

          <div className="bg-primary-50 rounded-3xl border-4 border-gray-100 shadow-xl shadow-gray-200/40 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="py-5 px-6 font-bold text-gray-900 uppercase text-sm tracking-wider">Program</th>
                    <th className="py-5 px-6 font-bold text-gray-900 uppercase text-sm tracking-wider">School Timings</th>
                    <th className="py-5 px-6 font-bold text-gray-900 uppercase text-sm tracking-wider">Monthly Tuition</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-5 px-6 font-bold text-gray-900">Play School (PS)</td>
                    <td className="py-5 px-6 text-gray-600 font-medium">4:15 PM - 5:45 PM</td>
                    <td className="py-5 px-6 text-gray-900 font-semibold">MVR 2,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-5 px-6 font-bold text-gray-900">Baby Nursery (BN)</td>
                    <td className="py-5 px-6 text-gray-600 font-medium">4:10 PM - 6:00 PM</td>
                    <td className="py-5 px-6 text-gray-900 font-semibold">MVR 2,500</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-5 px-6 font-bold text-gray-900">Nursery (N)</td>
                    <td className="py-5 px-6 text-gray-600 font-medium">10:30 AM - 12:30 PM</td>
                    <td className="py-5 px-6 text-gray-900 font-semibold">MVR 2,500</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-5 px-6 font-bold text-gray-900">Lower Kindergarten (LKG)</td>
                    <td className="py-5 px-6 text-gray-600 font-medium">12:40 PM - 3:40 PM</td>
                    <td className="py-5 px-6 text-gray-900 font-semibold">MVR 2,500</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-5 px-6 font-bold text-gray-900">Upper Kindergarten (UKG)</td>
                    <td className="py-5 px-6 text-gray-600 font-medium">6:55 AM - 10:00 AM</td>
                    <td className="py-5 px-6 text-gray-900 font-semibold">MVR 2,500</td>
                  </tr>
                </tbody>
              </table>
            </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-indigo-50 border-2 border-indigo-100 rounded-2xl p-6 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-indigo-900 text-lg mb-1">Sibling Discount</h4>
                <p className="text-indigo-700 font-medium">A <strong className="font-black">10% discount</strong> on the monthly fee is given for siblings. <span className="text-sm opacity-80 block mt-1">To be eligible for this discount, monthly payments must be made on time.</span></p>
              </div>
            </div>
            <div className="bg-teal-50 border-2 border-teal-100 rounded-2xl p-6 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center shrink-0">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-teal-900 text-lg mb-1">Staff Discount</h4>
                <p className="text-teal-700 font-medium">A <strong className="font-black">50% discount</strong> on the monthly fee is given for staff. <span className="text-sm opacity-80 block mt-1">To be eligible for this discount, monthly payments must be made on time.</span></p>
              </div>
            </div>
          </div>

            
            <div className="bg-gray-50 p-6 md:p-8 border-t border-gray-100 mt-12 rounded-3xl">
              <h4 className="font-bold text-gray-900 mb-6 text-xl">Payment Information</h4>
              <div className="grid lg:grid-cols-3 gap-8">
                
                <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
                  {/* BML */}
                  <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-100 flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group">
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
                  <div className="bg-emerald-50 p-6 rounded-2xl border-2 border-emerald-100 flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group">
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

                <div className="bg-slate-50 rounded-2xl p-6 border border-gray-200">
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
          
          {/* General Policy Section */}
          <div className="mt-12 bg-white rounded-3xl border-4 border-gray-100 shadow-xl overflow-hidden group">
            <button
              onClick={() => setIsPolicyOpen(!isPolicyOpen)}
              className="w-full flex items-center justify-between p-6 md:p-8 bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <h3 className="text-2xl font-bold text-gray-900">Summarised General Policy</h3>
              <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-primary-600 group-hover:scale-105 transition-transform">
                {isPolicyOpen ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
              </div>
            </button>
            
            {isPolicyOpen && (
              <div className="p-6 md:p-8 border-t border-gray-100 space-y-12 animate-in slide-in-from-top-4 duration-300 fade-in">
                <div>
                  <h4 className="text-xl font-bold text-primary-900 mb-6 border-b border-primary-100 pb-4">Fee Policy</h4>
                  <ul className="space-y-4 text-gray-600 list-disc list-outside ml-6 font-medium marker:text-primary-400">
                    <li>Admission fee is MVR 2,000/- (non-refundable)</li>
                    <li>School Fee is MVR 2,500.00 per month for 12 months (MVR 30,000.00 per Annum).</li>
                    <li>A 10% discount on monthly fee is given for siblings. To be eligible for this discount, monthly payments must be made on time.</li>
                    <li>A 50% discount on monthly fee is given for staff. To be eligible for this discount, monthly payments must be made on time.</li>
                    <li>School fees must be paid before 10th of each month.</li>
                    <li>December fee will be due on or before November 10th</li>
                    <li>UKG students (who graduate) are also required to pay for the month of December (It is considered part of the academic year)</li>
                    <li>If payments are not received by 20th of the month and the parent has not given in writing the reason for delay and accepted by management, the student’s placement maybe cancelled and the school has the right to expel the student without further notice.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-primary-900 mb-6 border-b border-primary-100 pb-4">Important Notes</h4>
                  <ul className="space-y-4 text-gray-600 list-disc list-outside ml-6 font-medium marker:text-primary-400">
                    <li>Student should be given 1 dose of BCG vaccine and 3 doses of DPT vaccine.</li>
                    <li>Copy of parent/guardian’s ID card and copies of student’s ID Card or Birth Certificate and immunization card should be submitted with the application form.</li>
                    <li>Student should not be a student of any other preschool.</li>
                    <li>Leaving certificate from the previous school must be submitted if applicable.</li>
                    <li>Student cannot be in two schools simultaneously.</li>
                    <li>Submission of this form does not guarantee placement.</li>
                    <li>Registration is only completed when the form is verified, admission fee is paid and you are informed of admission being completed.</li>
                    <li>Study materials, books and stationery will be provided by the school without any charges.</li>
                    <li>Uniforms (Official and Activity) will not be provided by the school.</li>
                    <li>School will provide information about bag, interval and other items that student may require.</li>
                    <li>Pictures of the student may be used for promotional purposes and may appear on our Facebook, twitter, YouTube or other social media.</li>
                    <li>Any change in address and contact information should be notified to office immediately.</li>
                    <li>School notice board and website will have the school policies.</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
