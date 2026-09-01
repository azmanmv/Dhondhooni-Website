const fs = require('fs');
let code = fs.readFileSync('src/components/Layout.tsx', 'utf8');

const target = `            {/* Desktop Navigation */}
            <nav className="hidden md:flex flex-wrap items-center justify-end gap-x-1 gap-y-2 lg:gap-x-2 lg:gap-y-0">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={\`px-3 py-1.5 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-black transition-all duration-200 border-2 border-transparent \${
                    location.pathname === link.path
                      ? link.active + ' border-black/10'
                      : link.default
                  }\`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pl-2 border-l-2 border-gray-100 h-6 mx-1"></div>
              <Link
                to="/apply"
                className={\`px-4 py-1.5 lg:px-5 lg:py-2 rounded-full text-xs lg:text-sm font-black transition-all duration-200 border-2 border-transparent bg-[#633F83] text-white hover:bg-[#800080] shadow-md hover:shadow-lg \${
                  location.pathname === '/apply' ? 'ring-2 ring-offset-2 ring-[#633F83]' : ''
                }\`}
              >
                Apply Now
              </Link>
            </nav>`;

const replace = `            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2 lg:gap-4">
              <div className="grid grid-cols-4 lg:flex gap-x-1 gap-y-1.5 lg:gap-x-2 lg:gap-y-0">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={\`px-2 py-1.5 lg:px-4 lg:py-2 rounded-full text-[11px] lg:text-sm font-black transition-all duration-200 border-2 border-transparent text-center flex items-center justify-center whitespace-nowrap \${
                      location.pathname === link.path
                        ? link.active + ' border-black/10'
                        : link.default
                    }\`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="w-px h-10 lg:h-6 bg-gray-200 mx-1 lg:mx-2"></div>
              <Link
                to="/apply"
                className={\`px-4 py-3 lg:px-5 lg:py-2 rounded-full text-xs lg:text-sm font-black transition-all duration-200 border-2 border-transparent bg-[#633F83] text-white hover:bg-[#800080] shadow-md hover:shadow-lg flex items-center justify-center text-center leading-tight \${
                  location.pathname === '/apply' ? 'ring-2 ring-offset-2 ring-[#633F83]' : ''
                }\`}
              >
                Apply<br className="hidden md:block lg:hidden" /> Now
              </Link>
            </nav>`;

code = code.replace(target, replace);
fs.writeFileSync('src/components/Layout.tsx', code);
