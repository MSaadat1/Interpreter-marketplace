import "./styles.css";
import { faqData } from "../staticData";
import type { FAQItem } from "../types";
import { useState } from "react";


export const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  function toggleAccordion(index: number) {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  }
  return (
    <div className="faq-container">
      <div className="faq-title">
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className="faq-items">
        {faqData.map((item: FAQItem, index) => (
          <div key={index} className="faq-item">
           <button className="faq-btn" onClick={ ()=> toggleAccordion(index)}>
            {item.question}
            <span className="faq-sign">{openIndex === index ? "-" : "+"}</span>
            </button> 
            {openIndex === index && <p className="faq-answer">{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};
