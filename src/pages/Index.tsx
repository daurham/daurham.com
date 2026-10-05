import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");

    if (window.location.hash) {
      window.requestAnimationFrame(() => {
        document
          .querySelector(window.location.hash)
          ?.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation theme={theme} toggleTheme={toggleTheme} />
      <Header />
      <AboutSection />
      <ProjectSection />
      <Footer />
    </div>
  );
};

export default Index;
