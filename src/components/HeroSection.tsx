import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { useState, useEffect } from "react";
import { useTheme } from "./useTheme";



export function HeroSection() {
  const { theme } = useTheme();
  const darkMode = theme === "dark";

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeInOut
      }
    }
  };



  // Animated headline phrases
  const phrases = [
    "Freelance Fullstack Web Developer",
    "Transforming ideas into scalable web solutions",
    "Crafting user-friendly websites & webapps"
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 2500);
    return () => clearTimeout(timeout);
  }, [phraseIndex, phrases.length]);

  // Animated tool icons scattered playfully
  const tools = [
    { icon: <FaReact />, color: "text-blue-700", top: "12%", left: "18%", anim: { x: [0, 30, -20, 0], y: [0, -20, 20, 0], rotate: [0, 20, -20, 0] } },
    { icon: <FaNodeJs />, color: "text-green-700", top: "30%", left: "70%", anim: { x: [0, -25, 20, 0], y: [0, 25, -15, 0], rotate: [0, -15, 15, 0] } },
    { icon: <SiTypescript />, color: "text-blue-900", top: "60%", left: "25%", anim: { x: [0, 20, -30, 0], y: [0, -15, 25, 0], rotate: [0, 10, -10, 0] } },
    { icon: <FaJs />, color: "text-yellow-400", top: "55%", left: "60%", anim: { x: [0, -20, 25, 0], y: [0, 20, -20, 0], rotate: [0, 15, -15, 0] } },
    { icon: <SiTailwindcss />, color: "text-blue-800", top: "20%", left: "55%", anim: { x: [0, 15, -25, 0], y: [0, -25, 15, 0], rotate: [0, 20, -20, 0] } },
    { icon: <FaHtml5 />, color: "text-orange-500", top: "75%", left: "40%", anim: { x: [0, 25, -15, 0], y: [0, 15, -25, 0], rotate: [0, -10, 10, 0] } },
    { icon: <FaCss3Alt />, color: "text-blue-600", top: "40%", left: "80%", anim: { x: [0, -30, 20, 0], y: [0, 20, -20, 0], rotate: [0, 10, -10, 0] } },
    { icon: <FaGitAlt />, color: "text-orange-400", top: "70%", left: "75%", anim: { x: [0, 20, -20, 0], y: [0, -20, 20, 0], rotate: [0, -20, 20, 0] } },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated royal blue gradient background with grid and glossy stars */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Animated gradient */}
        <div className="absolute inset-0 animate-gradient-move" style={{
          background: darkMode
            ? 'linear-gradient(120deg, #0f1e4d 0%, #274b8e 60%, #fff 100%)'
            : 'linear-gradient(120deg, #fff 0%, #274b8e 100%)',
          opacity: 0.97,
          filter: 'blur(0px)',
          zIndex: 0,
        }} />
        {/* Glossy animated stars */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {[...Array(32)].map((_, i) => {
            const size = Math.random() * 2 + 2;
            const top = Math.random() * 95;
            const left = Math.random() * 98;
            const duration = 10 + Math.random() * 8; // slower, more organic
            const delay = i * 0.08; // less delay between stars
            return (
              <motion.span
                key={i}
                className="block rounded-full absolute"
                style={{
                  width: size,
                  height: size,
                  top: `${top}%`,
                  left: `${left}%`,
                  background: darkMode ? 'linear-gradient(120deg, #fff, #e0eaff 80%)' : 'linear-gradient(120deg, #222b44, #274b8e 80%)',
                  boxShadow: darkMode
                    ? '0 0 8px 2px #fff8, 0 0 2px 1px #e0eaffcc'
                    : '0 0 8px 2px #274b8e88, 0 0 2px 1px #222b44cc',
                  opacity: 0.85,
                  filter: 'blur(0.5px)',
                }}
                animate={{
                  y: [0, Math.random() * 8 - 4, 0],
                  x: [0, Math.random() * 8 - 4, 0],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration,
                  repeat: Infinity,
                  repeatType: "mirror",
                  delay,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </div>
        {/* Overlay animated grid */}
        <div className="w-full h-full bg-dot-pattern opacity-40 absolute inset-0 z-10" />
        <style>{`
          .bg-dot-pattern {
            background-image: radial-gradient(rgba(0,0,0,0.08) 1px, transparent 1.5px);
            background-size: 32px 32px;
          }
          @keyframes gradient-move {
            0% {
              background-position: 0% 50%;
              filter: hue-rotate(0deg) blur(0px);
            }
            50% {
              background-position: 100% 50%;
              filter: hue-rotate(20deg) blur(2px);
            }
            100% {
              background-position: 0% 50%;
              filter: hue-rotate(0deg) blur(0px);
            }
          }
          .animate-gradient-move {
            animation: gradient-move 12s ease-in-out infinite;
            background-size: 200% 200%;
          }
        `}</style>
      </div>

      {/* Scattered playful animated tool icons */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {tools.map((tool, i) => (
          <motion.div
            key={i}
            className={`absolute text-5xl sm:text-6xl opacity-70 ${tool.color}`}
            style={{ top: tool.top, left: tool.left }}
            animate={tool.anim}
            transition={{
              duration: 5 + i * 0.7,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          >
            {tool.icon}
          </motion.div>
        ))}
      </div>
      {/* Scattered playful animated tool icons (reduced opacity for less distraction) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {tools.map((tool, i) => (
          <motion.div
            key={i}
            className={`absolute text-5xl sm:text-6xl opacity-50 ${tool.color}`}
            style={{ top: tool.top, left: tool.left }}
            animate={tool.anim}
            transition={{
              duration: 5 + i * 0.7,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          >
            {tool.icon}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="flex flex-col items-center gap-4 mb-8">
          <div className="relative drop-shadow-xl rounded-2xl overflow-hidden border-4 border-primary/10 bg-white/70 backdrop-blur-md" style={{ maxWidth: '340px' }}>
            <ImageWithFallback
              src="/picprofile.jpg"
              alt="Thato Mchunu - Full Stack Developer"
              className="w-64 h-48 sm:w-96 sm:h-64 object-cover mx-auto"
            />
          </div>
          <motion.div className="mt-2">
            <Badge variant="secondary" className="mb-2 px-3 py-1 text-xs font-semibold tracking-wide bg-white/80 text-sky-600 border-sky-200 shadow">
              Available for Work
            </Badge>
          </motion.div>
        </motion.div>

        <motion.h1
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-neutral-900 drop-shadow-lg"
          variants={itemVariants}
        >
          Hi, I'm <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-900 bg-clip-text text-transparent">THATO MCHUNU</span>
        </motion.h1>

        <div className="min-h-[60px] sm:min-h-[80px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h2
              key={phraseIndex}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.7, ease: easeInOut }}
              className="text-xl sm:text-3xl font-bold mb-2"
              style={{
                color: darkMode ? '#3b5bdb' : '#274b8e',
                opacity: 0.99,
                textShadow: darkMode
                  ? '0 2px 16px #3b5bdbcc, 0 0 8px #fff8'
                  : '0 2px 16px #274b8ecc, 0 0 8px #fff8',
                filter: 'brightness(1.1)'
              }}
            >
              {phrases[phraseIndex]}
            </motion.h2>
          </AnimatePresence>
        </div>



        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          variants={itemVariants}
        >
          <motion.div
            className="flex flex-col sm:flex-row gap-4 w-full justify-center"
            style={{ width: '100%' }}
          >
            <Button
              size="lg"
              variant="default"
              onClick={scrollToProjects}
              className="w-full sm:w-auto font-bold text-lg rounded-md px-8 py-3 shadow-xl bg-gradient-to-br from-blue-700 via-blue-500 to-blue-900 text-white border-2 border-blue-200 focus:outline-none transition-all duration-300 hover:from-blue-600 hover:to-blue-800 hover:shadow-2xl"
              style={{ boxShadow: '0 4px 32px 0 #3b5bdb80, 0 1.5px 0 #fff8' }}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className={`w-full sm:w-auto font-bold text-lg rounded-md px-8 py-3 border-2 transition-all duration-300
                ${darkMode
                  ? 'hover:bg-gradient-to-br hover:from-blue-300 hover:via-blue-200 hover:to-white hover:text-blue-900 hover:shadow-lg'
                  : 'hover:bg-gradient-to-br hover:from-blue-900 hover:via-blue-700 hover:to-blue-600 hover:text-white hover:shadow-lg'}
              `}
              style={darkMode
                ? { boxShadow: '0 4px 32px 0 #3b5bdb40, 0 1.5px 0 #fff8' }
                : { boxShadow: '0 4px 32px 0 #274b8e40, 0 1.5px 0 #274b8e20' }}
            >
              Get in Touch
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}