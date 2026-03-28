import { Users2, Target, ShieldCheck } from "lucide-react";

const points = [
  {
    icon: Users2,
    badge: "Experiência Real",
    title: "Olhar Técnico e Artístico",
    description:
      "Combinamos décadas de vivência na construção civil com sensibilidade para capturar emoções. O mesmo profissional que lê uma planta baixa sabe enquadrar o momento exato de um casamento — porque excelência não tem fronteira.",
    iconBg: "bg-white/10",
    iconColor: "text-rangel-yellow",
  },
  {
    icon: Target,
    badge: "Versatilidade",
    title: "Do Canteiro ao Altar",
    description:
      "Inspeção de obras, mapeamento técnico, cobertura de eventos, casamentos e festas — dominamos cada contexto com o mesmo nível de preparo. Você contrata um parceiro completo, não um serviço genérico.",
    iconBg: "bg-white/10",
    iconColor: "text-rangel-yellow",
  },
  {
    icon: ShieldCheck,
    badge: "Confiabilidade",
    title: "Entrega que Gera Confiança",
    description:
      "Equipamentos DJI de última geração, operação homologada e compromisso com o prazo. Seja um relatório técnico para engenheiros ou um álbum de memórias para uma família — cada entrega é tratada com o mesmo cuidado.",
    iconBg: "bg-white/10",
    iconColor: "text-rangel-yellow",
  },
];

function Diferenciais() {
  return (
    <section className="relative overflow-hidden">
      {/* Video background */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/image/casamento.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay: escurece levemente para legibilidade sem matar o vídeo */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-28">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-rangel-yellow text-xs font-bold uppercase tracking-[0.22em] mb-3">
            Por que a Rangel
          </p>
          <h2 className="text-3xl font-extrabold text-white md:text-4xl drop-shadow-lg">
            O que nos diferencia no mercado
          </h2>
          <p className="mt-4 text-base text-white/75 leading-relaxed drop-shadow">
            Técnica de engenharia, sensibilidade artística e equipamento de ponta —
            tudo isso em um único parceiro, para qualquer tipo de projeto.
          </p>
        </div>

        {/* Cards — glassmorphism sobre o vídeo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {points.map((point) => {
            const Icon = point.icon;
            return (
              <article
                key={point.title}
                className="flex flex-col rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-7 hover:bg-white/15 transition-all duration-300 shadow-lg"
              >
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${point.iconBg} ${point.iconColor} mb-5 shrink-0`}
                >
                  <Icon size={22} strokeWidth={2} />
                </div>

                {/* Badge */}
                <span className="text-rangel-yellow text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
                  {point.badge}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3">
                  {point.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-white/75 flex-1">
                  {point.description}
                </p>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Diferenciais;
