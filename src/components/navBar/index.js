import React, { useEffect, useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { Link } from "react-scroll";

const NavBar = () => {
  const [navScroll, setNavScroll] = useState(true);
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY <= 0) {
        setNavScroll(true);
      } else {
        setNavScroll(true);
      }
    };
  }, []);
  React.useEffect(() => {
    if (expand) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [expand]);
  return (
    <div
      className={`w-screen border-gray-600 border-t fixed top-0  py-4 py-2 z-10 backdrop-filter ${
        navScroll && "backdrop-blur"
      } flex sm:justify-start md:justify-between `}
    >
      <Link
        className=" px-2  cursor-pointer"
        to="home"
        duration={500}
        smooth={true}
        offset={-70}
        onClick={() => setExpand(false)}
      >
        <img src="../logo.png" alt="logo" className="w-16 " />
      </Link>

      {/* opening navigation button */}
      {!expand && (
        <div
          className=" sm:hidden cursor-pointer  absolute right-0 text-white mx-4"
          onClick={() => {
            setExpand(true);
          }}
        >
          <CgMenuRightAlt size={27} className="text-blue-700" />
        </div>
      )}
      {/* opening navigation button */}

      {/* mobile navigations */}
      <div
        className={
          expand
            ? "flex flex-col transition-all duration-500 sm:hidden m-0 w-screen text-xl overflow-hidden h-screen items-center justify-center absolute top-0  bg-red-900  text-black"
            : "h-0 flex overflow-hidden bg-black bottom-0 transition-all duration-500 w-screen m-0 absolute top-0 delay-200"
        }
      >
        <div
          className={
            expand
              ? "flex flex-col transition-all duration-500 sm:hidden m-0 w-screen delay-200 text-xl overflow-hidden h-screen items-center justify-center absolute top-0  bg-green-700 text-black"
              : "h-0 overflow-hidden bg-black bottom-0 transition-all duration-500 w-screen m-0 absolute top-0"
          }
        ></div>
        <div className="relative w-screen h-screen overflow-hidden flex items-center justify-center">
          <div
            className="py-2 cursor-pointer mt-0 absolute top-0 right-4"
            onClick={() => {
              setExpand(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={
                expand
                  ? "h-10 w-10 rotate-0 font-thin transition-all duration-500 delay-200"
                  : "h-0 w-10 rotate-90"
              }
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="p-10">
            <Link
              className="flex text-3xl my-2 group px-2 flex-col cursor-pointer group hover:text-red-500"
              to="home"
              duration={500}
              smooth={true}
              offset={-70}
              onClick={() => setExpand(false)}
            >
              <div
                className={
                  expand
                    ? "  transition-all duration-500 delay-200 h-8 overflow-hidden"
                    : " block overflow-hidden"
                }
              >
                <div
                  className={
                    expand
                      ? "h-8 transition-all font-1 text-white duration-500 translate-y-0 delay-200 overflow-hidden"
                      : "h-8 overflow-hidden -translate-y-10 "
                  }
                >
                  HOME
                </div>
              </div>
            </Link>
            <Link
              className="flex text-3xl my-2 group px-2 flex-col cursor-pointer group hover:text-red-500 hover:"
              to="about"
              duration={500}
              smooth={true}
              offset={-70}
              onClick={() => setExpand(false)}
            >
              <div
                className={
                  expand
                    ? "  transition-all  duration-500 delay-[400ms] h-8 overflow-hidden"
                    : " block  overflow-hidden"
                }
              >
                <div
                  className={
                    expand
                      ? "h-8 transition-all font-1 duration-500 text-white translate-y-0 delay-[400ms] overflow-hidden"
                      : "h-8 overflow-hidden -translate-y-10 "
                  }
                >
                  ABOUT
                </div>
              </div>
            </Link>
            <Link
              className="flex text-3xl my-2 group px-2 flex-col cursor-pointer group hover:text-red-500 h-10"
              to="services"
              duration={500}
              smooth={true}
              offset={-70}
              onClick={() => setExpand(false)}
            >
              <div
                className={
                  expand
                    ? "  transition-all duration-500 delay-[600ms]  h-8 overflow-hidden"
                    : " block  overflow-hidden"
                }
              >
                <div
                  className={
                    expand
                      ? "h-8 transition-all text-white font-1  duration-500 translate-y-0 delay-[600ms] overflow-hidden"
                      : "h-8 overflow-hidden -translate-y-10 "
                  }
                >
                  SERVICES
                </div>
              </div>
            </Link>

            <Link
              className="flex text-3xl my-2 group px-2 flex-col cursor-pointer group hover:text-red-500 h-10"
              to="products"
              duration={500}
              smooth={true}
              offset={-70}
              onClick={() => setExpand(false)}
            >
              <div
                className={
                  expand
                    ? "  transition-all duration-500 delay-[1000ms] h-8 overflow-hidden"
                    : " block  overflow-hidden"
                }
              >
                <div
                  className={
                    expand
                      ? "h-10 transition-all text-white font-1 duration-500 translate-y-0 delay-[1000ms] overflow-hidden"
                      : "h-0 overflow-hidden -translate-y-12 "
                  }
                >
                  PRODUCTS
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* mobile navigations */}

      {/* desktop navigations */}
      <div
        className={
          navScroll
            ? "flex hidden sm:block text-white px-2"
            : "flex hidden sm:block tex-black px-2 "
        }
      >
        <div className="flex items-center ">
          <Link
            className="flex text-sm group px-2 flex-col cursor-pointer group hover:text-red-500 "
            to="home"
            duration={500}
            smooth={true}
            offset={-70}
            // onClick={() => setExpanded(false)}
          >
            <div className="flex text-blue-700 group-hover:font-black">
              HOME
            </div>
            <div
              className="bg-green-200 w-0 transition-all group-hover:w-4"
              style={{
                height: 2,
              }}
            />
          </Link>

          <Link
            className="flex text-sm group px-2 flex-col cursor-pointer group hover:text-red-500 hover:"
            to="about"
            duration={500}
            smooth={true}
            offset={-70}
            // onClick={() => setExpanded(false)}
          >
            <div className="flex text-blue-700 group-hover:font-black">
              ABOUT
            </div>
            <div
              className="bg-green-200 w-0 transition-all group-hover:w-4"
              style={{
                height: 2,
              }}
            />
          </Link>

          <Link
            className="flex text-sm group px-2 flex-col cursor-pointer group hover:text-red-500 hover:"
            to="services"
            duration={500}
            smooth={true}
            offset={0}
            // onClick={() => setExpanded(false)}
          >
            <div className="flex group-hover:font-black text-blue-700">
              SERVICES
            </div>
            <div
              className="bg-green-200 w-0 transition-all group-hover:w-4"
              style={{
                height: 2,
              }}
            />
          </Link>

          <Link
            className="flex text-sm group px-2 flex-col cursor-pointer group hover:text-red-500 hover:"
            to="contact"
            duration={500}
            smooth={true}
            offset={0}
            // onClick={() => setExpanded(false)}
          >
            <div className="flex group-hover:font-black text-blue-700">
              CONTACTS
            </div>
            <div
              className="bg-green-200 w-0 transition-all group-hover:w-4"
              style={{
                height: 2,
              }}
            />
          </Link>
        </div>
      </div>
      {/* desktop navigations */}
    </div>
  );
};

export default NavBar;
