import { motion } from 'motion/react';
import { PhoneCall } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 bg-primary-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-50%] left-[-10%] w-[70%] h-[200%] bg-white transform rotate-12" />
        <div className="absolute bottom-[-20%] right-[-5%] w-[40%] h-[150%] bg-secondary transform -rotate-12" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-oswald text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight"
        >
          Precisa de um eletricista <span className="text-secondary">em João Pessoa?</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-blue-50 mb-10 max-w-2xl mx-auto"
        >
          Evite riscos, quedas de energia e instalações mal feitas. Fale agora com a Ril e solicite um orçamento rápido pelo WhatsApp.
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
        >
          <a
            href="https://wa.me/5583987472470"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-secondary hover:bg-secondary-glow text-primary-dark font-bold text-xl px-10 py-5 rounded-full shadow-[0_0_30px_rgba(255,193,7,0.4)] hover:shadow-[0_0_40px_rgba(255,193,7,0.6)] transition-all transform hover:-translate-y-1"
          >
            <PhoneCall size={24} />
            Falar com eletricista agora
          </a>
        </motion.div>
      </div>
    </section>
  );
}
