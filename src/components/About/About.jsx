import React, { useState } from "react";
import aboutImage from "/src/assets/about-1.jpg";

function About() {
  const [active, setActive] = useState("skills");

  return (
    <div
      className="flex md:flex-row flex-col space-x-2 md:text-center w-full  md:items-center md:justify-center mt-20 "
      style={{ animation: "fadeIn 2s ease-in-out" }}
    >
      <div className="md:w-[50%] w-full p-10 md:pl-20 flex items-center justify-center">
        <img
          src={aboutImage}
          alt=""
          className="rounded-2xl shadow-[0_3px_12px_0px_#CB5AEB]"
        />
      </div>
      <div className="md:w-[50%] w-full flex justify-start p-10 pr-20 flex-col space-y-3 text-white">
        <h1 className="text-purple-500 flex justify-start text-3xl font-bold">
          About Me
        </h1>
        <p className="items-start text-justify">
          Hi there! I'm Vrushank Vyas, a passionate and dedicated Software developer and an AIML enthusiast.
          with <span className="text-purple-600"> 1 year of experience </span>{" "}
          in building responsive and user-friendly Web Applications.
        </p>

        <div className="flex space-x-5 mt-2s">
          <div className="relative group">
            <span
              className={`cursor-pointer ${
                active === "skills"
                  ? "text-pink-800 font-semibold"
                  : "text-purple-500"
              }`}
              onClick={() => setActive("skills")}
            >
              Skills
            </span>
            <span className="underline absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></span>
          </div>
          <div className="relative group">
            <span
              className={`cursor-pointer ${
                active === "experience"
                  ? "text-pink-800 font-semibold"
                  : "text-purple-500"
              }`}
              onClick={() => setActive("experience")}
            >
              Experience
            </span>
            <span className="underline absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></span>
          </div>
          <div className="relative group">
            <span
              className={`cursor-pointer ${
                active === "education"
                  ? "text-pink-800 font-semibold"
                  : "text-purple-500"
              }`}
              onClick={() => setActive("education")}
            >
              Education
            </span>
            <span className="underline absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></span>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-5 h-[380px] overflow-hidden">
          {active === "skills" && (
            <div className="space-y-3">
              <div className="flex flex-col items-start md:text-justify">
                <div className="text-pink-800 font-semibold text-sm">UI/UX</div>
                <div>Designing Web Application.</div>
              </div>
              <div className="flex flex-col items-start md:text-justify">
                <div className="text-pink-800 font-semibold text-sm">React</div>
                <div>Developing interactive UIs.</div>
              </div>
              <div className="flex flex-col items-start md:text-justify">
                <div className="text-pink-800 font-semibold text-sm">
                  JavaScript
                </div>
                <div>Implementing dynamic functionality.</div>
              </div>
              <div className="flex flex-col items-start md:text-justify">
                <div className="text-pink-800 font-semibold text-sm">Git and Github</div>
                <div>Version control and collaboration.</div>
              </div>
              <div className="flex flex-col items-start md:text-justify">
                <div className="text-pink-800 font-semibold text-sm">
                  Responsive Design
                </div>
                <div>Creating layouts adaptable to all devices.</div>
              </div>
              <div className="flex flex-col items-start md:text-justify">
                <div className="text-pink-800 font-semibold text-sm">DSA</div>
                <div>Improving Problem Solving Skills</div>
              </div>
              <div className="flex flex-col items-start md:text-justify">
                <div className="text-pink-800 font-semibold text-sm">Open Source</div>
                <div>Contributing in wonderful projects</div>
              </div>

            </div>
          )}
          {active === "experience" && (
            <div className="md:space-y-3 space-y-6">
              <div className="flex flex-col items-start md:text-justify">
                <div className="text-pink-800 font-semibold md:text-md text-sm space-y-2">
                  JUL-2024-Present{" "}
                  <span className="text-purple-500">(Computer Society of India- TCET)</span>
                </div>
                <div>TECHNICAL HEAD</div>
              </div>
              <div className="flex flex-col items-start md:text-justify">
                <div className="text-pink-800 font-semibold text-sm">
                  May-2024 to Aug-2024{" "}
                  <span className="text-purple-500">(GirlScript Summer of Code)</span>
                </div>
                <div>Open Source Contributor</div>
              </div>
            </div>
          )}
          {active === "education" && (
            <div className="space-y-3">
              <div className="flex flex-col items-start md:text-justify">
                <div className="text-pink-800 font-semibold text-sm">
                  Pursuing - <span className="text-purple-500">BE</span> in{" "}
                  <span className="text-purple-500">
                    Computer Engineering
                  </span>
                </div>
                <div>Thakur College of Engineering and Technology. - 9.54 </div>
              </div>
              <div className="flex flex-col items-start md:text-justify">
                <div className="text-pink-800 font-semibold text-sm">
                  Higher Secondary Education
                </div>
                <div>Viva College - 86.83 %</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
