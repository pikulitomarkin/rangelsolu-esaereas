const points = [
  "Equipe especializada em operacoes aereas e analise tecnica.",
  "Entrega de dados acionaveis com padrao profissional.",
  "Processos seguros, rastreaveis e focados em resultado.",
];

function Diferenciais() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="rounded-3xl border border-rangel-blue/50 bg-rangel-blue/15 p-8 md:p-12">
        <p className="text-rangel-yellow text-sm font-semibold uppercase tracking-widest">diferenciais</p>
        <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">Porque escolher a Rangel</h2>

        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {points.map((point) => (
            <div key={point} className="rounded-2xl bg-rangel-dark/70 border border-rangel-blue/40 p-6">
              <p className="text-slate-200 leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Diferenciais;
