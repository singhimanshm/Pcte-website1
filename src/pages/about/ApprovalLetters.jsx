import React from 'react';
import { FileCheck, CheckCircle, Shield } from 'lucide-react';

const ApprovalLetters = () => {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-secondary mb-4">Approval Letters</h1>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <FileCheck className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold text-secondary">Official Approvals</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                PCTE Group of Institutes holds all necessary approvals and recognitions from statutory bodies including UGC, AICTE, and other relevant authorities. All our programs are duly approved and recognized.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We maintain complete transparency regarding our approvals and regularly update our documentation to ensure compliance with all regulatory requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-primary rounded-lg p-6 text-center">
                <CheckCircle className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-secondary mb-2">UGC Recognition</h3>
                <p className="text-gray-600 text-sm">Recognized by University Grants Commission</p>
              </div>
              <div className="bg-white border-2 border-primary rounded-lg p-6 text-center">
                <Shield className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-secondary mb-2">AICTE Approval</h3>
                <p className="text-gray-600 text-sm">Approved by All India Council for Technical Education</p>
              </div>
              <div className="bg-white border-2 border-primary rounded-lg p-6 text-center">
                <FileCheck className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-secondary mb-2">Statutory Compliance</h3>
                <p className="text-gray-600 text-sm">All programs meet regulatory requirements</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ApprovalLetters;

