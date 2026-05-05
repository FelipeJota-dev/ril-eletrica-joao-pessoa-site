import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5583987472470"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe57] text-white p-4 rounded-full shadow-[0_4px_15px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all duration-300 group"
      aria-label="Falar conosco no WhatsApp"
    >
      <MessageCircle size={32} />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 text-sm font-semibold px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 shadow-md whitespace-nowrap">
        Precisa de ajuda?
        {/* Triangle pointer */}
        <span className="absolute left-full top-1/2 -translate-y-1/2 -ml-[1px] border-8 border-transparent border-l-white"></span>
      </span>
    </a>
  );
}
