import { MapPin, Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <img 
              src="https://i.imgur.com/3g9RqvP.png" 
              alt="Logo Rimel Instalações Elétricas" 
              className="h-14 w-auto rounded-md mb-6 shadow-sm" 
            />
            <p className="text-blue-100/70 text-sm leading-relaxed mb-6 pr-4">
              A Rimel oferece soluções elétricas de qualidade, garantindo a proteção de residências e comércios com profissionalismo e excelência.
            </p>
            <a 
              href="https://wa.me/5583987472470"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-dark font-bold bg-secondary hover:bg-secondary-glow px-4 py-2 rounded-lg text-sm transition-colors"
            >
              <MessageCircle size={18} />
              Solicitar Orçamento
            </a>
          </div>

          {/* Links Col */}
          <div className="lg:col-span-1 border-t sm:border-0 border-white/5 pt-6 sm:pt-0">
            <h4 className="font-oswald font-semibold text-lg tracking-wide mb-6">Navegação</h4>
            <ul className="space-y-3">
              <li><a href="#inicio" className="text-blue-100/70 hover:text-white transition-colors text-sm">Início</a></li>
              <li><a href="#sobre" className="text-blue-100/70 hover:text-white transition-colors text-sm">Sobre nós</a></li>
              <li><a href="#servicos" className="text-blue-100/70 hover:text-white transition-colors text-sm">Serviços</a></li>
              <li><a href="#galeria" className="text-blue-100/70 hover:text-white transition-colors text-sm">Trabalhos executados</a></li>
              <li><a href="#depoimentos" className="text-blue-100/70 hover:text-white transition-colors text-sm">Avaliações</a></li>
            </ul>
          </div>

          {/* Info Col */}
          <div className="lg:col-span-2 border-t lg:border-0 border-white/5 pt-6 lg:pt-0">
            <h4 className="font-oswald font-semibold text-lg tracking-wide mb-6">Endereço e Contatos</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="text-secondary shrink-0 mt-0.5" size={20} />
                <p className="text-blue-100/70 text-sm leading-relaxed">
                  Avenida Vale das Palmeiras 301, Bairro Cristo Redentor<br/>
                  João Pessoa, PB<br/>
                  Atendimento em toda a região
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-secondary shrink-0" size={20} />
                <p className="text-blue-100/70 text-sm">(83) 98747-2470</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-blue-100/50">
          <p>© {currentYear} Rimel - Redes Instalações e Manutenção Elétrica. Todos os direitos reservados.</p>
          <p>Eletricista Profissional em João Pessoa - PB</p>
        </div>
      </div>
    </footer>
  );
}
