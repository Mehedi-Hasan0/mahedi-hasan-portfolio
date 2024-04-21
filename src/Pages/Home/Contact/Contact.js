import React from "react";
import { Link } from "react-router-dom";
import gif from "../../../assets/images/24695-man-takes-nice-a-coffee.gif";

const Contact = () => {
  return (
    <section className="bg-white" id="contact">
      <div className="max-w-6xl mx-auto pb-24 px-5 sm:px-9 md:px-12 lg:px-16 xl:px-10">
        <div className="mb-6">
          <h2 className="text-[#2f2f2f] md:text-5xl text-3xl text-center">
            Let's have a chat
          </h2>
          <p className="md:text-xl text-lg font-medium text-[#ff715b] text-center pt-4">
            dev.mahedihasan@gmail.com
          </p>
        </div>
        <div className="flex md:flex-row flex-col justify-between items-center mt-16">
          <div className="md:w-[40%] sm:w-[70%] w-[80%] mx-auto md:mx-0 mb-2 md:mb-0">
            <img src={gif} alt="" />
          </div>
          <div className="md:w-[55%] shadow-lg md:p-8 p-4 rounded-2xl">
            <div className="">
              <div className=" mb-4">
                <p className="text-[#2f2f2f] text-lg ml-1 mb-2">Name</p>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full max-w-lg"
                />
              </div>
              <div className=" mb-4">
                <p className="text-[#2f2f2f] text-lg ml-1 mb-2">Email</p>
                <input
                  type="email"
                  placeholder="Your Name"
                  className="input input-bordered w-full max-w-lg"
                />
              </div>
              <div className="mb-8">
                <p className="text-[#2f2f2f] text-lg ml-1 mb-2">Message</p>
                <input
                  type="email"
                  placeholder="Your Name"
                  className="input input-bordered w-full max-w-lg py-10"
                />
              </div>
              <div className="border-2 border-black inline-block ml-1">
                <Link onClick={() => window.location.reload()}>
                  <div className="bg-[#ff715b] py-2 px-4 relative right-1 bottom-1 hover:right-0 hover:bottom-0 transition-all">
                    <p className="text-white font-semibold">Get in touch</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
