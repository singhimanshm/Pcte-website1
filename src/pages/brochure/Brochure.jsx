import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Brochure = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Dark Hero Section */}
      <section className="bg-[#1a1c23] py-8 md:py-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-3xl md:text-5xl font-bold tracking-tight">
            E-Brochure
          </h1>
        </div>
      </section>

      {/* Breadcrumb Section */}
      <nav className="border-b border-gray-100 bg-white">
        <div className="container mx-auto px-4 py-2 text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <Link to="/" className="hover:text-red-700">Home</Link>
            <span>›</span>
            <span className="text-gray-400 font-medium">E-Brochure</span>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 mb-8 max-w-4xl">
        <div className="bg-white rounded-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 border-b pb-4">Download Prospectus</h2>

          {/* CRM Form Widget */}
          <div className="mb-8">
            <iframe
              src="https://crm.pcte.edu.in/form/C1776F3B-F400-4F6B-9D84-D2FB4D9A3BC8"
              width="100%"
              height="600"
              frameBorder="0"
              style={{ border: 'none', borderRadius: '8px' }}
              title="Admission Enquiry Form 2026"
            />
          </div>

          {/* Download Button */}
          <div className="pt-2">
            <a
              href="/E-brouchers/pcte-brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-2.5 bg-[#8B0000] text-white font-bold uppercase tracking-widest rounded-sm hover:bg-red-800 transition-colors shadow-lg text-sm active:scale-95 text-center"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Brochure;
