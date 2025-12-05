"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "How to create an account on Mybitstore",
    answer: "To create an account on Mybitstore, click on the 'Get Started' button, fill in your details including email and password, verify your email, and complete the registration process.",
  },
  {
    id: 2,
    question: "How to create an account on Mybitstore",
    answer: "To create an account on Mybitstore, click on the 'Get Started' button, fill in your details including email and password, verify your email, and complete the registration process.",
  },
  {
    id: 3,
    question: "How to create an account on Mybitstore",
    answer: "To create an account on Mybitstore, click on the 'Get Started' button, fill in your details including email and password, verify your email, and complete the registration process.",
  },
  {
    id: 4,
    question: "How to create an account on Mybitstore",
    answer: "To create an account on Mybitstore, click on the 'Get Started' button, fill in your details including email and password, verify your email, and complete the registration process.",
  },
  {
    id: 5,
    question: "How to create an account on Mybitstore",
    answer: "To create an account on Mybitstore, click on the 'Get Started' button, fill in your details including email and password, verify your email, and complete the registration process.",
  },
  {
    id: 6,
    question: "How to create an account on Mybitstore",
    answer: "To create an account on Mybitstore, click on the 'Get Started' button, fill in your details including email and password, verify your email, and complete the registration process.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
          FAQ
        </h2>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-[#212741] rounded-xl overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#212741]/80 transition-colors"
              >
                <span className="text-base md:text-lg text-foreground pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 w-6 h-6 rounded-full border border-muted-foreground flex items-center justify-center">
                  {openId === faq.id ? (
                    <Minus className="w-4 h-4 text-foreground" />
                  ) : (
                    <Plus className="w-4 h-4 text-foreground" />
                  )}
                </div>
              </button>

              {/* Answer */}
              {openId === faq.id && (
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground text-sm md:text-base">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
