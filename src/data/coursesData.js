const RECRUITERS = [
    "/Home page logos/Google.jpg.jpeg",
    "/Home page logos/Microsoft.jpg.jpeg",
    "/Home page logos/Amazon.jpg.jpeg",
    "/Home page logos/Accenture.jpg (1).jpeg",
    "/Home page logos/Airtel.jpg.jpeg",
    "/Home page logos/Capgemini.jpg.jpeg",
    "/Home page logos/Cognizant.jpg.jpeg",
    "/Home page logos/Dell.jpg.jpeg",
    "/Home page logos/Goldman Sachs.jpg.jpeg",
    "/Home page logos/HCL.jpg.jpeg",
    "/Home page logos/HDFC.jpg.jpeg",
    "/Home page logos/IBM.jpg.jpeg",
    "/Home page logos/ICICI Bank.jpg.jpeg",
    "/Home page logos/TCS.jpg.jpeg",
    "/Home page logos/Wipro.jpg.jpeg",
    "/Home page logos/deloitte.jpg.jpeg",
    "/Home page logos/infosys.jpg.jpeg",
    "/Home page logos/Omni hotels.jpg.jpeg",
    "/Home page logos/Oracle.jpg.jpeg",
    "/Home page logos/Taj.jpg.jpeg",
    "/Home page logos/The Residency Towers.jpg.jpeg",
    "/Home page logos/The Ritz Carlton.jpg (1).jpeg",
    "/Home page logos/jaro education.jpg.jpeg",
    "/Home page logos/the oberoi.jpg.jpeg",
];

