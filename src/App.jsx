import React, { useState, useEffect } from 'react';
import { 
  Terminal, Code, Cpu, Briefcase, GraduationCap, 
  Award, Mail, Phone, MapPin, Linkedin, ChevronRight,
  Music, Activity, Globe, ArrowLeft, ExternalLink,
  Database, Server, Monitor, ShieldAlert, Zap
} from 'lucide-react';

// --- Composant d'Animation de Transition ---
const ViewTransition = ({ children, isVisible }) => {
  return (
    <div className={`transition-all duration-500 ease-out transform ${
      isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95 pointer-events-none absolute w-full'
    }`}>
      {children}
    </div>
  );
};

// --- Composant Machine à écrire ---
const Typewriter = ({ text, delay = 40 }) => {
  const [currentText, setCurrentText] = useState('');
  
  useEffect(() => {
    setCurrentText('');
    let i = 0;
    const timer = setInterval(() => {
      setCurrentText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(timer);
    }, delay);
    return () => clearInterval(timer);
  }, [text, delay]);

  return <span>{currentText}<span className="animate-pulse text-emerald-500">_</span></span>;
};

// --- Composant Principal ---
export default function Portfolio() {
  const [activeView, setActiveView] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Gérer la transition entre les vues
  const changeView = (view) => {
    if (view === activeView) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveView(view);
      setIsTransitioning(false);
      window.scrollTo(0, 0);
    }, 300); // Durée de l'animation de sortie
  };

  // Composant Lien externe customisable (couleur héritable)
  const ExtLink = ({ href, children, className = "text-emerald-400 hover:text-emerald-300" }) => (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`inline-flex items-center gap-1 underline decoration-emerald-500/30 hover:decoration-emerald-400 underline-offset-4 transition-all group ${className}`}
    >
      {children}
      <ExternalLink size={14} className="opacity-50 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform shrink-0" />
    </a>
  );

  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      
      {/* Background Matrix/Grid effect */}
      <div className="fixed inset-0 z-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#4ade80_1px,transparent_1px),linear-gradient(to_bottom,#4ade80_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505] pointer-events-none"></div>

      {/* Navbar type Terminal */}
      <nav className="sticky top-0 z-50 bg-[#050505]/90 backdrop-blur-md border-b border-slate-800/50 p-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono text-sm">
            <button 
              onClick={() => changeView('home')} 
              className="flex items-center gap-2 group cursor-pointer focus:outline-none"
              title="Retour à l'accueil"
            >
              <Terminal size={18} className="text-emerald-500 group-hover:text-emerald-400 transition-colors" />
              <span className="text-slate-500 group-hover:text-slate-300 transition-colors">thomas@georgi:</span>
            </button>
            <span className="text-blue-400">~/portfolio</span>
            {activeView !== 'home' && (
              <span className="text-emerald-400">/{activeView}</span>
            )}
            <span className="text-slate-500">$</span>
          </div>
          
          {activeView !== 'home' && (
            <button 
              onClick={() => changeView('home')}
              className="flex items-center gap-2 text-sm font-mono text-slate-400 hover:text-emerald-400 transition-colors group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              cd ..
            </button>
          )}
        </div>
      </nav>

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-12 min-h-[80vh]">
        
        {/* ================= VUE : ACCUEIL ================= */}
        <ViewTransition isVisible={activeView === 'home' && !isTransitioning}>
          <header className="mb-16 text-center md:text-left">
            <div className="inline-block px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-mono text-sm mb-6 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
              &lt;Étudiant Ingénieur /&gt;
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
              Thomas <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Georgi</span>
            </h1>
            
            <div className="min-h-[6.5rem] md:min-h-[4rem] text-lg md:text-xl leading-relaxed text-slate-400 font-light max-w-2xl border-l-2 border-emerald-500/50 pl-4 py-1 mb-6">
              <Typewriter text="Étudiant ingénieur avec spécialisation en Développement de Logiciels & IHM. En recherche d'un stage de fin d'études dans l'informatique (4 à 6 mois) dès Avril 2026." delay={30} />
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-mono mt-8">
              <a href="mailto:thomas.georgi@imt-atlantique.net" className="flex items-center gap-2 hover:text-emerald-400 transition-colors bg-slate-900/50 px-4 py-2 rounded-lg border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900">
                <Mail size={16} /> thomas.georgi@imt-atlantique.net
              </a>
              <a href="tel:+33652172023" className="flex items-center gap-2 hover:text-emerald-400 transition-colors bg-slate-900/50 px-4 py-2 rounded-lg border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900">
                <Phone size={16} /> +33 6 52 17 20 23
              </a>
              <a href="https://www.linkedin.com/in/thomasgeorgi/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-400 transition-colors bg-slate-900/50 px-4 py-2 rounded-lg border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900">
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </header>

          {/* Grille de navigation principale */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {[
              { id: 'formation', title: 'Ma Formation', icon: <GraduationCap size={32}/>, color: 'from-emerald-500/20 to-emerald-900/20', border: 'hover:border-emerald-500', text: 'group-hover:text-emerald-400', desc: 'IMT Atlantique, CPGE MP2I/MPI*' },
              { id: 'experience', title: 'Expérience Pro', icon: <Briefcase size={32}/>, color: 'from-cyan-500/20 to-cyan-900/20', border: 'hover:border-cyan-500', text: 'group-hover:text-cyan-400', desc: 'Naval Group, CODEVSI, Fly Copter' },
              { id: 'competences', title: 'Compétences', icon: <Code size={32}/>, color: 'from-blue-500/20 to-blue-900/20', border: 'hover:border-blue-500', text: 'group-hover:text-blue-400', desc: 'Langages, Web, 3D, Base de données' },
              { id: 'palmares', title: 'Palmarès & Asso', icon: <Award size={32}/>, color: 'from-purple-500/20 to-purple-900/20', border: 'hover:border-purple-500', text: 'group-hover:text-purple-400', desc: 'Olympiades, AWS, PyRat, BDA' },
              { id: 'interets', title: 'Centres d\'intérêt & Infos', icon: <Activity size={32}/>, color: 'from-rose-500/20 to-rose-900/20', border: 'hover:border-rose-500', text: 'group-hover:text-rose-400', desc: 'Musique, Sport, Audiovisuel, Localisation...' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => changeView(item.id)}
                className={`group relative text-left p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm transition-all duration-300 ${item.border} hover:shadow-2xl hover:-translate-y-2 overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className={`mb-4 text-slate-400 transition-colors duration-300 ${item.text}`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <ChevronRight className={item.text} />
                </div>
              </button>
            ))}
          </div>
        </ViewTransition>


        {/* ================= VUE : FORMATION ================= */}
        <ViewTransition isVisible={activeView === 'formation' && !isTransitioning}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
              <GraduationCap className="text-emerald-400" size={32}/> Ma Formation
            </h2>
            
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-emerald-500 before:via-slate-800 before:to-transparent">
              
              {/* IMT */}
              <div className="relative pl-12 group">
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full border-2 border-emerald-500 bg-[#050505] flex items-center justify-center shadow-[0_0_10px_rgba(16,185,129,0.5)] z-10">
                  <span className="font-mono text-xs font-bold text-emerald-400">26</span>
                </div>
                <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800 group-hover:border-emerald-500/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        <ExtLink href="https://www.imt-atlantique.fr/fr" className="text-white hover:text-emerald-300">IMT ATLANTIQUE</ExtLink>
                      </h3>
                      <p className="text-emerald-400 font-mono text-sm mt-1">
                        3e école d'ingénieur en France (<ExtLink href="https://www.letudiant.fr/classements/classement-des-ecoles-d-ingenieurs.html" className="text-emerald-400 hover:text-emerald-300">l'Etudiant 2026</ExtLink>)
                      </p>
                    </div>
                    <span className="text-slate-400 text-sm font-mono bg-slate-950 px-3 py-1 rounded-md border border-slate-800 mt-2 md:mt-0 inline-block">2023 - 2026</span>
                  </div>
                  <p className="text-slate-300 mb-4">Formation ingénieur en informatique, diplôme pour 2026. Spécialisation en :</p>
                  <ul className="space-y-2 text-sm text-slate-300 mb-6">
                    <li className="flex gap-2">
                      <ChevronRight size={16} className="text-emerald-500 shrink-0"/> 
                      <span><strong><ExtLink href="https://moodle.imt-atlantique.fr/pluginfile.php/134377/mod_folder/content/0/TAF%20infos%20brest/DCL2026.pdf">DCL</ExtLink></strong> (Développement Collaboratif de Logiciels)</span>
                    </li>
                    <li className="flex gap-2">
                      <ChevronRight size={16} className="text-emerald-500 shrink-0"/> 
                      <span><strong><ExtLink href="https://moodle.imt-atlantique.fr/pluginfile.php/134377/mod_folder/content/0/TAF%20infos%20brest/ILSD2026.pdf">ILSD</ExtLink></strong> (Ingénierie logicielle des systèmes distribués)</span>
                    </li>
                    <li className="flex gap-2">
                      <ChevronRight size={16} className="text-emerald-500 shrink-0"/> 
                      <span><strong><ExtLink href="https://moodle.imt-atlantique.fr/pluginfile.php/134377/mod_folder/content/0/TAF%20infos%20brest/colorationsInformatiques2026.pdf">RVSI</ExtLink></strong> (Réalité Virtuelle & Systèmes Interactifs)</span>
                    </li>
                  </ul>
                  
                  <a href="https://international.binus.ac.id/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-900/20 hover:bg-blue-900/40 text-blue-300 text-sm px-4 py-2 rounded-lg border border-blue-800/50 hover:border-blue-500/50 transition-all group w-full md:w-auto">
                    <Globe size={16} className="group-hover:animate-pulse shrink-0" />
                    <span>1 semestre en échange universitaire à BINUS International, Jakarta</span>
                    <ExternalLink size={14} className="opacity-50 group-hover:opacity-100 transition-opacity ml-1 shrink-0" />
                  </a>
                </div>
              </div>

              {/* Prépa */}
              <div className="relative pl-12 group">
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full border-2 border-slate-700 bg-[#050505] flex items-center justify-center z-10 group-hover:border-slate-500 transition-colors">
                  <span className="font-mono text-xs font-bold text-slate-400">23</span>
                </div>
                <div className="bg-slate-900/40 p-6 rounded-xl border border-slate-800 group-hover:border-slate-700 transition-colors">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-lg font-bold text-white">
                      <ExtLink href="https://pia.ac-paris.fr/serail/jcms/s1_2081847/fr/presentation" className="text-white hover:text-emerald-300">LYCÉE SAINT-LOUIS (PARIS VI)</ExtLink>
                    </h3>
                    <span className="text-slate-500 text-sm font-mono mt-1 md:mt-0">2021 - 2023</span>
                  </div>
                  <p className="text-slate-300 text-sm mb-2">Classe préparatoire aux grandes écoles (CPGE)</p>
                  <ul className="space-y-1 text-sm text-slate-400">
                    <li>• <strong><ExtLink href="https://mp2i-saint-louis.github.io/">MP2I</ExtLink></strong> (Mathématiques, Physique, Sciences d'Ingénieur, Informatique)</li>
                    <li>• <strong><ExtLink href="https://etudiant.lefigaro.fr/annuaire/37276-prepa-mpi-2eme-annee/">MPI*</ExtLink></strong> (Mathématiques, Physique, Informatique)</li>
                  </ul>
                  <p className="text-emerald-400 text-sm font-mono mt-3">Admis concours Mines-Ponts</p>
                </div>
              </div>

              {/* Bac */}
              <div className="relative pl-12 group">
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full border-2 border-slate-700 bg-[#050505] flex items-center justify-center z-10 group-hover:border-slate-500 transition-colors">
                  <span className="font-mono text-xs font-bold text-slate-400">21</span>
                </div>
                <div className="bg-slate-900/40 p-6 rounded-xl border border-slate-800 group-hover:border-slate-700 transition-colors">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-lg font-bold text-white">LYCÉE SIMONE VEIL (VALBONNE)</h3>
                    <span className="text-slate-500 text-sm font-mono mt-1 md:mt-0">2018 - 2021</span>
                  </div>
                  <p className="text-slate-300 text-sm">Baccalauréat Général, <strong>mention Très bien</strong></p>
                  <p className="text-slate-400 text-sm mt-1">Option Mathématiques expertes</p>
                </div>
              </div>

            </div>
          </div>
        </ViewTransition>


        {/* ================= VUE : EXPÉRIENCE PRO ================= */}
        <ViewTransition isVisible={activeView === 'experience' && !isTransitioning}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
              <Briefcase className="text-cyan-400" size={32}/> Expérience Professionnelle
            </h2>

            <div className="grid gap-6">

              <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-all group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-emerald-950 text-emerald-400 rounded-lg"><Database size={24}/></div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      <ExtLink href="https://www.naval-group.com/fr" className="text-white hover:text-emerald-300">Naval Group</ExtLink>
                    </h3>
                    <p className="text-emerald-400 text-sm font-mono">Stage Data Manager (4 mois)</p>
                  </div>
                </div>
                <p className="text-slate-300">Gestion et architecture des données. Expérience complétée par 2 stages d'observation en entreprise et 1 stage opérateur.</p>
              </div>

              <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-green-950 text-green-400 rounded-lg"><Zap size={24}/></div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Projet TIPE - Optimisation du Traffic Urbain
                    </h3>
                    <p className="text-green-400 text-sm font-mono">Algorithme d'Analyse & Prédiction</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-3">Création d'un algorithme d'analyse, de prédiction et d'optimisation du trafic urbain en collaboration avec la <ExtLink href="https://www.paris.fr/" className="text-slate-300 hover:text-green-300">Ville de Paris</ExtLink> et <ExtLink href="https://www.velib-metropole.fr/" className="text-slate-300 hover:text-green-300">Vélib Métropole</ExtLink>.</p>
                <p className="text-slate-400 text-sm font-mono">Travaux d'Initiative Personnels Encadrés (TIPE)</p>
              </div>
              
              <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-cyan-950 text-cyan-400 rounded-lg"><Monitor size={24}/></div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      <ExtLink href="https://www.flycopter-project.fr/" className="text-white hover:text-cyan-300">Projet Fly Copter</ExtLink>
                    </h3>
                    <p className="text-cyan-400 text-sm font-mono">Réalité Virtuelle (Unity VR)</p>
                  </div>
                </div>
                <p className="text-slate-300">Coordinateur et développeur principal. Conception et développement d'une expérience en réalité virtuelle sur le moteur Unity.</p>
              </div>

              <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-950 text-blue-400 rounded-lg"><Code size={24}/></div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        <ExtLink href="https://cv.swargus.com/assets/RapportProjetCODEV.pdf" className="text-white hover:text-blue-300">Projet CODEVSI</ExtLink>
                      </h3>
                      <p className="text-blue-400 text-sm font-mono">React Native</p>
                    </div>
                  </div>
                  <span className="text-slate-500 font-mono text-sm bg-slate-950 px-3 py-1 rounded border border-slate-800">2024</span>
                </div>
                <p className="text-slate-300">Développement d'une application mobile de covoiturage destinée exclusivement aux étudiants du campus, réalisée avec le framework React Native.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-900/40 p-6 rounded-xl border border-slate-800 hover:border-slate-600 transition-all">
                  <h3 className="text-lg font-bold text-white mb-2">Freelance Événementiel</h3>
                  <p className="text-slate-400 text-sm font-mono mb-3">Micro-entrepreneur (depuis 2021)</p>
                  <p className="text-slate-300 text-sm">Prestations diverses et gestion de projets dans le secteur de l'événementiel.</p>
                </div>
                
                <div className="bg-slate-900/40 p-6 rounded-xl border border-slate-800 hover:border-slate-600 transition-all">
                  <h3 className="text-lg font-bold text-white mb-2">Développement Web</h3>
                  <p className="text-slate-400 text-sm font-mono mb-3">Projet Indépendant</p>
                  <p className="text-slate-300 text-sm">Mission de refonte complète d'un site Internet d'entreprise.</p>
                </div>
              </div>

            </div>
          </div>
        </ViewTransition>


        {/* ================= VUE : COMPÉTENCES ================= */}
        <ViewTransition isVisible={activeView === 'competences' && !isTransitioning}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
              <Code className="text-blue-400" size={32}/> Compétences Techniques
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Prog */}
              <div className="bg-slate-900/60 p-8 rounded-2xl border border-slate-800 relative overflow-hidden group hover:border-blue-500/50 transition-colors">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity"><Terminal size={100}/></div>
                <h3 className="text-xl font-bold text-blue-400 mb-6 font-mono flex items-center gap-2">&gt; Algorithmie & Prog</h3>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {['Python', 'Java', 'C', 'C++', 'C#', 'JavaScript', 'React', 'Lua', 'OCaml', 'Git'].map(skill => (
                    <span key={skill} className="bg-blue-950/50 text-blue-200 border border-blue-800/50 px-3 py-1 rounded-md text-sm">{skill}</span>
                  ))}
                </div>
              </div>

              {/* Data & Web */}
              <div className="bg-slate-900/60 p-8 rounded-2xl border border-slate-800 relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity"><Server size={100}/></div>
                <h3 className="text-xl font-bold text-emerald-400 mb-6 font-mono flex items-center gap-2">&gt; Web & Données</h3>
                <div className="flex flex-wrap gap-2 relative z-10 mb-6">
                  {['HTML', 'CSS', 'JavaScript'].map(skill => (
                    <span key={skill} className="bg-emerald-950/50 text-emerald-200 border border-emerald-800/50 px-3 py-1 rounded-md text-sm">{skill}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {['SQL', 'Architecture des données'].map(skill => (
                    <span key={skill} className="bg-slate-800/50 text-slate-300 border border-slate-700 px-3 py-1 rounded-md text-sm">{skill}</span>
                  ))}
                </div>
              </div>

              {/* 3D & Langues */}
              <div className="bg-slate-900/60 p-8 rounded-2xl border border-slate-800 hover:border-purple-500/50 transition-colors">
                <h3 className="text-xl font-bold text-purple-400 mb-6 font-mono flex items-center gap-2">&gt; Outils Spécialisés</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-slate-400 mb-2">Développement 3D</p>
                    <span className="bg-purple-950/50 text-purple-200 border border-purple-800/50 px-3 py-1 rounded-md text-sm inline-block">Unity 3D</span>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-2">Langues</p>
                    <div className="bg-slate-950 border border-slate-800 p-3 rounded-lg text-sm text-slate-300 flex items-center justify-between">
                      <strong>Anglais</strong>
                      <span className="text-emerald-400">IELTS 7.5 (Niveau C1)</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1 text-right">équivalent 970 TOEIC</p>
                  </div>
                </div>
              </div>

              {/* Audiovisuel */}
              <div className="bg-slate-900/60 p-8 rounded-2xl border border-slate-800 hover:border-rose-500/50 transition-colors">
                <h3 className="text-xl font-bold text-rose-400 mb-6 font-mono flex items-center gap-2">&gt; Audiovisuel</h3>
                <div className="flex flex-wrap gap-2">
                  {['Photoshop', 'Suite Adobe', 'MAGIX Video', 'OBS', 'Audacity', 'FL Studio'].map(skill => (
                    <span key={skill} className="bg-rose-950/30 text-rose-200 border border-rose-800/50 px-3 py-1 rounded-md text-sm">{skill}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </ViewTransition>


        {/* ================= VUE : PALMARÈS & ASSO ================= */}
        <ViewTransition isVisible={activeView === 'palmares' && !isTransitioning}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
              <Award className="text-purple-400" size={32}/> Palmarès & Associatif
            </h2>

            <div className="space-y-6">
              
              <div className="flex flex-col md:flex-row gap-6 bg-gradient-to-r from-yellow-900/20 to-slate-900/60 p-6 rounded-xl border border-yellow-700/30 hover:border-yellow-500/50 transition-colors">
                <div className="shrink-0 pt-1"><Award size={32} className="text-yellow-500" /></div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2"><ExtLink href="https://www.animath.fr/laureats-des-olympiades-nationales-de-mathematiques/" className="text-white hover:text-yellow-300">Olympiades Nationales de Mathématiques</ExtLink></h3>
                  <p className="text-yellow-400 font-mono text-sm mb-2">Classement Bronze</p>
                  <p className="text-slate-300">Participation au Concours Général de Mathématiques.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 bg-gradient-to-r from-[#FF9900]/10 to-slate-900/60 p-6 rounded-xl border border-[#FF9900]/30 hover:border-[#FF9900]/60 transition-colors">
                <div className="shrink-0 pt-1"><CloudLightningIcon size={32} className="text-[#FF9900]" /></div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2"><ExtLink href="https://aws.amazon.com/fr/training/awsacademy/" className="text-white hover:text-[#FF9900]">Certification AWS Academy Graduate</ExtLink></h3>
                  <p className="text-[#FF9900] font-mono text-sm mb-2">Generative AI Foundations</p>
                  <p className="text-slate-300">Maîtrise des concepts fondamentaux de l'Intelligence Artificielle Générative sur le cloud Amazon Web Services.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                
                <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800">
                  <h4 className="font-bold text-emerald-400 mb-3 text-lg flex items-center gap-2">
                    <Globe size={20} className="shrink-0"/> 
                    <ExtLink href="https://www.imt-atlantique.fr/fr/campus/vie-etudiante/associations" className="text-emerald-400 hover:text-emerald-300">Bureau des Arts (BDA)</ExtLink>
                  </h4>
                  <p className="text-sm text-slate-400 font-mono mb-2">IMT Atlantique • Responsable Com</p>
                  <p className="text-slate-300 text-sm">Création de vidéos et animation d'évènements en direct (réalisé en anglais).</p>
                </div>

                <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800">
                  <h4 className="font-bold text-blue-400 mb-3 text-lg flex items-center gap-2"><Cpu size={20}/> Intelligence Artificielle</h4>
                  <p className="text-sm text-slate-400 font-mono mb-2">Tournoi PyRat</p>
                  <p className="text-slate-300 text-sm">Participation au tournoi de programmation d'IA "PyRat".</p>
                </div>

                <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800">
                  <h4 className="font-bold text-purple-400 mb-3 text-lg flex items-center gap-2"><Music size={20}/> Animation S&L</h4>
                  <p className="text-sm text-slate-400 font-mono mb-2">Son & Lumières</p>
                  <p className="text-slate-300 text-sm">Régie technique et animation pour des concerts et évènements divers.</p>
                </div>

                <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800">
                  <h4 className="font-bold text-green-400 mb-3 text-lg flex items-center gap-2">
                    <ShieldAlert size={20} className="shrink-0"/> 
                    <ExtLink href="#" className="text-green-400 hover:text-green-300">Projet Dev. Durable</ExtLink>
                  </h4>
                  <p className="text-sm text-slate-400 font-mono mb-2">Écologie & Solidarité</p>
                  <p className="text-slate-300 text-sm">Organisation de permanences de dépôt & retrait gratuit d'objets de seconde main.</p>
                </div>

              </div>
            </div>
          </div>
        </ViewTransition>


        {/* ================= VUE : CENTRES D'INTÉRÊTS & INFOS ================= */}
        <ViewTransition isVisible={activeView === 'interets' && !isTransitioning}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
              <Activity className="text-rose-400" size={32}/> 
              Centres d'intérêt & Informations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="space-y-8">
                <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-rose-500/30 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Music className="text-rose-400"/> Musique
                  </h3>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Solfège et Percussions</li>
                    <li>• Orchestre de Sophia Antipolis</li>
                    <li>• Musique assistée par ordinateur</li>
                    <li>• Mix en direct (Disc Jockey)</li>
                  </ul>
                </div>

                <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-amber-500/30 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Activity className="text-amber-400"/> Sport
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Natation, danse, gymnastique, sport d'équilibre, escalade.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/30 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Globe className="text-cyan-400"/> Divers & Voyages
                  </h3>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Montage vidéo</li>
                    <li>• Voyages & culture (Asie du sud-est, Europe, Asie de l'Est)</li>
                    <li>• Niveau 1 Plongée</li>
                  </ul>
                </div>

                <div className="bg-[#0a0a0a] p-6 rounded-xl border border-slate-800 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl"></div>
                  <h3 className="text-xl font-bold text-white mb-4 font-mono">Détails pratiques</h3>
                  <div className="space-y-4 text-sm text-slate-300">
                    <div className="flex items-center gap-3">
                      <MapPin className="text-emerald-400" size={18}/> 
                      <span>06560 Valbonne</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Zap className="text-emerald-400" size={18}/> 
                      <span>Permis (B), Permis côtier</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </ViewTransition>

      </main>

      {/* Footer minimaliste */}
      <footer className="border-t border-slate-800/50 mt-12 py-8 text-center text-slate-500 text-sm font-mono relative z-10">
        <p>sys.exit(0) // Thomas Georgi © 2026</p>
      </footer>

    </div>
  );
}

// Icon Helper for AWS
function CloudLightningIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
      <path d="m13 12-3 5h4l-3 5" />
    </svg>
  );
}