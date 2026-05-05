import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CTASection from './components/CTASection';
import Gallery from './components/Gallery';
import Differentials from './components/Differentials';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import SocialProofPopup from './components/SocialProofPopup';

export default function App() {
  return (
    <div className="min-h-screen bg-light">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <CTASection />
        <Gallery />
        <Differentials />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <SocialProofPopup />
    </div>
  );
}
