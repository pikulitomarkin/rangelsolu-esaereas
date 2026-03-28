import { useState } from 'react';
import { Phone, MapPin, Send } from 'lucide-react';

function InstagramIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function FacebookIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

function TikTokIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
    </svg>
  );
}

const contacts = [
  {
    icon: Phone,
    label: "WhatsApp / Telefone",
    value: "(21) 96488-4677",
    href: "https://wa.me/5521964884677",
    external: true,
  },
  {
    IconComponent: InstagramIcon,
    label: "Instagram",
    value: "@rangel.aerialfilms",
    href: "https://instagram.com/rangel.aerialfilms",
    external: true,
  },
  {
    IconComponent: TikTokIcon,
    label: "TikTok",
    value: "@rangel.aero.drone",
    href: "https://tiktok.com/@rangel.aero.drone",
    external: true,
  },
  {
    IconComponent: FacebookIcon,
    label: "Facebook",
    value: "Rangel Aerial Films",
    href: "https://www.facebook.com/profile.php?id=61575470638851",
    external: true,
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Rio de Janeiro, RJ — Brasil",
    href: null,
  },
];

const WHATSAPP_NUMBER = "5521964884677";

function Contato() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    servico: "",
    detalhes: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleEnviar = (e) => {
    e.preventDefault();

    const msg =
      `Olá, David! Vim pelo site e gostaria de solicitar um orçamento. 📋\n\n` +
      `*Nome:* ${form.nome || "Não informado"}\n` +
      `*E-mail:* ${form.email || "Não informado"}\n` +
      `*Serviço:* ${form.servico || "Não informado"}\n` +
      `*Detalhes:* ${form.detalhes || "Não informado"}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="bg-rangel-blue py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Coluna da Esquerda */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">Vamos decolar seu projeto?</h2>
              <p className="text-blue-100 text-lg">
                Entre em contato para vistorias técnicas, mapeamento aéreo,
                cobertura de eventos, casamentos ou qualquer outro projeto no
                Rio de Janeiro e região.
              </p>
            </div>

            <div className="space-y-5">
              {contacts.map((item) => {
                const Icon = item.icon;
                const CustomIcon = item.IconComponent;
                const inner = (
                  <div className="flex items-center gap-4 group">
                    <div className="bg-rangel-yellow p-3 rounded-full text-rangel-blue flex-shrink-0 group-hover:brightness-90 transition">
                      {CustomIcon ? <CustomIcon size={22} /> : <Icon size={22} />}
                    </div>
                    <div>
                      <p className="text-sm text-blue-200">{item.label}</p>
                      <p className="text-lg font-semibold group-hover:text-rangel-yellow transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={item.label}>{inner}</div>
                );
              })}
            </div>

            {/* Google Maps */}
            <div className="w-full h-64 rounded-xl overflow-hidden grayscale opacity-80 hover:grayscale-0 transition-all duration-500 border-2 border-rangel-yellow/30">
              <iframe
                title="Localização Rangel Soluções Aéreas"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235294.029851724!2d-43.432693!3d-22.9068467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bde559108a051%3A0x67d26899552ef38d!2sRio%20de%20Janeiro%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>

          {/* Coluna da Direita — Formulário */}
          <div className="lg:w-1/2 bg-white p-8 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold text-rangel-blue mb-6">Solicite um Orçamento</h3>
            <form onSubmit={handleEnviar} className="space-y-4">
              <div>
                <label className="block text-rangel-blue font-semibold mb-2">Nome Completo</label>
                <input
                  type="text"
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rangel-blue focus:ring-2 focus:ring-rangel-blue/20 outline-none text-gray-800 transition-all"
                />
              </div>
              <div>
                <label className="block text-rangel-blue font-semibold mb-2">E-mail</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rangel-blue focus:ring-2 focus:ring-rangel-blue/20 outline-none text-gray-800 transition-all"
                />
              </div>
              <div>
                <label className="block text-rangel-blue font-semibold mb-2">Tipo de Serviço</label>
                <select
                  name="servico"
                  value={form.servico}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rangel-blue focus:ring-2 focus:ring-rangel-blue/20 outline-none text-gray-800 transition-all bg-white"
                >
                  <option value="">Selecione o serviço...</option>
                  <option>Fotografia Profissional</option>
                  <option>Filmagem Profissional</option>
                  <option>Cobertura de Eventos</option>
                  <option>Casamento</option>
                  <option>Aniversário / Festa</option>
                  <option>Inspeção de Obras</option>
                  <option>Mapeamento Técnico</option>
                  <option>Acompanhamento de Projetos</option>
                </select>
              </div>
              <div>
                <label className="block text-rangel-blue font-semibold mb-2">Detalhes do Projeto</label>
                <textarea
                  name="detalhes"
                  value={form.detalhes}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Descreva brevemente sua necessidade..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rangel-blue focus:ring-2 focus:ring-rangel-blue/20 outline-none text-gray-800 transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-rangel-yellow hover:bg-yellow-500 text-rangel-blue font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg"
              >
                <Send size={20} />
                Enviar pelo WhatsApp
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contato;
