const fs = require('fs');
let code = fs.readFileSync('src/pages/Admissions.tsx', 'utf8');

// 1. Separate Admission Fee and add School Timings
const oldTable = `              <table className="w-full text-left border-collapse">
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
              </table>`;

const newTable = `              <div className="bg-amber-50 p-4 border-b border-amber-100 flex items-center justify-center gap-2">
                <span className="font-bold text-amber-900 uppercase tracking-widest text-sm">One-Time Admission Fee:</span>
                <span className="font-black text-amber-700 text-lg">MVR 2,000</span>
              </div>
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
              </table>`;

if (code.includes(oldTable)) {
  code = code.replace(oldTable, newTable);
} else {
  console.log("Could not find oldTable block.");
}

// 2. Add discount bubbles after the table
const bubbles = `
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
`;

code = code.replace('</div>\n            \n            <div className="bg-gray-50 p-6 md:p-8 border-t border-gray-100">', `</div>\n${bubbles}\n            \n            <div className="bg-gray-50 p-6 md:p-8 border-t border-gray-100 mt-12 rounded-3xl">`);

// Add 'Users' and 'Heart' to lucide-react imports if not present, and Building2
if (!code.includes('Users')) {
  code = code.replace(/import \{ ([^}]+) \} from 'lucide-react';/, "import { $1, Users, Heart } from 'lucide-react';");
}


// 3. Add General Policy below payment info
const generalPolicy = `
      {/* General Policy Section */}
      <section className="py-12 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 lg:p-12 shadow-sm">
            <h3 className="text-3xl font-black text-primary-900 mb-8 border-b-2 border-primary-100 pb-4">Fee Policy</h3>
            <ul className="space-y-4 mb-12 list-disc list-outside ml-6 text-gray-700 font-medium text-lg marker:text-primary-400">
              <li>Admission fee is MVR 2,000/- (non-refundable)</li>
              <li>School Fee is MVR 2,500.00 per month for 12 months (MVR 30,000.00 per Annum).</li>
              <li>A 10% discount on monthly fee is given for siblings. To be eligible for this discount, monthly payments must be made on time.</li>
              <li>A 50% discount on monthly fee is given for staff. To be eligible for this discount, monthly payments must be made on time.</li>
              <li>School fees must be paid before 10th of each month.</li>
              <li>December 2026 fee will be due on or before November 10th, 2026</li>
              <li>UKG students (who graduate) are also required to pay for the month of December 2026 (It is considered part of the academic year)</li>
              <li>If payments are not received by 20th of the month and the parent has not given in writing the reason for delay and accepted by management, the student’s placement maybe cancelled and the school has the right to expel the student without further notice.</li>
            </ul>

            <h3 className="text-3xl font-black text-primary-900 mb-8 border-b-2 border-primary-100 pb-4">Important Notes</h3>
            <ul className="space-y-4 list-disc list-outside ml-6 text-gray-700 font-medium text-lg marker:text-primary-400">
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
      </section>
`;

code = code.replace('</section>\n\n    </div>\n  );\n}', `</section>\n${generalPolicy}\n    </div>\n  );\n}`);

fs.writeFileSync('src/pages/Admissions.tsx', code);
