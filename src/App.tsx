import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { ThemeProvider } from "./components/ThemeContext";
import { useTheme } from "./components/useTheme";
import { BackToTop } from "./components/BackToTop";
function ThemedApp() {
  const { theme } = useTheme();
  return (
    <div
      className={
        `min-h-screen transition-colors duration-500 ` +
        (theme === "dark"
          ? "bg-gradient-to-br from-[#0f1e4d] via-[#274b8e] to-black text-white"
          : "bg-gradient-to-br from-white via-[#274b8e] to-white text-black")
      }
    >
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <BackToTop />
      </main>
      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Thato Mchunu. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with React+vite & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

export default App;