import { MapPin, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-oswald text-3xl sm:text-4xl font-bold text-primary-dark mb-4"
          >
            Nossos Contatos e Localização
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            Fale conosco, envie informações sobre seu serviço, agende visitas ou verifique nossa área de atendimento.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-xl">
          
          {/* Contact info cards */}
          <div className="w-full lg:w-2/5 p-8 sm:p-12 flex flex-col justify-center space-y-10">
            
            <a 
              href="https://wa.me/5583987472470" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-start gap-5 group"
            >
              <div className="bg-secondary text-primary-dark p-4 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-md">
                <MessageCircle size={32} />
              </div>
              <div>
                <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-1">WhatsApp</h3>
                <p className="text-primary-dark font-bold text-xl group-hover:text-secondary transition-colors">(83) 98747-2470</p>
                <p className="text-gray-500 text-sm mt-1">Orçamentos rápidos e agendamentos</p>
              </div>
            </a>

            <div className="flex items-start gap-5 group">
              <div className="bg-primary text-white p-4 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-md">
                <Phone size={32} />
              </div>
              <div>
                <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-1">Eletricista</h3>
                <p className="text-primary-dark font-bold text-xl">(83) 98747-2470</p>
                <p className="text-gray-500 text-sm mt-1">Atendimento comercial</p>
              </div>
            </div>

            <div className="flex items-start gap-5 group">
              <div className="bg-primary/10 text-primary p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <MapPin size={32} />
              </div>
              <div>
                <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-1">Endereço</h3>
                <p className="text-primary-dark font-bold text-lg leading-tight">Avenida Vale das Palmeiras 301,</p>
                <p className="text-gray-600 text-sm mb-1 mt-1">Bairro Cristo Redentor, João Pessoa, PB</p>
                <p className="text-secondary font-bold text-sm bg-secondary/10 inline-block px-2 py-1 rounded">
                  Atendemos João Pessoa e região
                </p>
              </div>
            </div>
            
          </div>

          {/* Map Embed */}
          <div className="w-full lg:w-3/5 min-h-[400px] bg-gray-200">
            <iframe 
              src="https://maps.google.com/maps?q=Avenida%20Vale%20das%20Palmeiras%20301%2C%20Bairro%20Cristo%20Redentor%2C%20Jo%C3%A3o%20Pessoa%2C%20PB&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '100%' }} 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Rimel Eletricista"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
