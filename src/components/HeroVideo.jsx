function HeroVideo() {
  const handleScroll = (href) => (event) => {
    event.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const stats = [
    { value: "55+", label: "Anos de Experiência" },
    { value: "DJI", label: "Equipamentos Certificados" },
    { value: "RJ", label: "Atendimento Local" },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/image/drone.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/75" />

      {/* Main content — vertically centered */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 mb-8">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rangel-yellow opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-rangel-yellow" />
          </span>
          <span className="text-xs font-semibold text-white tracking-wide uppercase">
            Tecnologia Drone para Construção Civil
          </span>
        </div>

        {/* Headline */}
        <h1 className="max-w-4xl text-4xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">
          Inteligência Aérea para{" "}
          <span className="text-rangel-yellow">Decisões Estratégicas</span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 max-w-2xl text-base text-gray-200 md:text-xl leading-relaxed">
          Inspeção, Mapeamento e Dados Precisos para Construção Civil
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#contato"
            onClick={handleScroll("#contato")}
            className="inline-flex items-center rounded-full bg-rangel-yellow px-8 py-3.5 text-base font-bold text-rangel-blue shadow-lg hover:brightness-95 transition-all duration-200"
          >
            Fale com o Rangel
          </a>
          <a
            href="#servicos"
            onClick={handleScroll("#servicos")}
            className="inline-flex items-center rounded-full border-2 border-white/70 bg-transparent px-8 py-3.5 text-base font-bold text-white hover:bg-white/10 transition-all duration-200"
          >
            Ver Serviços
          </a>
        </div>
      </div>

      {/* Stats bar — anchored to bottom of section */}
      <div className="relative z-10 w-full bg-black/50 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="flex flex-col items-center px-8 py-1 sm:py-0"
            >
              <span className="text-2xl font-extrabold text-rangel-yellow leading-none">
                {stat.value}
              </span>
              <span className="mt-1 text-xs font-medium text-gray-300 uppercase tracking-widest text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroVideo;
