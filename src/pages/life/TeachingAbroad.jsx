import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Plane, Users, Calendar, Mail, FileText } from 'lucide-react';

const TeachingAbroad = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const programs = [
    {
      id: "break",
      title: "Summer Break",
      icon: <Calendar className="w-6 h-6 text-primary" />,
      content: "We are excited to invite you to join us for an enriching academic experience during the summer break in India in August at PCTE. Located in the vibrant city of Ludhiana, Punjab, PCTE offers a dynamic learning environment with a focus on global perspectives. Our institution boasts state-of-the-art infrastructure, experienced faculty, and a diverse student body from 40+ countries.",
      cta: "Submit Proposal",
      link: "https://forms.gle/CzdC7V4zGoNkdN9U8"
    },
    {
      id: "week",
      title: "Global Week",
      icon: <Globe className="w-6 h-6 text-primary" />,
      content: "Take part in the exciting Global Week hosted in Ludhiana, North India, spanning from the last week of February to the first week of March. As part of the esteemed International Conference for Multidisciplinary Research (PCTE-ICMR), this event promises to gather luminaries from across Asia and beyond, fostering an exchange of ideas that transcend geographical borders.",
      cta: "Express Interest",
      link: "https://forms.gle/CzdC7V4zGoNkdN9U8"
    },
    {
      id: "exchange",
      title: "Faculty Exchange Program",
      icon: <Users className="w-6 h-6 text-primary" />,
      content: "Participate in our faculty exchange program for a week or fortnight during the Fall or Spring Semester. During your stay, we provide lodging and mess/food facilities on campus. Additionally, we offer a unique cultural experience with a trip to the iconic Golden Temple in Amritsar or the vibrant city of Chandigarh.",
      cta: "Join Program",
      link: "https://forms.gle/CzdC7V4zGoNkdN9U8"
    },
    {
      id: "semester",
      title: "Full Semester Program",
      icon: <Plane className="w-6 h-6 text-primary" />,
      content: "Join us for a rewarding academic assignment in our full semester program during the Fall or Spring Semester. We offer a competitive remuneration package in line with the Indian pay scales, along with lodging and food facilities. This opportunity allows you to mentor students and contribute to their professional growth while experiencing India firsthand.",
      cta: "Apply for Semester",
      link: "https://forms.gle/CzdC7V4zGoNkdN9U8"
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Dark Hero Section */}
      <section className="bg-[#1a1c23] py-12 md:py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-3xl md:text-4xl font-bold uppercase tracking-wide">
            Teaching Abroad – International Teaching Jobs
          </h1>
        </div>
      </section>

      {/* Breadcrumb Section */}
      <nav className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-3 text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <Link to="/" className="hover:text-red-700">Home</Link>
            <span>›</span>
            <span className="text-gray-400">Teaching Abroad</span>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Intro Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-[#880000] text-3xl font-bold font-serif mb-6">
            Explore Rewarding Teaching Opportunities
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            PCTE Group of Institutes invites experienced professors like you to join our vibrant academic community. We offer a variety of teaching abroad programs designed to enrich your career, collaborate with international faculty, and make a lasting impact on our students.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {programs.map((program) => (
            <div key={program.id} className="bg-gray-50 p-8 rounded-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white rounded-full shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{program.title}</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {program.content}
              </p>
              <a
                href={program.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary font-bold uppercase text-sm tracking-wider hover:gap-2 transition-all"
              >
                {program.cta} <FileText size={16} className="ml-2" />
              </a>
            </div>
          ))}
        </div>

        <hr className="border-gray-100 mb-20" />

        {/* Detailed Sections */}
        <div className="space-y-24">
          {/* Summer Break Detail */}
          <section id="break" className="scroll-mt-24">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 font-serif border-l-4 border-primary pl-4">Summer Break (August)</h3>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>Join us for an enriching academic experience during the summer break in August. PCTE offers a dynamic learning environment dedicated to fostering excellence in education and research.</p>
                  <p>By joining us as a visiting professor, you will have the opportunity to engage with motivated students, share your insights, and immerse yourself in the rich culture and heritage of India.</p>
                  <p>Your participation will not only enrich our educational offerings but also strengthen our ties with the global academic community.</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 bg-gray-100 aspect-video rounded-sm overflow-hidden shadow-inner flex items-center justify-center">
                <img src="/LifeatPCTE/image 8.webp" alt="Summer Break" className="w-full h-full object-cover" />
              </div>
            </div>
          </section>

          {/* Global Week Detail */}
          <section id="week" className="scroll-mt-24">
            <div className="flex flex-col md:flex-row-reverse gap-12 items-start">
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 font-serif border-r-4 border-primary pr-4 text-right">Global Week (Feb-March)</h3>
                <div className="space-y-4 text-gray-600 leading-relaxed text-right md:text-left">
                  <p>Part of the esteemed International Conference for Multidisciplinary Research (PCTE-ICMR), this event gathers luminaries from across Asia and beyond.</p>
                  <p>Global Week broadens horizons and inspires a collective commitment to fostering cross-cultural understanding. Discourses during this week leave an indelible mark on all participants.</p>
                  <p>We invite you to seize this opportunity to be a part of our dynamic academic community and embark on a journey of discovery and collaboration.</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 bg-gray-100 aspect-video rounded-sm overflow-hidden shadow-inner flex items-center justify-center">
                <img src="/LifeatPCTE/web 7.webp" alt="Global Week" className="w-full h-full object-cover" />
              </div>
            </div>
          </section>

          {/* Contact & CTA Section */}
          <section className="bg-gray-50 p-10 md:p-16 text-center rounded-sm border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 font-serif">Ready to Join Us?</h3>
            <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
              For further information or to express your interest in teaching at PCTE Group of Institutes, please reach out to our Dean, International Affairs.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-10">
              <div className="bg-white p-6 rounded shadow-sm border border-gray-100 w-full max-w-xs">
                <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Dean, International Affairs</p>
                <p className="text-lg font-bold text-gray-800 mb-1">Ms. Harpreet K Kang</p>
                <a href="mailto:harpreet@pcte.edu.in" className="text-primary hover:underline font-medium">harpreet@pcte.edu.in</a>
              </div>
            </div>

            <a
              href="https://forms.gle/CzdC7V4zGoNkdN9U8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-primary text-white font-bold uppercase tracking-widest rounded-sm hover:bg-red-800 transition-colors shadow-lg"
            >
              Teaching Abroad Proposal Form
            </a>
          </section>
        </div>
      </main>
    </div>
  );
};

export default TeachingAbroad;
