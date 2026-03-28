import React from 'react';
import { Phone, MapPin, Linkedin, Send } from 'lucide-react';

const Contato = () => {
  return (
    <section className="bg-rangel-blue py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Coluna da Esquerda: Informações de Contato */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4 font-sans">Vamos decolar seu projeto?</h2>
              <p className="text-blue-100 text-lg">
                Entre em contato para vistorias técnicas, mapeamento aéreo ou acompanhamento de obras no Rio de Janeiro e região.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-rangel-yellow p-3 rounded-full text-rangel-blue">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-blue-200">WhatsApp / Telefone</p>
                  <p className="text-xl font-semibold">(21) 98888-7777</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-rangel-yellow p-3 rounded-full text-rangel-blue">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-sm text-blue-200">LinkedIn Profissional</p>
                  <p className="text-xl font-semibold">linkedin.com/in/rangel-solucoes</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-rangel-yellow p-3 rounded-full text-rangel-blue">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-blue-200">Localização</p>
                  <p className="text-xl font-semibold">Rio de Janeiro, RJ - Brasil</p>
                </div>
              </div>
            </div>

            {/* Google Maps Estilizado (Placeholder de Iframe) */}
            <div className="w-full h-64 rounded-xl overflow-hidden grayscale opacity-80 hover:grayscale-0 transition-all duration-500 border-2 border-rangel-yellow/30">
              <iframe
                title="Localização Rangel Soluções Aéreas"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235294.029851724!2d-43.432693!3d-22.9068467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bde559108a051%3A0x67d26899552ef38d!2sRio%20de%20Janeiro%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Coluna da Direita: Formulário de Conversão */}
          <div className="lg:w-1/2 bg-white p-8 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold text-rangel-blue mb-6">Solicite um Orçamento Técnico</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-rangel-blue font-semibold mb-2">Nome Completo</label>
                <input 
                  type="text" 
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rangel-blue focus:ring-2 focus:ring-rangel-blue/20 outline-none text-gray-800 transition-all"
                />
              </div>
              <div>
                <label className="block text-rangel-blue font-semibold mb-2">E-mail Corporativo</label>
                <input 
                  type="email" 
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rangel-blue focus:ring-2 focus:ring-rangel-blue/20 outline-none text-gray-800 transition-all"
                />
              </div>
              <div>
                <label className="block text-rangel-blue font-semibold mb-2">Detalhes do Projeto / Obra</label>
                <textarea 
                  rows="4" 
                  placeholder="Descreva brevemente sua necessidade..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rangel-blue focus:ring-2 focus:ring-rangel-blue/20 outline-none text-gray-800 transition-all"
                ></textarea>
              </div>
              <button className="w-full bg-rangel-yellow hover:bg-yellow-500 text-rangel-blue font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg">
                <Send size={20} />
                Enviar Solicitação
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contato;