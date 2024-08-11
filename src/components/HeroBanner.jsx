import React from "react";

function HeroBanner() {
  return (
    <div className=" bg-gray-950 px-12" id="home">
      <div className="hero h-screen flex justify-center items-center">
        <div className="pt-4">
          <h1 className="text-5xl sm:text-6xl font-bold mt-2 text-white">
            Hi, I'm&nbsp;
            <span className="text-yellow-400 font-extrabold">
              Mahnoor Munir
            </span>
          </h1>
          <p className="mt-5 text-2xl text-white">
            I love to learn and build scalable and optimized frontend web
            applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
