import React from "react";
import { motion } from "framer-motion";
import { Users, Shield, FileText, AlertTriangle, Scale, UserCheck } from "lucide-react";

const committeesData = [
    {
        title: "Anti-Ragging Committee",
        description: "Ensures a ragging-free campus and monitors the implementation of anti-ragging measures as per UGC/AICTE guidelines.",
        icon: <Shield className="w-8 h-8 text-[#8B0000]" />,
        members: [
            { name: "Dr. K.N.S. Kang", role: "Chairman" },
            { name: "Dr. Gautam Bansal", role: "Member Secretary" },
            { name: "Representative", role: "Local Administration" },
            { name: "Representative", role: "Local Media" },
        ]
    },
    {
        title: "Internal Complaint Committee (ICC)",
        description: "Dedicated to providing a safe workspace and academic environment, handling issues related to sexual harassment and gender-based discrimination.",
        icon: <UserCheck className="w-8 h-8 text-[#8B0000]" />,
        members: [
            { name: "Ms. Harpreet Kaur Kang", role: "Presiding Officer" },
            { name: "Dr. Anurag Singh", role: "Member" },
            { name: "Ms. Priyanka Nayyar", role: "Member" },
            { name: "External Member", role: "NGO Representative" },
        ]
    },
    {
        title: "Grievance Redressal Committee",
        description: "A formal mechanism to address student and faculty concerns regarding academic or administrative matters.",
        icon: <Scale className="w-8 h-8 text-[#8B0000]" />,
        members: [
            { name: "Dr. Rajneesh Arya", role: "Chairman" },
            { name: "Dr. Kapil Prashar", role: "Member" },
            { name: "Dr. Naresh Sachdev", role: "Member" },
            { name: "Ms. Shifali Sabharwal", role: "Member" },
        ]
    },
    {
        title: "SC/ST Committee",
        description: "Works towards the welfare and protection of interests for students and staff belonging to SC/ST categories.",
        icon: <Users className="w-8 h-8 text-[#8B0000]" />,
        members: [
            { name: "Dr. Naresh Sachdev", role: "Coordinator" },
            { name: "Mr. Sandeep Singh", role: "Member" },
            { name: "Ms. Anjna", role: "Member" },
        ]
    },
    {
        title: "OBC Cell",
        description: "Ensures the effective implementation of policies and programs for the benefit of OBC students.",
        icon: <FileText className="w-8 h-8 text-[#8B0000]" />,
        members: [
            { name: "Mr. Amit Sharma", role: "In-charge" },
            { name: "Ms. Neha", role: "Member" },
        ]
    },
    {
        title: "Student Welfare Committee",
        description: "Responsible for organizing co-curricular activities and ensuring the overall well-being of the student community.",
        icon: <AlertTriangle className="w-8 h-8 text-[#8B0000]" />,
        members: [
            { name: "Dr. Anurag Singh", role: "Chief Coordinator" },
            { name: "Ms. Priyanka Nayyar", role: "Member" },
            { name: "Student Representatives", role: "Elected Members" },
        ]
    }
];

const Committees = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* ================= HERO HEADER ================= */}
            <section className="bg-neutral-900 py-20 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider"
                >
                    College Committees
                </motion.h1>
                <div className="w-24 h-1 bg-[#8B0000] mx-auto mt-6"></div>
            </section>

            {/* ================= INTRO ================= */}
            <section className="py-16 px-4 max-w-4xl mx-auto text-center">
                <p className="text-gray-600 text-lg leading-relaxed">
                    PCTE Group of Institutes has established various committees to ensure smooth administrative functioning,
                    adherence to regulatory standards, and to maintain a safe and inclusive environment for all stakeholders.
                </p>
            </section>

            {/* ================= COMMITTEES GRID ================= */}
            <section className="py-12 px-4 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {committeesData.map((committee, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                        >
                            <div className="p-8">
                                <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                    {committee.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{committee.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                    {committee.description}
                                </p>

                                <div className="border-t border-gray-100 pt-6">
                                    <h4 className="text-xs font-bold text-[#8B0000] uppercase tracking-wider mb-4">Key Members</h4>
                                    <ul className="space-y-3">
                                        {committee.members.map((member, mIdx) => (
                                            <li key={mIdx} className="flex justify-between items-center text-sm">
                                                <span className="text-gray-800 font-medium">{member.name}</span>
                                                <span className="text-gray-400 text-xs italic">{member.role}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ================= CTA / CONTACT ================= */}
            <section className="py-20 bg-white border-t border-gray-100 mt-12">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 font-sans">Have a Concern?</h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Students and staff can reach out to the respective committee heads for any issues or grievances.
                        PCTE maintains a zero-tolerance policy towards any form of harassment or misconduct.
                    </p>
                    <div className="inline-block px-8 py-3 bg-[#8B0000] text-white font-bold rounded hover:bg-black transition-colors cursor-pointer">
                        Contact Administration
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Committees;
