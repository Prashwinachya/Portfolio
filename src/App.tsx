import { useState, useEffect, useRef, memo, type ReactNode } from 'react';
import { 
  Code2, 
  Terminal, 
  Monitor, 
  Database, 
  ChevronRight, 
  Mail, 
  ExternalLink,
  Menu,
  X,
  Award,
  Calendar,
  ZoomIn
} from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';

// --- Inline SVG brand icons ---
const Github = memo(({ className = '' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
));
Github.displayName = 'Github';

const Linkedin = memo(({ className = '' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
));
Linkedin.displayName = 'Linkedin';

const VFinance = memo(({ className = '' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 200 200">
    <defs>
      <linearGradient id="vfinanceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect x="20" y="20" width="160" height="160" rx="40" fill="url(#vfinanceGradient)" />
    <text x="100" y="125" fontSize="100" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif">V</text>
  </svg>
));
VFinance.displayName = 'VFinance';

const IndustryEquipment = memo(({ className = '' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 200 200">
    <defs>
      <linearGradient id="equipmentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect x="20" y="20" width="160" height="160" rx="40" fill="url(#equipmentGradient)" />
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
));
IndustryEquipment.displayName = 'IndustryEquipment';

const VoteSecurity = memo(({ className = '' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 200 200">
    <defs>
      <linearGradient id="securityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect x="20" y="20" width="160" height="160" rx="40" fill="url(#securityGradient)" />
    <g transform="translate(100, 100)">
      <path d="M 0 -35 C -20 -25 -25 -10 -25 10 C -25 35 0 45 0 45 C 0 45 25 35 25 10 C 25 -10 20 -25 0 -35 Z" fill="white" opacity="0.95" />
      <g stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="-8,0 -2,8 12,-8" />
      </g>
    </g>
  </svg>
));
VoteSecurity.displayName = 'VoteSecurity';

const CareerGuidance = memo(({ className = '' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 200 200">
    <defs>
      <linearGradient id="careerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#f97316', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect x="20" y="20" width="160" height="160" rx="40" fill="url(#careerGradient)" />
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
));
CareerGuidance.displayName = 'CareerGuidance';

// --- Static data (hoisted outside App to avoid re-creation every render) ---
type Project = {
  title: string;
  description: string;
  tags: string[];
  color: string;
  image?: string;
  icon?: ReactNode;
  highlight?: boolean;
  githubUrl?: string;
  websiteUrl?: string;
};

const PROJECTS: Project[] = [
  {
    title: "V Finance",
    description: "A comprehensive financial management and tracking platform built to streamline transactions and user portfolios.",
    tags: ["Java", "Web Technologies", "Database"],
    color: "from-pink-500 to-purple-500",
    icon: <VFinance className="w-12 h-12" />,
    highlight: true,
    githubUrl: "https://github.com/Prashwinachya/V-Finance.git",
    websiteUrl: ""
  },
  {
    title: "Industry Equipment System",
    description: "An inventory and equipment tracking system designed for industrial applications to monitor machinery status and maintenance.",
    tags: ["C Programming", "System Architecture", "UI/UX"],
    color: "from-blue-500 to-cyan-500",
    icon: <IndustryEquipment className="w-12 h-12" />,
    githubUrl: "https://github.com/Prashwinachya/Industrial-Equipment-System.git",
    websiteUrl: ""
  },
  {
    title: "Vote Fraud Detection System",
    description: "A secure and transparent voting application with advanced algorithms to detect and prevent fraudulent activities during elections.",
    tags: ["Java", "Security", "Algorithms"],
    color: "from-cyan-500 to-teal-500",
    icon: <VoteSecurity className="w-12 h-12" />,
    githubUrl: "https://github.com/Prashwinachya/Voting_System.git",
    websiteUrl: ""
  },
  {
    title: "Career Guidance System",
    description: "An interactive platform helping students and professionals navigate their career paths through personalized recommendations.",
    tags: ["Web Dev", "API Integration", "Database"],
    color: "from-orange-500 to-pink-600",
    icon: <CareerGuidance className="w-12 h-12" />,
    highlight: true,
    githubUrl: "https://github.com/Prashwinachya/Career-Guidance-System.git",
    websiteUrl: ""
  },
  {
    title: "Vote Fraud Detection System",
    description: "A secure and transparent voting application with advanced algorithms to detect and prevent fraudulent activities during elections.",
    tags: ["Java", "Security", "Algorithms"],
    color: "from-cyan-500 to-teal-500",
    icon: <VoteSecurity className="w-12 h-12" />,
    githubUrl: "https://github.com/Prashwinachya/Voting_System.git",
    websiteUrl: ""
  },
  {
    title: "Career Guidance System",
    description: "An interactive platform helping students and professionals navigate their career paths through personalized recommendations.",
    tags: ["Web Dev", "API Integration", "Database"],
    color: "from-orange-500 to-pink-600",
    icon: <CareerGuidance className="w-12 h-12" />,
    highlight: true,
    githubUrl: "https://github.com/Prashwinachya/Career-Guidance-System.git",
    websiteUrl: ""
  }
];

const SKILLS = [
  { name: "Java", icon: <Database className="w-6 h-6" />, level: 90 },
  { name: "C Programming", icon: <Terminal className="w-6 h-6" />, level: 85 },
  { name: "HTML & CSS", icon: <Monitor className="w-6 h-6" />, level: 95 },
  { name: "JavaScript", icon: <Code2 className="w-6 h-6" />, level: 88 },
  { name: "React", icon: <Code2 className="w-6 h-6" />, level: 80 },
];

type Certification = {
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl?: string;
  color: string;
};

const CERTIFICATIONS: Certification[] = [
  {
    title: "Full Stack Web Development",
    issuer: "Certification Authority",
    date: "March 2025",
    image: "/certifications/cert1.jpg",
    credentialUrl: "",
    color: "from-pink-500/40 to-purple-500/40",
  },
  {
    title: "Java Programming Masterclass",
    issuer: "Oracle University",
    date: "January 2025",
    image: "/certifications/cert2.jpg",
    credentialUrl: "",
    color: "from-blue-500/40 to-cyan-500/40",
  },
  {
    title: "UI/UX Design Professional",
    issuer: "Google Career Certificates",
    date: "November 2024",
    image: "/certifications/cert3.jpg",
    credentialUrl: "",
    color: "from-orange-500/40 to-pink-500/40",
  },
  {
    title: "AI & Machine Learning Fundamentals",
    issuer: "Coursera - Stanford",
    date: "August 2024",
    image: "/certifications/cert4.jpg",
    credentialUrl: "",
    color: "from-cyan-500/40 to-teal-500/40",
  },
  {
    title: "Database Management System",
    issuer: "Microsoft Learn",
    date: "June 2024",
    image: "/certifications/cert5.jpg",
    credentialUrl: "",
    color: "from-purple-500/40 to-indigo-500/40",
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "Coding Platform",
    date: "April 2024",
    image: "/certifications/cert6.jpg",
    credentialUrl: "",
    color: "from-emerald-500/40 to-cyan-500/40",
  },
];

const NAV_ITEMS = ['Home', 'Skills', 'Projects', 'Certifications', 'Contact'] as const;

const ROLES = [
  { text: "Web Developer", color: "from-pink-400 to-fuchsia-400", icon: <Code2 className="w-5 h-5" /> },
  { text: "Vlogger", color: "from-red-400 to-pink-400", icon: <Monitor className="w-5 h-5" /> },
  { text: "Graphic Designer", color: "from-purple-400 to-fuchsia-400", icon: <Terminal className="w-5 h-5" /> },
  { text: "AI Tool Professional", color: "from-cyan-400 to-blue-400", icon: <Database className="w-5 h-5" /> },
];

const ROLE_CHIPS = [
  { label: 'Web Developer', color: 'from-pink-500/20 to-purple-500/20 border-pink-500/30 text-pink-200', dot: 'bg-pink-400' },
  { label: 'Vlogger', color: 'from-red-500/20 to-pink-500/20 border-red-500/30 text-red-200', dot: 'bg-red-400' },
  { label: 'Graphic Designer', color: 'from-purple-500/20 to-fuchsia-500/20 border-purple-500/30 text-purple-200', dot: 'bg-purple-400' },
  { label: 'AI Tool Pro', color: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-200', dot: 'bg-cyan-400' },
];

const STATS = [
  { label: 'Projects', value: 6, suffix: '+', icon: <Code2 className="w-3.5 h-3.5" />, color: 'text-pink-400' },
  { label: 'Certs', value: 6, suffix: '+', icon: <Award className="w-3.5 h-3.5" />, color: 'text-purple-400' },
  { label: 'Skills', value: 5, suffix: '+', icon: <Monitor className="w-3.5 h-3.5" />, color: 'text-cyan-400' },
];

const PORTRAIT_TAGS = [
  { text: "Web Dev", x: -100, y: -80, delay: 0 },
  { text: "Vlogger", x: 120, y: -60, delay: 0.3 },
  { text: "Designer", x: 100, y: 100, delay: 0.6 },
  { text: "AI Pro", x: -110, y: 80, delay: 0.9 },
];

// --- Count Up (memoized data reference via props) ---
const CountUp = memo(({ to, className = '', duration = 1.6, delay = 0 }: { 
  to: number; 
  className?: string; 
  duration?: number;
  delay?: number;
}) => {
  const [display, setDisplay] = useState(0);
  const startedRef = useRef(false);
  const frameRef = useRef<number | null>(null);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !startedRef.current) {
        startedRef.current = true;
        const startTime = performance.now() + delay * 1000;
        const tick = (now: number) => {
          if (now < startTime) { frameRef.current = requestAnimationFrame(tick); return; }
          const t = Math.min(1, (now - startTime) / (duration * 1000));
          const eased = 1 - Math.pow(1 - t, 3);
          setDisplay(Math.round(eased * to));
          if (t < 1) frameRef.current = requestAnimationFrame(tick);
        };
        frameRef.current = requestAnimationFrame(tick);
      }
    }, { threshold: 0.2 });
    io.observe(el);
    return () => {
      io.disconnect();
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [to, duration, delay]);

  return <span ref={ref} className={className}>{display}</span>;
});
CountUp.displayName = 'CountUp';

// --- Role Carousel (FIXED: single AnimatePresence, not inside map) ---
const RoleCarousel = memo(() => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % ROLES.length), 3000);
    return () => clearInterval(t);
  }, []);

  const r = ROLES[idx];
  return (
    <div className="mt-5 flex items-center justify-center lg:justify-start gap-3 min-h-[2.25rem]">
      <span className="text-lg md:text-xl text-zinc-400 font-medium hidden sm:inline">Crafting as</span>
      <span className="inline-flex items-center gap-3 bg-white/[0.025] border border-white/10 rounded-full px-5 py-2 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -18, filter: 'blur(8px)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2"
          >
            <span className={`bg-clip-text text-transparent bg-gradient-to-r ${r.color}`}>
              {r.icon}
            </span>
            <span className={`text-base md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${r.color}`}>
              {r.text}
            </span>
          </motion.div>
        </AnimatePresence>
      </span>
    </div>
  );
});
RoleCarousel.displayName = 'RoleCarousel';

// --- Custom Cursor (optimized: passive listener, softer springs) ---
const CustomCursor = memo(() => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cursorXSpring = useSpring(cursorX, { damping: 40, stiffness: 300, mass: 0.6 });
  const cursorYSpring = useSpring(cursorY, { damping: 40, stiffness: 300, mass: 0.6 });

  useEffect(() => {
    let raf = 0;
    let lastX = -100;
    let lastY = -100;
    const moveCursor = (e: MouseEvent) => {
      lastX = e.clientX - 16;
      lastY = e.clientY - 16;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          cursorX.set(lastX);
          cursorY.set(lastY);
          raf = 0;
        });
      }
    };
    window.addEventListener("mousemove", moveCursor, { passive: true });
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-pink-500 pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: cursorXSpring, y: cursorYSpring, willChange: 'transform' }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: cursorX, y: cursorY, willChange: 'transform' }}
      />
    </>
  );
});
CustomCursor.displayName = 'CustomCursor';

