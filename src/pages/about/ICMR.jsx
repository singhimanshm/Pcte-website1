import React from 'react';
import { FlaskConical, Microscope, Heart } from 'lucide-react';

const ICMR = () => {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-secondary mb-4">ICMR Collaboration</h1>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <FlaskConical className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold text-secondary">Indian Council of Medical Research</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                PCTE collaborates with the Indian Council of Medical Research (ICMR) to advance medical and health research, providing our students with opportunities to contribute to important healthcare initiatives.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This collaboration enhances our research capabilities and provides students with exposure to cutting-edge medical research.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-primary rounded-lg p-6">
                <Microscope className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-secondary mb-2">Research Opportunities</h3>
                <p className="text-gray-600">Students participate in ICMR-funded research projects and studies.</p>
              </div>
              <div className="bg-white border-2 border-primary rounded-lg p-6">
                <Heart className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-secondary mb-2">Healthcare Impact</h3>
                <p className="text-gray-600">Contributing to healthcare solutions through collaborative research initiatives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ICMR;
