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


      {/* The ContactSection component already contains the form and company info */}
      <ContactSection />
    </>
  );
}
