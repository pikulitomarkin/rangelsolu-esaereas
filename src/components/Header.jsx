import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

function DroneIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="28" height="28" rx="6" fill="#1A237E" />
      <rect x="6" y="10" width="16" height="2.5" rx="1.25" fill="#FBC02D" />
      <rect x="8" y="14" width="12" height="2.5" rx="1.25" fill="#FBC02D" />
      <rect x="10" y="18" width="8" height="2.5" rx="1.25" fill="#FBC02D" />
      <circle cx="6" cy="10" r="2" fill="#ffffff" />
      <circle cx="22" cy="10" r="2" fill="#ffffff" />
      <circle cx="8" cy="19" r="1.5" fill="#ffffff" />
      <circle cx="20" cy="19" r="1.5" fill="#ffffff" />
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
          className="flex items-center gap-2.5 group"
          aria-label="Rangel Soluções Aéreas — Início"
        >
          <DroneIcon />
          <div className="flex flex-col leading-none">
            <span className="text-xl font-extrabold text-rangel-blue tracking-tight">
              Rangel
            </span>
            <span className="hidden sm:block text-[10px] font-medium text-gray-400 uppercase tracking-widest mt-0.5">
              Soluções Aéreas
            </span>
          </div>
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
