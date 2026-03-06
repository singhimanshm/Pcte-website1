import React from 'react';

const Transportation = () => {
  return (
    <>
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-secondary mb-4">Transportation</h1>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>

            {/* Routes Section */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-secondary mb-6">Transport Routes</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Column 1 */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Route 1</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-gray-700">Ludhiana Bus Stand</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-gray-700">Jalandhar Bypass</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-gray-700">Samrala Chowk</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-gray-700">Civil Lines</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-gray-700">Model Town</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-gray-700">Dugri</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-gray-700">Gill Colony</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-gray-700">Haibowal</span>
                    </li>
                  </ul>
                </div>

                {/* Column 2 */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Route 2</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-gray-700">Mall Road</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-gray-700">Chaura Bazaar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-gray-700">Ghumar Mandi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-gray-700">Field Gunj</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-gray-700">Bharat Nagar Chowk</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-gray-700">Cheema Chowk</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-gray-700">Pakhowal Road</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-gray-700">Hambran Road</span>
                    </li>
                  </ul>
                </div>

                {/* Column 3 */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Route 3</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-gray-700">Jalandhar Road</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-gray-700">Ferozepur Road</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-gray-700">G.T. Road</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-gray-700">Clock Tower</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-gray-700">Sarabha Nagar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-gray-700">Rajguru Nagar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-gray-700">Mullanpur</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-gray-700">Doraha</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bus Images Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="/Transportation/TRANSPOTATION-.jpg"
                  alt="College Bus 1"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="/Transportation/TRANSPOTATION-1.jpg"
                  alt="College Bus 2"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Transportation;
