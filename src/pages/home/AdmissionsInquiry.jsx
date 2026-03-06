import React from 'react';

const AdmissionsInquiry = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="bg-secondary rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 p-12 text-white">
                        <h2 className="text-4xl font-bold mb-6">Admissions Open for 2026</h2>
                        <p className="text-lg opacity-90 mb-8">
                            Take the first step towards a successful career. Our counselors are ready to help you choose the right program.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-sm font-bold">1</span>
                                <span>Choose from 30+ Undergraduate & Postgraduate programs</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-sm font-bold">2</span>
                                <span>Get detailed information about scholarships</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-sm font-bold">3</span>
                                <span>Complete your application process online</span>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:w-1/2 bg-gray-50 p-4">
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
    );
};

export default AdmissionsInquiry;
