import React from "react";
import { certificates, certifications } from "../constants";

function Certifications() {
  return (
    <>
      <div
        className="bg-cyan-900 text-white py-9 lg:py-16 px-8 lg:px-16"
        id="certifications"
      >
        <div className="mx-auto mb-14 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mt-2">
            Certifications
          </h2>
        </div>
        <div className="md:mx-14">
          {certifications?.map((certificate, index) => (
            <div
              key={index}
              className="mb-10 p-5 border-2 drop-shadow-xl rounded-xl bg-slate-200 text-gray-950"
            >
              <div className="flex justify-between">
                <h3 className="text-2xl font-semibold my-2">
                  {certificate?.title}
                </h3>
                <div className="flex justify-between gap-1">
                  <img
                    src={certificate.image}
                    alt={certificate.platform}
                    width="30px"
                    height="30px"
                  />
                  <h3 className="text-xl italic font-semibold my-2">
                    {certificate?.platform}
                  </h3>
                </div>
              </div>
              <p className="mt-3 mb-5">{certificate?.description}</p>

              <div className="flex justify-end mt-2 mb-2">
                <a
                  href={certificate?.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-cyan-900 font-semibold py-2 px-5 rounded-full drop-shadow-lg"
                >
                  Credential Link
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Certifications;
