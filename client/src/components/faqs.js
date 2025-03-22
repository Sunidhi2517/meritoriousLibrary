import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import "./faq.css";

const faqs = [
  { question: " Is Library Open on Sunday?", answer: "Yes, We are open on Sundays" },
  { question: "Will the library closed on Government Holidays?", answer: "No, You can come on Government Holidays too." },
  { question: "Can we expect a refund?", answer: "No, Once the registeration is done,there will be no refund on any circumstances." },
  { question: "What is the registeration fee?", answer: "it is Rs. 1200 per month. However you can expect offers on longtime bookings" },
  { question: "Do you provide offers on cabin Bookings?", answer: "Yes, You can Book a cabin for two months in just Rs. 2000." }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question} 
              {openIndex === index ? <ChevronUp className="icon" /> : <ChevronDown className="icon" />}
            </div>
            {openIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
