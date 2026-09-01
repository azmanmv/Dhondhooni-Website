const fs = require('fs');

let home = fs.readFileSync('src/pages/Home.tsx', 'utf8');
home = home.replace(/e\?: React\.MouseEvent/g, 'e?: MouseEvent');
fs.writeFileSync('src/pages/Home.tsx', home);

let adm = fs.readFileSync('src/pages/Admissions.tsx', 'utf8');
if (!adm.includes('Users')) {
  adm = adm.replace(/import \{ ([^}]+) \} from 'lucide-react';/, "import { $1, Users, Heart } from 'lucide-react';");
}
fs.writeFileSync('src/pages/Admissions.tsx', adm);
