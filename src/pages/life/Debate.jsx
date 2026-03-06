import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Debate = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const prizes = [
    { label: "1st Prize", value: "Rs. 1,00,000" },
    { label: "2nd Prize", value: "Rs. 25,000" },
    { label: "3rd Prize", value: "Rs. 10,000" },
    { label: "Quarter Finalists", value: "Rs. 3000 (to each team)" },
  ];

  const rankings = [
    "PCTE ranked 3rd in Punjab and 7th in India as a Best Private B-School in the Country, in the Best Value for Money Category.",
    "Ranked 3rd under best MBA Colleges in Punjab by Business Today - MDRA 2023 Best B School Survey.",
    "Ranked 57th best BBA college by India Today in its Annual Survey, 2024.",
    "Ranked 7th best BCA and 6th best Business Management college in Punjab by India Today Magazine in the year 2024.",
    "Ranked 9th best B.Com College in Punjab and 138th best B.Com college in the country by OUTLOOK Magazine in the year 2022.",
    "Declared Best Pharmacy College in the Year 2014 by PTU.",
    "Earned a world record for creating the largest wooden thali.",
    "PCTE was awarded Philip Kotler Award for Management, MALAYSIA.",
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Dark Hero Section (Matches Image 0) */}
      <section className="bg-[#1a1c23] py-12 md:py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-3xl md:text-4xl font-bold uppercase tracking-wide">
            Dr. DR Singh Memorial British Parliamentary Debate
          </h1>
        </div>
      </section>

      {/* Breadcrumb Section (Matches Image 0 bottom) */}
      <nav className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-3 text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <Link to="/" className="hover:text-red-700">Home</Link>
            <span>›</span>
            <span className="text-gray-400">Dr. DR Singh Memorial British Parliamentary Debate</span>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Poster Section (Matches Image 1) */}
        <div className="flex justify-center mb-16">
          <div className="max-w-2xl w-full border border-gray-200 shadow-xl overflow-hidden rounded-sm">
            <img
              src="/LifeatPCTE/image 6.webp"
              alt="Debate Season XVI Poster"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Event Intro Section */}
        <section className="mb-16">
          <h2 className="text-[#880000] text-3xl font-bold font-serif mb-8 text-center">
            Dr. DR Singh Memorial British Parliamentary Debate
          </h2>

          <div className="space-y-6 text-gray-700 text-[15px] leading-relaxed">
            <p className="font-bold">All that you need to know about Dr. DR Singh Memorial British Parliamentary Debate Season XVI</p>
            <p>Greetings from the PCTE Group of Institutes,</p>
            <p className="italic font-medium border-l-4 border-gray-100 pl-4 py-1">
              "Words are the most powerful weapon to bring a change!"
            </p>
            <p>
              With the world embracing democracy wholeheartedly, <span className="font-bold">PCTE Group of Institutes</span> is back with the enriching <span className="font-bold">Dr. DR Singh Memorial British Parliamentary Debate Season XVI on 13th and 14th February 2026</span>. We are sending an invite to your prestigious institute for India's biggest Inter-varsity British Parliamentary debating championship.
            </p>
            <p>
              <span className="font-bold">Note:</span> The British Parliamentary debating format is the official format of the World Universities Debating Championships (WUDC).
            </p>
            <p>
              <span className="font-bold">PCTE</span> with the active cooperation of <span className="font-bold">LMA (Ludhiana Management Association)</span> pioneered the British Parliamentary Debate in the country a decade ago.
            </p>
          </div>
        </section>

        {/* Rankings Section (Matches Image 2) */}
        <section className="mb-16">
          <ul className="list-disc pl-8 space-y-3 text-gray-700 text-[15px]">
            {rankings.map((rank, i) => (
              <li key={i}>{rank}</li>
            ))}
          </ul>
        </section>

        {/* Platforms Info */}
        <section className="mb-16">
          <p className="bg-gray-50 p-6 rounded-sm text-gray-700 border-l-4 border-primary italic">
            This event has been a platform for brilliant young minds from across India and neighbouring countries to cross swords with their counter parts, foster healthy contentions and learn to appreciate a diverse flow of ideas and opinions.
          </p>
        </section>

        {/* Prize Table (Matches Image 2) */}
        <section className="mb-16 overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200">
            <tbody>
              {prizes.map((prize, i) => (
                <tr key={i} className="border-b border-gray-200">
                  <td className="p-4 font-bold text-gray-800 bg-gray-50 w-1/3">{prize.label}</td>
                  <td className="p-4 text-gray-700 font-semibold">{prize.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Rules & Contact Section (Matches Image 2 bottom) */}
        <section className="space-y-8 text-gray-700 text-[14px]">
          <div className="bg-blue-50/30 p-6 border border-blue-100">
            <p className="font-bold mb-2 uppercase text-xs tracking-wider text-blue-900 opacity-70">Accommodation</p>
            <p>Comfortable accommodation will be provided to students from outside Punjab free of cost. Note – In case you need to stay further you will have to make your own arrangements.</p>
          </div>

          <div className="space-y-4">
            <p>
              <span className="font-bold">Registration: (link for registration):</span>{" "}
              <a href="https://forms.gle/sJkcrZCAQQ2VkFmNA" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                https://forms.gle/sJkcrZCAQQ2VkFmNA
              </a>
            </p>
            <ul className="list-disc pl-8 space-y-1">
              <li>No registration fee.</li>
              <li>One team per college is allowed.</li>
              <li>For universities or groups of institutions maximum of 2 teams are allowed.</li>
            </ul>
          </div>

          <div className="pt-8 border-t border-gray-100">
            <p className="font-bold mb-4">For any specific queries kindly contact:</p>
            <ul className="list-disc pl-8 space-y-2">
              <li>
                <span className="font-medium">Ms. Gurleen</span> (Assistant Professor Department of Management, PCTE Group of Institutes) – Mob – <span className="font-bold">+91-8837516218</span>, <span className="font-bold">+91-9988073488</span>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Debate;
