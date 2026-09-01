const fs = require('fs');
let code = fs.readFileSync('src/pages/Admissions.tsx', 'utf8');

const target1 = `<h2 className="text-3xl font-bold text-gray-900">Fee Schedule (2027)</h2>
          </div>
          <div className="bg-primary-50 rounded-3xl border-4 border-gray-100 shadow-xl shadow-gray-200/40 overflow-hidden">
            <div className="overflow-x-auto">
              <div className="bg-amber-50 p-4 border-b border-amber-100 flex items-center justify-center gap-2">
                <span className="font-bold text-amber-900 uppercase tracking-widest text-sm">One-Time Admission Fee:</span>
                <span className="font-black text-amber-700 text-lg">MVR 2,000</span>
              </div>
              <table className="w-full text-left border-collapse">`;

const replace1 = `<h2 className="text-3xl font-bold text-gray-900">Fee Schedule and School Timings</h2>
          </div>

          <div className="mb-8 max-w-lg mx-auto bg-amber-50 rounded-2xl border-2 border-amber-100 p-6 flex flex-col items-center justify-center text-center shadow-md">
            <span className="font-bold text-amber-900 uppercase tracking-widest text-sm mb-1">One-Time Admission Fee</span>
            <span className="font-black text-amber-700 text-3xl mb-1">MVR 2,000</span>
            <span className="text-amber-800 text-xs font-semibold bg-amber-200/50 px-3 py-1 rounded-full">(Non-Refundable)</span>
          </div>

          <div className="bg-primary-50 rounded-3xl border-4 border-gray-100 shadow-xl shadow-gray-200/40 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">`;

const lines = code.split('\\n');
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('Fee Schedule (2027)')) {
    console.log('Found Fee Schedule at line ' + i);
    // Replace the block
    // We know it looks like:
    // 156:            <h2 className="text-3xl font-bold text-gray-900">Fee Schedule (2027)</h2>
    // 157:          </div>
    // 158:          <div className="bg-primary-50 rounded-3xl border-4 border-gray-100 shadow-xl shadow-gray-200/40 overflow-hidden">
    // 159:            <div className="overflow-x-auto">
    // 160:              <div className="bg-amber-50 p-4 border-b border-amber-100 flex items-center justify-center gap-2">
    // 161:                <span className="font-bold text-amber-900 uppercase tracking-widest text-sm">One-Time Admission Fee:</span>
    // 162:                <span className="font-black text-amber-700 text-lg">MVR 2,000</span>
    // 163:              </div>
    // 164:              <table className="w-full text-left border-collapse">
    
    lines[i] = '            <h2 className="text-3xl font-bold text-gray-900">Fee Schedule and School Timings</h2>';
    lines.splice(160, 4,
      '          <div className="mb-8 max-w-lg mx-auto bg-amber-50 rounded-2xl border-2 border-amber-100 p-6 flex flex-col items-center justify-center text-center shadow-md">',
      '            <span className="font-bold text-amber-900 uppercase tracking-widest text-sm mb-1">One-Time Admission Fee</span>',
      '            <span className="font-black text-amber-700 text-3xl mb-1">MVR 2,000</span>',
      '            <span className="text-amber-800 text-xs font-semibold bg-amber-200/50 px-3 py-1 rounded-full">(Non-Refundable)</span>',
      '          </div>',
      '',
      '          <div className="bg-primary-50 rounded-3xl border-4 border-gray-100 shadow-xl shadow-gray-200/40 overflow-hidden">',
      '            <div className="overflow-x-auto">',
      '              <table className="w-full text-left border-collapse">'
    );
    // Let's remove the original lines 158-159 as well since we replaced them in the splice above to keep it clean.
    // wait, if I splice at 160, I'm inserting. I need to be careful with indices.
    break;
  }
}

