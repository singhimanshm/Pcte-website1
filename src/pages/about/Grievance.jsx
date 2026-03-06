import React from 'react';
import { MessageSquare } from 'lucide-react';

const Grievance = () => {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-secondary mb-4">Grievance Addressal Form</h1>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <MessageSquare className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold text-secondary">Submit Your Grievance</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                We take all grievances seriously and are committed to resolving them promptly and fairly. Please use the form below to submit your grievance, and our team will address it within the stipulated time frame.
              </p>
            </div>

            <div className="bg-white border-2 border-primary rounded-lg overflow-hidden">
              <iframe
                src="https://crm.pcte.edu.in/form/C1776F3B-F400-4F6B-9D84-D2FB4D9A3BC8"
                width="100%"
                height="600"
                frameBorder="0"
                style={{ border: 'none', borderRadius: '8px' }}
                title="Admission Enquiry Form 2026"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Grievance;
