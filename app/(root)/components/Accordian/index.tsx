"use client";

import React, { useEffect, useRef, useState } from "react";

const FAQsData = [
  {
    title: "Tempus magna risus interdum ultricies sed urna?",
    content:
      "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla. Elit adipiscing proin quis est consectetur. Felis ultricies nisi, quis malesuada sem odio. Potentiмnibh natoque amet amet, tincidunt ultricies et. Et nam rhoncus sit nullam diam tincidunt condimentum nullam.",
  },
  {
    title: "Tempus magna risus interdum ultricies sed urna?",
    content:
      "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla. Elit adipiscing proin quis est consectetur. Felis ultricies nisi, quis malesuada sem odio. Potentiмnibh natoque amet amet, tincidunt ultricies et. Et nam rhoncus sit nullam diam tincidunt condimentum nullam.",
  },
  {
    title: "Augue in nibh urna volutpat mattis?",
    content:
      "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla. Elit adipiscing proin quis est consectetur. Felis ultricies nisi, quis malesuada sem odio. Potentiмnibh natoque amet amet, tincidunt ultricies et. Et nam rhoncus sit nullam diam tincidunt condimentum nullam.",
  },
  {
    title: "Eu egestas sed sed posuere ultrices ?",
    content:
      "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla. Elit adipiscing proin quis est consectetur. Felis ultricies nisi, quis malesuada sem odio. Potentiмnibh natoque amet amet, tincidunt ultricies et. Et nam rhoncus sit nullam diam tincidunt condimentum nullam.",
  },
  {
    title: " Elementum facilisi aliquam, nisi, orci vulputate?",
    content:
      "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla. Elit adipiscing proin quis est consectetur. Felis ultricies nisi, quis malesuada sem odio. Potentiмnibh natoque amet amet, tincidunt ultricies et. Et nam rhoncus sit nullam diam tincidunt condimentum nullam.",
  },
  {
    title: "Nibh at odio dolor etiam neque in vel id orci? ",
    content:
      "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla. Elit adipiscing proin quis est consectetur. Felis ultricies nisi, quis malesuada sem odio. Potentiмnibh natoque amet amet, tincidunt ultricies et. Et nam rhoncus sit nullam diam tincidunt condimentum nullam.",
  },
  {
    title: "Non dolor at velit lorem erat maecenas?",
    content:
      "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla. Elit adipiscing proin quis est consectetur. Felis ultricies nisi, quis malesuada sem odio. Potentiмnibh natoque amet amet, tincidunt ultricies et. Et nam rhoncus sit nullam diam tincidunt condimentum nullam.",
  },
];

const AccordionItem = ({ title, content, isOpen, onToggle }: any) => {
  const contentRef: any = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      //   console.log(contentRef.current.style.maxHeight);
      //   console.log(isOpen, "isOpen");
      //   console.log(contentRef.current.scrollHeight);

      contentRef.current.style.maxHeight = isOpen
        ? `${contentRef.current.scrollHeight}px`
        : "0";
    }
  }, [isOpen]);

  return (
    <div className="border-t border-gray-100">
      <button
        className="flex items-center justify-between w-full text-left px-4 py-5"
        onClick={onToggle}
      >
        <span className="text-[16px] text-gray-900 font-medium">{title}</span>
        <span
          className={`transition-transform transform text-xl ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`accordion-content ${isOpen ? "open" : ""}`}
        ref={contentRef}
      >
        <div className="ps-10 py-5 text-gray-200 font-normal">{content}</div>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [openItem, setOpenItem] = useState(null);

  const handleToggle = (value: any) => {
    setOpenItem((prevOpenItem) => (prevOpenItem === value ? null : value));
  };

  return (
    <div className="w-full mt-10">
      {FAQsData.map((item: any, index: any) => {
        return (
          <AccordionItem
            title={item.title}
            content={item.content}
            isOpen={openItem === index}
            onToggle={() => handleToggle(index)}
          />
        );
      })}
    </div>
  );
};

export default Accordion;
