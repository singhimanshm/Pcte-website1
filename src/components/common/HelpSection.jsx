import React from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';

const HelpSection = () => {
    return (
        <section className="py-16 bg-[#8B0000] text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-6">Need Help? We're Here to Support You</h2>
                <p className="text-lg mb-10 max-w-2xl mx-auto opacity-90">
                    Whether you have questions about admissions, courses, or campus life, our team is ready to assist you.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center">
                        <div className="bg-white/10 p-4 rounded-full mb-4">
                            <Phone className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-1">Call Us</h3>
                        <p className="opacity-80">+91 161 2888500</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-white/10 p-4 rounded-full mb-4">
                            <Mail className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-1">Email Us</h3>
                        <p className="opacity-80">info@pcte.edu.in</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-white/10 p-4 rounded-full mb-4">
                            <MessageSquare className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-1">Chat Support</h3>
                        <p className="opacity-80">Available Mon-Sat, 9AM-5PM</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HelpSection;
