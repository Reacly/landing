import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Reacly.',
};

export default function Terms() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto w-full">
        <div className="prose prose-emerald prose-lg text-gray-600">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight">Terms of Service</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

          <p>
            Please read these Terms of Service carefully before using the Reacly service operated by Reacly.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using Reacly, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">2. Description of Service</h2>
          <p>
            Reacly provides a website feedback widget that allows you to collect feedback, ratings, and insights from your website visitors.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">3. Accounts</h2>
          <p>
            When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">4. Subscriptions and Payments</h2>
          <p>
            Some parts of the Service are billed on a subscription basis. You will be billed in advance on a recurring and periodic basis. Payment processing is handled by our third-party provider, Dodo Payments. By providing payment information, you authorize us and our payment processor to charge all subscription fees incurred through your account.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">5. Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality are and will remain the exclusive property of Reacly and its licensors.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">6. Limitation of Liability</h2>
          <p>
            In no event shall Reacly, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">7. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at <strong>hello@reacly.io</strong>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
