import { useState } from "react";

const Testimonials2 = () => {
  const testimonials = [
    {
      quote:
        "This product has changed the way we do business. Highly recommended!",
      name: "Jane Doe",
      position: "CEO, Company A",
    },
    {
      quote: "Excellent support and features. Truly a game changer for us!",
      name: "John Smith",
      position: "Manager, Company B",
    },
    {
      quote: "A fantastic tool that has streamlined our processes.",
      name: "Emily Johnson",
      position: "Director, Company C",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (currentIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="bg-white py-20 px-10">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Client Testimonials</h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div className="w-full flex-shrink-0" key={index}>
                  <p className="text-gray-600 italic mb-4">
                    "{testimonial.quote}"
                  </p>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.position}</p>
                </div>
              ))}
            </div>
          </div>
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2"
            onClick={prev}
          >
            ❮
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2"
            onClick={next}
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials2;
