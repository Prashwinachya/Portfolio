import { useState, useEffect, useRef, type ReactNode, type SyntheticEvent, type RefObject } from 'react';
import { 
  Code2, 
  Terminal, 
  Monitor, 
  Database, 
  ChevronRight, 
  Mail, 
  ExternalLink
} from 'lucide-react';

// Inline SVG replacements for brand icons removed from lucide-react v1.x
const Github = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const Linkedin = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const VFinance = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 200 200">
    <defs>
      <linearGradient id="vfinanceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#e94b8e', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
      </linearGradient>
      <filter id="vfinaneShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="8" stdDeviation="12" floodOpacity="0.3" />
      </filter>
    </defs>
    <rect x="20" y="20" width="160" height="160" rx="40" fill="url(#vfinanceGradient)" filter="url(#vfinaneShadow)" />
    <text x="100" y="125" fontSize="100" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif">V</text>
  </svg>
);

const IndustryEquipment = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 200 200">
    <defs>
      <linearGradient id="equipmentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#4f46e5', stopOpacity: 1 }} />
      </linearGradient>
      <filter id="equipmentShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="8" stdDeviation="12" floodOpacity="0.3" />
      </filter>
    </defs>
    <rect x="20" y="20" width="160" height="160" rx="40" fill="url(#equipmentGradient)" filter="url(#equipmentShadow)" />
    {/* Gear shape */}
    <g transform="translate(100, 100)">
      <circle cx="0" cy="0" r="35" fill="white" opacity="0.2" />
      <circle cx="0" cy="0" r="28" fill="none" stroke="white" strokeWidth="3" />
      {/* Gear teeth */}
      <g id="tooth">
        <rect x="-4" y="-42" width="8" height="12" fill="white" rx="2" />
      </g>
      <use href="#tooth" transform="rotate(45)" />
      <use href="#tooth" transform="rotate(90)" />
      <use href="#tooth" transform="rotate(135)" />
      <use href="#tooth" transform="rotate(180)" />
      <use href="#tooth" transform="rotate(225)" />
      <use href="#tooth" transform="rotate(270)" />
      <use href="#tooth" transform="rotate(315)" />
      <circle cx="0" cy="0" r="12" fill="white" />
    </g>
  </svg>
);

const VoteSecurity = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 200 200">
    <defs>
      <linearGradient id="securityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#14b8a6', stopOpacity: 1 }} />
      </linearGradient>
      <filter id="securityShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="8" stdDeviation="12" floodOpacity="0.3" />
      </filter>
    </defs>
    <rect x="20" y="20" width="160" height="160" rx="40" fill="url(#securityGradient)" filter="url(#securityShadow)" />
    {/* Shield with checkmark */}
    <g transform="translate(100, 100)">
      <path d="M 0 -35 C -20 -25 -25 -10 -25 10 C -25 35 0 45 0 45 C 0 45 25 35 25 10 C 25 -10 20 -25 0 -35 Z" fill="white" opacity="0.95" />
      {/* Checkmark */}
      <g stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="-8,0 -2,8 12,-8" />
      </g>
    </g>
  </svg>
);

const CareerGuidance = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 200 200">
    <defs>
      <linearGradient id="careerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#f97316', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#dc2626', stopOpacity: 1 }} />
      </linearGradient>
      <filter id="careerShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="8" stdDeviation="12" floodOpacity="0.3" />
      </filter>
    </defs>
    <rect x="20" y="20" width="160" height="160" rx="40" fill="url(#careerGradient)" filter="url(#careerShadow)" />
    {/* Compass */}
    <g transform="translate(100, 100)">
      <circle cx="0" cy="0" r="32" fill="none" stroke="white" strokeWidth="2.5" />
      {/* Compass directions */}
      <g stroke="white" strokeWidth="3" strokeLinecap="round">
        <line x1="0" y1="-28" x2="0" y2="-18" />
        <line x1="28" y1="0" x2="18" y2="0" />
        <line x1="0" y1="28" x2="0" y2="18" />
        <line x1="-28" y1="0" x2="-18" y2="0" />
      </g>
      {/* Center circle */}
      <circle cx="0" cy="0" r="6" fill="white" />
      {/* Needle pointing northeast */}
      <polyline points="0,0 16,-16" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" />
    </g>
  </svg>
);

// --- Custom Hooks ---

// Hook for scroll animations
const useIntersectionObserver = (
  options = { threshold: 0.1, triggerOnce: true }
): [RefObject<HTMLDivElement | null>, boolean] => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        if (options.triggerOnce) observer.unobserve(entry.target);
      } else if (!options.triggerOnce) {
        setIsIntersecting(false);
      }
    }, options);

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options]);

  return [ref, isIntersecting];
};

