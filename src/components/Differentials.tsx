import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const differentials = [
  "Atendimento direto pelo WhatsApp",
  "Serviços com segurança e responsabilidade",
  "Experiência em instalações e manutenções",
  "Soluções para residências e comércios",
  "Acabamento organizado",
  "Orçamento rápido e transparente",
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-oswald text-3xl sm:text-4xl font-bold text-primary-dark mb-6"
            >
              Por que escolher a Rimel?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-lg mb-8"
            >
              Nosso compromisso é entregar a solução mais técnica, com máxima transparência e atenção aos mínimos detalhes que fazem a diferença na segurança do seu imóvel.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-4">
              {differentials.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + (index * 0.05) }}
                  className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm"
                >
                  <CheckCircle2 className="text-secondary shrink-0 mt-0.5" size={20} />
                  <span className="font-semibold text-primary-dark text-sm leading-snug">{item}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-10"
            >
              <a
                href="https://wa.me/5583987472470"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary-dark hover:bg-primary text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-md"
              >
                Garantir meu serviço agora
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative isolate"
          >
            {/* Pattern background */}
            <div className="absolute inset-0 -mx-6 -my-6 bg-[radial-gradient(#1E4E79_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-10 -z-10 rounded-3xl" />
            
            <div className="bg-primary p-8 sm:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-16 -mt-16" />
               <h3 className="text-2xl font-bold text-white mb-6 font-oswald tracking-wide relative z-10">
                 Tranquilidade e Confiança
               </h3>
               <p className="text-blue-100 text-lg leading-relaxed relative z-10 mb-8">
                 Um curto-circuito ou pico de energia não avisa quando vai acontecer. Manter a elétrica da sua casa ou empresa em dia evita a queima de eletrodomésticos caros e, mais importante, protege sua família contra riscos de incêndios.
               </p>
               <div className="pt-8 border-t border-white/20 relative z-10">
                 <p className="text-white font-medium text-lg">Responda rápido:</p>
                 <p className="text-blue-200 mt-2">Seus disjuntores têm desarmado com frequência ou suas lâmpadas piscam? <span className="text-secondary font-bold">É hora de chamar um especialista.</span></p>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
