import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Stars = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Dark Hero Section (Matches Image 0) */}
      <section className="bg-[#1a1c23] py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-white text-3xl md:text-4xl font-bold uppercase tracking-wide">
            Glorious Stars at PCTE
          </h1>
        </div>
      </section>

      {/* Breadcrumb Section (Matches Image 1) */}
      <nav className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-3 text-sm text-gray-500">
          <Link to="/" className="hover:text-red-700">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-400 font-medium">Glorious Stars at PCTE</span>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Main Heading (Maroon) */}
        <div className="text-center mb-16">
          <h2 className="text-[#880000] text-3xl font-bold font-serif mb-4">
            Glorious Stars at PCTE
          </h2>
        </div>

        {/* 2025 Award Section (Matches Image 2) */}
        <section className="mb-24">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 font-serif">
              ISTE Best Student Award 2025
            </h3>
            <p className="text-gray-700 italic text-[17px] max-w-4xl mx-auto leading-relaxed border-l-4 border-gray-100 pl-4 py-2">
              "The <span className="font-bold">talent</span> of <span className="font-bold">success</span> is <span className="font-bold">nothing more than doing</span> what <span className="font-bold">you can do well</span>, and <span className="font-bold">doing well whatever you do</span>..." — Henry Wadsworth Longfellow.
            </p>
          </div>

          <div className="max-w-5xl mx-auto text-gray-700 space-y-5 text-[15px] leading-relaxed mb-10">
            <p>
              We are delighted to share that three students from PCTE have been awarded the <span className="font-bold">ISTE Best Student Award 2025</span> for their outstanding academic performance and remarkable contributions to technical activities.
            </p>
            <p>Please join us in congratulating:</p>
            <ul className="list-disc pl-10 space-y-2">
              <li className="font-medium">Ms. Harsimranjit Kaur</li>
              <li className="font-medium">Ms. Jasleen Kaur</li>
              <li className="font-medium">Ms. Radhika</li>
            </ul>
            <p>
              Their achievement is a proud moment for the institute and reflects <span className="font-bold">PCTE's</span> strong commitment to excellence in technical education and holistic student development.
            </p>
          </div>

          {/* Image Grid 2025 (3 columns - Matches Image 2) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 max-w-6xl mx-auto">
            <div className="bg-white shadow-sm overflow-hidden border border-gray-200">
              <img src="/LifeatPCTE/image 1.webp" alt="Award 2025" className="w-full h-auto object-cover" />
            </div>
            <div className="bg-white shadow-sm overflow-hidden border border-gray-200">
              <img src="/LifeatPCTE/image 2.webp" alt="Award 2025" className="w-full h-auto object-cover" />
            </div>
            <div className="bg-white shadow-sm overflow-hidden border border-gray-200">
              <img src="/LifeatPCTE/image3.webp" alt="Award 2025" className="w-full h-auto object-cover" />
            </div>
          </div>
        </section>

        <hr className="border-gray-100 mb-20" />

        {/* 2024 Award Section (Matches Image 3) */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 font-serif">
              ISTE Best Student Award 2024
            </h3>
          </div>

          <div className="max-w-5xl mx-auto text-gray-700 text-[15px] leading-relaxed mb-12">
            <p>
              It warms our hearts to inform that <span className="font-bold">Ms. Shreya Bansal</span> and <span className="font-bold">Ms. Harsimranjit Kaur</span>, students of B.Tech. (Computer Sc. & Engineering) of PCTE-Institute of Engineering & Technology, Ludhiana jointly received <span className="font-bold">ISTE Best Student Award for year 2024</span> for their excellent overall performance in academics & co-curricular activities in the last academic session. The award was handed to them during <span className="font-bold">ISTE Students' Section (Pb, Chd, HP and J&K) Convention-2024</span> hosted by <span className="font-bold">Chitkara University Rajpura</span> on <span className="font-bold">October 17, 2024</span>.
            </p>
          </div>

          {/* Image Grid 2024 (2 columns - Matches Image 3) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-5xl mx-auto">
            <div className="bg-white shadow-sm overflow-hidden border border-gray-200">
              <img src="/LifeatPCTE/image4.webp" alt="Award 2024 Presentation" className="w-full h-auto object-cover" />
            </div>
            <div className="bg-white shadow-sm overflow-hidden border border-gray-200">
              <img src="/LifeatPCTE/image5.webp" alt="Award 2024 Winners" className="w-full h-auto object-cover" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Stars;
