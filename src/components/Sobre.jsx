function Sobre() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative">
            <img
              src="/rangel-drone-senac.jpg"
              alt="Rangel com drone DJI e capacete SENAC em ambiente de construcao"
              className="h-[420px] w-full rounded-3xl object-cover shadow-xl md:h-[560px]"
            />
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-rangel-blue/15" />
          </div>

          <div>
            <p className="text-rangel-blue text-sm font-semibold uppercase tracking-[0.18em]">
              quem somos
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-rangel-blue md:text-5xl">
              55 anos vivendo o dia a dia da construcao civil, agora potencializados
              por tecnologia drone de ponta.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-700">
              A Rangel Solucoes Aereas une experiencia real de campo com inteligencia
              operacional para entregar inspecao, mapeamento e dados com alto nivel
              tecnico. Essa combinacao gera mais previsibilidade, seguranca e
              confianca para decisoes estrategicas em obras e operacoes criticas.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Nossa autoridade vem da pratica: conhecimento profundo da construcao
              civil somado a metodologias modernas, equipamentos DJI e foco absoluto
              em resultado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
