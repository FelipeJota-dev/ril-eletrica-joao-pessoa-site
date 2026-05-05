import { 
  Home, 
  Building2, 
  Wrench, 
  Box, 
  Network, 
  ToggleLeft, 
  SearchX, 
  ShieldAlert, 
  Hammer 
} from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    icon: Home,
    title: "Instalações elétricas residenciais",
    description: "Projetos e execuções completas para casas e apartamentos com total segurança."
  },
  {
    icon: Building2,
    title: "Instalações elétricas comerciais",
    description: "Soluções robustas para lojas, galpões e escritórios sem paralisar sua operação."
  },
  {
    icon: Wrench,
    title: "Manutenção preventiva e corretiva",
    description: "Revisão e conserto de redes para evitar quedas e danos aos seus aparelhos."
  },
  {
    icon: Box,
    title: "Montagem de quadros elétricos",
    description: "Organização, dimensionamento e montagem de quadros de distribuição."
  },
  {
    icon: Network,
    title: "Redes elétricas e infraestrutura",
    description: "Passagem de fios e montagem de infraestrutura elétrica primária e secundária."
  },
  {
    icon: ToggleLeft,
    title: "Troca de disjuntores e componentes",
    description: "Substituição segura de peças antigas ou danificadas evitando superaquecimento."
  },
  {
    icon: SearchX,
    title: "Identificação e correção de falhas",
    description: "Diagnóstico preciso para curtos-circuitos, fugas de energia e desarmes."
  },
  {
    icon: ShieldAlert,
    title: "Adequação elétrica para segurança",
    description: "Atualização da sua rede para os padrões atuais de proteção exigidos por lei."
  },
  {
    icon: Hammer,
    title: "Reparos elétricos em geral",
    description: "Troca de tomadas, chuveiros, luminárias e pequenos ajustes elétricos do dia a dia."
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-oswald text-3xl sm:text-4xl font-bold text-primary-dark mb-4"
          >
            Nossos Serviços Elétricos
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            Oferecemos uma ampla gama de serviços para sua casa ou negócio, executados com perfeição e pontualidade.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col h-full"
              >
                <div className="bg-primary/5 text-primary p-4 rounded-xl inline-block mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 self-start">
                  <Icon size={32} />
                </div>
                
                <h3 className="font-bold text-xl text-primary-dark mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 flex-grow">
                  {service.description}
                </p>

                <a 
                  href="https://wa.me/5583987472470" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-bold text-primary hover:text-secondary transition-colors mt-auto group-hover:translate-x-1 duration-300"
                >
                  Chamar no WhatsApp
                  <span className="ml-1">→</span>
                </a>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
