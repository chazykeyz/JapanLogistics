import React from "react";

function Contact() {
  return (
    <div
      className="flex  flex-col bg-blue-100 items-center justify-center"
      style={{
        padding: "30px 0 70px",
        height: "50vh",
      }}
      id="contact"
    >
      <div
        className="font-thin w-full flex justify-center   text-3xl pt-8 text-white"
        data-aos="fade-up"
      >
        <div className="font-1 text-blue-900 mx-2">Contacts </div>
      </div>

      <h1 className="text-lg text-center">
        Do you have a project you would like us to work on?
      </h1>
      <h1 className="text-4xl font-bold text-center">
        <b>Let’s work, </b>
        <a
          href="tel: +255 789 680 352"
          style={{
            textDecoration: "none",
          }}
          className="text-blue-900  font-2"
        >
          Together
        </a>
      </h1>
      <h3 className="my-2 font-bold">+255 713 009 710 / +255 789 680 352 </h3>

      <div>
        <a
          href="https://wa.me/+255713009710"
          style={{
            textDecoration: "none",
            color: "white",
          }}
        >
          <div className="text-blue-500 p-2 font-3 text-5xl">Brief Us</div>
        </a>
      </div>
    </div>
  );
}

export default Contact;
