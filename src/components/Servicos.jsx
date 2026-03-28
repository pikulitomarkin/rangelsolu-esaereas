import { BarChart3, Map, Search } from "lucide-react";

const services = [
  {
    title: "Inspecao de Obras",
    text: "Descubra falhas e patologias com precisao tecnica.",
    icon: Search,
  },
  {
    title: "Mapeamento Tecnico",
    text: "Levantamento aereo para topografia e planejamento.",
    icon: Map,
  },
  {
    title: "Acompanhamento de Projetos",
    text: "Relatorios visuais periodicos para investidores.",
    icon: BarChart3,
  },
];

function Servicos() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <h2 className="text-center text-3xl font-extrabold text-rangel-blue md:text-4xl">
          Nossas Solucoes Aereas
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
          <article
            key={service.title}
            className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-transform duration-300 hover:scale-105"
          >
            <div className="inline-flex rounded-xl bg-rangel-blue/10 p-3 text-rangel-blue">
              <Icon size={24} strokeWidth={2.2} />
            </div>
            <h3 className="mt-5 text-xl font-bold text-rangel-blue">{service.title}</h3>
            <p className="mt-3 leading-relaxed text-slate-600">{service.text}</p>
          </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Servicos;