// Animated Section Wrapper
const AnimatedSection = ({
  children,
  className = '',
  delay = ''
}: {
  children: ReactNode;
  className?: string;
  delay?: string;
}) => {
  const [ref, isVisible] = useIntersectionObserver();
  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} ${className} ${delay}`}
    >
      {children}
    </div>
  );
};

// --- Main Application ---

export default function App() {
  const projects: Array<{
    title: string;
    description: string;
    tags: string[];
    color: string;
    image?: string;
    icon?: ReactNode;
    highlight?: boolean;
  }> = [
    {
      title: "V Finance",
      description: "A comprehensive financial management and tracking platform built to streamline transactions and user portfolios.",
      tags: ["Java", "Web Technologies", "Database"],
      color: "from-purple-500 to-pink-500",
      icon: <VFinance className="w-12 h-12" />,
      highlight: true
    },
    {
      title: "Industry Equipment System",
      description: "An inventory and equipment tracking system designed for industrial applications to monitor machinery status and maintenance.",
      tags: ["C Programming", "System Architecture", "UI/UX"],
      color: "from-blue-500 to-indigo-600",
      icon: <IndustryEquipment className="w-12 h-12" />
    },
    {
      title: "Vote Fraud Detection System",
      description: "A secure and transparent voting application with advanced algorithms to detect and prevent fraudulent activities during elections.",
      tags: ["Java", "Security", "Algorithms"],
      color: "from-emerald-500 to-teal-600",
      icon: <VoteSecurity className="w-12 h-12" />
    },
    {
      title: "Career Guidance System",
      description: "An interactive platform helping students and professionals navigate their career paths through personalized recommendations.",
      tags: ["Web Dev", "API Integration", "Database"],
      color: "from-orange-500 to-red-600",
      icon: <CareerGuidance className="w-12 h-12" />,
      highlight: true
    }
  ];

  const skills = [
    { name: "Java", icon: <Database className="w-6 h-6" />, level: 90 },
    { name: "C Programming", icon: <Terminal className="w-6 h-6" />, level: 85 },
    { name: "HTML & CSS", icon: <Monitor className="w-6 h-6" />, level: 95 },
    { name: "JavaScript", icon: <Code2 className="w-6 h-6" />, level: 88 },
    { name: "React", icon: <Code2 className="w-6 h-6" />, level: 80 },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-amber-500/30 overflow-hidden">
      
      {/* Dynamic Background Animation (ambient glow behind sections) */}
      <div className="fixed inset-0 z-0 opacity-15 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-amber-500 blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-zinc-500 blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/85 backdrop-blur-md border-b border-white/8 transition-all">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-200">
            Prashwin PJ
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        
        {/* Hero Section */}
        <section 
          id="home" 
          className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden bg-black"
        >
          {/* Main Background Image using robust HTML tag instead of CSS bg-image */}
          <div className="absolute inset-0 w-full h-full z-0">
            <img 
              src="image_462f1c.jpg" 
              alt="Prashwin PJ Portrait" 
              className="w-full h-full object-cover object-center scale-105 filter brightness-[0.3] saturate-[0.6] grayscale-[0.3]"
              onError={(e: SyntheticEvent<HTMLImageElement>) => {
                console.error("Primary background image failed to load, falling back...");
                e.currentTarget.src = "PRASHWIN.jpg";
              }}
            />
            {/* Pure black overlays for deep contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
            
            {/* Text Content */}
            <div className="space-y-6">
              <AnimatedSection>
                <h2 className="text-amber-400 font-medium tracking-[0.3em] uppercase text-sm md:text-base mb-2 drop-shadow-md">
                  Welcome to my portfolio
                </h2>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white drop-shadow-2xl">
                  Hi, I'm <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-200 to-white animate-gradient-x drop-shadow-lg">
                    Prashwin PJ
                  </span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay="delay-100">
                <h3 className="text-2xl md:text-3xl font-semibold text-zinc-200 flex items-center justify-center gap-3 drop-shadow-lg">
                  Web Developer , Vlogger , Graphic Designer , AI Tool Professional <Monitor className="w-6 h-6 text-amber-400" />
                </h3>
                <p className="mt-6 text-zinc-300 max-w-2xl mx-auto leading-relaxed text-lg bg-black/70 p-6 rounded-2xl backdrop-blur-md border border-white/10 shadow-2xl">
                  I specialize in building engaging, and highly functional web applications. 
                  Passionate about converting difficult problems into elegant, user-friendly solutions.
                </p>
              </AnimatedSection>

              <AnimatedSection delay="delay-200">
                <div className="flex flex-wrap gap-4 justify-center pt-6">
                  <a href="#projects" className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 hover:bg-amber-300 transition-all shadow-[0_0_25px_rgba(255,255,255,0.15)] flex items-center gap-2">
                    View My Work <ChevronRight className="w-4 h-4" />
                  </a>
                  <a href="#contact" className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-medium hover:bg-white/10 hover:border-white/60 transition-all flex items-center gap-2">
                    Contact Me
                  </a>
                </div>
              </AnimatedSection>
            </div>
            
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-6 bg-zinc-950">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-16">
                <div className="w-12 h-1 bg-amber-400 rounded-full"></div>
                <h2 className="text-4xl font-bold text-white">Tech Stack</h2>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {skills.map((skill, index) => (
                <AnimatedSection key={skill.name} delay={`delay-[${index * 100}ms]`}>
                  <div className="group p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-amber-400/60 hover:bg-white/[0.08] transition-all duration-300 flex flex-col items-center justify-center gap-4 hover:-translate-y-2 cursor-pointer">
                    <div className="p-4 rounded-full bg-zinc-900 group-hover:bg-amber-400/15 text-zinc-400 group-hover:text-amber-300 transition-colors">
                      {skill.icon}
                    </div>
                    <span className="font-medium text-zinc-200 group-hover:text-white transition-colors">{skill.name}</span>
                    
                    {/* Progress Bar Animation */}
                    <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden mt-2">
                      <div 
                        className="h-full bg-gradient-to-r from-amber-400 to-yellow-200 rounded-full transition-all duration-1000 ease-out transform -translate-x-full group-hover:translate-x-0"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6 bg-black">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-16 justify-end">
                <h2 className="text-4xl font-bold text-white">Featured Projects</h2>
                <div className="w-12 h-1 bg-amber-400 rounded-full"></div>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <AnimatedSection key={project.title} delay={index % 2 === 0 ? '' : 'delay-100'}>
                  <div className={`group relative rounded-2xl overflow-hidden bg-zinc-950 border ${project.highlight ? 'border-amber-500/40 hover:border-amber-400/80 shadow-[0_0_30px_rgba(245,158,11,0.08)]' : 'border-white/8 hover:border-white/20'} transition-all duration-500 h-full flex flex-col`}>
                    
                    {/* Image Header with dynamic styling */}
                    {project.image ? (
                      <div className="h-52 w-full bg-zinc-900 flex items-center justify-center p-6 relative overflow-hidden transition-transform duration-500 group-hover:scale-[1.01] border-b border-white/5">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="max-h-full max-w-full object-contain rounded-lg filter drop-shadow-lg transition-transform duration-500 group-hover:scale-105"
                          onError={(e: SyntheticEvent<HTMLImageElement>) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement?.classList.add('bg-gradient-to-br', project.color);
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
                        {project.highlight && (
                          <span className="absolute top-3 right-3 px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-amber-400 text-black rounded-full shadow-lg">
                            Featured
                          </span>
                        )}
                      </div>
                    ) : (
                      <div className={`h-52 w-full bg-gradient-to-br ${project.color} flex items-center justify-center p-6 relative overflow-hidden transition-transform duration-500 group-hover:scale-[1.01]`}>
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 relative z-10">
                          {project.icon || <Code2 className="w-12 h-12 text-white/70" />}
                        </div>
                        {project.highlight && (
                          <span className="absolute top-3 right-3 px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-amber-400 text-black rounded-full shadow-lg">
                            Featured
                          </span>
                        )}
                      </div>
                    )}
                    
                    {/* Animated Border Accent */}
                    <div className="h-[2px] w-full bg-gradient-to-r from-amber-400 to-yellow-200 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    
                    {/* Card Body */}
                    <div className="p-8 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-amber-300 transition-colors flex justify-between items-center">
                          {project.title}
                          <ExternalLink className="w-5 h-5 opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-amber-400" />
                        </h3>
                        <p className="text-zinc-400 leading-relaxed mb-6">
                          {project.description}
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-zinc-300 group-hover:border-amber-400/30 transition-colors">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Hover Glow Ambient Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-950/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Contact/Footer */}
        <section id="contact" className="py-20 px-6 border-t border-white/8 bg-zinc-950">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Let's Work Together</h2>
              <p className="text-zinc-400 mb-10 max-w-2xl mx-auto">
                I'm currently available for new projects and collaborations. 
                Whether you have an idea to build or just want to say hi, my inbox is always open!
              </p>
              
              <div className="flex justify-center gap-6 mb-16">
                <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-400 hover:text-black hover:scale-110 transition-all duration-300 border border-white/10 hover:border-transparent text-zinc-300">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 border border-white/10 hover:border-transparent text-zinc-300">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-500 hover:scale-110 transition-all duration-300 border border-white/10 hover:border-transparent text-zinc-300">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="text-center text-zinc-600 text-sm mt-10">
            <p>© {new Date().getFullYear()} Prashwin PJ.</p>
          </div>
        </section>

      </main>

      {/* Global CSS for custom animations that Tailwind doesn't have by default */}
      <style dangerouslySetInnerHTML={{__html: `
        html { scroll-behavior: smooth; }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        /* Perspective utility for the 3D card wrapper */
        .perspective-1000 {
          perspective: 1000px;
        }
      `}} />
    </div>
  );
}