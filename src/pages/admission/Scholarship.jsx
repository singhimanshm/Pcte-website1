import React from 'react';

const Scholarship = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Scholarship Scheme
          </h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <a href="/" className="hover:text-primary">Home</a>
            <span className="mx-2"></span>
            <span className="text-gray-500">Scholarship Scheme</span>
          </nav>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Nurturing Students Into Leaders Since 1999
              </h2>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
                Education For All
              </h3>

              <div className="space-y-4 text-gray-700 mb-8">
                <div className="flex gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <p>
                    <strong>Post Matric Scholarship Scheme for SC/OBC – State Govt (Dr. Ambedkar Portal)</strong>
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <p>
                    <strong>NSP – National Scholarship Portal</strong> is one-stop solution through which various services starting from student application, application receipt, processing, sanction and disbursal of various scholarships to Students are enabled. National Scholarships Portal is taken as Mission Mode Project under National e-Governance Plan (NeGP).
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mb-2">
                For more information on the above mentioned schemes, please visit:
              </p>
              <a
                href="https://scholarships.punjab.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 font-semibold hover:text-red-700 underline"
              >
                https://scholarships.punjab.gov.in/
              </a>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative">
                <img
                  src="/LifeatPCTE/image 9.webp"
                  alt="Students studying together"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 to-transparent flex items-end">
                  <div className="w-full p-6 text-white text-center">
                    <h4 className="text-xl md:text-2xl font-bold">
                      Successfully Transforming Careers For Over 25+ Years.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Scholarship;