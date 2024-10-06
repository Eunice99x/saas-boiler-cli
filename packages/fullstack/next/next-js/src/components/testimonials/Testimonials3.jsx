import Image from "next/image";
import React from "react";

const Testimonials3 = () => {
  return (
    <section className="bg-gray-200 py-20">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Hear From Our Users</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <Image
              src={"https://via.placeholder.com/150"}
              alt={"User 1"}
              width={150}
              height={150}
              className="w-16 h-16 rounded-full mb-4"
            />
            <p className="text-gray-600 italic mb-4">
              "This product has transformed our approach to project management."
            </p>
            <h4 className="font-semibold">Jane Doe</h4>
            <p className="text-gray-500">Product Manager</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <Image
              src={"https://via.placeholder.com/150"}
              alt={"User 2"}
              width={150}
              height={150}
              className="w-16 h-16 rounded-full mb-4"
            />
            <p className="text-gray-600 italic mb-4">
              "Incredible features and outstanding customer service."
            </p>
            <h4 className="font-semibold">John Smith</h4>
            <p className="text-gray-500">Marketing Lead</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <Image
              src={"https://via.placeholder.com/150"}
              alt={"User 3"}
              width={150}
              height={150}
              className="w-16 h-16 rounded-full mb-4"
            />
            <p className="text-gray-600 italic mb-4">
              "A must-have tool for anyone looking to improve efficiency."
            </p>
            <h4 className="font-semibold">Emily Johnson</h4>
            <p className="text-gray-500">Operations Director</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials3;
