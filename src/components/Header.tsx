import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Início', href: '#inicio' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Galeria', href: '#galeria' },
  { name: 'Diferenciais', href: '#diferenciais' },
  { name: 'Depoimentos', href: '#depoimentos' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contato', href: '#contato' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary-dark/95 backdrop-blur-sm shadow-lg py-3' : 'bg-primary-dark py-5'
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <img src="https://i.imgur.com/3g9RqvP.png" alt="Logo Rimel" className="h-12 w-auto rounded-md shadow-sm" />
          <span className="text-white font-oswald text-xl font-bold tracking-wide hidden sm:block">
            RIMEL INSTALAÇÕES
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-white/90 hover:text-secondary text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/5583987472470"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary hover:bg-secondary-glow text-primary-dark font-semibold px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 text-sm"
          >
            Chamar no WhatsApp
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-primary-dark shadow-2xl lg:hidden flex flex-col"
          >
            <div className="p-4 flex items-center justify-between border-b border-white/10">
              <img src="https://i.imgur.com/3g9RqvP.png" alt="Logo Rimel" className="h-10 w-auto rounded-md" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white p-2"
                aria-label="Fechar Menu"
              >
                <X size={28} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-6">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-white text-xl font-medium block py-2 border-b border-white/5"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              
              <a
                href="https://wa.me/5583987472470"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-secondary text-primary-dark font-bold py-4 rounded-lg text-center mt-auto shadow-lg text-lg"
              >
                Chamar no WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
