import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Reacly.',
};

export default function Privacy() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto w-full">
        <div className="prose prose-emerald prose-lg text-gray-600">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

          <p>
            Reacly ("us", "we", or "our") operates the Reacly website and feedback widget. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">1. Information Collection And Use</h2>
          <p>
            We collect several different types of information for various purposes to provide and improve our Service to you.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Account Data:</strong> We collect your email address when you sign up for Reacly.</li>
            <li><strong>Widget Data:</strong> Our feedback widget collects the feedback text, ratings, and page URL submitted by visitors on your website.</li>
            <li><strong>Usage Data:</strong> We may also collect information on how the Service is accessed and used.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">2. Use of Data</h2>
          <p>
            Reacly uses the collected data for various purposes:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>To provide and maintain the Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To provide customer care and support</li>
            <li>To monitor the usage of the Service</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">3. Data Security</h2>
          <p>
            The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">4. Third-Party Service Providers</h2>
          <p>
            We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Analytics:</strong> We use PostHog to track website usage, pageviews, and interactions to improve our user experience. PostHog may use cookies and similar tracking technologies.</li>
            <li><strong>Payments:</strong> We use Dodo Payments to securely process your subscription payments. We do not store your credit card details directly on our servers.</li>
            <li><strong>Database and Hosting:</strong> We use Supabase to securely store and manage the data collected by our feedback widget, as well as your account information.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at <strong>hello@reacly.io</strong>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
