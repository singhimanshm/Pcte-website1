
import footerLogo from '../../assets/footer_logo.png';

import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
   return (
      <footer className="bg-[#0f0f0f] text-gray-400 font-sans pt-16 pb-12 border-t-4 border-primary">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 items-start">
               {/* Col 1: Contact Info */}
               <div className="space-y-6 lg:col-span-1">
                  {/* Logo Area */}
                  <div className="color-white">
                     <img
                        src={footerLogo}
                        alt="PCTE Group of Institutes"
                        className="h-40 w-auto object-contain"
                     />
                  </div>

                  <div className="space-y-5 text-[13px] leading-relaxed">
                     <div className="flex items-center gap-3 group">
                        <Phone className="w-4 h-4 text-gray-500 group-hover:text-primary transition-colors shrink-0" />
                        <span className="group-hover:text-gray-300 transition-colors">0161 - 2888500</span>
                     </div>
                     <div className="flex items-start gap-3 group">
                        <MapPin className="w-4 h-4 text-gray-500 group-hover:text-primary transition-colors shrink-0 mt-1" />
                        <span className="group-hover:text-gray-300 transition-colors">Campus-1, Baddowal, Ferozepur Road,<br />Ludhiana-142021, Punjab, India</span>
                     </div>
                     <div className="flex items-start gap-3 group">
                        <MapPin className="w-4 h-4 text-gray-500 group-hover:text-primary transition-colors shrink-0 mt-1" />
                        <span className="group-hover:text-gray-300 transition-colors">Campus-2, Near Baddowal Cantt, Ferozepur Road, Ludhiana-142021, Punjab, India</span>
                     </div>
                     <div className="flex items-start gap-3 group">
                        <Mail className="w-4 h-4 text-gray-500 group-hover:text-primary transition-colors shrink-0 mt-1" />
                        <div className="flex flex-col group-hover:text-gray-300 transition-colors">
                           <a href="mailto:info@pcte.edu.in" className="hover:text-primary">info@pcte.edu.in</a>
                           <a href="mailto:admissions@pcte.edu.in" className="hover:text-primary">admissions@pcte.edu.in</a>
                        </div>
                     </div>
                  </div>

                  <div className="flex gap-4 pt-2">
                     <a href="#" className="w-9 h-9 border border-gray-700 rounded-full flex items-center justify-center hover:border-primary hover:bg-primary hover:text-white transition-all duration-300"><Facebook size={16} /></a>
                     <a href="#" className="w-9 h-9 border border-gray-700 rounded-full flex items-center justify-center hover:border-primary hover:bg-primary hover:text-white transition-all duration-300"><Instagram size={16} /></a>
                  </div>
               </div>

               {/* Col 2: Courses Offered 1 */}
               <div className="lg:pl-8">
                  <h3 className="text-primary text-lg font-bold mb-6 tracking-wide">Courses Offered</h3>
                  <ul className="space-y-4 text-[13px]">
                     <li><Link to="/courses/engineering/cse" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">B.Tech CSE</Link></li>
                     <li><Link to="/courses/engineering/civil" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">B.Tech CE</Link></li>
                     <li><Link to="/courses/engineering/mechanical" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">B.Tech ME</Link></li>
                     <li><Link to="/courses/ug/mls" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">B.Sc. MLS</Link></li>
                     <li><Link to="/courses/ug/fashion" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">B.Sc. FD</Link></li>
                     <li><Link to="/courses/ug/bajmc" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">BAJMC</Link></li>
                     <li><Link to="/courses/ug/bttm" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">BTTM</Link></li>
                     <li><Link to="/courses/ug/hmct" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">BHMCT</Link></li>
                  </ul>
               </div>

               {/* Col 3: Courses Offered 2 */}
               <div className="lg:pl-4">
                  <h3 className="text-primary text-lg font-bold mb-6 tracking-wide opacity-0 hidden lg:block select-none">Courses Offered</h3>
                  {/* Mobile header for this section if needed, but usually hidden in this layout style */}
                  <h3 className="text-primary text-lg font-bold mb-6 tracking-wide lg:hidden">More Courses</h3>

                  <ul className="space-y-4 text-[13px]">
                     <li><Link to="/courses/ug/bca" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">BCA</Link></li>
                     <li><Link to="/courses/ug/bba" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">BBA</Link></li>
                     <li><Link to="/courses/ug/bcom" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">B.Com Hon.</Link></li>
                     <li><Link to="/courses/ug/bpharm" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">B.Pharma</Link></li>
                     <li><Link to="/courses/pg/mba" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">MBA</Link></li>
                     <li><Link to="/courses/pg/mba-ib" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">MBA IB</Link></li>
                     <li><Link to="/courses/diploma/pharmacy" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">D.Pharma</Link></li>
                     <li><Link to="/courses/engineering/ai-ml" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">B.Tech AI/ML</Link></li>
                  </ul>
               </div>

               {/* Col 4: For Students */}
               <div className="lg:pl-4">
                  <h3 className="text-primary text-lg font-bold mb-6 tracking-wide">For Students</h3>
                  <ul className="space-y-4 text-[13px]">
                     <li><a href="https://crm.pcte.edu.in/form/C1776F3B-F400-4F6B-9D84-D2FB4D9A3BC8" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">Apply Now</a></li>
                     <li><Link to="/admission" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">How to Apply?</Link></li>
                     <li><Link to="/admission" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">International Admissions</Link></li>
                     <li><Link to="/enquire" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">Reach a Counsellor</Link></li>
                  </ul>
                  <div className="mt-8 flex items-center gap-3 text-xs text-gray-500 border border-gray-800 p-3 rounded bg-black/30">
                     <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_5px_#22c55e]"></div>
                     <span>Over 7 million students</span>
                  </div>
               </div>

               {/* Col 5: Students & Faculty */}
               <div className="lg:pl-4">
                  <h3 className="text-primary text-lg font-bold mb-6 tracking-wide">Students & Faculty</h3>
                  <ul className="space-y-4 text-[13px]">
                     <li><Link to="/about/e-cell" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">E-Cell</Link></li>
                     <li><Link to="/life-at-pcte" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">Campus Life</Link></li>
                     <li><Link to="/about/directions" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">About Ludhiana</Link></li>
                     <li><Link to="/admission/pay" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">Pay Fee Online</Link></li>
                     <li><Link to="/about/collaborations" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">International Collaborations</Link></li>
                     <li><Link to="/research" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">Research @ PCTE</Link></li>
                  </ul>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
