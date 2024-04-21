import React from "react";
import { Link } from "react-router-dom";
import pro0 from "../../../assets/images/motel-src.webp";
import pro1 from "../../../assets/images/projects1.png";
import pro2 from "../../../assets/images/pro2.png";
import pro3 from "../../../assets/images/proj3.png";

const Projects = () => {
  return (
    <section className="bg-white" id="projects" name="projects">
      <div className="max-w-6xl mx-auto pb-24 px-5 sm:px-9 md:px-12 lg:px-16 xl:px-10">
        <div>
          <div className="mb-6">
            <h2 className="text-[#2f2f2f] text-4xl relative z-20">Projects</h2>
            <hr className="border-[#ff715b] border-[10px] w-32 relative left-1 bottom-4 z-10" />
          </div>
          {/* project 0 */}
          <div className="flex md:flex-row flex-col justify-between mb-24">
            <div className="md:w-[55%]">
              <h4 className=" text-black font-light text-xl tracking-widest mb-4 opacity-90">
                Full stack project
              </h4>
              <h2 className="text-black font-medium text-5xl mb-4">Motel</h2>
              <div className="flex flex-wrap gap-4 md:mb-14 mb-10">
                <p
                  className="p-2 bg-[#121E27] text-white inline-block tooltip"
                  data-tip="Frontend"
                >
                  React
                </p>
                <p
                  className="p-2 bg-[#121E27] text-white inline-block tooltip"
                  data-tip="Frontend"
                >
                  Redux
                </p>
                <p
                  className="p-2 bg-[#121E27] text-white inline-block tooltip"
                  data-tip="Frontend Css Framework"
                >
                  Tailwind CSS
                </p>
                <p
                  className="p-2 bg-[#121E27] text-white inline-block tooltip"
                  data-tip="Backend"
                >
                  Node.js
                </p>
                <p
                  className="p-2 bg-[#121E27] text-white inline-block tooltip"
                  data-tip="Backend"
                >
                  Express.js
                </p>
                <p className="p-2 bg-[#121E27] text-white inline-block">JWT</p>
                <p
                  className="p-2 bg-[#121E27] text-white inline-block tooltip"
                  data-tip="Database"
                >
                  MongoDB
                </p>
                <p className="p-2 bg-[#121E27] text-white inline-block ">
                  React Query
                </p>
                <p
                  className="p-2 bg-[#121E27] text-white inline-block tooltip"
                  data-tip="Frontend"
                >
                  React router
                </p>
                <p
                  className="p-2 bg-[#121E27] text-white inline-block tooltip"
                  data-tip="Tools"
                >
                  Vercel
                </p>
              </div>
              <div className="border-2 border-black inline-block md:mb-16 mb-7 ml-2 md:ml-0">
                <a
                  href={"https://motel-frontend.vercel.app/"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="bg-[#ff715b] md:py-5 py-2 md:px-8 px-4 relative md:right-2 right-1 md:bottom-2 bottom-1 hover:right-0 hover:bottom-0 transition-all">
                    <p className="text-white text-xl font-semibold">
                      View Project
                    </p>
                  </div>
                </a>
              </div>
              <p className="text-black md:text-2xl text-base md:leading-normal md:mb-7 opacity-80">
                Simplifying user interactivity and making the app seamless both
                book a hotel and host a hotel was the key goal of this project.
              </p>
            </div>
            <div className="md:w-[35%] sm:w-[70%] w-[80%] mx-auto md:mx-0">
              <img
                src={pro0}
                alt=""
                className=" border rounded-2xl hover:shadow-2xl  mt-16 hover:mt-14 transition-all cursor-pointer"
              />
            </div>
          </div>
          {/* project 1 */}
          <div className="flex md:flex-row flex-col justify-between mb-24">
            <div className="md:w-[55%]">
              <h4 className=" text-black font-light text-xl tracking-widest mb-4 opacity-90">
                Full stack project
              </h4>
              <h2 className="text-black font-medium text-5xl mb-4">Alex</h2>
              <div className="flex flex-wrap gap-4 md:mb-14 mb-10">
                <p
                  className="p-2 bg-[#121E27] text-white inline-block tooltip"
                  data-tip="Frontend"
                >
                  React
                </p>
                <p
                  className="p-2 bg-[#121E27] text-white inline-block tooltip"
                  data-tip="Frontend"
                >
                  HTML
                </p>
                <p
                  className="p-2 bg-[#121E27] text-white inline-block tooltip"
                  data-tip="Frontend"
                >
                  CSS
                </p>
                <p
                  className="p-2 bg-[#121E27] text-white inline-block tooltip"
                  data-tip="Frontend Css Framework"
                >
                  Tailwind CSS
                </p>
                <p
                  className="p-2 bg-[#121E27] text-white inline-block tooltip"
                  data-tip="Backend"
                >
                  Node.js
                </p>
                <p
                  className="p-2 bg-[#121E27] text-white inline-block tooltip"
                  data-tip="Backend"
                >
                  Express.js
                </p>
                <p
                  className="p-2 bg-[#121E27] text-white inline-block tooltip"
                  data-tip="Database"
                >
                  MongoDB
                </p>
                <p className="p-2 bg-[#121E27] text-white inline-block ">
                  React Query
                </p>
                <p
                  className="p-2 bg-[#121E27] text-white inline-block tooltip"
                  data-tip="Frontend"
                >
                  React router
                </p>
                <p
                  className="p-2 bg-[#121E27] text-white inline-block tooltip"
                  data-tip="Authentication"
                >
                  Firebase
                </p>
                <p
                  className="p-2 bg-[#121E27] text-white inline-block tooltip"
                  data-tip="Tools"
                >
                  Vercel
                </p>
              </div>
              <div className="border-2 border-black inline-block md:mb-16 mb-7 ml-2 md:ml-0">
                <a
                  href="https://alex-photographer.web.app/"
                  target="_blank"
                  rel=" noreferrer"
                >
                  <div className="bg-[#ff715b] md:py-5 py-2 md:px-8 px-4 relative md:right-2 right-1 md:bottom-2 bottom-1 hover:right-0 hover:bottom-0 transition-all">
                    <p className="text-white text-xl font-semibold">
                      View Project
                    </p>
                  </div>
                </a>
              </div>
              <p className="text-black md:text-2xl text-base md:leading-normal md:mb-7 opacity-80 text-justify">
                Alex is a photography service based website. User can review
                services and user can also add services. But to add services
                user has to login.
              </p>
            </div>
            <div className="md:w-[35%] sm:w-[70%] w-[80%] mx-auto md:mx-0">
              <img
                src={pro1}
                alt=""
                className=" border rounded-2xl hover:shadow-2xl  mt-16 hover:mt-14 transition-all cursor-pointer"
              />
            </div>
          </div>
          {/* project 2 */}
          <div className="flex md:flex-row flex-col justify-between mb-24">
            <div className="md:w-[55%]">
              <h4 className=" text-black font-light text-xl tracking-widest mb-4 opacity-90">
                Full stack project
              </h4>
              <h2 className="text-black font-medium text-5xl mb-4">
                Dream Bikes
              </h2>
              <div className="flex flex-wrap gap-4 md:mb-14 mb-10">
                <p
                  className="p-2 bg-[#121E27] text-white inline-block tooltip"
                  data-tip="Frontend"
                >
                  React
                </p>
                <p
                  className="p-2 bg-[#121E27] text-white inline-block tooltip"
                  data-tip="Frontend"
                >
                  HTML
                </p>
                <p
                  className="p-2 bg-[#121E27] text-white inline-block tooltip"
                  data-tip="Frontend"
                >
                  CSS
                </p>
                <p
                  className="p-2 bg-[#121E27] text-white inline-block tooltip"
                  data-tip="Frontend Css Framework"
                >
                  Tailwind CSS
                </p>
                <p
                  className="p-2 bg-[#121E27] text-white inline-block tooltip"
                  data-tip="Backend"
                >
                  Express.js
                </p>
                <p
                  className="p-2 bg-[#121E27] text-white inline-block tooltip"
                  data-tip="Database"
                >
                  MongoDB
                </p>
                <p className="p-2 bg-[#121E27] text-white inline-block ">
                  React Query
                </p>
                <p
                  className="p-2 bg-[#121E27] text-white inline-block tooltip"
                  data-tip="Frontend"
                >
                  React router
                </p>
                <p
                  className="p-2 bg-[#121E27] text-white inline-block tooltip"
                  data-tip="Authentication"
                >
                  Firebase
                </p>
                <p
                  className="p-2 bg-[#121E27] text-white inline-block tooltip"
                  data-tip="Tools"
                >
                  Vercel
                </p>
              </div>
              <div className="border-2 border-black inline-block md:mb-16 mb-7 ml-2 md:ml-0">
                <a
                  href="https://dream-bikes-2bbd5.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="bg-[#ff715b] md:py-5 py-2 md:px-8 px-4 relative md:right-2 right-1 md:bottom-2 bottom-1 hover:right-0 hover:bottom-0 transition-all">
                    <p className="text-white text-xl font-semibold">
                      View Project
                    </p>
                  </div>
                </a>
              </div>
              <p className="text-black md:text-2xl text-base md:leading-normal md:mb-7 opacity-80 text-justify">
                Dream Bikes is a old bikes selling website. I have implemented
                different roles like buyers, seller, and admin. Dashboard is set
                for each role.
              </p>
            </div>
            <div className="md:w-[35%] sm:w-[70%] w-[80%] mx-auto md:mx-0">
              <img
                src={pro2}
                alt=""
                className=" border rounded-2xl hover:shadow-2xl  mt-16 hover:mt-14 transition-all cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
