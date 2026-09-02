const fs = require('fs');
let code = fs.readFileSync('src/components/Layout.tsx', 'utf8');

// Logo link
code = code.replace(
  '<Link to="/" className="flex items-center gap-3">',
  '<Link to="/" className="flex items-center gap-3" aria-label="Go to homepage">'
);

// Hamburger button
code = code.replace(
  '<button\n                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}\n                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary-700 hover:bg-gray-100 focus:outline-none"\n              >',
  '<button\n                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}\n                className="inline-flex items-center justify-center p-2 rounded-md text-[#633F83] hover:text-[#800080] hover:bg-[#633F83]/10 focus:outline-none"\n                aria-expanded={isMobileMenuOpen}\n                aria-label={isMobileMenuOpen ? "Close main menu" : "Open main menu"}\n              >'
);

// Social links in Footer
code = code.replace(
  '<a href="https://www.facebook.com/dhondhoonipreschool" target="_blank" rel="noopener noreferrer" className="text-primary-200 hover:text-white transition-colors">',
  '<a href="https://www.facebook.com/dhondhoonipreschool" target="_blank" rel="noopener noreferrer" className="text-primary-200 hover:text-white transition-colors" aria-label="Visit our Facebook page">'
);
code = code.replace(
  '<a href="https://www.instagram.com/dhondhoonipreschool" target="_blank" rel="noopener noreferrer" className="text-primary-200 hover:text-white transition-colors">',
  '<a href="https://www.instagram.com/dhondhoonipreschool" target="_blank" rel="noopener noreferrer" className="text-primary-200 hover:text-white transition-colors" aria-label="Visit our Instagram page">'
);

fs.writeFileSync('src/components/Layout.tsx', code);
