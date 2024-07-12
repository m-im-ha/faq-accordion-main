import { useState } from "react";

import src from "./assets/images/icon-star.svg";
import plus from "./assets/images/icon-plus.svg";
import minus from "./assets/images/icon-minus.svg";

const faqs = [
  {
    title: "What is Frontend Mentor, and how will it help me?",
    text: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    title: "Is Frontend Mentor free?",
    text: " Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    title: "Can I use Frontend Mentor projects in my portfolio?",
    text: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    title: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    text: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];
function App() {
  return (
    <section className="accordion_container">
      <Accordion data={faqs} />
      <p className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://www.frontendmentor.io/profile/m-im-ha">Md Imran Hossen Akash</a>.
      </p>
    </section>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(0);

  return (
    <div className="accordion_content">
      <div className="faq_icon_container">
        <img src={src} alt="" />
        <h1>FAQs</h1>
      </div>
      {data.map((faq, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          num={i}
          key={i}
          title={faq.title}
          text={faq.text}
        />
      ))}
    </div>
  );
}

function AccordionItem({ title, text, curOpen, onOpen, num }) {
  const isOpen = num === curOpen;

  function handleClick() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className="faq_container" onClick={handleClick}>
      <div className="faq_box">
        <h3>{title}</h3>
        <button>
          {isOpen ? <img src={minus} alt="" /> : <img src={plus} />}
        </button>
      </div>
      <p>{isOpen && text}</p>
    </div>
  );
}

export default App;
