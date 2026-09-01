const fs = require('fs');
let code = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// Replace the bgImages map block
code = code.replace(
  /\{bgImages\.map\(\(src, idx\) => \([\s\S]*?\}\}\n\s*><\/div>\n\s*\)\)\}/,
  `{bgImages.map((src, idx) => (
          <div 
            key={src}
            className={\`absolute inset-0 transition-opacity duration-1000 ease-in-out \${idx === currentImageIndex ? 'opacity-100' : 'opacity-0'}\`} 
          >
            <div 
              className={\`absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-out \${idx === currentImageIndex ? 'scale-110' : 'scale-100'}\`}
              style={{ backgroundImage: \`url('\${src}')\` }}
            ></div>
          </div>
        ))}`
);

// Add strong drop-shadow to text
code = code.replace('text-5xl md:text-6xl lg:text-8xl font-black tracking-tight mb-6 max-w-5xl text-white drop-shadow-sm leading-tight', 'text-5xl md:text-6xl lg:text-8xl font-black tracking-tight mb-6 max-w-5xl text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] leading-tight');
code = code.replace('text-xl md:text-2xl text-primary-50 max-w-2xl mb-10 font-semibold leading-relaxed', 'text-xl md:text-2xl text-white max-w-2xl mb-10 font-semibold leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]');
code = code.replace('className="relative z-10 max-w-7xl mx-auto', 'className="relative z-10 max-w-7xl mx-auto'); // just anchor

fs.writeFileSync('src/pages/Home.tsx', code);
