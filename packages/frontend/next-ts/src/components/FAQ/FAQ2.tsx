import { useState } from "react";

const FAQ2 = () => {
  const faqs = [
    {
      question: "Can I customize the templates?",
      answer:
        "Absolutely! Our templates are fully customizable to fit your brand.",
    },
    {
      question: "What technologies are used?",
      answer:
        "We use a variety of modern technologies, including Vue.js, Tailwind CSS, and Node.js.",
    },
    {
      question: "Is there a trial period?",
      answer:
        "Yes, we offer a 14-day free trial for new users to explore all features.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="bg-white py-20 px-10">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Your Questions Answered</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 transition-shadow duration-300 hover:shadow-lg"
            >
              <h3
                className="text-xl font-semibold text-gray-800 cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                {item.question}
                <span className="text-gray-600 float-right">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </h3>
              {activeIndex === index && (
                <p className="text-gray-600 mt-2">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ2;
