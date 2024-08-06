import React from "react";
import { volunteer_activities } from "../constants";

function Volunteer() {
  return (
    <>
      <div
        className="volunteer bg-gray-950 text-white py-12 lg:px-24"
        id="volunteer"
      >
        <div className="mx-auto mb-14 text-center">
          <p className="font-light">MY JOURNEY SO FAR.</p>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2">
            Volunteer Experience.
          </h2>
        </div>
        <div className="mr-3 ml-6"> 
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            {volunteer_activities?.map((vol) => (
              <li className="mb-10 ms-6" key={vol?.company}>
                <a href={vol?.url}>
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-white">
                    <img
                      className="rounded-full shadow-lg"
                      src={vol?.logo}
                      alt={vol?.company}
                    />
                  </span>
                </a>
                <div className="justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-cyan-900 dark:border-cyan-900">
                  <time className="mb-1 text-md text-gray-200 sm:order-last sm:mb-0 min-w-max font-bold">
                    {vol?.duration}
                  </time>
                  <div className="text-sm font-normal text-gray-300 dark:text-gray-200">
                    <p className="text-xl font-bold">{vol?.role}</p>
                    <a href={vol?.url}>
                      <p className="text-lg italic mt-1 font-semibold">{vol?.company}</p>
                    </a>
                    <ul className="mt-3 list-disc ml-7 space-y-2">
                      {vol?.points.map((point, index) => (
                        <li
                          className="text-white-100 text-[14px] pl-1 tracking-wider"
                          key={`vol-point-${index}`}
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export default Volunteer;
