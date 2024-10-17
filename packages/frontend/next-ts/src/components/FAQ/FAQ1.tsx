import { useState } from "react";

const FAQ1 = () => {
  const faqs = [
    {
      question: "What is the purpose of this SaaS?",
      answer:
        "This SaaS is designed to streamline your workflows and enhance productivity through a flexible boilerplate.",
    },
    {
      question: "How can I get started?",
      answer:
        "Simply sign up and follow the quick start guide provided in our documentation.",
    },
    {
      question: "Is there customer support available?",
      answer:
        "Yes, we offer 24/7 customer support to assist you with any queries.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-20 px-10">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:shadow-xl cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.question}
                </h3>
                <span className="text-gray-600">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <p className="text-gray-600 mt-4 transition-all duration-300">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ1;
