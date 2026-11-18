import { Moon, Sun, Menu, X, Languages } from "lucide-react";
import { useState } from "react";

export default function Navbar({
  t,
  lang,
  setLang,
  theme,
  setTheme,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["home", "#home"],
    ["about", "#about"],
    ["skills", "#skills"],
    ["projects", "#projects"],
    ["contact", "#contact"],
  ];

  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        Dev<span>.</span>
      </a>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        {links.map(([key, href]) => (
          <a
            key={key}
            href={href}
            onClick={() => setMenuOpen(false)}
          >
            {t.nav[key]}
          </a>
        ))}
      </div>

      <div className="nav-actions">
        <button
          className="icon-btn"
          onClick={() => setLang(lang === "en" ? "ar" : "en")}
          aria-label="Change language"
        >
          <Languages size={19} />
          <span>{lang === "en" ? "AR" : "EN"}</span>
        </button>

        <button
          className="icon-btn"
          onClick={() =>
            setTheme(theme === "dark" ? "light" : "dark")
          }
          aria-label="Change theme"
        >
          {theme === "dark" ? (
            <Sun size={19} />
          ) : (
            <Moon size={19} />
          )}
        </button>

        <button
          className="icon-btn mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
}