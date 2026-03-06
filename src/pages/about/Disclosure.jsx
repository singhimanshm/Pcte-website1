import React from 'react';
import { FileText, Eye, CheckCircle } from 'lucide-react';

const Disclosure = () => {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-secondary mb-4">Mandatory Disclosure</h1>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <Eye className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold text-secondary">Transparency & Accountability</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                As per regulatory requirements, PCTE Group of Institutes maintains complete transparency by disclosing all mandatory information including institutional details, faculty information, infrastructure, and financial data.
              </p>
              <p className="text-gray-600 leading-relaxed">
                All disclosures are updated regularly and are available for public viewing to ensure accountability and transparency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Institutional Information", desc: "Complete details about the institution" },
                { title: "Faculty Details", desc: "Information about teaching staff and qualifications" },
                { title: "Infrastructure", desc: "Details of facilities and infrastructure" },
                { title: "Financial Information", desc: "Financial statements and fee structure" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white border-2 border-primary rounded-lg p-6">
                  <FileText className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Disclosure;

