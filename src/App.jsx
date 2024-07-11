import { useState } from "react";

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
    <div className="xx">
      <h1>Faqs</h1>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div>
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
    <div onClick={handleClick}>
      <div className="title_btn">
        <h2>{title}</h2>
        <button>{isOpen ? "-" : "+"}</button>
      </div>
      <p>{isOpen && text}</p>
    </div>
  );
}

export default App;
