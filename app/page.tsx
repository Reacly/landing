import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import WorksEverywhere from '@/components/WorksEverywhere';
import Features from '@/components/Features';
import AiDigest from '@/components/AiDigest';

import Faq from '@/components/Faq';
import Waitlist from '@/components/Waitlist';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <WorksEverywhere />
        <Features />
        <AiDigest />

        <Faq />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
