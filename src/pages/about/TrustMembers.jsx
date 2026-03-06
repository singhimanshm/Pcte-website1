import React from "react";
import { motion } from "framer-motion";

const trustMembers = [
  {
    img: "https://pcte.edu.in/wp-content/uploads/2024/02/Dr.-K.N.S.-Kang.jpg",
    name: "Dr. K.N.S. Kang",
    role: "Chairman & Director General",
  },
  {
    img: "https://pcte.edu.in/wp-content/uploads/2024/02/Mr-Gurpreet-Singh-Gill.jpg",
    name: "Mr. Gurpreet Singh Gill",
    role: "Vice Chairman",
  },
  {
    img: "https://pcte.edu.in/wp-content/uploads/2024/02/Mrs-Harpreet-Kaur-Kang.jpg",
    name: "Mrs. Harpreet Kaur Kang",
    role: "General Secretary",
  },
  {
    img: "https://pcte.edu.in/wp-content/uploads/2024/02/Mrs-Jagdish-Kaur.jpg",
    name: "Mrs. Jagdish Kaur",
    role: "Treasurer",
  },
  {
    img: "https://pcte.edu.in/wp-content/uploads/2024/02/Mr-Gurnaaz-Singh-Kang.jpg",
    name: "Mr. Gurnaaz Singh Kang",
    role: "Executive Member",
  },
];

const TrustMembers = () => {
  const committeeMembers = [
    { name: "Dr. K.N.S Kang", designation: "President", dob: "21/04/1965" },
    { name: "Mr. Gurpreet Singh Gill", designation: "Vice President", dob: "23/03/1972" },
    { name: "Mrs. Harpreet Kaur Kang", designation: "General Secretary", dob: "20/09/1973" },
    { name: "Mrs. Jagdish Kaur", designation: "Treasurer", dob: "03/08/1972" },
    { name: "Mr. Gurnaaz Singh Kang", designation: "Executive Member", dob: "25/01/1999" },
    { name: "Mr. Hassan Singh Kang", designation: "Executive Member", dob: "23/08/2001" },
    { name: "Ms. Jasmeet Kaur Gill", designation: "Executive Member", dob: "19/08/1997" },
  ];

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-20">
      {/* ================= HERO HEADER ================= */}
      <section className="bg-neutral-900 py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wider">
          Trust Members
        </h1>
      </section>

      <main className="container mx-auto px-4 mt-12 space-y-20">

        {/* ================= DIRECTOR GENERAL SECTION ================= */}
        <section className="bg-white p-2 md:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Image Column */}
            <div className="lg:w-1/3 w-full">
              <div className="relative border-2 border-primary/20 p-1">
                <img
                  src="/whypcte/DR.KANG_.png"
                  alt="Dr. K.N.S. Kang"
                  className="w-full h-auto"
                />
                <div className="bg-[#8B0000] py-3 text-center">
                  <h3 className="text-white font-bold text-lg">Dr. K.N.S. Kang</h3>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:w-2/3 w-full space-y-6">
              <h2 className="text-[#8B0000] text-3xl font-bold uppercase tracking-tight border-b-2 border-gray-100 pb-2">
                DIRECTOR GENERAL
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4 text-[15px]">
                <p>
                  Dr. K.N.S. Kang, Chairman and Director General of PCTE Group of Institutes, Ludhiana, is a renowned education visionary. With awards like the 2015 Education Evangelist Award and Best Alumni Award, he's a prolific author and a driving force beyond academia.
                </p>
                <p>
                  Starting with an Electrical Engineering degree, he holds an MBA and a Ph.D. in Business Management, all while ranking fourth in the State Higher Secondary Examination. He has contributed to the editing of a total of six books, with notable mentions including "Business Families of Ludhiana," personally endorsed and highly praised by former Indian President Dr. APJ Abdul Kalam.
                </p>
                <p>
                  Another book titled "Business Groups in Punjab" has earned a special spot within the exclusive library of the Prime Minister's Office. Beyond studies, he's a National Level Athlete, cultural champion, and Shaheed Bhagat Singh State Youth Award recipient.
                </p>
                <p>
                  In 1999, Dr. Kang founded the PCTE Group of Institutes, an AICTE-approved institution that now houses five colleges with a vibrant community of approximately 2700 students, including 250 international students from diverse countries. Under Dr. Kang's visionary leadership, PCTE has been recognized as the Best Institute in Business Management, Pharmacy, and Hotel Management in Punjab by Punjab Technical University in 2014 & 2015. It has also received the Outstanding B-School (North India) Award from several esteemed media outlets including ABP News, Bloomberg UTV, Amar Ujala, & Dainik Bhaskar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= COMMITTEE MEMBERS TABLE SECTION ================= */}
        <section>
          <h2 className="text-[#8B0000] text-2xl font-bold mb-6">
            Committee Members
          </h2>
          <div className="overflow-x-auto shadow-lg bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#8B0000] text-white uppercase text-sm font-bold">
                  <th className="py-4 px-6 border-b border-white/10">NAME</th>
                  <th className="py-4 px-6 border-b border-white/10">Designation</th>
                  <th className="py-4 px-6 border-b border-white/10">Date of Birth</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {committeeMembers.map((member, index) => (
                  <tr
                    key={index}
                    className={`hover:bg-gray-50 transition-colors ${index !== committeeMembers.length - 1 ? 'border-b border-gray-100' : ''}`}
                  >
                    <td className="py-4 px-6 text-[15px] font-medium">{member.name}</td>
                    <td className="py-4 px-6 text-[15px]">{member.designation}</td>
                    <td className="py-4 px-6 text-[15px]">{member.dob}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </main>
    </div>
  );
};

export default TrustMembers;
