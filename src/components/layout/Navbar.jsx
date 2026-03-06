import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import pctelogo from '../../assets/logo_new.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState({});
  const location = useLocation();

  const toggleMobileSubmenu = (key) => {
    setMobileSubmenu((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const menuItems = [
    { title: "Home", path: "/" },
    {
      title: "About",
      path: "#",
      submenu: [
        { title: "About Us", path: "/about/us" },
        { title: "NIRF", path: "/about/nirf" },
        { title: "IKS", path: "/about/iks" },
        {
          title: "ICMR",
          path: "/about/icmr",
          submenu: [
            { title: "BHMCT-ICMR", path: "/about/bhmct-icmr" },
          ]
        },
        { title: "Why PCTE?", path: "/about/why-pcte" },
        { title: "Trust Members", path: "/about/trust-members" },
        { title: "Advisory Board", path: "/about/advisory-board" },
        { title: "Approval Letters", path: "/about/approval-letters" },
        { title: "Committees", path: "/about/committees" },
        { title: "Grievance Addressal Form", path: "/about/grievance" },
        { title: "Mandatory Disclosure", path: "/about/disclosure" },
        { title: "E-Cell", path: "/about/e-cell" },
        { title: "Transportation", path: "/about/transportation" },
        { title: "Hostels & Guest House", path: "/about/hostels" },
        { title: "International Collaborations", path: "/about/collaborations" },
        { title: "Directions", path: "/about/directions" },
        {
          title: "Research",
          path: "/research",
          submenu: [
            { title: "PCTE Institute of Engineering & Technology", path: "/research/engineering-technology" },
            { title: "Punjab College of Technology Education", path: "/research/punjab-college" },
            { title: "PCTE Group of Institutes", path: "/research/group-of-institutes" },
          ]
        },
      ],
    },
    {
      title: "Courses",
      path: "/courses",
      submenu: [
        {
          title: "Engineering",
          submenu: [
            { title: "Computer Science Engineering", path: "/courses/engineering/cse" },
            { title: "AI & ML", path: "/courses/engineering/ai-ml" },
            { title: "Mechanical Engineering", path: "/courses/engineering/mechanical" },
            { title: "Civil Engineering", path: "/courses/engineering/civil" },
          ],
        },
        {
          title: "UG Courses",
          submenu: [
            { title: "BCA", path: "/courses/ug/bca" },
            { title: "BBA", path: "/courses/ug/bba" },
            { title: "B.Com (Hons)", path: "/courses/ug/bcom" },
            { title: "B.Pharmacy", path: "/courses/ug/bpharm" },
            { title: "B.Sc. Fashion Designing", path: "/courses/ug/fashion" },
            { title: "BHMCT", path: "/courses/ug/bhmct" },
            { title: "BAJMC", path: "/courses/ug/bajmc" },
            { title: "BTTM", path: "/courses/ug/bttm" },
            { title: "B.Sc. MLS", path: "/courses/ug/mls" }
          ],
        },
        {
          title: "PG Courses",
          submenu: [
            { title: "MBA", path: "/courses/pg/mba" },
            { title: "MBA (IB)", path: "/courses/pg/mba-ib" },
          ],
        },
        {
          title: "Diploma Courses",
          submenu: [
            { title: "Diploma in Pharmacy", path: "/courses/diploma/pharmacy" },
          ],
        }

      ],
    },
    {
      title: "Life @ PCTE",
      path: "/life-at-pcte",
      submenu: [
        { title: "Glorious Stars at PCTE", path: "/life/stars" },
        { title: "Dr. DR Singh Memorial British Parliamentary Debate", path: "/life/debate" },
        { title: "Teaching Abroad – International Teaching Jobs", path: "/life/teaching-abroad" },
      ],
    },
    {
      title: "Admission",
      path: "/admission",
      submenu: [
        { title: "Apply Now", path: "https://crm.pcte.edu.in/form/C1776F3B-F400-4F6B-9D84-D2FB4D9A3BC8" },
        { title: "Pay Now", path: "/admission/pay" },
        { title: "Scholarship Scheme", path: "/admission/scholarship" },
      ],
    },
    { title: "Enquire", path: "/enquire" },
    { title: "Placements", path: "/placements" },
    {
      title: "Contact Us",
      path: "/contact",
      submenu: [
        { title: "Contact Details", path: "/contact/details" },
        { title: "Location Map", path: "/contact/map" },
      ],
    },
  ];

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">

          {/* LOGO */}
          <Link to="/">
            <img src={pctelogo} alt="PCTE" className="h-16" />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden xl:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.path.startsWith('http') ? (
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-3 py-2 text-xs font-semibold uppercase flex items-center whitespace-nowrap
                      text-gray-800 hover:text-primary
                    `}
                  >
                    {item.title}
                    {item.submenu && <ChevronDown size={14} className="ml-1" />}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-3 py-2 text-xs font-semibold uppercase flex items-center whitespace-nowrap
                      ${location.pathname === item.path ? 'text-primary' : 'text-gray-800 hover:text-primary'}
                    `}
                  >
                    {item.title}
                    {item.submenu && <ChevronDown size={14} className="ml-1" />}
                  </Link>
                )}

                {item.submenu && (
                  <div className={`absolute top-full left-0 ${item.title === 'About' ? 'min-w-[520px]' : 'min-w-[260px]'} invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all`}>
                    <div className={`bg-white border-t-4 border-primary shadow-md rounded-b ${item.title === 'About' ? 'grid grid-cols-2 p-2' : ''}`}>
                      {item.submenu.map((subItem, i) => (
                        <div key={i} className="relative group/sub">
                          {subItem.path && subItem.path.startsWith('http') ? (
                            <a
                              href={subItem.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex justify-between px-4 py-2 text-[13px] text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors rounded"
                            >
                              {subItem.title}
                              {subItem.submenu && <ChevronRight size={14} />}
                            </a>
                          ) : (
                            <Link
                              to={subItem.path || '#'}
                              className="flex justify-between px-4 py-2 text-[13px] text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors rounded"
                            >
                              {subItem.title}
                              {subItem.submenu && <ChevronRight size={14} />}
                            </Link>
                          )}

                          {subItem.submenu && (
                            <div className="absolute top-0 left-full min-w-[240px] invisible opacity-0 group-hover/sub:visible group-hover/sub:opacity-100">
                              <div className="bg-white border-t-4 border-primary shadow-md rounded-b">
                                {subItem.submenu.map((deep, d) => (
                                  deep.path.startsWith('http') ? (
                                    <a
                                      key={d}
                                      href={deep.path}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="block px-5 py-2.5 text-[13px] text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors"
                                    >
                                      {deep.title}
                                    </a>
                                  ) : (
                                    <Link
                                      key={d}
                                      to={deep.path}
                                      className="block px-5 py-2.5 text-[13px] text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors"
                                    >
                                      {deep.title}
                                    </Link>
                                  )
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Link to="/photo-tour" className="ml-2 px-3 py-2 bg-black text-white text-[10px] font-semibold whitespace-nowrap">
              Photo Tour
            </Link>
            <Link to="/brochure" className="ml-1 px-3 py-2 bg-primary text-white text-[10px] font-semibold whitespace-nowrap">
              E-Brochure
            </Link>
          </nav>

          {/* MOBILE BUTTON */}
          <button className="xl:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="xl:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-2">
            {menuItems.map((item, i) => (
              <div key={i}>
                <div
                  className="flex justify-between items-center py-2 font-semibold"
                  onClick={() => item.submenu && toggleMobileSubmenu(item.title)}
                >
                  {item.path.startsWith('http') ? (
                    <a href={item.path} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                      {item.title}
                    </a>
                  ) : (
                    <Link to={item.path} onClick={() => setIsOpen(false)}>
                      {item.title}
                    </Link>
                  )}
                  {item.submenu && <ChevronDown size={18} />}
                </div>

                {item.submenu && mobileSubmenu[item.title] && (
                  <div className="pl-4 space-y-1">
                    {item.submenu.map((sub, s) => (
                      <div key={s}>
                        {sub.path && sub.path.startsWith('http') ? (
                          <a
                            href={sub.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block py-1 text-sm text-gray-600"
                            onClick={() => setIsOpen(false)}
                          >
                            {sub.title}
                          </a>
                        ) : (
                          <Link
                            to={sub.path || '#'}
                            className="block py-1 text-sm text-gray-600"
                            onClick={() => setIsOpen(false)}
                          >
                            {sub.title}
                          </Link>
                        )}

                        {sub.submenu && (
                          <div className="pl-4">
                            {sub.submenu.map((deep, d) => (
                              deep.path.startsWith('http') ? (
                                <a
                                  key={d}
                                  href={deep.path}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block py-1 text-sm text-gray-500"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {deep.title}
                                </a>
                              ) : (
                                <Link
                                  key={d}
                                  to={deep.path}
                                  className="block py-1 text-sm text-gray-500"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {deep.title}
                                </Link>
                              )
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-2 space-y-2">
              <Link
                to="/photo-tour"
                className="block w-full px-4 py-3 bg-black text-white text-center font-semibold rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Photo Tour
              </Link>
              <Link
                to="/brochure"
                className="block w-full px-4 py-3 bg-primary text-white text-center font-semibold rounded-md"
                onClick={() => setIsOpen(false)}
              >
                E-Brochure
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
