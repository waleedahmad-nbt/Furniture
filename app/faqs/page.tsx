import React from "react";
import Accordion from "../components/Accordian";

const FAQs = () => {
  return (
    <>
      <div className="FAQSBg">
        <div className="container flex flex-col items-center justify-center gap-4 min-h-[50vh]">
          <h1 className="text-white text-5xl font-bold">FAQ </h1>
          <p className="text-white text-center">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or <br /> web designs. The passage is
            attributed to an unknown typesetter in.
          </p>
        </div>
      </div>
      <div className="py-10">
        <div className="container py-10 bg-silver rounded-md">
          <h1 className="text-3xl font-normal">Shipping Information</h1>

          <Accordion />
        </div>

        <div className="container py-10 bg-silver rounded-md mt-10">
          <h1 className="text-3xl font-normal">Payment Information</h1>

          <Accordion />
        </div>
      </div>
    </>
  );
};

export default FAQs;