export const COURSES_DATA = {
    "engineering": {
        "cse": {
            title: "Computer Science Engineering | CSE",
            image: "/courses/cse.jpg",
            heroTitle: "Turn Curiosity into Code — Build the Future with CSE at PCTE!",
            heroSubtitle: "From intelligent machines to real-time data solutions, PCTE's CSE program equips you with hands-on skills, global exposure, and the career edge needed in tomorrow's tech world.",
            highlightTitle: "Our Program Highlights",
            highlightText: "The B.Tech CSE program at PCTE is crafted to build future-ready software engineers and tech architects. Covering everything from programming fundamentals and full-stack development to cloud computing and cybersecurity, the curriculum is designed to bridge the gap between academic knowledge and industry demand.",
            accordionData: [
                {
                    title: "SOFTWARE DEVELOPMENT LABS",
                    content: "These labs provide an environment for students to practice coding in C, C++, Java, Python, and more. From building desktop applications to web-based platforms, this is where problem-solving turns into real software solutions."
                },
                {
                    title: "NETWORKING & CYBERSECURITY LAB",
                    content: "Students gain hands-on experience with networking protocols, firewall setups, and ethical hacking practices. This lab is essential for understanding secure communication."
                },
                {
                    title: "FULL STACK DEVELOPMENT STUDIO",
                    content: "Dedicated to web and mobile development, students work with modern frameworks like React and Node.js to build and deploy full-fledged applications."
                },
                {
                    title: "CLOUD COMPUTING & DEVOPS ZONE",
                    content: "This zone introduces students to cloud platforms like AWS, Azure, and Google Cloud, focusing on infrastructure automation and deployment pipelines."
                },
                {
                    title: "CAPSTONE PROJECT & INDUSTRY CONNECT",
                    content: "Final-year students collaborate with industry mentors on real-world challenges, turning classroom concepts into market-ready technology products."
                }
            ],
            extraTabs: [
                { id: 'CSE', label: 'CSE' },
                { id: 'Course Details', label: 'Course Details' },
                { id: 'Why PCTE?', label: 'Why PCTE?' }
            ],
            extraTabsContent: {
                'CSE': "The dynamic field of Computer Science and Engineering (CSE) consistently offers a broad scope and myriad opportunities for professionals. This buzz is largely driven by the rapid expansion of the IT industry. Major players like TCS, CTS, IBM, Infosys, and Wipro continually scout for tech talent to stay at the forefront of technological evolution. The burgeoning computational demands of contemporary global businesses have ushered in a massive demand for CSE professionals. Currently, one in every six individuals globally is involved in the CSE industry in some capacity. Cutting edge technologies, like cloud computing, are poised to unlock even more attractive opportunities both domestically and internationally. As these advancements continue to shape our digital landscape, the prospects for CSE professionals are set to soar.",
                'Course Details': "The B.Tech in Computer Science and Engineering program at PCTE is a comprehensive curriculum that integrates theoretical knowledge with practical application. Students delve into core subjects such as Data Structures, Algorithms, Software Engineering, and Database Management Systems. Specializations in Artificial Intelligence, Machine Learning, Cloud Computing, and Cybersecurity allow students to tailor their education to their career aspirations. The program emphasizes project-based learning, ensuring students are well-equipped to tackle real-world challenges in the technology sector.",
                'Why PCTE?': "PCTE Group of Institutes stands out for its commitment to excellence in technical education. With state-of-the-art labs, a robust industry-institute interface, and a faculty of experienced professionals, PCTE provides an environment where innovation thrives. Our students benefit from global exposure through international collaborations and exchange programs. The campus life is vibrant, with numerous student-led clubs and events that foster holistic development. PCTE is not just about academics; it's about preparing you for a successful and fulfilling career in the global tech industry."
            },
            whyPCTEImages: [
                {
                    desktop: "/courses/CSE/ET-1.jpeg",
                    mobile: "/courses/CSE/Etmobile-1.jpeg"
                },
                {
                    desktop: "/courses/CSE/ET-2.jpeg",
                    mobile: "/courses/CSE/ETmobile-2.jpeg"
                },
                {
                    desktop: "/courses/CSE/ET-3.jpeg",
                    mobile: "/courses/CSE/ETmobile-3.jpeg"
                }


            ],
            recruiters: RECRUITERS
        },
        "ai-ml": {
            title: "Artificial Intelligence & ML",
            image: "/courses/aiml.jpg",
            heroTitle: "Shape the Future with AI & Machine Learning at PCTE!",
            heroSubtitle: "Master the algorithms that power the world. Our AI & ML program prepares you for the frontier of technology with hands-on projects.",
            highlightTitle: "Course Overview",
            highlightText: "Focus on machine learning algorithms, neural networks, and AI-driven solutions for real-world problems. The curriculum covers deep learning, natural language processing, and computer vision.",
            accordionData: [
                {
                    title: "MACHINE LEARNING LABS",
                    content: "Implement cutting-edge algorithms using Python, TensorFlow, and PyTorch for predictive modeling and data analysis."
                },
                {
                    title: "DATA SCIENCE STUDIO",
                    content: "Learn to handle big data, perform statistical analysis, and visualize complex datasets effectively to derive actionable insights."
                },
                {
                    title: "DEEP LEARNING FRAMEWORKS",
                    content: "Explore neural networks, CNNs, and RNNs to build systems for image recognition, speech processing, and more."
                },
                {
                    title: "NATURAL LANGUAGE PROCESSING",
                    content: "Master the techniques behind language translation, sentiment analysis, and conversational AI like chatbots."
                },
                {
                    title: "AI ETHICS & RESPONSIBLE TECHNOLOGY",
                    content: "Understand the social, ethical, and legal implications of AI, focusing on fairness, transparency, and accountability."
                }
            ],
            extraTabs: [
                { id: 'AI-ML', label: 'AI-ML' },
                { id: 'Course Details', label: 'Course Details' },
                { id: 'Why PCTE?', label: 'Why PCTE?' }
            ],
            extraTabsContent: {
                'AI-ML': "Artificial Intelligence and Machine Learning are at the forefront of the fourth industrial revolution. At PCTE, we prepare students to lead this change by mastering algorithms that can learn from and make decisions based on data. From predicting consumer behavior to diagnosing diseases, AI & ML applications are limitless.",
                'Course Details': "Our AI & ML program focus on machine learning algorithms, neural networks, and AI-driven solutions for real-world problems. The curriculum covers deep learning, natural language processing, and computer vision, ensuring students are ready for the frontier of technology.",
                'Why PCTE?': "PCTE Group of Institutes stands out for its commitment to excellence in technical education. With state-of-the-art labs, a robust industry-institute interface, and a faculty of experienced professionals, PCTE provides an environment where innovation thrives. Our students benefit from global exposure through international collaborations."
            },

            whyPCTEImages: [
                {
                    desktop: "/courses/CSE/ET-1.jpeg",
                    mobile: "/courses/CSE/Etmobile-1.jpeg"
                },
                {
                    desktop: "/courses/CSE/ET-2.jpeg",
                    mobile: "/courses/CSE/ETmobile-2.jpeg"
                },
                {
                    desktop: "/courses/CSE/ET-3.jpeg",
                    mobile: "/courses/CSE/ETmobile-3.jpeg"
                }


            ],
            recruiters: RECRUITERS
        },
        "mechanical": {
            title: "Mechanical Engineering",
            image: "/courses/mechanical.jpg",
            heroTitle: "Engineers of the Physical World — PCTE Mechanical Engineering!",
            heroSubtitle: "Design, build, and maintain the systems that move the world. From automotive to robotics, get the hands-on experience you need.",
            highlightTitle: "Engineering Excellence",
            highlightText: "Mechanical Engineering at PCTE provides hands-on experience in design, manufacturing, and maintenance of mechanical systems using state-of-the-art labs.",
            accordionData: [
                {
                    title: "MANUFACTURING SHOP",
                    content: "Hands-on experience with CNC machines, traditional machining tools, and modern fabrication techniques for professional-grade production."
                },
                {
                    title: "CAD/CAM DESIGN LAB",
                    content: "Master industry-standard design software like SolidWorks and AutoCAD for 3D modeling and automated manufacturing simulations."
                },
                {
                    title: "THERMODYNAMICS & HEAT TRANSFER",
                    content: "Analyze energy conversion systems, internal combustion engines, and refrigeration cycles through practical experimentation."
                },
                {
                    title: "ROBOTICS & AUTOMATION",
                    content: "Learn to design and program industrial robots and automated systems for modern manufacturing and service sectors."
                },
                {
                    title: "MATERIAL SCIENCE RESEARCH",
                    content: "Investigate the properties and applications of metals, polymers, and composites to develop next-generation engineering materials."
                }
            ],
            whyPCTEImages: [
                {
                    desktop: "/courses/Cutt-scaled.webp",
                    mobile: "/courses/ET-Mobile mech.jpg"
                },
                {
                    desktop: "/courses/ET-3-scaled.webp",
                    mobile: "/courses/Mech-mobile.jpg"
                }
            ],
            extraTabs: [
                { id: 'Mechanical', label: 'Mechanical' },
                { id: 'Course Details', label: 'Course Details' },
                { id: 'Why PCTE?', label: 'Why PCTE?' }
            ],
            extraTabsContent: {
                'Mechanical': "Mechanical Engineering is the bedrock of industry and innovation. At PCTE, we blend classical engineering principles with modern technological advancements like robotics and automation to ensure our graduates are ready for the global manufacturing and service sectors.",
                'Course Details': "The mechanical engineering program provides hands-on experience in design, manufacturing, and maintenance of mechanical systems. Students master industry-standard CAD/CAM software and work in advanced manufacturing shops.",
                'Why PCTE?': "PCTE Group of Institutes stands out for its commitment to excellence in technical education. With state-of-the-art labs, a robust industry-institute interface, and a faculty of experienced professionals, PCTE provides an environment where innovation thrives."
            },
            recruiters: RECRUITERS
        },
        "civil": {
            title: "Civil Engineering",
            image: "/courses/civil.jpg",
            heroTitle: "Build the Foundations of the Future - Civil Engineering at PCTE!",
            heroSubtitle: "Design and create the infrastructure that builds our communities. From smart cities to sustainable structures.",
            highlightTitle: "Infrastructure & Innovation",
            highlightText: "Our Civil Engineering program emphasizes sustainable construction practices, modern infrastructure development, and structural integrity.",
            accordionData: [
                {
                    title: "SURVEYING & GEOMATICS",
                    content: "Practical field work using total stations and GPS to map and plan land development and infrastructure projects."
                },
                {
                    title: "CONCRETE TECHNOLOGY LAB",
                    content: "Testing and developing high-strength, sustainable building materials for modern and earthquake-resistant architecture."
                },
                {
                    title: "STRUCTURAL ANALYSIS STUDIO",
                    content: "Learn to design safe and efficient building frames, bridges, and dams using advanced structural simulation software."
                },
                {
                    title: "ENVIRONMENTAL ENGINEERING",
                    content: "Focus on water treatment, waste management, and sustainable urban planning to protect public health and the environment."
                },
                {
                    title: "GEOTECHNICAL LAB",
                    content: "Analyze soil properties and foundation behavior to ensure the stability of structures on various terrains."
                }
            ],
            extraTabs: [
                { id: 'Civil', label: 'Civil' },
                { id: 'Course Details', label: 'Course Details' },
                { id: 'Why PCTE?', label: 'Why PCTE?' }
            ],

            whyPCTEImages: [
                {
                    desktop: "/courses/Cutt-scaled.webp",
                    mobile: "/courses/ET-Mobile mech.jpg"
                },
                {
                    desktop: "/courses/ET-3-scaled.webp",
                    mobile: "/courses/Mech-mobile.jpg"
                }
            ],
            extraTabsContent: {
                'Civil': "Civil Engineering at PCTE is about building the future infrastructure of our world. We focus on sustainable construction, smart city planning, and resilient structural design, preparing students to take on large-scale engineering challenges.",
                'Course Details': "Our Civil Engineering program emphasizes sustainable construction practices, modern infrastructure development, and structural integrity. Students gain field experience in surveying, geomatics, and soil testing.",
                'Why PCTE?': "PCTE Group of Institutes stands out for its commitment to excellence in technical education. With state-of-the-art labs, a robust industry-institute interface, and a faculty of experienced professionals, PCTE provides an environment where innovation thrives."
            },
            recruiters: RECRUITERS
        }
    },
    "ug": {
        "bba": {
            title: "Business Administration | BBA",
            image: "/courses/bba.jpg",
            heroTitle: "Lead the Business World - BBA at PCTE!",
            heroSubtitle: "Develop the leadership, marketing, and management skills to excel in any corporate environment.",
            highlightTitle: "Management Mastery",
            highlightText: "BBA at PCTE is designed to create future business leaders through a mix of theory, practical industry exposure, and entrepreneurship training.",
            accordionData: [
                {
                    title: "BUSINESS SIMULATION LABS",
                    content: "Practice real-world decision-making through advanced business simulation software, managing virtual companies in competitive markets."
                },
                {
                    title: "SOFT SKILLS & LEADERSHIP",
                    content: "Comprehensive training in communication, negotiation, and team management to build corporate readiness and professional charisma."
                },
                {
                    title: "FINANCIAL LITERACY WORKSHOPS",
                    content: "Master the basics of accounting, budgeting, and investment strategies essential for modern business managers."
                },
                {
                    title: "MARKETING STRATEGY PROJECTS",
                    content: "Develop and execute brand campaigns, conduct market research, and explore digital marketing trends in real-world scenarios."
                },
                {
                    title: "INNOVATION & STARTUP INCUBATION",
                    content: "Turn business ideas into reality with support from our E-Cell, focusing on business models and pitching to investors."
                }
            ],
            extraTabs: [
                { id: 'BBA', label: 'BBA' },
                { id: 'Course Details', label: 'Course Details' },
                { id: 'Why PCTE?', label: 'Why PCTE?' }
            ],

            whyPCTEImages: [
                {
                    desktop: "/courses/Cutt-scaled.webp",
                    mobile: "/courses/ET-Mobile mech.jpg"
                },
                {
                    desktop: "/courses/ET-3-scaled.webp",
                    mobile: "/courses/Mech-mobile.jpg"
                }
            ],
            extraTabsContent: {
                'BBA': "BBA at PCTE is designed to create future business leaders through a mix of theory, practical industry exposure, and entrepreneurship training. Our students engage in real-world decision-making through advanced business simulation software.",
                'Course Details': "Develop the leadership, marketing, and management skills to excel in any corporate environment. The curriculum covers soft skills, leadership, financial literacy, and marketing strategy projects.",
                'Why PCTE?': "PCTE Group of Institutes provides an environment where innovation thrives. Our students benefit from global exposure and numerous student-led clubs that foster holistic development."
            },
            recruiters: RECRUITERS
        },
        "bca": {
            title: "Computer Applications | BCA",
            image: "/courses/bca.jpg",
            heroTitle: "Build Applications for the Modern Web - BCA at PCTE!",
            heroSubtitle: "Master programming, databases, and application design to launch your tech career.",
            highlightTitle: "Tech Fundamentals",
            highlightText: "The BCA program provides a comprehensive understanding of computer science applications, programming languages, and database management.",
            accordionData: [
                {
                    title: "MOBILE APP DEVELOPMENT",
                    content: "Learn to build cross-platform mobile applications for Android and iOS using modern frameworks and standard design patterns."
                },
                {
                    title: "DATABASE MANAGEMENT",
                    content: "Focus on SQL and NoSQL databases like MySQL and MongoDB to manage large-scale information systems efficiently."
                },
                {
                    title: "WEB TECHNOLOGIES LAB",
                    content: "Master the art of creating responsive frontends and robust backends using HTML, CSS, JavaScript, and Server-side scripts."
                },
                {
                    title: "OPERATING SYSTEMS CONCEPTS",
                    content: "Explore the inner workings of Windows, Linux, and macOS, including process management and memory allocation."
                },
                {
                    title: "SOFTWARE ENGINEERING PRACTICES",
                    content: "Understand the software development lifecycle (SDLC), agile methodologies, and quality assurance techniques."
                }
            ],
            extraTabs: [
                { id: 'BCA', label: 'BCA' },
                { id: 'Course Details', label: 'Course Details' },
                { id: 'Why PCTE?', label: 'Why PCTE?' }
            ],
            extraTabsContent: {
                'BCA': "The BCA program provides a comprehensive understanding of computer science applications, programming languages, and database management. Master programming, databases, and application design to launch your tech career.",
                'Course Details': "Focus on mobile app development, database management, and web technologies. Explore the inner workings of operating systems and master software engineering practices.",
                'Why PCTE?': "PCTE Group of Institutes stands out for its commitment to excellence in technical education with state-of-the-art labs and a robust industry-institute interface."
            },

            whyPCTEImages: [
                {
                    desktop: "/courses/CSE/ET-1.jpeg",
                    mobile: "/courses/CSE/Etmobile-1.jpeg"
                },
                {
                    desktop: "/courses/CSE/ET-2.jpeg",
                    mobile: "/courses/CSE/ETmobile-2.jpeg"
                },
                {
                    desktop: "/courses/CSE/ET-3.jpeg",
                    mobile: "/courses/CSE/ETmobile-3.jpeg"
                }


            ],
            facultyDepartment: "engineering",
            recruiters: RECRUITERS
        },
        "bcom": {
            title: "Commerce (Honours) | B.Com",
            image: "/courses/bcom.jpg",
            heroTitle: "Master Finance & Accounting - B.Com(Hons) at PCTE!",
            heroSubtitle: "Build a strong foundation in commerce and accounting for a professional career.",
            highlightTitle: "Finance & Accounting",
            highlightText: "B.Com (Hons) offers specialized knowledge in accounting and finance, preparing students for professional careers in the corporate world.",
            accordionData: [
                {
                    title: "FINANCIAL MODELING",
                    content: "Learn to build sophisticated spreadsheets to analyze business performance, valuation, and capital budgeting."
                },
                {
                    title: "TAXATION & AUDITING",
                    content: "In-depth study of Indian Income Tax, GST, and International taxation laws alongside professional auditing standards."
                },
                {
                    title: "CORPORATE FINANCE",
                    content: "Understand how companies manage financial resources, make investment decisions, and navigate the stock market."
                },
                {
                    title: "E-COMMERCE & DIGITAL TRADE",
                    content: "Explore the dynamics of online businesses, digital payments, and the logistics of modern electronic commerce."
                },
                {
                    title: "BUSINESS LAWS & ETHICS",
                    content: "Study the legal framework governing contracts, companies, and professional ethics in the global business environment."
                }
            ],
            extraTabs: [
                { id: 'B.Com', label: 'B.Com' },
                { id: 'Course Details', label: 'Course Details' },
                { id: 'Why PCTE?', label: 'Why PCTE?' }
            ],
            extraTabsContent: {
                'B.Com': "B.Com (Hons) offers specialized knowledge in accounting and finance, preparing students for professional careers in the corporate world. Build a strong foundation in commerce and master finance and accounting.",
                'Course Details': "Learn financial modeling, taxation, auditing, and corporate finance. Explore the dynamics of e-commerce and digital trade alongside business laws and ethics.",
                'Why PCTE?': "PCTE Group of Institutes stands out for its commitment to excellence in business education, providing students with global exposure through international collaborations."
            },
            recruiters: RECRUITERS
        },
        "bajmc": {
            title: "Journalism & Mass Communication | BAJMC",
            image: "/courses/bajmc.png",
            heroTitle: "Creative Storytelling - BAJMC at PCTE!",
            heroSubtitle: "Master the art of media and communication in a digital world.",
            highlightTitle: "Media & Journalism",
            highlightText: "BAJMC students learn the art of storytelling across various platforms, including print, broadcast, and digital media.",
            accordionData: [
                {
                    title: "BROADCAST STUDIO",
                    content: "Hands-on experience in our state-of-the-art newsroom with professional cameras, lighting, and video editing equipment."
                },
                {
                    title: "DIGITAL MEDIA LAB",
                    content: "Master social media management, content strategy, and digital publishing for blogs, vlogs, and news portals."
                },
                {
                    title: "INVESTIGATIVE JOURNALISM",
                    content: "Learn the techniques of deep-dive reporting, fact-checking, and ethical source management to uncover the truth."
                },
                {
                    title: "PUBLIC RELATIONS & ADVERTISING",
                    content: "Develop creative campaigns, manage brand reputation, and learn the art of persuasion in the media industry."
                },
                {
                    title: "MEDIA ETHICS & LAW",
                    content: "Understand the constitutional rights, defamation laws, and the ethical responsibility of journalists in a free society."
                }
            ],
            extraTabs: [
                { id: 'BAJMC', label: 'BAJMC' },
                { id: 'Course Details', label: 'Course Details' },
                { id: 'Why PCTE?', label: 'Why PCTE?' }
            ],
            extraTabsContent: {
                'BAJMC': "BAJMC students learn the art of storytelling across various platforms, including print, broadcast, and digital media. Master the art of media and communication in a digital world with our hands-on curriculum.",
                'Course Details': "Gain experience in our broadcast studio, digital media lab, and learn investigative journalism. The course also covers public relations, advertising, and media ethics and law.",
                'Why PCTE?': "PCTE Group of Institutes provides an environment where innovation thrives. Our students benefit from global exposure and numerous student-led clubs that foster holistic development."
            },
            facultyDepartment: "bajmc",
            recruiters: RECRUITERS
        },
        "mls": {
            title: "B.Sc. Medical Lab Sciences",
            image: "/courses/mls.jpg",
            heroTitle: "Diagnostic Excellence - MLS at PCTE!",
            heroSubtitle: "Prepare for a vital career in healthcare and diagnostics.",
            highlightTitle: "Medical Sciences",
            highlightText: "The MLS program prepares students for vital roles in the healthcare industry through rigorous laboratory training and clinical exposure.",
            accordionData: [
                {
                    title: "CLINICAL PATHOLOGY",
                    content: "In-depth study of disease processes and diagnostic techniques using advanced laboratory equipment for patient care."
                },
                {
                    title: "MICROBIOLOGY LAB",
                    content: "Study of bacteria, viruses, and fungi, focusing on diagnostic detection and antibiotic sensitivity testing."
                },
                {
                    title: "HAEMATOLOGY & BLOOD BANKING",
                    content: "Analyze blood cells and learn the procedures for safe blood collection, testing, and transfusion."
                },
                {
                    title: "BIOCHEMISTRY ANALYSIS",
                    content: "Focus on testing chemical components in body fluids to diagnose conditions like diabetes and kidney disease."
                },
                {
                    title: "HISTOPATHOLOGY TECHNIQUES",
                    content: "Learn to process tissue samples for microscopic examination to detect cancer and other cellular abnormalities."
                }
            ],
            extraTabs: [
                { id: 'MLS', label: 'MLS' },
                { id: 'Course Details', label: 'Course Details' },
                { id: 'Why PCTE?', label: 'Why PCTE?' }
            ],
            extraTabsContent: {
                'MLS': "The MLS program prepares students for vital roles in the healthcare industry through rigorous laboratory training and clinical exposure. Prepare for a vital career in healthcare and diagnostics with diagnostic excellence.",
                'Course Details': "Study clinical pathology, microbiology, haematology, and biochemistry analysis. The program also covers histopathology techniques for cancer detection and cellular abnormalities.",
                'Why PCTE?': "PCTE Group of Institutes stands out for its commitment to excellence in medical lab sciences, providing state-of-the-art labs and a robust industry-institute interface."
            },
            whyPCTEImages: [
                {
                    desktop: "/courses/Pharmacy course/Pharmacy-1-scaled.webp",
                    mobile: "/courses/Pharmacy course/Pharmacy-1-scaled.webp"
                },
                {
                    desktop: "/courses/Pharmacy course/Class-scaled (1).webp",
                    mobile: "/courses/Pharmacy course/Class-scaled (1).webp"
                },
                {
                    desktop: "/courses/Pharmacy course/Pharmacy-2-scaled (2).webp",
                    mobile: "/courses/Pharmacy course/Pharmacy-2-scaled (2).webp"
                }
            ],
            facultyDepartment: "pharmacy",
            recruiters: RECRUITERS
        },
        "bpharm": {
            title: "Bachelor of Pharmacy",
            image: "/courses/pharmacy.jpg",
            heroTitle: "Pharmaceutical Science - B.Pharm at PCTE!",
            heroSubtitle: "Excellence in drug development and pharmaceutical care.",
            highlightTitle: "Pharmacy Practice",
            highlightText: "Bachelor of Pharmacy focuses on the chemical, biological, and pharmaceutical aspects of medicine and healthcare.",
            accordionData: [
                {
                    title: "PHARMACEUTICS LAB",
                    content: "Design and formulation of various dosage forms like tablets, capsules, ointments, and liquid medicines."
                },
                {
                    title: "PHARMACOLOGY STUDIO",
                    content: "Study of drug actions on biological systems to ensure safe and effective medical treatments and drug safety."
                },
                {
                    title: "PHARMACEUTICAL ANALYSIS",
                    content: "Master the techniques for testing drug purity, potency, and quality using advanced analytical instruments."
                },
                {
                    title: "PHARMACOGNOSY RESEARCH",
                    content: "Explore the medicinal properties of plants and natural sources to develop new pharmaceutical products."
                },
                {
                    title: "MEDICINAL CHEMISTRY",
                    content: "Understand the chemical synthesis and structure-activity relationships of drugs for therapeutic use."
                }
            ],
            extraTabs: [
                { id: 'B.Pharm', label: 'B.Pharm' },
                { id: 'Course Details', label: 'Course Details' },
                { id: 'Why PCTE?', label: 'Why PCTE?' }
            ],
            extraTabsContent: {
                'B.Pharm': "Bachelor of Pharmacy focuses on the chemical, biological, and pharmaceutical aspects of medicine and healthcare. Excellence in drug development and pharmaceutical care is at the heart of our program.",
                'Course Details': "Master pharmaceutics, pharmacology, and pharmaceutical analysis. Explore pharmacognosy research and medicinal chemistry to understand drug synthesis and therapy.",
                'Why PCTE?': "PCTE Group of Institutes provides an environment where innovation thrives, preparing you for a successful and fulfilling career in the global pharmaceutical industry."
            },
            whyPCTEImages: [
                {
                    desktop: "/courses/Pharmacy course/Pharmacy-desktop.webp",
                    mobile: "/courses/Pharmacy course/Pharmacy1.jpeg"
                },

                {
                    desktop: "/courses/Pharmacy course/Pharmacy2-desktop.webp",
                    mobile: "/courses/Pharmacy course/Pharmacy2.jpeg"
                }
            ],

            facultyDepartment: "pharmacy",
            recruiters: RECRUITERS
        },
        "fashion": {
            title: "Fashion Design",
            image: "/courses/fashion.jpg",
            heroTitle: "Design Your Future - Fashion at PCTE!",
            heroSubtitle: "Unleash your creativity in the world of apparel and trends.",
            highlightTitle: "Fashion Innovation",
            highlightText: "Our Fashion Design program encourages students to develop their unique creative voice while learning industry-standard technical skills.",
            accordionData: [
                {
                    title: "DESIGN STUDIO",
                    content: "A creative space for sketching, draping, and pattern making to bring original fashion concepts to life."
                },
                {
                    title: "TEXTILE TECHNOLOGY",
                    content: "Understanding fabric properties, weaving patterns, and sustainable material sourcing for high-end fashion."
                },
                {
                    title: "GARMENT CONSTRUCTION LAB",
                    content: "Learn the professional stitching, finishing, and tailoring techniques required for ready-to-wear and couture collections."
                },
                {
                    title: "FASHION ILLUSTRATION",
                    content: "Master the art of drawing fashion figures and garments using various mediums, from hand sketching to digital tools."
                },
                {
                    title: "RETAIL & VISUAL MERCHANDISING",
                    content: "Explore the business of fashion, including store layouts, window displays, and retail marketing strategies."
                }
            ],
            extraTabs: [
                { id: 'Fashion', label: 'Fashion' },
                { id: 'Course Details', label: 'Course Details' },
                { id: 'Why PCTE?', label: 'Why PCTE?' }
            ],
            extraTabsContent: {
                'Fashion': "Our Fashion Design program encourages students to develop their unique creative voice while learning industry-standard technical skills. Unleash your creativity in the world of apparel and trends.",
                'Course Details': "Master design studio work, textile technology, and garment construction. The course also covers fashion illustration and retail visual merchandising.",
                'Why PCTE?': "PCTE Group of Institutes provides an environment where innovation thrives. Our students benefit from global exposure and numerous student-led clubs that foster holistic development."
            },
            whyPCTEImages: [
                {
                    desktop: "/courses/FD/fd-dk-1.jpeg",
                    mobile: "/courses/FD/fd-mb-1.jpeg"
                },
                {
                    desktop: "/courses/FD/fd-dk-2.jpeg",
                    mobile: "/courses/FD/fd-mb-2.jpeg"
                },

            ],
            facultyDepartment: "fashion",
            recruiters: RECRUITERS
        },
        "bhmct": {
            title: "Hotel Management | BHMCT",
            image: "/courses/bhmct.jpg",
            heroTitle: "Hospitality Excellence - BHMCT at PCTE!",
            heroSubtitle: "Master the art of hospitality and hotel administration.",
            highlightTitle: "Hotel Administration",
            highlightText: "BHMCT provides extensive training in hotel operations, food and beverage service, and front office management.",
            accordionData: [
                {
                    title: "CULINARY ARTS KITCHEN",
                    content: "Master Indian, Continental, and Oriental cuisines in our industry-standard commercial kitchens with expert chefs."
                },
                {
                    title: "FRONT OFFICE LAB",
                    content: "Practical training in guest relations, check-in/out procedures, and modern property management software (PMS)."
                },
                {
                    title: "HOUSEKEEPING MANAGEMENT",
                    content: "Learn the standards of room preparation, interior decoration, and maintenance in a mock hotel suite environment."
                },
                {
                    title: "FOOD & BEVERAGE SERVICE",
                    content: "Master the art of fine dining service, table settings, and beverage management in our training restaurants."
                },
                {
                    title: "HOSPITALITY MARKETING",
                    content: "Develop specialized skills in promoting hotels, managing luxury branding, and understanding travel consumer behavior."
                }
            ],
            extraTabs: [
                { id: 'BHMCT', label: 'BHMCT' },
                { id: 'Course Details', label: 'Course Details' },
                { id: 'Why PCTE?', label: 'Why PCTE?' }
            ],
            extraTabsContent: {
                'BHMCT': "BHMCT provides extensive training in hotel operations, food and beverage service, and front office management. Master the art of hospitality and hotel administration with us.",
                'Course Details': "Gain experience in our culinary arts kitchen, front office lab, and housekeeping management. The program also covers food & beverage service and hospitality marketing.",
                'Why PCTE?': "PCTE Group of Institutes is known for its hospitality excellence, providing industry-standard commercial kitchens and training restaurants for practical learning."
            },

            whyPCTEImages: [
                {
                    desktop: "/courses/HM/pc-1.jpeg",
                    mobile: "/courses/HM/mb-1.jpeg"
                },
                {
                    desktop: "/courses/HM/pc-2.jpeg",
                    mobile: "/courses/HM/mb-2.jpeg"
                },
                {
                    desktop: "/courses/HM/pc-3.jpeg",
                    mobile: "/courses/HM/mb-3.jpeg"
                },
                {
                    desktop: "/courses/HM/pc-4.jpeg",
                    mobile: "/courses/HM/mb-4.jpeg"
                },
                {
                    desktop: "/courses/HM/pc-5.jpeg",
                    mobile: "/courses/HM/mb-5.jpeg"
                }


            ],
            facultyDepartment: "bhmct",
            recruiters: RECRUITERS
        },
        "bttm": {
            title: "Tourism & Travel Management | BTTM",
            image: "/courses/Tourism.jpeg",
            heroTitle: "Explore the World - BTTM at PCTE!",
            heroSubtitle: "Launch your career in the global travel and tourism industry.",
            highlightTitle: "Tourism & Travel",
            highlightText: "BTTM prepares students for careers in the dynamic travel and tourism industry, including tour operations and air travel management.",
            accordionData: [
                {
                    title: "TRAVEL AGENCY OPERATIONS",
                    content: "Learn the secrets of itinerary planning, tour costing, and managing customer relations for global travel agencies."
                },
                {
                    title: "DESTINATION MANAGEMENT",
                    content: "Study of global tourism trends and the development of sustainable tourism products for world-famous destinations."
                },
                {
                    title: "TOURISM GEOGRAPHY",
                    content: "Explore world maps, time zones, and the cultural landmarks of major tourist destinations across all continents."
                },
                {
                    title: "EVENT MANAGEMENT",
                    content: "Learn to plan and execute large-scale tourism events, conferences, and destination weddings."
                },
                {
                    title: "AIR TICKETING & FARES",
                    content: "Master the Global Distribution Systems (GDS) like Amadeus or Galileo for booking flights and managing air travel."
                }
            ],
            extraTabs: [
                { id: 'BTTM', label: 'BTTM' },
                { id: 'Course Details', label: 'Course Details' },
                { id: 'Why PCTE?', label: 'Why PCTE?' }
            ],
            extraTabsContent: {
                'BTTM': "BTTM prepares students for careers in the dynamic travel and tourism industry, including tour operations and air travel management. Launch your career in the global travel industry.",
                'Course Details': "Learn travel agency operations, destination management, and tourism geography. The curriculum also includes event management and air ticketing using GDS systems.",
                'Why PCTE?': "PCTE Group of Institutes offers global exposure through international collaborations, ensuring students are ready for the global tourism market."
            },
            whyPCTEImages: [
                {
                    desktop: "/courses/Tourism/Mba-5-New-scaled (2).webp",
                    mobile: "/courses/Tourism/Mba-5-New-scaled (2).webp"
                },
                {
                    desktop: "/courses/Tourism/Tourism-1-1-scaled.webp",
                    mobile: "/courses/Tourism/Tourism-1-1-scaled.webp"
                },
                {
                    desktop: "/courses/Tourism/Tourism-2-New-1-scaled.webp",
                    mobile: "/courses/Tourism/Tourism-2-New-1-scaled.webp"
                }
            ],
            facultyDepartment: "tourism",
            recruiters: RECRUITERS
        }
    },
    "pg": {
        "mba": {
            title: "Masters of Business Administration",
            image: "/courses/mba.jpg",
            heroTitle: "Transform Your Career - MBA at PCTE!",
            heroSubtitle: "Join the next generation of global leaders with our world-class MBA program.",
            highlightTitle: "Global Leadership",
            highlightText: "MBA at PCTE offers a global perspective on business, with specializations in finance, marketing, HR, and more, backed by industry mentors.",
            accordionData: [
                {
                    title: "CORPORATE CONNECT",
                    content: "Regular interactions with CEOs and business leaders to understand current market trends and corporate expectations."
                },
                {
                    title: "ENTREPRENEURSHIP CELL",
                    content: "Dedicated guidance for startup enthusiasts, from ideation and business modeling to investor pitching and incubation."
                },
                {
                    title: "STRATEGIC MANAGEMENT",
                    content: "Learn to make high-level decisions that drive company growth and navigate complex competitive landscapes."
                },
                {
                    title: "HUMAN RESOURCE ANALYTICS",
                    content: "Using data-driven approaches for recruitment, employee performance evaluation, and talent management."
                },
                {
                    title: "SUPPLY CHAIN OPTIMIZATION",
                    content: "Master the logistics of moving goods and services globally, focusing on efficiency and cost-effectiveness."
                }
            ],
            extraTabs: [
                { id: 'MBA', label: 'MBA' },
                { id: 'Course Details', label: 'Course Details' },
                { id: 'Why PCTE?', label: 'Why PCTE?' }
            ],

            whyPCTEImages: [
                {
                    desktop: "/courses/MBA/Mba-1-New-scaled (1).webp",
                    mobile: "/courses/MBA/ MobileA.jpeg"
                },
                {
                    desktop: "/courses/MBA/Mba-3-scaled (1).webp",
                    mobile: "/courses/MBA/ Mobile2.jpeg"
                },
                {
                    desktop: "/courses/MBA/Mba-4-scaled (3).webp",
                    mobile: "/courses/MBA/ Mobile3.jpeg"
                }
            ],
            facultyDepartment: "mba",
            extraTabsContent: {
                'MBA': "MBA at PCTE offers a global perspective on business, preparing the next generation of global leaders. Join a world-class program with a strong corporate connect.",
                'Course Details': "Focus on strategic management, entrepreneurship, HR analytics, and supply chain optimization. Regular CEO interactions bridge the gap between theory and practice.",
                'Why PCTE?': "PCTE Group of Institutes stands out for its leadership in business education and Rank 2 in ROI by India Today."
            },
            recruiters: RECRUITERS
        },
        "mba-ib": {
            title: "MBA – International Business",
            image: "/courses/mba-ib.jpg",
            heroTitle: "Global Business Strategies - MBA IB at PCTE!",
            heroSubtitle: "Expertise in international trade and global business management.",
            highlightTitle: "International Trade",
            highlightText: "The MBA-IB program is designed for students seeking careers in international organizations, export-import houses, and global trade entities.",
            accordionData: [
                {
                    title: "GLOBAL TRADE LOGISTICS",
                    content: "Understanding international shipping, containerization, and the legalities of moving goods across sea and air borders."
                },
                {
                    title: "CROSS-CULTURAL MANAGEMENT",
                    content: "Developing the emotional and cultural intelligence needed to lead diverse teams in multi-national corporations."
                },
                {
                    title: "INTERNATIONAL FINANCE",
                    content: "Learn about foreign exchange markets, international banking, and managing financial risks in global trade."
                },
                {
                    title: "EXIM DOCUMENTATION",
                    content: "In-depth study of the paperwork required for Export and Import, including letters of credit and bill of lading."
                },
                {
                    title: "GLOBAL MARKETING STRATEGIES",
                    content: "Analyze international consumer behavior and develop brand strategies for global markets."
                }
            ],
            extraTabs: [
                { id: 'MBA-IB', label: 'MBA-IB' },
                { id: 'Course Details', label: 'Course Details' },
                { id: 'Why PCTE?', label: 'Why PCTE?' }
            ],
            extraTabsContent: {
                'MBA-IB': "Expertise in international trade and global business management. The MBA-IB program is designed for the modern global corporate environment.",
                'Course Details': "Master global trade logistics, cross-cultural management, and international finance. Comprehensive training in EXIM documentation and global marketing.",
                'Why PCTE?': "PCTE Group of Institutes provides a truly global platform with students from over 40 countries, making it the best place for international business study."
            },
            whyPCTEImages: [
                {
                    desktop: "/courses/MBA/Mba-1-New-scaled (1).webp",
                    mobile: "/courses/MBA/ MobileA.jpeg"
                },
                {
                    desktop: "/courses/MBA/Mba-3-scaled (1).webp",
                    mobile: "/courses/MBA/ Mobile2.jpeg"
                },
                {
                    desktop: "/courses/MBA/Mba-4-scaled (3).webp",
                    mobile: "/courses/MBA/ Mobile3.jpeg"
                }
            ],
            facultyDepartment: "mba",
            recruiters: RECRUITERS
        }
    },
    "diploma": {
        "pharmacy": {
            title: "Diploma in Pharmacy",
            image: "/courses/dpharmacy.png",
            heroTitle: "India’s Most ROI-Focused D. Pharmacy Program is Offered at PCTE!",
            heroSubtitle: "The Diploma in Pharmacy program at PCTE prepares students with in-depth knowledge of pharmaceutical sciences, drug formulations, and patient-focused care. With practical lab training, expert faculty, and industry exposure, it’s a launchpad for a trusted and respected career in healthcare and medicine dispensing.",
            highlightTitle: "Healthcare Foundation",
            highlightText: "The Diploma in Pharmacy provides the necessary foundation for students to become registered pharmacists in a shorter timeframe through practical pharmacy practice.",
            accordionData: [
                {
                    title: "COMMUNITY PHARMACY",
                    content: "Practical training in dispensing medications, keeping records, and providing vital healthcare advice to the community."
                },
                {
                    title: "PHARMACEUTICAL CHEMISTRY",
                    content: "Study of the chemical properties of drugs and the testing procedures essential for ensuring medication quality."
                },
                {
                    title: "PHARMACOLOGY BASICS",
                    content: "Understand how common medications work in the human body to treat various common ailments and conditions."
                },
                {
                    title: "PHARMACOGNOSY LAB",
                    content: "Identify and investigate natural sources of medicines from plants and minerals used in traditional healthcare."
                },
                {
                    title: "DISPENSING PHARMACY",
                    content: "Master the professional standards of reading prescriptions and compounding medications for patient use."
                }
            ],
            extraTabs: [
                { id: 'D.Pharm', label: 'D.Pharm' },
                { id: 'Course Details', label: 'Course Details' },
                { id: 'Why PCTE?', label: 'Why PCTE?' }
            ],

            whyPCTEImages: [
                {
                    desktop: "/courses/Pharmacy course/Pharmacy-desktop.webp",
                    mobile: "/courses/Pharmacy course/Pharmacy1.jpeg"
                },

                {
                    desktop: "/courses/Pharmacy course/Pharmacy2-desktop.webp",
                    mobile: "/courses/Pharmacy course/Pharmacy2.jpeg"
                }
            ],

            facultyDepartment: "pharmacy",

            extraTabsContent: {
                'D.Pharm': "Fast-track your entry into the pharmaceutical industry with our D.Pharm program. Build a strong foundation for your healthcare career.",
                'Course Details': "Focus on community pharmacy, pharmaceutical chemistry, and pharmacology basics. Practical training in dispensing pharmacy and pharmacognosy.",
                'Why PCTE?': "PCTE Group of Institutes provides an environment where innovation thrives, preparing you for a successful career in healthcare."
            },
            recruiters: RECRUITERS
        }
    }
};
