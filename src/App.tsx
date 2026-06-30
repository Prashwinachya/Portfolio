import { useState, useEffect, useRef, type ReactNode, type SyntheticEvent, type RefObject } from 'react';
import { 
  Code2, 
  Terminal, 
  Monitor, 
  Database, 
  ChevronRight, 
  Mail, 
  ExternalLink,
  MousePointer2
} from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';

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
        <stop offset="0%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
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
        <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
      </linearGradient>
      <filter id="equipmentShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="8" stdDeviation="12" floodOpacity="0.3" />
      </filter>
    </defs>
    <rect x="20" y="20" width="160" height="160" rx="40" fill="url(#equipmentGradient)" filter="url(#equipmentShadow)" />
    <g transform="translate(100, 100)">
      <circle cx="0" cy="0" r="35" fill="white" opacity="0.2" />
      <circle cx="0" cy="0" r="28" fill="none" stroke="white" strokeWidth="3" />
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
        <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
      </linearGradient>
      <filter id="securityShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="8" stdDeviation="12" floodOpacity="0.3" />
      </filter>
    </defs>
    <rect x="20" y="20" width="160" height="160" rx="40" fill="url(#securityGradient)" filter="url(#securityShadow)" />
    <g transform="translate(100, 100)">
      <path d="M 0 -35 C -20 -25 -25 -10 -25 10 C -25 35 0 45 0 45 C 0 45 25 35 25 10 C 25 -10 20 -25 0 -35 Z" fill="white" opacity="0.95" />
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
        <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
      </linearGradient>
      <filter id="careerShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="8" stdDeviation="12" floodOpacity="0.3" />
      </filter>
    </defs>
    <rect x="20" y="20" width="160" height="160" rx="40" fill="url(#careerGradient)" filter="url(#careerShadow)" />
    <g transform="translate(100, 100)">
      <circle cx="0" cy="0" r="32" fill="none" stroke="white" strokeWidth="2.5" />
      <g stroke="white" strokeWidth="3" strokeLinecap="round">
        <line x1="0" y1="-28" x2="0" y2="-18" />
        <line x1="28" y1="0" x2="18" y2="0" />
        <line x1="0" y1="28" x2="0" y2="18" />
        <line x1="-28" y1="0" x2="-18" y2="0" />
      </g>
      <circle cx="0" cy="0" r="6" fill="white" />
      <polyline points="0,0 16,-16" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" />
    </g>
  </svg>
);

// --- Custom Cursor ---
const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 600 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-pink-500 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
    </>
  );
};

// --- Magnetic Button ---
const MagneticButton = ({ children, href, className = '' }: { children: ReactNode; href?: string; className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const ref = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width - 0.5) * 2;
    const yPct = (mouseY / height - 0.5) * 2;
    x.set(xPct * 20);
    y.set(yPct * 20);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className={className}
    >
      {children}
    </motion.a>
  );
};

// --- 3D Card ---
const Card3D = ({ children, className = '', highlight = false }: { children: ReactNode; className?: string; highlight?: boolean }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX - centerX);
    y.set(mouseY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      <div style={{ transform: "translateZ(20px)" }}>{children}</div>
    </motion.div>
  );
};

