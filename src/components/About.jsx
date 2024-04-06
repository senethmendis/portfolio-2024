import React from "react";
import { sprayCan } from "../assets";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/gsap-core";

const About = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#about-text",
      {
        y: -10,
        opacity: 0,
        ease: "power1.inOut",
      },
      {
        y: 10,
        opacity: 1,
        delay: 0.5,
        stagger: 0.1,
      }
    );
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      "#spray-img",
      {
        x: 550,
      },
      {
        x: 0,
      }
    );
  }, []);

  return (
    <section className="flex flex-row relative">
      <div className="w-3/4text-white flex flex-col justify-center items-center gap-4">
        <div className="w-[80%] h-[80%] flex flex-col justify-center items-start">
          <h1 id="about-text">SENETH MENDIS</h1>

          <strong id="about-text" className="text-6xl">
            Software Engineer,
          </strong>

          <p id="about-text" className="w-[60%] py-4">
            To Secure a Challenging Positive in a reputable organization to
            expand my learning’s, knowledgeand and skills. Secure a responsible
            career opportunity to fully utilize my training and skills, while
            making a significant contribution to the success of the company.
            <br />
            <a href="https://www.linkedin.com/in/senethmendis/" target="_blank">
              <strong>Read More</strong>
            </a>
          </p>
        </div>
      </div>
      <div className="w-1/4 bg-white"></div>
      <img
        id="spray-img"
        src={sprayCan}
        alt=""
        className="absolute right-0 top-0 bottom-0 z-50 my-auto w-[250px] sm:w-[350px] md:w-[450px] lg:w-[650px]"
      />

      <div className="aqua__gradient absolute w-[30%] h-[30%] top-0 -m-32 bottom-0 z-50" />
      <div className="pink__gradient absolute w-[50%] h-[50%] z-0 bottom-0 right-0" />
    </section>
  );
};

export default About;
