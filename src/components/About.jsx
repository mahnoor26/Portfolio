import React from "react";
import { services } from "../constants";

function About() {
  return (
    <>
      <div
        className="bg-cyan-900 text-white py-12 lg:px-24 xl:px-44"
        id="about"
      >
        <div className="py-7 justify-center">
          <div className="px-10">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 mx-auto text-center">
              Introduction
            </h2>
            <p className="mt-3 mb-6">
              👩‍🎓 Hi, I'm
              <a
                className="text-yellow-300 hover:text-yellow-500 duration-300"
                href="https://www.linkedin.com/in/mahnoordev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b> MAHNOOR MUNIR</b>
              </a>{" "}
              , a recent graduate from{" "}
              <a
                className="text-yellow-300 hover:text-yellow-500 duration-300"
                href="https://www.fjwu.edu.pk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fatima Jinnah Women University (FJWU)
              </a>{" "}
              with a degree in Software Engineering. As a passionate Frontend
              Developer experienced in React, I thrive on creating dynamic and
              user-friendly web applications.
              <br />
              💼 As a {" "}
              <a
                className="text-yellow-300 hover:text-yellow-500 duration-300"
                href="https://mvp.microsoft.com/studentambassadors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Beta MLSA
              </a>{" "}
              and technical speaker, I have delivered numerous sessions on
              various topics, sharing my knowledge and experiences with the
              community.
              <br />
              ✍️ Beyond development, I enjoy sharing my insights through blogs,
              where I explore the nuances of software development and the latest
              tech trends.
              <br />
              🌟 In my free time, I love to explore new technologies and stay
              updated with the latest advancements in the tech world.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7 px-9 pt-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="rounded-lg drop-shadow-xl py-5 px-3 flex flex-col justify-center bg-slate-200 text-cyan-950"
                >
                  <h3 className="text-xl font-bold text-center mb-4">
                    {service?.title}
                  </h3>
                  <p className="text-center font-semibold italic">
                    {service?.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
