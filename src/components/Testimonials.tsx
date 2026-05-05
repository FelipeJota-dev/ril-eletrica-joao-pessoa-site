import { Quote } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: "Carlos M.",
    role: "Cliente Residencial",
    content: "Excelente atendimento em João Pessoa. O eletricista chegou no horário combinado, identificou rapidamente o curto-circuito e deixou tudo organizado. A segurança e a clareza nas explicações me passaram muita confiança."
  },
  {
    name: "Ana Paula R.",
    role: "Proprietária de Loja",
    content: "Contratei a Ril para adequar a rede elétrica da minha loja. Serviço impecável, quadros muito bem organizados e o atendimento no WhatsApp foi rápido. Não atrapalhou o funcionamento do meu negócio. Recomendo sempre."
  },
  {
    name: "Roberto S.",
    role: "Cliente Residencial",
    content: "Fizeram a troca completa da fiação e do quadro de distribuição da minha casa antiga. Dá para ver a responsabilidade em cada detalhe. O orçamento foi transparente desde o início."
  }
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-oswald text-3xl sm:text-4xl font-bold text-primary-dark mb-4"
          >
            O que clientes dizem sobre o atendimento
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            A satisfação, pontualidade e segurança que entregamos aos nossos clientes em João Pessoa e região.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 relative shadow-sm"
            >
              <Quote className="text-secondary/30 absolute top-6 right-6 w-12 h-12 rotate-180" />
              
              <div className="relative z-10">
                <p className="text-gray-600 text-lg italic mb-6 leading-relaxed">
                  "{item.content}"
                </p>
                <div className="mt-auto">
                  <p className="font-bold text-primary-dark text-lg">{item.name}</p>
                  <p className="text-sm text-gray-500 font-medium">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
