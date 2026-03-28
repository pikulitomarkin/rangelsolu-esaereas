import { useState, useEffect } from "react";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

const carouselImages = [
  {
    src: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop&auto=format&q=80",
    alt: "Vista aérea captada por drone DJI",
  },
  {
    src: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=800&h=600&fit=crop&auto=format&q=80",
    alt: "Drone DJI Mini em voo",
  },
  {
    src: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop&auto=format&q=80",
    alt: "Drone DJI profissional em operação",
  },
  {
    src: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&h=600&fit=crop&auto=format&q=80",
    alt: "Drone DJI sobrevoando área urbana",
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop&auto=format&q=80",
    alt: "Vista aérea de floresta captada por drone DJI",
  },
  {
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop&auto=format&q=80",
    alt: "Imagem aérea de drone DJI sobre paisagem",
  },
];

const floatingStats = [
  { value: "55+", label: "Anos" },
  { value: "DJI", label: "Premium" },
  { value: "100%", label: "Resultado" },
  { value: "RJ", label: "Local" },
];

const bullets = [
  "Inspeção e mapeamento aéreo para obras e projetos",
  "Cobertura completa de casamentos, festas e eventos",
  "Fotografia e filmagem profissional com drone DJI",
  "Olhar técnico e artístico em cada entrega",
];

function Carousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [paused]);

  const prev = () =>
    setCurrent((c) => (c - 1 + carouselImages.length) % carouselImages.length);
  const next = () =>
    setCurrent((c) => (c + 1) % carouselImages.length);

  return (
    <div
      className="relative h-[420px] w-full rounded-3xl overflow-hidden shadow-2xl md:h-[520px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {carouselImages.map((img, i) => (
        <div
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      ))}

      {/* Prev button */}
      <button
        onClick={prev}
        aria-label="Foto anterior"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-black/40 text-white hover:bg-black/60 transition backdrop-blur-sm"
      >
        <ChevronLeft size={20} strokeWidth={2.5} />
      </button>

      {/* Next button */}
      <button
        onClick={next}
        aria-label="Próxima foto"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-black/40 text-white hover:bg-black/60 transition backdrop-blur-sm"
      >
        <ChevronRight size={20} strokeWidth={2.5} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
        {carouselImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Ir para foto ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-5 h-2 bg-rangel-yellow"
                : "w-2 h-2 bg-white/60 hover:bg-white/90"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function Sobre() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-28 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left column — carousel + floating stat cards */}
          <div className="relative pb-10 lg:pb-16">
            <Carousel />

            {/* Floating 2x2 stat cards — desktop only, abaixo do carousel */}
            <div className="hidden lg:grid grid-cols-4 gap-3 absolute -bottom-2 left-0 right-0 z-30">
              {floatingStats.map((stat) => (
                <div
                  key={stat.value}
                  className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg border border-gray-100 py-3 px-2"
                >
                  <span className="text-xl font-extrabold text-rangel-blue leading-none">
                    {stat.value}
                  </span>
                  <span className="mt-1 text-[10px] font-semibold text-gray-400 uppercase tracking-widest text-center">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — text */}
          <div>
            <p className="text-rangel-blue text-xs font-bold uppercase tracking-[0.22em] mb-3">
              Quem Somos
            </p>
            <h2 className="text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
              Uma trajetória sólida na construção civil,{" "}
              <span className="text-rangel-blue">expandida para capturar os momentos que importam.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-600 md:text-lg">
              A Rangel Soluções Aéreas nasceu de décadas de vivência na construção civil
              e evoluiu para muito além das obras. Hoje, levamos o mesmo rigor técnico e
              atenção ao detalhe para casamentos, aniversários, festas e coberturas de
              eventos — sempre com a perspectiva única que só o voo proporciona.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-500">
              Com equipamentos DJI de última geração, unimos a precisão de quem entende
              engenharia com a sensibilidade de quem sabe contar histórias. Cada projeto —
              seja uma inspeção técnica ou o primeiro baile de uma debutante — recebe o
              mesmo compromisso: entregar imagens que emocionam e informam.
            </p>

            <ul className="mt-8 space-y-3">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-rangel-blue"
                    strokeWidth={2.2}
                  />
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Sobre;
