function HeroVideo() {
  const handleContactClick = (event) => {
    event.preventDefault();
    const target = document.querySelector("#contato");

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/drone-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-4xl">
          <h1 className="text-white font-extrabold text-4xl leading-tight md:text-6xl">
            Inteligencia Aerea para Decisoes Estrategicas
          </h1>
          <p className="mt-5 text-base text-slate-100 md:text-xl">
            Inspecao, Mapeamento e Dados Precisos para Construcao Civil com
            Tecnologia Drone
          </p>
          <a
            href="#contato"
            onClick={handleContactClick}
            className="mt-9 inline-flex items-center rounded-full bg-rangel-yellow px-10 py-4 text-lg font-bold text-rangel-blue transition hover:brightness-95"
          >
            Fale com o Rangel
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroVideo;
