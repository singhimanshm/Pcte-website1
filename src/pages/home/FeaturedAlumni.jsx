import React from 'react';

const FeaturedAlumni = () => {
    const alumni = [
        {
            name: "Tarun Sablok",
            title: "Director Marketing Coke (Middle East Countries)",
            image: "/Alumni/TARUN.jpeg"
        },
        {
            name: "Gaurav Kundra",
            title: "Founder Credmate (App)",
            image: "/Alumni/Gaurav.jpg"
        },
        {
            name: "Parisha Khanna",
            title: "Pastry Chef Burj Al Hotels & Resorts, Dubai",
            image: "/Alumni/PARISHA.png"
        },
        {
            name: "Arjun Sethi",
            title: "LMA Innovative Entrepreneur",
            image: "/Alumni/Arjun sethi.jpeg"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h3 className="text-2xl md:text-3xl text-secondary font-medium mb-1">Our Shining Stars</h3>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#aa182c] tracking-wide uppercase">
                        FEATURED ALUMNI
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 max-w-6xl mx-auto">
                    {alumni.map((person, index) => (
                        <div key={index} className="flex flex-col items-center group">
                            {/* Card Container with fixed maximum width for "Small" size */}
                            <div className="relative w-full max-w-[240px] aspect-square mb-6 bg-gray-50 flex items-center justify-center overflow-visible">
                                {/* Image Container */}
                                <div className="w-full h-full overflow-hidden shadow-md">
                                    <img
                                        src={person.image}
                                        alt={person.name}
                                        className="w-full h-full object-cover grayscale-[10%] contrast-[1.05] transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                                    />
                                </div>

                                {/* Inset Red Name Box */}
                                <div className="absolute -bottom-4 left-3 right-3 bg-[#aa182c] py-2.5 px-2 shadow-lg z-10 transition-transform duration-300 group-hover:-translate-y-1">
                                    <h4 className="text-white text-center font-bold text-sm md:text-base leading-tight uppercase tracking-tight">
                                        {person.name}
                                    </h4>
                                </div>
                            </div>

                            {/* Description below */}
                            <div className="text-center mt-4 px-2 max-w-[240px]">
                                <p className="text-gray-600 text-[13px] md:text-sm font-medium leading-relaxed">
                                    {person.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedAlumni;
