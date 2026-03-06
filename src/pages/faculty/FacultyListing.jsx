import React from 'react';
import { useParams } from 'react-router-dom';
import { facultyData } from '../../data/facultyData';

const FacultyListing = () => {
    const { department } = useParams();
    const facultyMembers = facultyData[department] || facultyData['engineering'];

    return (
        <div className="font-sans antialiased bg-gray-50 min-h-screen py-16 md:py-24">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#a80d0d] uppercase tracking-wide">
                        {department ? `${department.toUpperCase()} FACULTY PROFILE` : 'FACULTY PROFILES'}
                    </h1>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
                    {facultyMembers.map((f) => (
                        <div key={f.id} className="bg-white overflow-hidden shadow-md flex flex-col md:flex-row min-h-[300px] border border-gray-100 w-full">
                            {/* Left: Image Container */}
                            <div className="w-full md:w-[40%] flex-shrink-0 relative bg-gray-50 flex items-center justify-center p-4">
                                <div className="w-full h-full overflow-hidden border border-gray-100 shadow-sm min-h-[220px]">
                                    <img
                                        src={f.image}
                                        alt={f.name}
                                        className="w-full h-full object-cover"
                                        onError={(e) => { e.target.src = 'https://via.placeholder.com/400x500?text=' + f.name; }}
                                    />
                                </div>
                            </div>

                            {/* Right: Content Container */}
                            <div className="w-full md:w-[60%] p-6 md:p-8 flex flex-col">
                                <h2 className="text-xl md:text-2xl font-bold text-[#8a1919] mb-1">
                                    {f.name}
                                </h2>
                                <p className="text-gray-500 font-medium text-sm md:text-base mb-3 leading-tight">
                                    {f.role}
                                </p>

                                <div className="mb-4">
                                    <p className="font-bold text-gray-900 text-xs md:text-sm leading-tight">
                                        {f.department}
                                    </p>
                                    <p className="text-gray-400 text-xs mt-1">
                                        {f.qualifications}
                                    </p>
                                </div>

                                <div className="pt-2 border-t border-gray-50">
                                    <p className="text-gray-500 leading-relaxed text-xs md:text-sm">
                                        {f.bio}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FacultyListing;
