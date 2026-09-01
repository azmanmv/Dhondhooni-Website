const fs = require('fs');
let code = fs.readFileSync('src/pages/Admissions.tsx', 'utf8');

const target1 = `            <h2 className="text-3xl font-bold text-gray-900">Fee Schedule (2027)</h2>
          </div>
          <div className="bg-primary-50 rounded-3xl border-4 border-gray-100 shadow-xl shadow-gray-200/40 overflow-hidden">
            <div className="overflow-x-auto">
              <div className="bg-amber-50 p-4 border-b border-amber-100 flex items-center justify-center gap-2">
                <span className="font-bold text-amber-900 uppercase tracking-widest text-sm">One-Time Admission Fee:</span>
                <span className="font-black text-amber-700 text-lg">MVR 2,000</span>
              </div>
              <table className="w-full text-left border-collapse">`;

const replace1 = `            <h2 className="text-3xl font-bold text-gray-900">Fee Schedule and School Timings</h2>
          </div>

          <div className="mb-8 max-w-lg mx-auto bg-amber-50 rounded-2xl border-2 border-amber-100 p-6 flex flex-col items-center justify-center text-center shadow-md">
            <span className="font-bold text-amber-900 uppercase tracking-widest text-sm mb-1">One-Time Admission Fee</span>
            <span className="font-black text-amber-700 text-3xl mb-1">MVR 2,000</span>
            <span className="text-amber-800 text-xs font-semibold bg-amber-200/50 px-3 py-1 rounded-full">(Non-Refundable)</span>
          </div>

          <div className="bg-primary-50 rounded-3xl border-4 border-gray-100 shadow-xl shadow-gray-200/40 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">`;

// Normalizing whitespace to bypass exact matching issues
const norm = str => str.replace(/\\s+/g, ' ');

let found = false;
const codeNorm = norm(code);
const targetNorm = norm(target1);
if(codeNorm.includes(targetNorm)) {
    // we do a regex based replacement to preserve whitespace around it, or just use string indexOf if possible, but actually since we only care about replacing the block, let's just do a regex replace that ignores whitespace.
    code = code.replace(
        /<\h2\s+className="text-3xl\s+font-bold\s+text-gray-900">\s*Fee\s+Schedule\s+\(2027\)\s*<\/h2>\s*<\/div>\s*<div\s+className="bg-primary-50\s+rounded-3xl\s+border-4\s+border-gray-100\s+shadow-xl\s+shadow-gray-200\/40\s+overflow-hidden">\s*<div\s+className="overflow-x-auto">\s*<div\s+className="bg-amber-50\s+p-4\s+border-b\s+border-amber-100\s+flex\s+items-center\s+justify-center\s+gap-2">\s*<span\s+className="font-bold\s+text-amber-900\s+uppercase\s+tracking-widest\s+text-sm">\s*One-Time\s+Admission\s+Fee:\s*<\/span>\s*<span\s+className="font-black\s+text-amber-700\s+text-lg">\s*MVR\s+2,000\s*<\/span>\s*<\/div>\s*<table\s+className="w-full\s+text-left\s+border-collapse">/g,
        replace1
    );
    console.log("Replaced fee schedule.");
}

const targetEnd = `                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`;
const replaceEnd = `                    </li>
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
                    <li>December 2026 fee will be due on or before November 10th, 2026</li>
                    <li>UKG students (who graduate) are also required to pay for the month of December 2026 (It is considered part of the academic year)</li>
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
}`;

code = code.replace(/<\/\s*li>\s*<\/\s*ul>\s*<\/\s*div>\s*<\/\s*div>\s*<\/\s*div>\s*<\/\s*div>\s*<\/\s*div>\s*<\/\s*div>\s*<\/\s*div>\s*<\/\s*div>\s*\)\s*;\s*}\s*$/g, replaceEnd);

fs.writeFileSync('src/pages/Admissions.tsx', code);
