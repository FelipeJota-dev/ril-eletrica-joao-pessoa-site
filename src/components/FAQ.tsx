import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "A Ril atende em João Pessoa?",
    answer: "Sim! Somos uma empresa sediada e com forte atuação em João Pessoa, atendendo não só a capital metropolitana, mas também as regiões próximas com rapidez."
  },
  {
    question: "Vocês fazem manutenção elétrica residencial?",
    answer: "Com certeza. Fazemos desde a troca de disjuntores e tomadas, até a substituição completa do cabeamento da sua residência (casa ou apartamento) seguindo todas as normas."
  },
  {
    question: "Posso solicitar orçamento pelo WhatsApp?",
    answer: "Sim. Nosso principal canal de comunicação é o WhatsApp. Facilitamos a troca de fotos do problema e vídeos para agilizar um pré-orçamento e o agendamento da visita, se necessário."
  },
  {
    question: "Vocês fazem instalação e organização de quadros elétricos?",
    answer: "Sim, somos especialistas em dimensionamento, montagem e organização de quadros de distribuição para evitar sobrecargas e garantir que sua instalação distribua bem as cargas."
  },
  {
    question: "Atendem com urgência?",
    answer: "Oferecemos atendimentos para resoluções de problemas que afetam parcial ou totalmente a elétrica do local (como quedas sistemáticas de disjuntor) sujeito à disponibilidade técnica. Fale conosco no WhatsApp para consultarmos a agenda imediata."
  },
  {
    question: "Fazem serviços para comércios?",
    answer: "Sim! Trabalhamos com adequação e manutenção de elétrica para lojas, escritórios, galpões e condomínios que demandam uma infraestrutura robusta."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-oswald text-3xl sm:text-4xl font-bold text-primary-dark mb-4"
          >
            Dúvidas Frequentes
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            Respostas para as perguntas mais comuns dos nossos clientes.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border text-left border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-primary-dark text-lg pr-4 text-left block w-[90%]">{faq.question}</span>
                <span className={`flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-secondary' : 'text-gray-400'}`}>
                  <ChevronDown size={24} />
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 pt-1 text-gray-600 leading-relaxed border-t border-gray-50 mt-1">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
