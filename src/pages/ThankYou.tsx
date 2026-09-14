import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowLeft } from 'lucide-react';

export function ThankYou() {
  return (
    <>
      <Helmet>
        <title>Thank You | Local SEO CT</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 py-24">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          
          <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-4">
            Audit Request Received
          </h1>
          
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Thank you for reaching out. We have successfully received your request. Our team will manually review your website and follow up with a comprehensive analysis shortly.
          </p>
          
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg transition-all shadow-lg shadow-blue-600/25"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </>
  );
}
