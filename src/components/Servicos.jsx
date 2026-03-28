import { Search, Map, BarChart3, ArrowRight, Camera, Video, CalendarHeart, Cake, Star } from "lucide-react";

const technicalServices = [
  {
    title: "Inspeção de Obras",
    description:
      "Identificamos falhas estruturais, patologias e não-conformidades com precisão técnica por meio de imagens aéreas de alta resolução. Nossos relatórios visuais permitem decisões rápidas, seguras e documentadas em qualquer fase da obra.",
    icon: Search,
    iconBg: "bg-blue-50",
    iconColor: "text-rangel-blue",
  },
  {
    title: "Mapeamento Técnico",
    description:
      "Realizamos levantamentos aerofotogramétricos com geração de ortomosaicos, modelos digitais de superfície e nuvens de pontos 3D. Dados georreferenciados com alta acurácia para topografia, planimetria e planejamento de projetos.",
    icon: Map,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    title: "Acompanhamento de Projetos",
    description:
      "Monitoramento visual periódico do avanço de obras com relatórios comparativos entre etapas. Entregamos evidências fotográficas e dados quantitativos para gestores, investidores e equipes de engenharia.",
    icon: BarChart3,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
];

const mediaServices = [
  {
    title: "Fotografia Profissional",
    description:
      "Imagens aéreas e em solo com enquadramento artístico e técnico. Ideal para portfólios, publicidade, imobiliário e comunicação corporativa.",
    icon: Camera,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=280&fit=crop&auto=format&q=80",
    imageAlt: "Fotógrafo profissional com câmera",
  },
  {
    title: "Filmagem Profissional",
    description:
      "Produção de vídeos aéreos e terrestres em alta definição para marcas, campanhas e projetos institucionais com edição profissional.",
    icon: Video,
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=280&fit=crop&auto=format&q=80",
    imageAlt: "Câmera de vídeo profissional em operação",
  },
  {
    title: "Cobertura de Eventos",
    description:
      "Registro completo de eventos corporativos, shows, feiras e conferências com equipe dedicada e entrega ágil de material fotográfico e audiovisual.",
    icon: Star,
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=280&fit=crop&auto=format&q=80",
    imageAlt: "Cobertura aérea de evento ao ar livre",
  },
  {
    title: "Casamentos",
    description:
      "Captamos cada detalhe do seu grande dia com sensibilidade e qualidade cinematográfica — do altar às celebrações — em foto e vídeo.",
    icon: CalendarHeart,
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=280&fit=crop&auto=format&q=80",
    imageAlt: "Casal em cerimônia de casamento",
  },
  {
    title: "Aniversários e Festas",
    description:
      "Memórias que duram para sempre. Cobertura profissional de aniversários, formaturas e festas em geral com fotos e vídeos de alto impacto.",
    icon: Cake,
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=280&fit=crop&auto=format&q=80",
    imageAlt: "Festa de aniversário com decoração e bolo",
  },
];

function Servicos() {
  const handleClick = (href) => (event) => {
    event.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-28">

        {/* Section header — media services first */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-rangel-blue text-xs font-bold uppercase tracking-[0.22em] mb-3">
            Nossas Soluções
          </p>
          <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
            Registramos momentos que importam
          </h2>
          <p className="mt-4 text-base text-gray-500 leading-relaxed">
            Do alto ou ao nível do solo — cobertura completa para eventos,
            celebrações e produções profissionais.
          </p>
        </div>

        {/* Media services — image cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaServices.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Icon badge over image */}
                  <div className="absolute top-3 left-3 inline-flex items-center justify-center w-9 h-9 rounded-xl bg-white/90 backdrop-blur-sm text-rangel-blue shadow-md">
                    <Icon size={18} strokeWidth={2.2} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500 flex-1">
                    {service.description}
                  </p>
                  <a
                    href="#contato"
                    onClick={handleClick("#contato")}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-rangel-blue hover:gap-2.5 transition-all duration-200"
                  >
                    Solicitar orçamento
                    <ArrowRight size={15} strokeWidth={2.4} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Divider + technical services */}
        <div className="mt-20 mb-14">
          <div className="flex items-center gap-4 mb-14">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-gray-400">
              Serviços Aéreos para a Construção Civil
            </span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {technicalServices.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-7"
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${service.iconBg} ${service.iconColor} mb-5 shrink-0`}
                  >
                    <Icon size={22} strokeWidth={2.2} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500 flex-1">
                    {service.description}
                  </p>
                  <a
                    href="#contato"
                    onClick={handleClick("#contato")}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-rangel-blue hover:gap-2.5 transition-all duration-200"
                  >
                    Saiba mais
                    <ArrowRight size={15} strokeWidth={2.4} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Servicos;
