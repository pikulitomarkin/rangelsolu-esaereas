import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Servicos", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (event, href) => {
    event.preventDefault();
    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <a href="#inicio" className="text-2xl font-extrabold font-sans text-rangel-blue tracking-wide">
          Rangel
        </a>

        <button
          type="button"
          className="md:hidden rounded-lg border border-rangel-blue/20 px-3 py-2 text-rangel-blue font-semibold"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-label="Abrir menu"
        >
          Menu
        </button>

        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-rangel-blue">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => handleNavClick(event, item.href)}
              className="hover:text-rangel-yellow transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={(event) => handleNavClick(event, "#contato")}
            className="inline-flex items-center rounded-full bg-rangel-yellow px-5 py-2 text-rangel-blue text-sm font-bold hover:brightness-95 transition"
          >
            Solicitar Orcamento
          </a>
        </nav>
      </div>

      {menuOpen ? (
        <nav className="md:hidden border-t border-rangel-blue/15 bg-white px-6 pb-5 pt-4">
          <div className="flex flex-col gap-3 text-rangel-blue font-semibold">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                className="py-1 hover:text-rangel-yellow transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={(event) => handleNavClick(event, "#contato")}
              className="mt-2 inline-flex justify-center rounded-full bg-rangel-yellow px-5 py-2 text-rangel-blue text-sm font-bold hover:brightness-95 transition"
            >
              Solicitar Orcamento
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

export default Header;
