import React from "react";

function Home2() {
  return (
    <>
      <div className="flex items-center w-full  justify-center mt-12 text-white flex-col space-y-5">
        <div className="md:text-4xl text-3xl flex md:flex-row flex-col w-full items-center justify-center  space-x-2">
          <span>ALLOW ME TO</span>{" "}
          <span className="text-[#C16DE9]">INTRODUCE</span>
          <span>MYSELF</span>
        </div>
        <div className="text-lg space-y-1 text-justify md:p-0 p-8 max-w-[1050px]">
          <p>
          A Versatile person striving to continuously learn
            <span className="text-[#C16DE9]">  new technologies </span>.
            and{" "}
            <span className="text-[#C16DE9]"> make a positive impact!</span>
          </p>
          <p>
            My focus is on creating seamless web experiences which can provide impactful solutions to real life problems.
            My expertise includes{" "}
            <span className="text-[#C16DE9]">
              React.js, Tailwind CSS, Node.js, Python and Core Java.
            </span>
          </p>

          <p>
          I am eager to connect and collaborate with like-minded peoples who are {" "} 
          <span className="text-[#C16DE9]">
            passionate, dedicated and open minded{" "} 
            </span>  for learning something new everyday.
          I will be happy to contribute in amazing projects and give me best to it! ✌️{" "}
          </p>
        </div>
        <div className="w-[50%]"></div>
      </div>
    </>
  );
}

export default Home2;
