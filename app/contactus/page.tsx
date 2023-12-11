"use client"
import Image from "next/image";
import DiningTable from "../assets/images/DiningTable.png";
import ContactForm from "../components/ContactFrom";

const contactUs = () => {
  return (
    <>
      <div className="contactUsBg">
        <div className="container flex flex-col items-center justify-center gap-4 min-h-[50vh]">
          <h1 className="text-white text-5xl font-bold">Contact Us</h1>
          <p className="text-white text-center">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or <br /> web designs. The passage is
            attributed to an unknown typesetter in.
          </p>
        </div>
      </div>

      <div className="container flex items-center gap-5 py-10">
        <div>
          <Image src={DiningTable} alt="" />
        </div>
        <div className="grow">
          <div className="mapouter w-full">
            <div className="gmap_canvas w-full">
              <iframe
                style={{ width: "100%", height: "600px" }}
                className="gmap_iframe"
                src="https://maps.google.com/maps?width=700&amp;height=700&amp;hl=en&amp;q= Al Mozna Building -  Al Qusais 1- Dubai - United Arab  Emirates&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="cementBg h-screen">
        <div className="container py-10">
          <div className="flex flex-col items-center">
            <div>
              <h1 className="text-[27px] md:text-[48px] text-[#4D4D4D] text-center">
                Let’s Build{" "}
                <span className="text-primary">Something Great</span> Together
              </h1>
              <p className="text-[#89939E] mt-5 leading-6 text-center">
                We believe in turning ideas into reality and we're ready to join
                your journey. Reach out to us and let's start discussing your
                vision.Together, we can craft software solutions that elevate
                your business to new heights.
              </p>
            </div>
            <div className="z-20">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default contactUs;
