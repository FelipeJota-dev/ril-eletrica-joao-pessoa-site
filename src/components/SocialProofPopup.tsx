import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bell } from 'lucide-react';

const popupMessages = [
  "7 pessoas visualizando este site agora.",
  "3 clientes solicitaram orçamento recentemente.",
  "Um morador de João Pessoa acabou de agendar visita.",
  "Eletricista disponível para atendimento rápido hoje."
];

export default function SocialProofPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    // Only show after 2 minutes (120000 ms)
    // For testing/preview purposes it might be better to show it faster
    // but the instruction says "Only show after 2 minutes."
    const initialDelay = 120000;
    const intervalTime = 120000; // Repeat every 2 minutes
    const displayDuration = 5000; // Visible for 5 seconds

    const showPopup = () => {
      setMessageIndex((prev) => (prev + 1) % popupMessages.length);
      setIsVisible(true);
      
      setTimeout(() => {
        setIsVisible(false);
      }, displayDuration);
    };

    const initialTimer = setTimeout(() => {
      showPopup();
      
      const interval = setInterval(() => {
        showPopup();
      }, intervalTime);
      
      return () => clearInterval(interval);
      
    }, initialDelay);

    return () => clearTimeout(initialTimer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className="fixed bottom-24 left-4 sm:left-6 z-50 bg-white shadow-[0_4px_25px_rgba(0,0,0,0.1)] rounded-xl p-4 border border-gray-100 flex items-center gap-4 max-w-[320px] pr-8"
        >
          <div className="bg-secondary/20 text-secondary-glow p-2 rounded-full shrink-0 relative">
             <Bell size={20} className="text-secondary" />
             <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white animate-pulse" />
          </div>
          <p className="text-sm text-gray-700 font-medium leading-snug">
            {popupMessages[messageIndex]}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
