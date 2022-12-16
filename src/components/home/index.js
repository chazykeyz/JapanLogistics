import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

const Home = () => {
  AOS.init({
    duration: 1000,
  });
  return (
    <div
      className=" relative w-screen bg-gray-100 overflow-hidden lg:h-screen h-full flex flex-col justify-center items-center"
      id="home"
    >
      <div
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1470848051974-964b789cb6fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "100vh",
          width: "100vw",
          backgroundColor: "rgba(0,0,0,.4)",
          backgroundBlendMode: "multiply",
        }}
      />
      <div className="absolute w-full mt-20 lg:mt-0 grid grid-cols-1 lg:grid-cols-2 flex-col justify-center items-center">
        <div
          className="text-white mx-4  "
          style={{
            textAlign: "left",
          }}
        >
          <div
            className="flex font-heading font-bold text-white text-3xl lg:text-5xl"
            data-aos="fade-up"
          >
            JAPAN LOGISTICS
          </div>
          <div className="flex items-center">
            <div
              className=" mx-1"
              style={{ height: 3, width: 30, background: "#2e4463" }}
              data-aos="fade-up"
              data-aos-delay="200"
            />
          </div>

          {/* small words */}
          <div
            className="text-gray-200 my-2 text-medium"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Japan Logistics is a legally registered company with best and
            affordable Services. We expect to meet the needs and demands of our
            customers at high Quality and levels..
          </div>
          <div className="flex mt-2" data-aos="fade-up" data-aos-delay="400">
            <div>
              <Link
                className="font-3 text-white text-5xl py-4 mx-2"
                to="contact"
                duration={500}
                smooth={true}
                offset={0}
                // onClick={() => setExpanded(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
