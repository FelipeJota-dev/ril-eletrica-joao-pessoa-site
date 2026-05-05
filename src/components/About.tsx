import { ShieldCheck, HardHat, Home } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full max-w-lg lg:max-w-none relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-primary-dark/10 mix-blend-multiply z-10" />
            <img 
              src="https://i.imgur.com/ObnwiOs.png" 
              alt="Sobre a Rimel Instalações Elétricas" 
              className="w-full h-full object-cover aspect-[4/3] lg:aspect-[3/4]"
            />
          </motion.div>

          {/* Text Content */}
          <div className="flex-1 lg:pl-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-oswald text-3xl sm:text-4xl font-bold text-primary-dark mb-6"
            >
              Sobre a Rimel - Redes Instalações e Manutenção Elétrica
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4 text-gray-600 text-lg leading-relaxed mb-10"
            >
              <p>
                A <strong>Rimel Instalações</strong> oferece serviços elétricos seguros, profissionais e confiáveis em João Pessoa e regiões próximas. Nosso foco é garantir a sua tranquilidade através de um trabalho pautado na qualidade técnica, organização minuciosa e estrita obediência às normas de instalação corretas (NR-10 e NBR 5410).
              </p>
              <p>
                Acreditamos que a prevenção é o melhor caminho, por isso nossa manutenção preventiva é desenhada para evitar dores de cabeça estruturais no futuro.
                Com a Rimel, você não contrata apenas um eletricista, mas sim experiência técnica e a total confiança de que seu imóvel estará protegido contra riscos e falhas elétricas.
              </p>
            </motion.div>

            {/* Trust Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100"
              >
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-dark text-lg mb-1">Segurança em primeiro lugar</h3>
                  <p className="text-sm text-gray-500">Adesão total às normas de segurança.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100"
              >
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <HardHat size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-dark text-lg mb-1">Atendimento profissional</h3>
                  <p className="text-sm text-gray-500">Equipe qualificada e pontual.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100 sm:col-span-2"
              >
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Home size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-dark text-lg mb-1">Soluções para residências e empresas</h3>
                  <p className="text-sm text-gray-500">Capacidade técnica para projetos de qualquer porte, desde pequenos reparos até redes complexas.</p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