// --- Animated Section Wrapper ---
const AnimatedSection = ({
  children,
  className = '',
  delay = 0
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// --- Floating Shapes ---
const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Animated circles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute rounded-full border-2 border-pink-500/20"
          style={{
            width: 100 + i * 80,
            height: 100 + i * 80,
            left: `${10 + i * 12}%`,
            top: `${20 + i * 8}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 6 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
      
      {/* Animated hexagons */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`hex-${i}`}
          className="absolute text-cyan-400/20"
          style={{
            left: `${5 + i * 20}%`,
            top: `${15 + i * 15}%`,
            fontSize: `${40 + i * 20}px`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
        >
          ⬡
        </motion.div>
      ))}

      {/* Floating lines */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-0.5 bg-gradient-to-r from-transparent via-pink-500/30 to-transparent"
          style={{
            width: `${200 + i * 100}px`,
            left: `${i * 15}%`,
            top: `${30 + i * 12}%`,
          }}
          animate={{
            x: [0, 100, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 7 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
};

// --- 3D Portrait Component ---
const Portrait3D = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-200, 200], [10, -10]);
  const rotateY = useTransform(x, [-200, 200], [-10, 10]);
  const scale = useSpring(1, { stiffness: 300, damping: 30 });

  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX - centerX);
    y.set(mouseY - centerY);
  };

  const handleMouseEnter = () => {
    scale.set(1.05);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    scale.set(1);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: "preserve-3d",
      }}
      className="relative"
    >
      {/* Outer glow ring */}
      <motion.div
        className="absolute -inset-4 rounded-full"
        style={{
          background: "conic-gradient(from 0deg, #ec4899, #8b5cf6, #06b6d4, #ec4899)",
          filter: "blur(20px)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Main portrait container */}
      <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm">
        {/* Background image with 3D effect */}
        <motion.img
          src="/PRASHWIN.jpg"
          alt="Prashwin PJ"
          className="w-full h-full object-cover"
          style={{ transform: "translateZ(30px)" }}
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
        
        {/* Scan line effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent"
          animate={{ y: ["0%", "100%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />

        {/* Grid overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(236,72,153,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(236,72,153,0.05) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }} />
      </div>

      {/* Floating tags around portrait */}
      {[
        { text: "Web Dev", x: -100, y: -80, delay: 0 },
        { text: "Vlogger", x: 120, y: -60, delay: 0.3 },
        { text: "Designer", x: 100, y: 100, delay: 0.6 },
        { text: "AI Pro", x: -110, y: 80, delay: 0.9 },
      ].map((tag, i) => (
        <motion.div
          key={i}
          className="absolute px-4 py-2 bg-black/70 backdrop-blur-md rounded-full border border-pink-500/30 text-white text-sm font-semibold"
          style={{
            left: "50%",
            top: "50%",
            x: tag.x,
            y: tag.y,
            transform: "translateZ(50px)",
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: tag.delay, type: "spring" }}
          whileHover={{ scale: 1.1, backgroundColor: "rgba(236,72,153,0.4)" }}
        >
          {tag.text}
        </motion.div>
      ))}
    </motion.div>
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
      color: "from-pink-500 to-purple-500",
      icon: <VFinance className="w-12 h-12" />,
      highlight: true
    },
    {
      title: "Industry Equipment System",
      description: "An inventory and equipment tracking system designed for industrial applications to monitor machinery status and maintenance.",
      tags: ["C Programming", "System Architecture", "UI/UX"],
      color: "from-blue-500 to-cyan-500",
      icon: <IndustryEquipment className="w-12 h-12" />,
    },
    {
      title: "Vote Fraud Detection System",
      description: "A secure and transparent voting application with advanced algorithms to detect and prevent fraudulent activities during elections.",
      tags: ["Java", "Security", "Algorithms"],
      color: "from-cyan-500 to-teal-500",
      icon: <VoteSecurity className="w-12 h-12" />,
    },
    {
      title: "Career Guidance System",
      description: "An interactive platform helping students and professionals navigate their career paths through personalized recommendations.",
      tags: ["Web Dev", "API Integration", "Database"],
      color: "from-orange-500 to-pink-600",
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
    <div className="min-h-screen bg-black text-white font-sans selection:bg-pink-500/30 overflow-x-hidden">
      
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Dynamic Background Animation */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <motion.div 
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-pink-500 blur-[150px]"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-500 blur-[150px]"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 w-full z-50 bg-black/85 backdrop-blur-md border-b border-white/8 transition-all"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400"
          >
            Prashwin PJ
          </motion.div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
            {['Home', 'Skills', 'Projects', 'Contact'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileHover={{ scale: 1.1, color: '#ec4899' }}
                className="hover:text-white transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      <main className="relative z-10">
        
        {/* Hero Section - Innovative Design */}
        <section 
          id="home" 
          className="relative min-h-screen flex flex-col md:flex-row items-center justify-center pt-24 px-6 overflow-hidden bg-black"
        >
          {/* Background elements */}
          <FloatingShapes />
          
          <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 md:gap-20">
            
            {/* Left: Text Content */}
            <div className="flex-1 space-y-8 text-center md:text-left">
              <AnimatedSection>
                <motion.div
                  initial={{ letterSpacing: "0.8em", opacity: 0 }}
                  whileInView={{ letterSpacing: "0.3em", opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5 }}
                >
                  <span className="text-pink-500 font-medium tracking-[0.3em] uppercase text-sm md:text-base mb-4 inline-block drop-shadow-md">
                    Welcome to my portfolio
                  </span>
                </motion.div>
                
                <motion.h1 
                  className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-white drop-shadow-2xl"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Hi, I'm<br />
                  <motion.span 
                    className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-300 drop-shadow-lg"
                    animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    style={{ backgroundSize: '200% 200%' }}
                  >
                    Prashwin PJ
                  </motion.span>
                </motion.h1>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <motion.h3 
                  className="text-2xl md:text-3xl font-semibold text-zinc-200 flex items-center justify-center md:justify-start gap-3 drop-shadow-lg"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  Web Developer · Vlogger · Graphic Designer · AI Tool Professional <Monitor className="w-6 h-6 text-pink-500" />
                </motion.h3>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mt-6 text-zinc-300 max-w-xl mx-auto md:mx-0 leading-relaxed text-lg"
                >
                  I specialize in building engaging, and highly functional web applications. 
                  Passionate about converting difficult problems into elegant, user-friendly solutions.
                </motion.p>
              </AnimatedSection>

              <AnimatedSection delay={0.5}>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-6">
                  <MagneticButton 
                    href="#projects" 
                    className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-pink-400 transition-all shadow-[0_0_25px_rgba(255,255,255,0.15)] flex items-center gap-2 group"
                  >
                    <span>View My Work</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </motion.span>
                  </MagneticButton>
                  <MagneticButton 
                    href="#contact" 
                    className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-medium hover:bg-white/10 hover:border-pink-400/60 transition-all flex items-center gap-2"
                  >
                    Contact Me
                  </MagneticButton>
                </div>
              </AnimatedSection>
            </div>

            {/* Right: 3D Portrait */}
            <div className="flex-1 flex justify-center">
              <AnimatedSection delay={0.4}>
                <Portrait3D />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-6 bg-zinc-950">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-16">
                <div className="w-12 h-1 bg-pink-500 rounded-full"></div>
                <h2 className="text-4xl font-bold text-white">Tech Stack</h2>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {skills.map((skill, index) => (
                <AnimatedSection key={skill.name} delay={index * 0.1}>
                  <motion.div 
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="group p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-pink-500/60 hover:bg-white/[0.08] transition-all duration-300 flex flex-col items-center justify-center gap-4 cursor-pointer"
                  >
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="p-4 rounded-full bg-zinc-900 group-hover:bg-pink-500/15 text-zinc-400 group-hover:text-pink-300 transition-colors"
                    >
                      {skill.icon}
                    </motion.div>
                    <span className="font-medium text-zinc-200 group-hover:text-white transition-colors">{skill.name}</span>
                    
                    <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden mt-2">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-pink-500 to-cyan-400 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
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
                <div className="w-12 h-1 bg-pink-500 rounded-full"></div>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <AnimatedSection key={project.title} delay={index * 0.15}>
                  <Card3D highlight={project.highlight}>
                    <div className={`group relative rounded-2xl overflow-hidden bg-zinc-950 border ${project.highlight ? 'border-pink-500/40 hover:border-pink-400/80 shadow-[0_0_30px_rgba(236,72,153,0.08)]' : 'border-white/8 hover:border-white/20'} transition-all duration-500 h-full flex flex-col`}>
                      
                      {project.image ? (
                        <div className="h-52 w-full bg-zinc-900 flex items-center justify-center p-6 relative overflow-hidden transition-transform duration-500 group-hover:scale-[1.01] border-b border-white/5">
                          <motion.img 
                            src={project.image} 
                            alt={project.title} 
                            className="max-h-full max-w-full object-contain rounded-lg filter drop-shadow-lg"
                            whileHover={{ scale: 1.1, rotate: 2 }}
                            transition={{ duration: 0.5 }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
                          {project.highlight && (
                            <span className="absolute top-3 right-3 px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-pink-500 text-black rounded-full shadow-lg">
                              Featured
                            </span>
                          )}
                        </div>
                      ) : (
                        <div className={`h-52 w-full bg-gradient-to-br ${project.color} flex items-center justify-center p-6 relative overflow-hidden transition-transform duration-500 group-hover:scale-[1.01]`}>
                          <div className="absolute inset-0 bg-black/20"></div>
                          <motion.div 
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            transition={{ duration: 0.5 }}
                            className="transform relative z-10"
                          >
                            {project.icon || <Code2 className="w-12 h-12 text-white/70" />}
                          </motion.div>
                          {project.highlight && (
                            <span className="absolute top-3 right-3 px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-pink-500 text-black rounded-full shadow-lg">
                              Featured
                            </span>
                          )}
                        </div>
                      )}
                      
                      <motion.div 
                        className="h-[2px] w-full bg-gradient-to-r from-pink-500 to-cyan-400"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />
                      
                      <div className="p-8 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-pink-300 transition-colors flex justify-between items-center">
                            {project.title}
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              whileHover={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ExternalLink className="w-5 h-5 text-pink-500" />
                            </motion.div>
                          </h3>
                          <p className="text-zinc-400 leading-relaxed mb-6">
                            {project.description}
                          </p>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.tags.map(tag => (
                            <motion.span 
                              key={tag}
                              whileHover={{ scale: 1.05 }}
                              className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-zinc-300 group-hover:border-pink-400/30 transition-colors"
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-pink-950/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    </div>
                  </Card3D>
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
                {[
                  { icon: <Mail className="w-5 h-5" />, color: "hover:bg-pink-500 hover:text-black" },
                  { icon: <Github className="w-5 h-5" />, color: "hover:bg-white hover:text-black" },
                  { icon: <Linkedin className="w-5 h-5" />, color: "hover:bg-blue-600" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className={`w-12 h-12 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-transparent text-zinc-300 ${social.color}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </AnimatedSection>
          </div>
          
          <div className="text-center text-zinc-600 text-sm mt-10">
            <p>© {new Date().getFullYear()} Prashwin PJ.</p>
          </div>
        </section>

      </main>

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

        .perspective-1000 {
          perspective: 1000px;
        }
        
        @media (pointer: coarse) {
          * { cursor: auto !important; }
        }
      `}} />
    </div>
  );
}
