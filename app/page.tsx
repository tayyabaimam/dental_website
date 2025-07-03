import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import Trust from './components/Trust';
import Footer from './components/Footer';
import StickyPhone from './components/StickyPhone';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <ContactForm />
      <Trust />
      <Footer />
      <StickyPhone />
    </main>
  );
}
