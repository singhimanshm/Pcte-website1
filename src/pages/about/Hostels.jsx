import React from 'react';

const Hostels = () => {
  return (
    <>
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-secondary mb-4">Hostels & Guest House</h1>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>

            {/* Breadcrumb */}
            <div className="text-sm text-gray-600 mb-8">
              Home &gt; <span className="text-gray-800">Hostels & Guest House</span>
            </div>

            {/* Main Content */}
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Content */}
                <div>
                  <h2 className="text-2xl font-bold text-secondary mb-6">Boarding & Lodging</h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    The institute provides hostel facilities to both boys and girls. The hostels are well furnished with all modern amenities. The rooms are fully air-conditioned and provide a comfortable stay for the students.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    The hostels have a common TV lounge, recreation room, and high-speed internet facility. The mess facility is also available in the hostels providing nutritious and hygienic food to the students.
                  </p>

                  {/* Features List */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Fully Air-Conditioned & Well Furnished Room</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">TV-Lounge & High Speed Internet</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">24/7 Security Guard</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Mess Facility with Nutritious Food</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Recreation Room</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Modern Amenities</p>
                    </div>
                  </div>
                </div>

                {/* Right Image */}
                <div className="flex justify-center items-center">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                      src="/Transportation/Hostel.jpg"
                      alt="Hostels & Guest House"
                      className="w-full h-auto object-cover"
                      style={{ maxHeight: '500px' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hostels;
