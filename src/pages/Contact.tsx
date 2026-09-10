import { Helmet } from 'react-helmet-async';
import { ContactSection } from '../components/ContactSection';

export function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Connecticut Local SEO Experts</title>
        <meta name="description" content="Contact our Connecticut local SEO company to request a free audit, ask questions, or start ranking higher in the Google Map Pack today." />
        <link rel="canonical" href="https://localseoct.com/contact/" />
      </Helmet>

      <section className="pt-32 pb-10 bg-slate-950 text-slate-50 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
            Get in <span className="text-orange-500">Touch</span>
          </h1>
          <p className="text-lg text-slate-400 font-medium max-w-2xl mx-auto">
            Ready to dominate the Google Map Pack in Connecticut? Fill out the form below to request your free hyper-local SEO audit, or call us directly.
          </p>
        </div>
      </section>

      {/* The ContactSection component already contains the form and company info */}
      <ContactSection />
    </>
  );
}
