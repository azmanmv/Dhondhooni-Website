import { Book, Heart, Shield, Sparkles, Users, CheckCircle, Activity, Star } from 'lucide-react';

export default function About() {
  return (
    <div className="animate-in fade-in duration-700 pb-20">
      {/* Header */}
      <section className="bg-primary-50 py-20 relative overflow-hidden rounded-b-[4rem]">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200/40 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-200/40 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-primary-900 mb-6 tracking-tight">About Us</h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed">
            Bringing over 13 years of expertise in early childhood education, fostering an environment that balances academic, social, emotional, and physical development.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-24">
        
        {/* Vision & Mission */}
        <section className="grid md:grid-cols-2 gap-12 items-stretch">
          <div className="bg-amber-50 rounded-[3rem] p-10 border-4 border-amber-100 shadow-xl relative transform hover:-translate-y-2 transition-all">
            <Sparkles className="absolute top-6 right-6 w-12 h-12 text-amber-300 opacity-50" />
            <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mb-6 shadow-md">
              <Book className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-black text-primary-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 text-xl leading-relaxed font-medium">
              To become an exemplary school where learning is fun, helping students achieve their highest intellectual potential while instilling a deep love and respect for Islam.
            </p>
          </div>
          
          <div className="bg-sky-50 rounded-[3rem] p-10 border-4 border-sky-100 shadow-xl relative transform hover:-translate-y-2 transition-all">
            <Heart className="absolute top-6 right-6 w-12 h-12 text-sky-300 opacity-50" />
            <div className="w-16 h-16 bg-sky-400 rounded-full flex items-center justify-center mb-6 shadow-md">
              <Star className="w-8 h-8 text-white fill-white" />
            </div>
            <h2 className="text-3xl font-black text-primary-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 text-xl leading-relaxed font-medium">
              To ensure students achieve their best social, emotional, intellectual, and physical success in a safe, child-friendly environment that serves the best Islamic education and values.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-primary-900 mb-4">Core Values & Principles</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Islamic Values', desc: 'Grounded in authentic Islamic teachings and moral character.', color: 'bg-emerald-100', border: 'border-emerald-200' },
              { title: 'Child-Centered', desc: 'Prioritizing individual development, strengths, and interest-led learning.', color: 'bg-amber-100', border: 'border-amber-200' },
              { title: 'Inclusive & Accessible', desc: 'Ensuring equitable opportunities for all learners regardless of background or ability.', color: 'bg-pink-100', border: 'border-pink-200' },
              { title: 'Parent Partnership', desc: 'Working closely with families through regular updates and collaborative growth plans.', color: 'bg-sky-100', border: 'border-sky-200' }
            ].map((value, i) => (
              <div key={i} className={`p-8 rounded-[2rem] border-4 ${value.border} ${value.color} text-center hover:shadow-lg transition-all`}>
                <h3 className="text-xl font-black text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-700 font-medium">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Details Grid (Curriculum, SEN, Safety) */}
        <section className="space-y-16">
          
          <div className="bg-primary-50 rounded-[3rem] p-10 lg:p-16 border-4 border-primary-100 shadow-xl flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mb-6 shadow-md">
                <Book className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-black text-primary-900 mb-6">Curriculum & Methodology</h2>
              <ul className="space-y-4">
                <li className="flex gap-4 items-start">
                  <CheckCircle className="w-6 h-6 text-primary-500 shrink-0 mt-1" />
                  <span className="text-lg text-gray-700 font-medium"><strong>National Curriculum Framework (NCF):</strong> Implemented fully since 2012, covering core domains including Islamic practice, self-awareness, critical thinking, healthy living, and technology.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <CheckCircle className="w-6 h-6 text-primary-500 shrink-0 mt-1" />
                  <span className="text-lg text-gray-700 font-medium"><strong>Assessment:</strong> Observation, documentation, and continuous evaluations aligned with guidelines from the Ministry of Education.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <CheckCircle className="w-6 h-6 text-primary-500 shrink-0 mt-1" />
                  <span className="text-lg text-gray-700 font-medium"><strong>Staff Development:</strong> Ongoing 360-degree performance evaluations and in-house workshops for high pedagogical standards.</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <img src="./cur1.jpg" alt="Learning" className="rounded-[2rem] border-8 border-primary-50 shadow-2xl object-cover aspect-[4/3] transform hover:scale-105 transition-transform duration-500" />
            </div>
          </div>

          <div className="bg-fuchsia-50 rounded-[3rem] p-10 lg:p-16 border-4 border-fuchsia-100 shadow-xl flex flex-col lg:flex-row-reverse gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="w-16 h-16 bg-fuchsia-400 rounded-full flex items-center justify-center mb-6 shadow-md">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-black text-primary-900 mb-6">Inclusion & SEN</h2>
              <ul className="space-y-4">
                <li className="flex gap-4 items-start">
                  <CheckCircle className="w-6 h-6 text-fuchsia-500 shrink-0 mt-1" />
                  <span className="text-lg text-gray-700 font-medium"><strong>Care Society Collaboration:</strong> Formal Partnership (MOU) providing weekly expert observations and specialist support.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <CheckCircle className="w-6 h-6 text-fuchsia-500 shrink-0 mt-1" />
                  <span className="text-lg text-gray-700 font-medium"><strong>Individualized Support:</strong> Annual Individual Education Plans (IEPs) and Individual Care Plans (ICPs) for students with special needs.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <CheckCircle className="w-6 h-6 text-fuchsia-500 shrink-0 mt-1" />
                  <span className="text-lg text-gray-700 font-medium"><strong>Government Integration:</strong> Strict adherence to Ministry guidelines and active integration with the Fahi Veshi portal.</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <img src="./caresociety_sign.jpg" alt="Inclusive play" className="rounded-[2rem] border-8 border-fuchsia-50 shadow-2xl object-cover aspect-[4/3] transform hover:scale-105 transition-transform duration-500" />
            </div>
          </div>

          <div className="bg-sky-50 rounded-[3rem] p-10 lg:p-16 border-4 border-sky-100 shadow-xl flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mb-6 shadow-md">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-black text-primary-900 mb-6">Health, Safety & Operations</h2>
              <ul className="space-y-4">
                <li className="flex gap-4 items-start">
                  <CheckCircle className="w-6 h-6 text-sky-500 shrink-0 mt-1" />
                  <span className="text-lg text-gray-700 font-medium"><strong>Emergency Preparedness:</strong> Standard Operation Emergency Plan (SOEP) with regular drill training from MNDF and Fire & Rescue.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <CheckCircle className="w-6 h-6 text-sky-500 shrink-0 mt-1" />
                  <span className="text-lg text-gray-700 font-medium"><strong>Traffic & Security:</strong> Traffic management coordinated with the Maldives Police Service and trained staff.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <CheckCircle className="w-6 h-6 text-sky-500 shrink-0 mt-1" />
                  <span className="text-lg text-gray-700 font-medium"><strong>Health & Nutrition:</strong> Mandated immunization records, on-site health room, purified drinking water, and allergy tracking.</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <img src="./firesafety.jpg" alt="Safe environment" className="rounded-[2rem] border-8 border-sky-50 shadow-2xl object-cover aspect-[4/3] transform hover:scale-105 transition-transform duration-500" />
            </div>
          </div>

        </section>

      </div>
    </div>
  );
}
