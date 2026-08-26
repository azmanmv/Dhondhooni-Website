import { CheckCircle2 } from 'lucide-react';

const programs = [
  {
    id: 'ps',
    name: 'Play School (PS)',
    age: '18 Months',
    time: '4:15 PM - 5:45 PM',
    color: 'bg-rose-50 border-rose-100 text-rose-900',
    iconColor: 'bg-rose-100 text-rose-600',
    description: 'Early sensory exploration, unstructured play, and basic socialization.',
    milestones: [
      'Development of fine and gross motor skills',
      'Introduction to shared play and taking turns',
      'Sensory exploration through art and music',
      'Basic vocabulary building'
    ]
  },
  {
    id: 'bn',
    name: 'Baby Nursery (BN)',
    age: '2 Years Old',
    time: '4:10 PM - 6:00 PM',
    color: 'bg-amber-50 border-amber-100 text-amber-900',
    iconColor: 'bg-amber-100 text-amber-600',
    description: 'Guided daily routines, early motor skills development, and introductory structured activities.',
    milestones: [
      'Establishing independent daily routines',
      'Enhanced verbal communication and expression',
      'Introduction to colors, shapes, and counting',
      'Collaborative group activities'
    ]
  },
  {
    id: 'n',
    name: 'Nursery (N)',
    age: '3 Years Old',
    time: '10:30 AM - 12:30 PM',
    color: 'bg-emerald-50 border-emerald-100 text-emerald-900',
    iconColor: 'bg-emerald-100 text-emerald-600',
    description: 'Pre-kindergarten literacy, numeracy fundamentals, and creative group activities.',
    milestones: [
      'Phonetic awareness and letter recognition',
      'Basic mathematical concepts and number writing',
      'Creative expression through structured art',
      'Developing sustained attention spans'
    ]
  },
  {
    id: 'lkg',
    name: 'Lower Kindergarten (LKG)',
    age: '4 Years Old',
    time: '12:40 PM - 3:40 PM',
    color: 'bg-blue-50 border-blue-100 text-blue-900',
    iconColor: 'bg-blue-100 text-blue-600',
    description: 'Phonics, structured inquiry, social cooperation, and early writing skills.',
    milestones: [
      'Reading simple phonetic words',
      'Writing uppercase and lowercase letters',
      'Understanding basic scientific inquiry',
      'Complex social cooperation and empathy'
    ]
  },
  {
    id: 'ukg',
    name: 'Upper Kindergarten (UKG)',
    age: '5 Years Old',
    time: '6:55 AM - 10:00 AM',
    color: 'bg-purple-50 border-purple-100 text-purple-900',
    iconColor: 'bg-purple-100 text-purple-600',
    description: 'Advanced primary-school readiness, independent problem solving, and language arts.',
    milestones: [
      'Fluent reading of beginner texts',
      'Independent sentence construction and writing',
      'Advanced mathematical problem solving',
      'Complete readiness for primary education transition'
    ]
  }
];

export default function Programs() {
  return (
    <div className="animate-in fade-in duration-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">Academic Programs</h1>
          <p className="text-xl text-gray-600">
            A structured, progressive learning journey designed for every stage of your child's early development.
          </p>
        </div>

        <div className="space-y-12">
          {programs.map((program, i) => (
            <div key={program.id} id={program.id} className={`rounded-[2.5rem] border-4 p-8 md:p-12 ${program.color} shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl relative`}>
              <div className={`absolute -top-5 -right-5 w-16 h-16 rounded-full ${program.iconColor.split(' ')[0]} flex items-center justify-center font-black text-2xl border-4 border-white shadow-sm transform rotate-12`}>
                {i + 1}
              </div>
              <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
                
                <div className="lg:w-1/3">
                  <div className="inline-block px-4 py-2 rounded-full bg-white font-black text-sm mb-6 shadow-sm border border-black/5">
                    {program.age}
                  </div>
                  <h2 className="text-4xl font-black mb-4 tracking-tight">{program.name}</h2>
                  <p className="text-lg opacity-90 mb-8 font-medium leading-relaxed">
                    {program.description}
                  </p>
                  <div className="bg-slate-50/60 rounded-2xl p-5 backdrop-blur-sm border-2 border-white">
                    <p className="text-sm font-black uppercase tracking-wider opacity-70 mb-1">Session Times</p>
                    <p className="font-black text-xl">{program.time}</p>
                  </div>
                </div>

                <div className="lg:w-2/3 bg-slate-50/90 rounded-[2rem] p-8 md:p-10 shadow-sm border-2 border-white">
                  <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
                    <span className={`w-12 h-12 rounded-2xl flex items-center justify-center ${program.iconColor}`}>
                      <CheckCircle2 className="w-7 h-7" />
                    </span>
                    Key Learning Milestones
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-5">
                    {program.milestones.map((milestone, idx) => (
                      <div key={idx} className="flex gap-4 items-start p-5 rounded-2xl bg-slate-50 border-2 border-gray-100 shadow-sm hover:border-current transition-colors">
                        <div className={`mt-1 w-3 h-3 rounded-full ${program.iconColor.split(' ')[0]} shrink-0`} />
                        <span className="text-gray-800 font-bold leading-snug">{milestone}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
