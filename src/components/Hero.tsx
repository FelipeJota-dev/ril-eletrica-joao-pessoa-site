import { Shield, Zap, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-primary-dark text-white">
      {/* Background visual element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary transform -skew-x-[15deg] origin-top-right opacity-30 blur-2xl hidden lg:block pointer-events-none" />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10 flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6"
          >
            <span className="flex items-center gap-1.5 bg-primary/40 border border-white/10 px-3 py-1.5 rounded-full text-sm font-medium text-blue-100">
              <Zap size={16} className="text-secondary" />
              Atendimento rápido
            </span>
            <span className="flex items-center gap-1.5 bg-primary/40 border border-white/10 px-3 py-1.5 rounded-full text-sm font-medium text-blue-100">
              <Shield size={16} className="text-secondary" />
              Serviço com segurança
            </span>
            <span className="flex items-center gap-1.5 bg-primary/40 border border-white/10 px-3 py-1.5 rounded-full text-sm font-medium text-blue-100">
              <MapPin size={16} className="text-secondary" />
              João Pessoa e região
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-oswald text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Eletricista em João Pessoa - Instalações e Manutenção Elétrica
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-blue-100/90 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            Atendimento profissional para instalações elétricas, manutenção, redes elétricas, quadros, reparos e soluções elétricas com segurança e agilidade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <a
              href="https://wa.me/5583987472470"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-secondary hover:bg-secondary-glow text-primary-dark font-bold text-lg px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(255,193,7,0.3)] hover:shadow-[0_0_30px_rgba(255,193,7,0.5)] transition-all transform hover:-translate-y-1"
            >
              Solicitar orçamento pelo WhatsApp
            </a>
            <a
              href="#servicos"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all border border-white/20 hover:border-white/40"
            >
              Ver serviços
            </a>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full max-w-[500px] lg:max-w-none lg:w-1/2 relative"
        >
          {/* Subtle glow behind image */}
          <div className="absolute inset-0 bg-secondary/20 blur-[80px] rounded-full z-0" />
          <img
            src="https://i.imgur.com/sCANhDE.png"
            alt="Profissional da Rimel Eletricista em serviço"
            className="w-full h-auto object-contain relative z-10 drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
