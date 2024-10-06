import React from 'react';

const Testimonials1 = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-gray-600 italic mb-4">
              "This product has changed the way we do business. Highly recommended!"
            </p>
            <h4 className="font-semibold">Jane Doe</h4>
            <p className="text-gray-500">CEO, Company A</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-gray-600 italic mb-4">
              "Excellent support and features. Truly a game changer for us!"
            </p>
            <h4 className="font-semibold">John Smith</h4>
            <p className="text-gray-500">Manager, Company B</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-gray-600 italic mb-4">
              "A fantastic tool that has streamlined our processes."
            </p>
            <h4 className="font-semibold">Emily Johnson</h4>
            <p className="text-gray-500">Director, Company C</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials1;
