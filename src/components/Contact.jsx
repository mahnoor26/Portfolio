import React from "react";

function Contact() {
  return (
    <>
      <div
        className="contact bg-gray-950 text-white py-20 md:px-16 lg:px-24 "
        id="contact"
      >
        <div className="grid md:grid-cols-2">
          <div className=" md:text-left text-center mb-10">
            <p className="mt-2">Feel free to reach out to me.</p>
            <h4 className="text-5xl font-bold ">Contact Me</h4>
          </div>
          <div className="bg-cyan-900 rounded-3xl drop-shadow-xl border-2 p-6 flex flex-col gap-4 md:mx-0 mx-12">
            <h4 className=" text-3xl font-semibold text-center">
              Contact Form
            </h4>
            <div className="mt-5">
              <p className="mb-2">Name</p>
              <input
                type="text"
                className="w-full p-2 rounded"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <p className="mb-2">Email Address</p>
              <input
                type="email"
                className="w-full p-2 rounded"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <p className="mb-2">Phone Number</p>
              <input
                type="number"
                className="w-full p-2 rounded"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="mb-5">
              <p className="mb-2">Write your message</p>
              <textarea
                className="w-full p-2 rounded"
                placeholder="Enter your message"
                rows="3"
              ></textarea>
            </div>
            <div className="flex justify-end mb-3">
              <button className="bg-white text-gray-950 font-bold py-2 px-8 rounded-full mt-4 max-w-max">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
