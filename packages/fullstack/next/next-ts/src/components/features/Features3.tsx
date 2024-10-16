import { useState } from 'react';

const Features3 = () => {
  const features = [
    {
      id: 1,
      title: "Feature One",
      description: "Description of feature one, elaborating on its key aspects.",
    },
    {
      id: 2,
      title: "Feature Two",
      description: "Description of feature two, including its significance.",
    },
    {
      id: 3,
      title: "Feature Three",
      description: "Description of feature three, focusing on its benefits.",
    },
  ];

  const [openFeature, setOpenFeature] = useState(null);

  const toggle = (feature) => {
    setOpenFeature(openFeature === feature ? null : feature);
  };

  const isOpen = (feature) => openFeature === feature;

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Explore Our Features
        </h2>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {features.map((feature) => (
            <div key={feature.id} className="border-b">
              <button
                className="w-full text-left py-4 px-6 transition-colors duration-300 hover:bg-blue-100 focus:outline-none"
                onClick={() => toggle(feature.id)}
              >
                <h3 className="font-semibold text-xl text-gray-800">
                  {feature.title}
                </h3>
              </button>
              {isOpen(feature.id) && (
                <div className="flex items-center py-2 px-6 bg-blue-50">
                  {/* feature icon */}
                  <img src="/icons/feature.png" alt="feature" className="w-10 mr-4" />
                  <p className="flex-1 text-gray-700">
                    {feature.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features3;
