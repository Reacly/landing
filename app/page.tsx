import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import LiveDemo from '@/components/LiveDemo';
import WorksEverywhere from '@/components/WorksEverywhere';
import Features from '@/components/Features';
import Comparison from '@/components/Comparison';
import AiDigest from '@/components/AiDigest';
import SocialProof from '@/components/SocialProof';
import Pricing from '@/components/Pricing';
import Faq from '@/components/Faq';
import Waitlist from '@/components/Waitlist';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <WorksEverywhere />
        <HowItWorks />
        <LiveDemo />
        <Comparison />
        <Features />
        <AiDigest />
        <SocialProof />
        <Pricing />
        <Faq />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
