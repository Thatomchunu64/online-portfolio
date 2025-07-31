import { Button } from "./ui/button";
import { Info, Star, Folder, Mail, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "./useTheme";

const navItems = [
  { name: "About", href: "#about", section: "about", icon: <Info className="mr-2 h-4 w-4" /> },
  { name: "Skills", href: "#skills", section: "skills", icon: <Star className="mr-2 h-4 w-4" /> },
  { name: "Projects", href: "#projects", section: "projects", icon: <Folder className="mr-2 h-4 w-4" /> },
  { name: "Contact", href: "#contact", section: "contact", icon: <Mail className="mr-2 h-4 w-4" /> },
];



export function Navigation() {
  const [activeSection, setActiveSection] = useState<string>("");
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      for (const item of navItems) {
        const section = document.getElementById(item.section);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            current = item.section;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center py-4">
          {/* Logo/Initials on far left, acts as Home navigation */}
          <button
            onClick={() => scrollToSection("#home")}
            className="text-4xl font-extrabold tracking-tight text-primary focus:outline-none mr-10"
            aria-label="Go to Home"
            style={{ letterSpacing: '0.1em' }}
          >
            TM
          </button>
          <div className="flex-1" />
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.href)}
                className={`flex items-center px-4 py-2 rounded-md transition-colors duration-200 relative
                  ${activeSection === item.section
                    ? theme === "dark"
                      ? "text-blue-400 bg-blue-900/30 font-bold after:absolute after:-bottom-1 after:left-2 after:right-2 after:h-0.5 after:bg-blue-400 after:rounded-full"
                      : "text-blue-700 bg-blue-100/60 font-bold after:absolute after:-bottom-1 after:left-2 after:right-2 after:h-0.5 after:bg-blue-700 after:rounded-full"
                    : theme === "dark"
                      ? "hover:text-blue-300 hover:bg-blue-900/20"
                      : "hover:text-blue-700 hover:bg-blue-100/40"}
                `}
                style={{ minWidth: 80 }}
                tabIndex={0}
                aria-current={activeSection === item.section ? "page" : undefined}
              >
                {item.icon}
                {item.name}
                {activeSection === item.section && <span className="ml-1 text-xs">•</span>}
              </Button>
            ))}
            {/* Light/Dark mode toggle icon */}
            <button
              aria-label="Toggle dark mode"
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-full border border-border bg-background hover:bg-accent transition-colors"
              type="button"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-sky-400" />
              ) : (
                <Moon className="w-5 h-5 text-sky-400" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}