import React from 'react';

const BHMCTICMR = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Dark Header */}
            <div className="bg-[#1f2225] py-6 text-center">
                <h1 className="text-2xl font-semibold tracking-wide text-white">BHMCT-ICMR</h1>
            </div>

            {/* Breadcrumb */}
            <div className="bg-white border-b px-6 py-2 text-sm text-gray-500">
                Home &gt; <span className="text-gray-700">BHMCT-ICMR</span>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-8">

                    {/* Conference Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-secondary mb-4">
                            14th International Multidisciplinary Conference
                        </h1>
                        <p className="text-lg text-gray-600 mb-2">Organized by PCTE Group of Institutes, Ludhiana</p>
                        <p className="text-md text-gray-500">March 10-12, 2026</p>
                    </div>

                    {/* Theme */}
                    <div className="bg-gray-50 rounded-lg p-6 mb-8">
                        <h2 className="text-xl font-bold text-secondary mb-3">Theme:</h2>
                        <p className="text-lg text-gray-700 font-medium">
                            Human-Centric Approaches to Innovation, Sustainability and Growth
                        </p>
                    </div>

                    {/* Download Brochure */}
                    <div className="text-center mb-8">
                        <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                            Download Brochure
                        </button>
                    </div>

                    {/* Why Attend Section */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-secondary mb-4">Why Attend?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">Paper Publication</h3>
                                    <p className="text-gray-600">Selected papers will be published in reputed journals</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">Paper Presentations</h3>
                                    <p className="text-gray-600">Present your research to international audience</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">Best Paper Awards</h3>
                                    <p className="text-gray-600">Recognition for outstanding research contributions</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">Networking Opportunities</h3>
                                    <p className="text-gray-600">Connect with researchers and industry experts</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Conference Focus */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-secondary mb-4">About the Conference</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The 14th International Multidisciplinary Conference aims to bring together researchers, academicians, and industry professionals from diverse fields to share their knowledge and expertise. The conference focuses on interdisciplinary dialogue and collaboration to address contemporary challenges.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Selected papers will be published in reputed journals or as book chapters, providing authors with excellent opportunities for dissemination of their research work.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The conference provides a platform for participants to exchange ideas, establish research relations, and find global partners for future collaboration. It aims to promote interdisciplinary research that addresses real-world problems and contributes to sustainable development.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Participants will have the opportunity to present their research findings, receive feedback from experts, and engage in discussions on emerging trends and innovations in their respective fields.
                        </p>
                    </div>

                    {/* Key Deadlines */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-secondary mb-4">Key Deadlines</h2>
                        <div className="bg-gray-50 rounded-lg p-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-2">Abstract Submission</h3>
                                    <p className="text-gray-600">February 15, 2026</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-2">Full Paper Submission</h3>
                                    <p className="text-gray-600">February 28, 2026</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-2">Conference Dates</h3>
                                    <p className="text-gray-600">March 10-12, 2026</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Registration Fees */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-secondary mb-4">Registration Fees</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
                                        <th className="border border-gray-300 px-4 py-2 text-center">Indian Participants</th>
                                        <th className="border border-gray-300 px-4 py-2 text-center">International Participants</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Industry/Corporate</td>
                                        <td className="border border-gray-300 px-4 py-2 text-center">₹8,000</td>
                                        <td className="border border-gray-300 px-4 py-2 text-center">$200</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Academician</td>
                                        <td className="border border-gray-300 px-4 py-2 text-center">₹6,000</td>
                                        <td className="border border-gray-300 px-4 py-2 text-center">$150</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Research Scholars</td>
                                        <td className="border border-gray-300 px-4 py-2 text-center">₹4,000</td>
                                        <td className="border border-gray-300 px-4 py-2 text-center">$100</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Students</td>
                                        <td className="border border-gray-300 px-4 py-2 text-center">₹2,000</td>
                                        <td className="border border-gray-300 px-4 py-2 text-center">$50</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Submission & Registration */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-secondary mb-4">Submission & Registration</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="text-center">
                                <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors w-full">
                                    Submit Abstract
                                </button>
                            </div>
                            <div className="text-center">
                                <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors w-full">
                                    Register for Conference
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="bg-gray-50 rounded-lg p-6">
                        <h2 className="text-2xl font-bold text-secondary mb-4">Contact Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-2">Dr. Naman Sachdev</h3>
                                <p className="text-gray-600">Conference Convener</p>
                                <p className="text-gray-600">Phone: +91-98765-43210</p>
                                <p className="text-gray-600">Email: naman.sachdev@pcte.ac.in</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-2">Dr. Gagandeep Kaur Sidhu</h3>
                                <p className="text-gray-600">Conference Co-Convener</p>
                                <p className="text-gray-600">Phone: +91-98765-43211</p>
                                <p className="text-gray-600">Email: gagandeep.sidhu@pcte.ac.in</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BHMCTICMR;
