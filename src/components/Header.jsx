import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

function Logo() {
  return (
    <svg
      width="140"
      height="40"
      viewBox="0 0 140 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Rangel Aerial Films"
    >
      {/* Drone silhouette */}
      {/* Body */}
      <ellipse cx="20" cy="20" rx="6" ry="3.5" fill="#1A237E"/>
      {/* Left arm */}
      <rect x="5" y="18.5" width="9" height="2" rx="1" fill="#1A237E" opacity="0.85"/>
      {/* Right arm */}
      <rect x="26" y="18.5" width="9" height="2" rx="1" fill="#1A237E" opacity="0.85"/>
      {/* Left rotor */}
      <ellipse cx="7" cy="17.5" rx="5" ry="1.5" fill="#FBC02D" opacity="0.7"/>
      {/* Right rotor */}
      <ellipse cx="33" cy="17.5" rx="5" ry="1.5" fill="#FBC02D" opacity="0.7"/>
      {/* Camera lens */}
      <circle cx="20" cy="20" r="2.2" fill="white" opacity="0.9"/>
      <circle cx="20" cy="20" r="1.1" fill="#1A237E"/>

      {/* RANGEL text */}
      <text
        x="44"
        y="22"
        fontFamily="Montserrat, sans-serif"
        fontWeight="800"
        fontSize="14"
        fill="#1A237E"
        letterSpacing="1.5"
      >RANGEL</text>

      {/* Divider lines + AERIAL FILMS */}
      <line x1="44" y1="26" x2="50" y2="26" stroke="#FBC02D" strokeWidth="0.8"/>
      <text
        x="52"
        y="28"
        fontFamily="Montserrat, sans-serif"
        fontWeight="600"
        fontSize="7"
        fill="#555555"
        letterSpacing="2"
      >AERIAL FILMS</text>
      <line x1="118" y1="26" x2="124" y2="26" stroke="#FBC02D" strokeWidth="0.8"/>
    </svg>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (event, href) => {
    event.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-md bg-white/70 border-b border-white/30 ${
        scrolled ? "shadow-md shadow-black/5" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => handleNavClick(e, "#inicio")}
          className="flex items-center group"
          aria-label="Rangel Aerial Films — Início"
        >
          <Logo />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-gray-500 hover:text-rangel-blue transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={(e) => handleNavClick(e, "#contato")}
            className="ml-2 inline-flex items-center rounded-full bg-rangel-yellow px-5 py-2 text-sm font-bold text-rangel-blue hover:brightness-95 transition-all duration-200 shadow-sm"
          >
            Solicitar Orçamento
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-lg text-rangel-blue focus:outline-none focus:ring-2 focus:ring-rangel-blue/30"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="4" y1="4" x2="18" y2="18" />
              <line x1="18" y1="4" x2="4" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="3" y1="7" x2="19" y2="7" />
              <line x1="3" y1="13" x2="19" y2="13" />
              <line x1="3" y1="19" x2="19" y2="19" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden border-t border-gray-100 bg-white px-6 pb-5 pt-3">
          <div className="flex flex-col gap-1 text-sm font-semibold">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="py-2.5 px-1 text-gray-500 hover:text-rangel-blue transition-colors border-b border-gray-50 last:border-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={(e) => handleNavClick(e, "#contato")}
              className="mt-3 inline-flex justify-center rounded-full bg-rangel-yellow px-5 py-2.5 text-sm font-bold text-rangel-blue hover:brightness-95 transition"
            >
              Solicitar Orçamento
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
