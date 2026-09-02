import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Admissions from './pages/Admissions';
import Campuses from './pages/Campuses';
import SocialMedia from './pages/SocialMedia';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Apply from './pages/Apply';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="programs" element={<Programs />} />
          <Route path="admissions" element={<Admissions />} />
          <Route path="campuses" element={<Campuses />} />
          <Route path="social-media" element={<SocialMedia />} />
          <Route path="jobs" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="apply" element={<Apply />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
