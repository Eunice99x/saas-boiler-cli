import { useState } from "react";

const FAQ4 = () => {
  const faqs = [
    {
      question: "What happens after I sign up?",
      answer:
        "You'll receive a confirmation email and can start exploring the features immediately.",
    },
    {
      question: "Is there a money-back guarantee?",
      answer:
        "Yes, we offer a 30-day money-back guarantee if you're not satisfied.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Absolutely! You can upgrade or downgrade your plan anytime in your account settings.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Ask Us Anything!</h2>
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
            <div className="space-y-4">
              {faqs.map((item, index) => (
                <div
                  key={index}
                  className="border-b last:border-b-0 border-gray-200"
                >
                  <div
                    className="flex justify-between items-center cursor-pointer py-3"
                    onClick={() => toggleAnswer(index)}
                  >
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.question}
                    </h3>
                    <span className="text-gray-600">
                      {activeIndex === index ? "−" : "+"}
                    </span>
                  </div>
                  {activeIndex === index && (
                    <p className="text-gray-600 mt-2">{item.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ4;
