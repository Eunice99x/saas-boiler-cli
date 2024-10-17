import { useState } from "react";

const FAQ3 = () => {
  const faqs = [
    {
      question: "What payment methods are accepted?",
      answer: "We accept all major credit cards, PayPal, and bank transfers.",
    },
    {
      question: "How secure is my data?",
      answer:
        "We prioritize security with end-to-end encryption and regular audits.",
    },
    {
      question: "Can I upgrade my plan later?",
      answer:
        "Yes, you can upgrade your plan at any time through your account settings.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-r from-purple-500 to-indigo-600 py-20 px-10">
      <div className="max-w-screen-xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-10">FAQ - Find Your Answers</h2>
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-20 rounded-lg p-6 transition-transform duration-300 hover:scale-105"
            >
              <h3
                className="text-xl font-semibold cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                {item.question}
                <span className="float-right">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </h3>
              {activeIndex === index && (
                <p className="text-gray-300 mt-2">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ3;
