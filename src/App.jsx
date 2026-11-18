import { useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import { translations } from "./data/translations";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [lang, setLang] = useState("en");
  const [theme, setTheme] = useState("dark");

  const t = translations[lang];

  return (
    <div
      className="app"
      data-theme={theme}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <Navbar
        t={t}
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
      />

      <main>
        <Hero t={t} />

        <About t={t} />

        <Skills t={t} />

        <Projects t={t} />

        <Contact t={t} />
      </main>

      <Footer t={t} />

      <SpeedInsights />
    </div>
  );
}