import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal, Code, Cpu, Briefcase, GraduationCap, 
  Award, Mail, Phone, MapPin, Linkedin, ChevronRight,
  Music, Activity, Globe
} from 'lucide-react';

// --- Composant utilitaire pour les animations au défilement ---
const FadeInSection = ({ children, delay = 0 }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(domRef.current);
        }
      });
    }, { threshold: 0.1 });
    
    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- Composant Principal ---
export default function Portfolio() {
  const [text, setText] = useState('');
  const fullText = "Recherche d'un stage de fin d'études dans l'informatique (4 à 6 mois) dès Avril 2026.";
  
  // Effet machine à écrire pour l'objectif
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 40);
    return () => clearInterval(timer);
  }, []);

  const skills = [
    { category: "Langages", icon: <Code size={18}/>, items: ["Python", "Java", "C/C++", "C#", "JS", "React", "Lua", "OCaml"] },
    { category: "Web & BDD", icon: <Globe size={18}/>, items: ["HTML", "CSS", "JS", "SQL", "Architecture des données"] },
    { category: "Tech & Outils", icon: <Cpu size={18}/>, items: ["Unity 3D", "Git", "React Native", "AWS (Gen AI)"] },
    { category: "Audiovisuel", icon: <Music size={18}/>, items: ["Photoshop", "Premiere/Magix", "OBS", "Audacity", "FL Studio"] }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Background Pattern CS-style */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:py-24">
        
        {/* En-tête / Hero Section */}
        <header className="mb-20">
          <div className="flex items-center gap-2 text-emerald-500 font-mono text-sm mb-6 opacity-80">
            <Terminal size={16} />
            <span>thomas_georgi@portfolio:~$ ./start.sh</span>
            <span className="animate-pulse">_</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-4">
            Thomas <span className="text-emerald-400">Georgi</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-mono text-slate-400 mb-6">
            &gt; Étudiant Ingénieur en Informatique
          </h2>
          
          <div className="h-16 md:h-8 mb-8">
            <p className="text-lg text-emerald-300/80 font-mono border-l-2 border-emerald-500/50 pl-4 py-1">
              {text}<span className="animate-pulse">|</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm font-mono mt-8">
            <a href="mailto:thomas.georgi@imt-atlantique.net" className="flex items-center gap-2 hover:text-emerald-400 transition-colors bg-slate-900 px-4 py-2 rounded-lg border border-slate-800 hover:border-emerald-500/50">
              <Mail size={16} /> thomas.georgi@imt-atlantique.net
            </a>
            <a href="tel:+33652172023" className="flex items-center gap-2 hover:text-emerald-400 transition-colors bg-slate-900 px-4 py-2 rounded-lg border border-slate-800 hover:border-emerald-500/50">
              <Phone size={16} /> +33 6 52 17 20 23
            </a>
            <div className="flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-lg border border-slate-800">
              <MapPin size={16} /> 06560 Valbonne
            </div>
            <a href="#" className="flex items-center gap-2 hover:text-emerald-400 transition-colors bg-slate-900 px-4 py-2 rounded-lg border border-slate-800 hover:border-emerald-500/50">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </header>

        {/* Formation */}
        <FadeInSection delay={100}>
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8 border-b border-slate-800 pb-4">
              <GraduationCap className="text-emerald-400" size={28} />
              <h3 className="text-2xl font-bold text-white">Formation</h3>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent">
              
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 text-emerald-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110 group-hover:bg-emerald-950 group-hover:border-emerald-500">
                  <span className="font-mono text-xs font-bold">26</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-emerald-500/30 transition-colors shadow-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-white text-lg">IMT Atlantique</h4>
                    <span className="text-emerald-400 text-sm font-mono">2023-2026</span>
                  </div>
                  <p className="text-sm text-slate-400 mb-2">3e école d'ingénieur en France (l'Etudiant 2026)</p>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-start gap-2"><ChevronRight size={14} className="mt-1 text-emerald-500 flex-shrink-0"/> Spécialisations: DCL, ILSD, RVSI</li>
                    <li className="flex items-start gap-2"><ChevronRight size={14} className="mt-1 text-emerald-500 flex-shrink-0"/> 1 semestre en échange à BINUS International, Jakarta</li>
                  </ul>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 text-slate-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110">
                  <span className="font-mono text-xs font-bold">23</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-900/50 p-6 rounded-xl border border-slate-800/50 hover:border-slate-700 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-white text-lg">Lycée Saint-Louis (Paris VI)</h4>
                    <span className="text-slate-400 text-sm font-mono">2021-2023</span>
                  </div>
                  <p className="text-sm text-slate-300">CPGE MP2I / MPI*</p>
                  <p className="text-xs text-slate-500 mt-2">Admis concours Mines-Ponts</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 text-slate-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110">
                  <span className="font-mono text-xs font-bold">21</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-900/50 p-6 rounded-xl border border-slate-800/50 hover:border-slate-700 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-white text-lg">Lycée Simone Veil</h4>
                    <span className="text-slate-400 text-sm font-mono">2018-2021</span>
                  </div>
                  <p className="text-sm text-slate-300">Baccalauréat Général, mention Très bien</p>
                  <p className="text-xs text-slate-500 mt-2">Option Mathématiques expertes</p>
                </div>
              </div>

            </div>
          </section>
        </FadeInSection>

        {/* Compétences */}
        <FadeInSection delay={200}>
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8 border-b border-slate-800 pb-4">
              <Code className="text-emerald-400" size={28} />
              <h3 className="text-2xl font-bold text-white">Compétences Techniques</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skillGroup, idx) => (
                <div key={idx} className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-emerald-500/20 transition-all duration-300 group">
                  <div className="flex items-center gap-2 mb-4 text-emerald-400">
                    {skillGroup.icon}
                    <h4 className="font-mono font-bold text-white tracking-wide">{skillGroup.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item, i) => (
                      <span key={i} className="px-3 py-1 text-sm bg-slate-950 text-slate-300 rounded border border-slate-800 group-hover:border-slate-700 transition-colors">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeInSection>

        {/* Expérience Pro */}
        <FadeInSection delay={300}>
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8 border-b border-slate-800 pb-4">
              <Briefcase className="text-emerald-400" size={28} />
              <h3 className="text-2xl font-bold text-white">Expérience Professionnelle</h3>
            </div>

            <div className="grid grid-cols-1 gap-6">
              
              <div className="group flex flex-col md:flex-row gap-6 bg-slate-900 p-6 rounded-xl border border-slate-800 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-900/20 hover:border-emerald-500/30 transition-all duration-300">
                <div className="md:w-1/4">
                  <p className="font-mono text-emerald-400 text-sm">2024</p>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Dev Mobile</p>
                </div>
                <div className="md:w-3/4">
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">Projet CODEVSI</h4>
                  <p className="text-slate-300 mb-4">Développement d'une application de covoiturage en <span className="text-emerald-400">React Native</span> destinée aux étudiants du campus.</p>
                </div>
              </div>

              <div className="group flex flex-col md:flex-row gap-6 bg-slate-900 p-6 rounded-xl border border-slate-800 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-900/20 hover:border-emerald-500/30 transition-all duration-300">
                <div className="md:w-1/4">
                  <p className="font-mono text-emerald-400 text-sm">Projet</p>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Réalité Virtuelle</p>
                </div>
                <div className="md:w-3/4">
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">Fly Copter</h4>
                  <p className="text-slate-300 mb-4">Coordinateur et développeur en réalité virtuelle sur le moteur <span className="text-emerald-400">Unity VR</span>.</p>
                </div>
              </div>

              <div className="group flex flex-col md:flex-row gap-6 bg-slate-900 p-6 rounded-xl border border-slate-800 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-900/20 hover:border-emerald-500/30 transition-all duration-300">
                <div className="md:w-1/4">
                  <p className="font-mono text-emerald-400 text-sm">4 mois</p>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Stage</p>
                </div>
                <div className="md:w-3/4">
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">Naval Group</h4>
                  <p className="text-slate-300 mb-4">Stage en tant que Data Manager. Également effectué: 2 stages d'observation en entreprise et 1 stage opérateur.</p>
                </div>
              </div>

              <div className="group flex flex-col md:flex-row gap-6 bg-slate-900/50 p-6 rounded-xl border border-slate-800/50 hover:bg-slate-900 hover:border-slate-700 transition-all duration-300">
                <div className="md:w-1/4">
                  <p className="font-mono text-emerald-400/70 text-sm">Depuis 2021</p>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Freelance</p>
                </div>
                <div className="md:w-3/4">
                  <h4 className="text-lg font-bold text-white mb-2">Micro-entrepreneur & Projets Divers</h4>
                  <ul className="text-slate-400 text-sm space-y-2">
                    <li>• Refonte de site Internet d'entreprise</li>
                    <li>• Événementiel : Animation Son & Lumières (concerts, évènements divers)</li>
                  </ul>
                </div>
              </div>

            </div>
          </section>
        </FadeInSection>

        {/* Expérience, Awards & Centres d'intérêt */}
        <FadeInSection delay={400}>
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* Extra */}
              <div>
                <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
                  <Award className="text-emerald-400" size={24} />
                  <h3 className="text-xl font-bold text-white">Palmarès & Expérience</h3>
                </div>
                <ul className="space-y-4 text-sm text-slate-300">
                  <li className="flex gap-3">
                    <ChevronRight size={16} className="text-emerald-500 shrink-0 mt-0.5"/>
                    <span><strong>Olympiades Nationales de Mathématiques :</strong> Classement Bronze. Participation au Concours Général.</span>
                  </li>
                  <li className="flex gap-3">
                    <ChevronRight size={16} className="text-emerald-500 shrink-0 mt-0.5"/>
                    <span><strong>Certification AWS Academy :</strong> Generative AI Foundations.</span>
                  </li>
                  <li className="flex gap-3">
                    <ChevronRight size={16} className="text-emerald-500 shrink-0 mt-0.5"/>
                    <span><strong>Responsable Communication :</strong> Bureau des Arts (BDA) d'IMT Atlantique. Création de vidéos et animation d'évènements en direct (en anglais).</span>
                  </li>
                  <li className="flex gap-3">
                    <ChevronRight size={16} className="text-emerald-500 shrink-0 mt-0.5"/>
                    <span><strong>Tournoi d'IA :</strong> PyRat (Programmation d'Intelligence Artificielle).</span>
                  </li>
                  <li className="flex gap-3">
                    <ChevronRight size={16} className="text-emerald-500 shrink-0 mt-0.5"/>
                    <span><strong>Anglais :</strong> IELTS 7.5, niveau C1 (équivalent 970 TOEIC).</span>
                  </li>
                </ul>
              </div>

              {/* Hobbies */}
              <div>
                <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
                  <Activity className="text-emerald-400" size={24} />
                  <h3 className="text-xl font-bold text-white">Centres d'intérêts</h3>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-emerald-400 font-mono text-sm mb-2">&gt; Musique</h4>
                    <p className="text-sm text-slate-300">Solfège et Percussions, Orchestre de Sophia Antipolis, Musique assistée par ordinateur, Mix en direct (DJ).</p>
                  </div>
                  <div>
                    <h4 className="text-emerald-400 font-mono text-sm mb-2">&gt; Sport</h4>
                    <p className="text-sm text-slate-300">Natation, danse, gymnastique, sport d'équilibre, escalade.</p>
                  </div>
                  <div>
                    <h4 className="text-emerald-400 font-mono text-sm mb-2">&gt; Divers</h4>
                    <p className="text-sm text-slate-300">Montage vidéo, Voyages & culture (Asie, Europe), Plongée N1.</p>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </FadeInSection>

        <footer className="mt-32 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm font-mono">
          <p>printf("Créé par Thomas Georgi - %d\n", 2026);</p>
        </footer>

      </div>
    </div>
  );
}