// --- Magnetic Button ---
const MagneticButton = memo(({ children, className = '', href, target, rel, onClick }: { 
  children: ReactNode; 
  className?: string; 
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = useRef<HTMLAnchorElement>(null);
  let raf = 0;

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width - 0.5) * 2;
    const yPct = (mouseY / height - 0.5) * 2;
    const nx = xPct * 20;
    const ny = yPct * 20;
    if (!raf) {
      raf = requestAnimationFrame(() => {
        x.set(nx);
        y.set(ny);
        raf = 0;
      });
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      target={target}
      rel={rel}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y, willChange: 'transform' }}
    >
      {children}
    </motion.a>
  );
});
MagneticButton.displayName = 'MagneticButton';

// --- 3D Card ---
const Card3D = memo(({ children, className = '' }: { children: ReactNode; className?: string; highlight?: boolean }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);
  const ref = useRef<HTMLDivElement>(null);
  let raf = 0;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const nx = e.clientX - rect.left - centerX;
    const ny = e.clientY - rect.top - centerY;
    if (!raf) {
      raf = requestAnimationFrame(() => {
        x.set(nx);
        y.set(ny);
        raf = 0;
      });
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", willChange: 'transform' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      <div style={{ transform: "translateZ(20px)" }}>{children}</div>
    </motion.div>
  );
});
Card3D.displayName = 'Card3D';

