import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Pricing from '@/components/Pricing';
import { Metadata } from 'next';
import PricingFaq from './PricingFaq';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple, transparent pricing for Reacly.',
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24 pb-20">
        <Pricing />
        <PricingFaq />
      </main>
      <Footer />
    </>
  );
}