// --- Animated Section Wrapper ---
const AnimatedSection = memo(({
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
});
AnimatedSection.displayName = 'AnimatedSection';

// --- Floating Shapes (REDUCED: 11 -> 4 elements, lower complexity) ---
const FloatingShapes = memo(() => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`ring-${i}`}
          className="absolute rounded-full border border-pink-500/15"
          style={{
            width: 140 + i * 140,
            height: 140 + i * 140,
            left: `${15 + i * 25}%`,
            top: `${25 + i * 20}%`,
            willChange: "transform, opacity",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.6,
          }}
        />
      ))}
      
      <motion.div
        className="absolute text-cyan-400/20"
        style={{
          left: `65%`,
          top: `35%`,
          fontSize: `60px`,
          willChange: "transform, opacity",
        }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
          opacity: [0.08, 0.25, 0.08],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ⬡
      </motion.div>

      <motion.div
        className="absolute h-0.5 bg-gradient-to-r from-transparent via-pink-500/25 to-transparent"
        style={{
          width: `320px`,
          left: `15%`,
          top: `55%`,
          willChange: "transform, opacity",
        }}
        animate={{
          x: [0, 60, 0],
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
});
FloatingShapes.displayName = 'FloatingShapes';

// --- 3D Portrait (optimized: removed scan-line, image breathing loop, and blurred halo) ---
const Portrait3D = memo(() => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-200, 200], [10, -10]);
  const rotateY = useTransform(x, [-200, 200], [-10, 10]);
  const scale = useSpring(1, { stiffness: 250, damping: 28 });
  const ref = useRef<HTMLDivElement>(null);
  let raf = 0;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const nx = e.clientX - rect.left - cx;
    const ny = e.clientY - rect.top - cy;
    if (!raf) {
      raf = requestAnimationFrame(() => {
        x.set(nx);
        y.set(ny);
        raf = 0;
      });
    }
  };

  const handleMouseEnter = () => { scale.set(1.05); };
  const handleMouseLeave = () => { x.set(0); y.set(0); scale.set(1); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, scale, transformStyle: "preserve-3d", willChange: 'transform' }}
      className="relative"
    >
      <motion.div
        className="absolute -inset-4 rounded-full"
        style={{
          background: "conic-gradient(from 0deg, #ec4899, #8b5cf6, #06b6d4, #ec4899)",
          filter: "blur(22px)",
          opacity: 0.55,
          willChange: "transform",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm">
        <img
          src="/PRASHWIN.jpg"
          alt="Prashwin PJ"
          className="w-full h-full object-cover"
          style={{ transform: "translateZ(30px)" }}
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(236,72,153,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(236,72,153,0.03) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }} />
      </div>

      {PORTRAIT_TAGS.map((tag, i) => (
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
});
Portrait3D.displayName = 'Portrait3D';

// --- Magnetic Nav Link ---
const MagneticNavLink = memo(({ 
  children, 
  className = '', 
  href, 
  onClick,
  isActive 
}: { 
  children: ReactNode; 
  className?: string; 
  href: string;
  onClick?: () => void;
  isActive?: boolean;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = useRef<HTMLAnchorElement>(null);
  let raf = 0;

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const nx = ((e.clientX - rect.left) / width - 0.5) * 2 * 12;
    const ny = ((e.clientY - rect.top) / height - 0.5) * 2 * 12;
    if (!raf) {
      raf = requestAnimationFrame(() => {
        x.set(nx);
        y.set(ny);
        raf = 0;
      });
    }
  };

  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y, willChange: 'transform' }}
      whileHover={{ color: '#ffffff' }}
    >
      <span className="relative inline-block">
        {children}
        <motion.span
          className="absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400"
          initial={{ width: 0 }}
          animate={{ width: isActive ? '100%' : 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </span>
    </motion.a>
  );
});
MagneticNavLink.displayName = 'MagneticNavLink';

// --- Main Application ---
export default function App() {
  const [isDesktop, setIsDesktop] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  // --- Resize detection (throttled via rAF) ---
  useEffect(() => {
    let raf = 0;
    const checkDesktop = () => {
      if (!raf) {
        raf = requestAnimationFrame(() => {
          setIsDesktop(window.matchMedia('(pointer: fine) and (min-width: 768px)').matches);
          raf = 0;
        });
      }
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop, { passive: true });
    return () => {
      window.removeEventListener('resize', checkDesktop);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // --- Scroll handler: rAF batched, only setState when values actually differ ---
  useEffect(() => {
    let ticking = false;
    let lastScrolled = false;
    let lastProgress = -1;
    let lastActive = 'home';
    const sections = NAV_ITEMS.map(i => i.toLowerCase());

    const update = () => {
      const y = window.scrollY;
      const newScrolled = y > 20;
      if (newScrolled !== lastScrolled) {
        lastScrolled = newScrolled;
        setScrolled(newScrolled);
      }

      const doc = document.documentElement;
      const h = doc.scrollHeight - doc.clientHeight;
      const pct = h > 0 ? Math.round(((y || document.body.scrollTop) / h) * 100) : 0;
      if (pct !== lastProgress) {
        lastProgress = pct;
        setScrollProgress(pct);
      }

      let cur = 'home';
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.top <= 150) cur = s;
        }
      }
      if (cur !== lastActive) {
        lastActive = cur;
        setActiveSection(cur);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-pink-500/30 overflow-x-hidden">
      
      {isDesktop && <CustomCursor />}
      
      {/* Global ambient blobs - GPU promoted */}
      <div className="fixed inset-0 z-0 opacity-15 pointer-events-none">
        <motion.div 
          className="absolute top-[-10%] left-[-10%] w-[35%] h-[35%] rounded-full bg-pink-500 blur-[120px]"
          style={{ willChange: "transform" }}
          animate={{ x: [0, 60, 0], y: [0, 30, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-[-10%] right-[-10%] w-[35%] h-[35%] rounded-full bg-cyan-500 blur-[120px]"
          style={{ willChange: "transform" }}
          animate={{ x: [0, -60, 0], y: [0, -30, 0] }}
          transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(236,72,153,0.1)]' 
            : 'bg-black/60 backdrop-blur-md border-b border-transparent'
        }`}
      >
        <motion.div 
          className="h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 origin-left"
          style={{ scaleX: scrollProgress / 100, willChange: 'transform' }}
        />
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.a 
            href="#home"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="relative text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 group"
          >
            <span className="relative z-10">Prashwin PJ</span>
            <motion.div
              className="absolute -inset-2 rounded-xl bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          </motion.a>

          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-1 mr-4 px-1.5 py-1 rounded-full bg-white/[0.03] border border-white/5">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <MagneticNavLink
                    href={`#${item.toLowerCase()}`}
                    isActive={activeSection === item.toLowerCase()}
                    className="relative px-4 py-2 text-sm font-medium text-zinc-400 rounded-full transition-colors"
                  >
                    {item}
                  </MagneticNavLink>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-1.5">
              {[
                { icon: <Github className="w-4 h-4" />, href: "https://github.com/Prashwinachya", label: "GitHub" as const },
                { icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/in/prashwinpj/", label: "LinkedIn" as const },
                { icon: <Mail className="w-4 h-4" />, href: "mailto:prashwinpvt12@gmail.com", label: "Email" as const },
              ].map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.08 }}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.92 }}
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-zinc-400 border border-white/5 bg-white/[0.02] transition-all duration-300 ${
                    social.label === 'GitHub' ? 'hover:text-white hover:bg-white/10 hover:border-white/20' :
                    social.label === 'LinkedIn' ? 'hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/30' :
                    'hover:text-pink-400 hover:bg-pink-500/10 hover:border-pink-500/30'
                  }`}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.92 }}
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-zinc-300 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={mobileMenuOpen ? 'close' : 'menu'}
                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                transition={{ duration: 0.2 }}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden border-t border-white/5 bg-black/95 backdrop-blur-xl"
            >
              <div className="px-6 py-6 space-y-2">
                {NAV_ITEMS.map((item, i) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center justify-between px-5 py-4 rounded-xl font-medium transition-all duration-300 ${
                      activeSection === item.toLowerCase()
                        ? 'bg-gradient-to-r from-pink-500/15 via-purple-500/10 to-cyan-500/15 text-white border border-pink-500/20'
                        : 'text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        activeSection === item.toLowerCase()
                          ? 'bg-gradient-to-r from-pink-500 to-cyan-400'
                          : 'bg-zinc-600'
                      }`} />
                      {item}
                    </span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${
                      activeSection === item.toLowerCase() ? 'text-pink-400 translate-x-0' : 'opacity-0 -translate-x-2'
                    }`} />
                  </motion.a>
                ))}

                <div className="pt-5 mt-5 border-t border-white/5">
                  <p className="text-xs text-zinc-500 uppercase tracking-widest mb-3 px-2">Connect</p>
                  <div className="flex gap-3">
                    {[
                      { icon: <Github className="w-5 h-5" />, href: "https://github.com/Prashwinachya", bg: "hover:bg-white hover:text-black" },
                      { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/prashwinpj/", bg: "hover:bg-blue-600" },
                      { icon: <Mail className="w-5 h-5" />, href: "mailto:prashwinpvt12@gmail.com", bg: "hover:bg-pink-500" },
                    ].map((social) => (
                      <motion.a
                        key={social.href}
                        href={social.href}
                        target={social.href.startsWith("http") ? "_blank" : undefined}
                        rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className={`flex-1 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 transition-all ${social.bg}`}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <main className="relative z-10">
        
        {/* Hero */}
        <section 
          id="home" 
          className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 px-6 overflow-hidden bg-black"
        >
          {isDesktop && <FloatingShapes />}

          <div className="absolute top-[20%] left-[5%] w-72 h-72 rounded-full bg-pink-600/[0.07] blur-[100px] pointer-events-none" />
          <div className="absolute bottom-[15%] right-[8%] w-80 h-80 rounded-full bg-cyan-500/[0.06] blur-[120px] pointer-events-none" />

          <div 
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: "linear-gradient(rgba(236,72,153,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.6) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
              WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
            }}
          />
          
          <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            <div className="flex-1 space-y-7 text-center lg:text-left w-full">
              <AnimatedSection>
                <motion.div
                  initial={{ letterSpacing: "1.2em", opacity: 0, y: -20 }}
                  whileInView={{ letterSpacing: "0.35em", opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                  className="flex justify-center lg:justify-start"
                >
                  <span className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-pink-500/10 via-purple-500/5 to-cyan-500/10 border border-white/10 text-pink-400 font-semibold tracking-[0.35em] uppercase text-xs md:text-sm">
                    <span className="relative flex w-2 h-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75" />
                      <span className="relative inline-flex rounded-full w-2 h-2 bg-gradient-to-r from-pink-500 to-cyan-400" />
                    </span>
                    Welcome to my portfolio
                  </span>
                </motion.div>
                
                <motion.h1 
                  className="mt-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight"
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="block text-white drop-shadow-[0_4px_24px_rgba(255,255,255,0.08)]">Hi, I'm</span>
                  <span className="relative inline-block mt-2">
                    <motion.span 
                      className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-300 blur-[2px] opacity-60"
                      aria-hidden="true"
                    >
                      Prashwin PJ
                    </motion.span>
                    <motion.span 
                      className="relative bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-fuchsia-400 to-cyan-300"
                      animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                      style={{ backgroundSize: '220% 220%', willChange: 'background-position' }}
                    >
                      Prashwin PJ
                    </motion.span>
                  </span>
                </motion.h1>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <RoleCarousel />

                <motion.div 
                  className="mt-7 flex flex-wrap gap-2.5 justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  {ROLE_CHIPS.map((chip, i) => (
                    <motion.span
                      key={chip.label}
                      initial={{ opacity: 0, scale: 0.85, y: 10 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.08, type: 'spring', stiffness: 350, damping: 20 }}
                      whileHover={{ y: -3, scale: 1.04 }}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${chip.color} border backdrop-blur-sm text-sm font-medium`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${chip.dot}`} />
                      {chip.label}
                    </motion.span>
                  ))}
                </motion.div>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.35 }}
                  className="mt-7 text-zinc-300/90 max-w-xl mx-auto lg:mx-0 leading-relaxed text-[15px] md:text-lg"
                >
                  I specialize in building <span className="text-white font-semibold">engaging</span>, and 
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-cyan-300 font-semibold mx-1">highly functional</span> 
                  web applications. Passionate about converting difficult problems into 
                  <span className="text-white font-medium ml-1">elegant, user-friendly</span> solutions.
                </motion.p>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="mt-3 grid grid-cols-3 gap-3 md:gap-5 max-w-lg mx-auto lg:mx-0">
                  {STATS.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.1, type: 'spring', stiffness: 300, damping: 22 }}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="group relative rounded-2xl bg-white/[0.02] border border-white/8 hover:border-white/15 p-3 md:p-4 overflow-hidden transition-colors"
                    >
                      <div className={`absolute -top-10 -right-10 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity ${
                        i === 0 ? 'bg-pink-500/10' : i === 1 ? 'bg-purple-500/10' : 'bg-cyan-500/10'
                      }`} />
                      <div className={`inline-flex items-center gap-1.5 text-[10px] md:text-xs uppercase tracking-widest font-semibold text-zinc-500 ${stat.color}`}>
                        {stat.icon}
                        {stat.label}
                      </div>
                      <div className="mt-2 flex items-baseline gap-0.5">
                        <CountUp to={stat.value} className="text-2xl md:text-3xl font-black text-white" />
                        <span className={`text-xl md:text-2xl font-black ${stat.color}`}>{stat.suffix}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.55}>
                <div className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start pt-6">
                  <MagneticButton 
                    href="#projects" 
                    className="group relative px-7 md:px-9 py-3.5 rounded-full text-black font-bold overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white via-pink-100 to-white bg-[length:200%_100%] animate-gradient-x" />
                    <motion.span
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ boxShadow: '0 0 40px rgba(236,72,153,0.35), 0 0 80px rgba(6,182,212,0.15)' }}
                    />
                    <span className="relative flex items-center gap-2.5">
                      <span className="tracking-tight">View My Work</span>
                      <motion.span
                        className="inline-flex w-6 h-6 rounded-full bg-black text-white items-center justify-center"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <ChevronRight className="w-3.5 h-3.5" />
                      </motion.span>
                    </span>
                  </MagneticButton>

                  <MagneticButton 
                    href="#certifications" 
                    className="relative px-7 md:px-8 py-3.5 rounded-full overflow-hidden text-white font-semibold border border-white/15 hover:border-white/25 transition-all"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-500/12 to-cyan-500/0 opacity-0 hover:opacity-100 transition-opacity duration-500" />
                    <span className="relative flex items-center gap-2">
                      <Award className="w-4 h-4 text-pink-400" />
                      Certifications
                    </span>
                  </MagneticButton>

                  <MagneticButton 
                    href="https://drive.google.com/file/d/1w2k1V3_6lDGBuyYH7f3gv3-TLVYpCVr4/view?usp=sharing" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative px-7 md:px-8 py-3.5 rounded-full overflow-hidden text-white font-medium border border-white/15 hover:border-white/25 transition-all flex items-center gap-2"
                  >
                    <span className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity" />
                    <span className="relative flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 7V3.5L18.5 9H13z"/>
                      </svg>
                      My Resume
                    </span>
                  </MagneticButton>
                </div>

                <div className="mt-5 flex flex-wrap gap-2 justify-center lg:justify-start text-xs text-zinc-500">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Available for freelance
                  </span>
                  <span className="text-zinc-700">·</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Mail className="w-3 h-3" />
                    prashwinpvt12@gmail.com
                  </span>
                </div>
              </AnimatedSection>
            </div>

            {/* Right: Portrait (removed blurred outer conic halo, kept single orbit ring) */}
            <div className="flex-1 flex justify-center w-full -mt-2 md:-mt-6 lg:-mt-10">
              <AnimatedSection delay={0.4}>
                <div className="relative -translate-y-2 md:-translate-y-4 lg:-translate-y-6">
                  <motion.div
                    className="absolute -inset-6 rounded-full border border-white/[0.06] pointer-events-none"
                    animate={{ rotate: -360 }}
                    style={{ willChange: 'transform' }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  >
                    <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.7)]" />
                    <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.7)]" />
                    <span className="absolute -bottom-1.5 left-1/3 w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_12px_rgba(139,92,246,0.7)]" />
                  </motion.div>

                  <Portrait3D />
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500">Scroll</span>
            <motion.a
              href="#skills"
              className="relative w-6 h-10 rounded-full border-2 border-zinc-700 flex justify-center pt-1.5 overflow-hidden"
              whileHover={{ borderColor: 'rgba(236,72,153,0.6)' }}
            >
              <motion.span
                className="w-1 h-2 rounded-full bg-gradient-to-b from-pink-500 to-cyan-400"
                animate={{ y: [0, 18, 0], opacity: [1, 0.2, 1] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.a>
          </motion.div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-24 px-6 bg-zinc-950">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-16">
                <div className="w-12 h-1 bg-pink-500 rounded-full"></div>
                <h2 className="text-4xl font-bold text-white">Tech Stack</h2>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {SKILLS.map((skill, index) => (
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

        {/* Projects */}
        <section id="projects" className="py-24 px-6 bg-black">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-16 justify-end">
                <h2 className="text-4xl font-bold text-white">Featured Projects</h2>
                <div className="w-12 h-1 bg-pink-500 rounded-full"></div>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              {PROJECTS.map((project, index) => (
                <AnimatedSection key={`${project.title}-${index}`} delay={index * 0.15}>
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

                        <div className="flex flex-wrap gap-3 mt-6">
                          <motion.a
                            href={project.githubUrl || undefined}
                            target={project.githubUrl ? '_blank' : undefined}
                            rel={project.githubUrl ? 'noopener noreferrer' : undefined}
                            onClick={(e) => { if (!project.githubUrl) e.preventDefault(); }}
                            whileHover={project.githubUrl ? { scale: 1.03, y: -2 } : undefined}
                            className={`inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full border text-sm font-medium transition-all ${project.githubUrl ? 'border-pink-500/40 bg-pink-500/10 text-pink-300 hover:bg-pink-500/20' : 'border-white/10 bg-white/5 text-zinc-500 cursor-not-allowed'}`}
                          >
                            <Code2 className="w-4 h-4" />
                            <span>Source Code</span>
                          </motion.a>

                          <motion.a
                            href={project.websiteUrl || undefined}
                            target={project.websiteUrl ? '_blank' : undefined}
                            rel={project.websiteUrl ? 'noopener noreferrer' : undefined}
                            onClick={(e) => { if (!project.websiteUrl) e.preventDefault(); }}
                            whileHover={project.websiteUrl ? { scale: 1.03, y: -2 } : undefined}
                            className={`inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full border text-sm font-medium transition-all ${project.websiteUrl ? 'border-cyan-500/40 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20' : 'border-white/10 bg-white/5 text-zinc-500 cursor-not-allowed'}`}
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Website</span>
                          </motion.a>
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

        {/* Certifications */}
        <section id="certifications" className="py-24 px-6 bg-zinc-950 relative overflow-hidden">
          <div className="absolute top-[-15%] right-[-10%] w-[30%] h-[45%] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[30%] h-[45%] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
          
          <div className="max-w-6xl mx-auto relative">
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-16">
                <div className="w-12 h-1 bg-gradient-to-r from-pink-500 to-cyan-400 rounded-full"></div>
                <div>
                  <h2 className="text-4xl font-bold text-white flex items-center gap-3">
                    Certifications
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-pink-500/20 to-cyan-500/20 border border-pink-500/30">
                      <Award className="w-5 h-5 text-pink-400" />
                    </span>
                  </h2>
                  <p className="text-zinc-400 mt-2 ml-0.5">Professional achievements and verified credentials</p>
                </div>
              </div>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {CERTIFICATIONS.map((cert, index) => (
                <AnimatedSection key={cert.title + index} delay={index * 0.08}>
                  <Card3D>
                    <motion.div 
                      onClick={() => setSelectedCert(index)}
                      className="group relative rounded-2xl overflow-hidden bg-zinc-950 border border-white/8 hover:border-pink-500/30 transition-all duration-500 h-full flex flex-col cursor-pointer"
                      whileHover={{ y: -6 }}
                    >
                      <div className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${cert.color} border-b border-white/5`}>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_50%)]" />
                        
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 transition-opacity duration-300">
                          <motion.img
                            src={cert.image}
                            alt={cert.title}
                            className="absolute inset-0 w-full h-full object-cover rounded-lg"
                            onError={(e) => {
                              const target = e.currentTarget as HTMLImageElement;
                              target.style.display = 'none';
                              const fallback = target.nextElementSibling as HTMLElement;
                              if (fallback) fallback.style.display = 'flex';
                            }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.6 }}
                          />
                          <div className="absolute inset-0 flex-col items-center justify-center p-6 hidden">
                            <div className="w-20 h-20 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-4">
                              <Award className="w-10 h-10 text-white/90" />
                            </div>
                            <p className="text-white/70 text-sm font-medium text-center">Drop your certificate photo here</p>
                            <code className="mt-2 px-3 py-1 rounded-md bg-black/40 border border-white/10 text-[11px] text-white/50 font-mono">
                              {cert.image.replace('/certifications/', '')}
                            </code>
                          </div>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90" />
                        
                        <motion.div 
                          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-100 scale-75"
                        >
                          <ZoomIn className="w-4 h-4" />
                        </motion.div>

                        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                          <motion.div 
                            initial={{ x: -10, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 + 0.2 }}
                            className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center gap-1.5 text-[11px] text-zinc-300 font-medium"
                          >
                            <Calendar className="w-3 h-3 text-pink-400" />
                            {cert.date}
                          </motion.div>
                        </div>

                        <motion.div
                          className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400"
                          initial={{ scaleX: 0, transformOrigin: 'left' }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.5, ease: 'easeOut' }}
                        />
                      </div>
                      
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-lg font-bold mb-1.5 text-white group-hover:text-pink-300 transition-colors leading-tight">
                            {cert.title}
                          </h3>
                          <p className="text-sm text-zinc-400 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                            {cert.issuer}
                          </p>
                        </div>

                        <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                          <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold">
                            View Credential
                          </span>
                          <motion.div
                            className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:bg-pink-500/15 group-hover:border-pink-500/40 group-hover:text-pink-300 transition-all duration-300"
                            whileHover={{ x: 2 }}
                          >
                            <ChevronRight className="w-4 h-4" />
                          </motion.div>
                        </div>
                      </div>
                      
                      <div className={`absolute inset-0 bg-gradient-to-t ${cert.color} opacity-0 group-hover:opacity-[0.07] transition-opacity duration-500 pointer-events-none`}></div>
                    </motion.div>
                  </Card3D>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedCert !== null && CERTIFICATIONS[selectedCert] && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCert(null)}
                className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="fixed inset-4 md:inset-12 z-[101] pointer-events-none flex items-center justify-center"
              >
                <div className="w-full max-w-5xl max-h-full pointer-events-auto rounded-3xl overflow-hidden bg-zinc-950 border border-white/10 shadow-2xl flex flex-col">
                  <div className="flex items-center justify-between px-5 md:px-8 py-4 border-b border-white/8 bg-black/40 backdrop-blur-sm">
                    <div className="min-w-0">
                      <h3 className="text-base md:text-xl font-bold text-white truncate">
                        {CERTIFICATIONS[selectedCert].title}
                      </h3>
                      <p className="text-xs md:text-sm text-zinc-400 mt-0.5 truncate flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        {CERTIFICATIONS[selectedCert].issuer}
                        <span className="text-zinc-600">·</span>
                        <Calendar className="w-3 h-3 text-pink-400 shrink-0" />
                        {CERTIFICATIONS[selectedCert].date}
                      </p>
                    </div>
                    <motion.button
                      onClick={() => setSelectedCert(null)}
                      whileHover={{ scale: 1.08, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      className="shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                      aria-label="Close"
                    >
                      <X className="w-5 h-5" />
                    </motion.button>
                  </div>
                  <div className="flex-1 overflow-auto bg-black/60 p-4 md:p-10">
                    <div className={`relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] bg-gradient-to-br ${CERTIFICATIONS[selectedCert].color}`}>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.15),transparent_60%)]" />
                      <motion.img
                        src={CERTIFICATIONS[selectedCert].image}
                        alt={CERTIFICATIONS[selectedCert].title}
                        className="absolute inset-0 w-full h-full object-contain p-2 md:p-6"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                      />
                      <div className="absolute inset-0 flex-col items-center justify-center p-8 hidden">
                        <div className="w-28 h-28 md:w-36 md:h-36 rounded-3xl bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-6">
                          <Award className="w-14 h-14 md:w-18 md:h-18 text-white/90" />
                        </div>
                        <h4 className="text-white/80 text-base md:text-xl font-semibold mb-3">Certificate preview placeholder</h4>
                        <p className="text-zinc-400 text-sm mb-5 text-center max-w-md">
                          Add your certificate image to the <span className="font-mono text-pink-300 bg-white/5 px-2 py-0.5 rounded">public/certifications/</span> folder
                        </p>
                        <code className="px-4 py-2 rounded-lg bg-black/50 border border-white/10 text-xs md:text-sm text-white/60 font-mono">
                          {CERTIFICATIONS[selectedCert].image.replace('/certifications/', '')}
                        </code>
                      </div>
                    </div>
                    {CERTIFICATIONS[selectedCert].credentialUrl && (
                      <div className="mt-6 flex justify-center">
                        <motion.a
                          href={CERTIFICATIONS[selectedCert].credentialUrl!}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-semibold shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 transition-shadow"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Verify Credential
                        </motion.a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Contact/Footer */}
        <section id="contact" className="py-20 px-6 border-t border-white/8 bg-zinc-950">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white text-center">Let's Work Together</h2>
              <p className="text-zinc-400 mb-12 max-w-2xl mx-auto text-center">
                I'm currently available for new projects and collaborations. 
                Whether you have an idea to build or just want to say hi, my inbox is always open!
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <AnimatedSection className="w-full">
                <motion.form 
                  className="space-y-6 bg-black/50 p-8 rounded-2xl border border-white/10"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Thank you for your message! I'll get back to you soon!");
                    e.currentTarget.reset();
                  }}
                >
                  <h3 className="text-xl font-bold text-white mb-4">Send me a message</h3>
                  
                  <div>
                    <label className="block text-sm text-zinc-400 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white focus:outline-none focus:border-pink-500"
                      placeholder="Eeva"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm text-zinc-400 mb-2">Your Email</label>
                    <input 
                      type="email" 
                      required 
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white focus:outline-none focus:border-pink-500"
                      placeholder="eeva@gmail.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm text-zinc-400 mb-2">Message</label>
                    <textarea 
                      rows={5}
                      required 
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white focus:outline-none focus:border-pink-500 resize-none"
                      placeholder="Hello, I'd like to work with you on..."
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-bold hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
                  >
                    Send Message
                  </motion.button>
                </motion.form>
              </AnimatedSection>

              <AnimatedSection delay={0.2} className="w-full">
                <div className="space-y-8">
                  <div className="flex items-center gap-4 p-6 bg-black/50 rounded-2xl border border-white/10">
                    <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-pink-500" />
                    </div>
                    <a 
                      href="mailto:prashwinpvt12@gmail.com" 
                      className="text-zinc-300 hover:text-pink-400 transition-colors"
                    >
                      prashwinpvt12@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-4 p-6 bg-black/50 rounded-2xl border border-white/10">
                    <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-cyan-500" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </div>
                    <a 
                      href="tel:+916360467265" 
                      className="text-zinc-300 hover:text-cyan-400 transition-colors"
                    >
                      +91 6360467265
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-zinc-400 text-sm">Or connect with me:</div>
                  </div>
                  
                  <div className="flex gap-4">
                    {[
                      { icon: <Github className="w-5 h-5" />, color: "hover:bg-white hover:text-black", href: "https://github.com/Prashwinachya" },
                      { icon: <Linkedin className="w-5 h-5" />, color: "hover:bg-blue-600", href: "https://www.linkedin.com/in/prashwinpj/" },
                    ].map((social, i) => (
                      <motion.a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400 }}
                        className={`w-14 h-14 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-transparent text-zinc-300 ${social.color}`}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
          
          <div className="text-center text-zinc-600 text-sm mt-16">
            <p>© {new Date().getFullYear()} Prashwin PJ. All rights reserved.</p>
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
          animation: gradient-x 3.5s ease infinite;
        }

        .perspective-1000 {
          perspective: 1000px;
        }
        
        @media (pointer: coarse) or (max-width: 768px) {
          * { cursor: auto !important; }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}} />
    </div>
  );
}
