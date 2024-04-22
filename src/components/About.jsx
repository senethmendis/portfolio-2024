import React from "react";
import { sprayCan } from "../assets";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap/gsap-core";
import { express, nodelogo, reactlogo, mongo } from "../assets/project-logos";
import { ScrollParallax } from "react-just-parallax";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    gsap.set(".followBox", {
      xPercent: -50,
      yPercent: -50,
      scale: 0,
    });
    gsap.set("#Wraper", {
      xPercent: -50,
      yPercent: -50,
      scale: 0,
    });
    window.addEventListener("mousemove", (e) => {
      gsap.to("#Wraper .followBox", 0.5, {
        x: e.clientX,
        y: e.clientY,
        stagger: 0.15,
        ease: "none",
      });

      let TL = gsap.timeline({
        defaults: { duration: 0.5, ease: "none" },
      });
      TL.to("#Wraper .followBox", {
        scale: 1,
        stagger: { amount: 0.15, from: "start", ease: "none" },
      });
      TL.to(
        "#Wraper .followBox",
        {
          scale: 0,
          stagger: { amount: 0.15, from: "end", ease: "none" },
        },
        "<+=2.5"
      );
    });

    gsap.fromTo(
      "#about-text",
      {
        y: 200,
        ease: "power1.inOut",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: {
          axis: "y",
          each: 0.5,
        },
        scrollTrigger: {
          trigger: "#about-text",
          start: "top bottom",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section id="About" className="flex flex-row relative">
      <div className="w-3/4text-white flex flex-col justify-center items-center gap-4">
        <h1 className="text-6xl">About Me</h1>
        <div className="w-[80%] h-[80%] flex flex-col justify-center items-start">
          <h1 id="about-text">
            <span className="text-orange-600">Hi</span> I am SENETH MENDIS
          </h1>

          <strong
            id="about-text"
            className="text-3xl md:text-6xl text-orange-500"
          >
            Software Engineer,
          </strong>

          <p id="about-text" className="w-[60%] py-4 md:text-xl">
            To Secure a Challenging Positive in a reputable organization to
            expand my learning’s, knowledgeand and skills. Secure a responsible
            career opportunity to fully utilize my training and skills, while
            making a significant contribution to the success of the company.
            <br />
          </p>
          <a
            id="about-text"
            href="https://www.linkedin.com/in/senethmendis/"
            target="_blank"
          >
            <strong className="text-orange-300">Read More</strong>
          </a>
        </div>
      </div>
      <div className="w-1/4 bg-white hidden md:flex"></div>
      <img
        loading="lazy"
        id="spray-img"
        src={sprayCan}
        alt=""
        className="absolute right-0 top-0 bottom-0 z-50 my-auto w-[200px] sm:w-[350px] md:w-[350px] lg:w-[650px]"
      />

      <div
        id="spray-img"
        className="aqua__gradient absolute w-[30%] h-[30%] top-0 -m-32 bottom-0 -z-10"
      />
      <div className="pink__gradient absolute w-[50%] h-[50%] z-0 bottom-0 right-0" />
      <div id="Wraper" className="w-full h-ful absolute z-50">
        <img
          src={mongo}
          alt=""
          className=" followBox custom-tech-logo"
          loading="lazy"
        />
        <img
          src={express}
          alt=""
          className="followBox custom-tech-logo"
          loading="lazy"
        />
        <img
          src={reactlogo}
          alt=""
          className="followBox custom-tech-logo"
          loading="lazy"
        />

        <img
          src={nodelogo}
          alt=""
          className="followBox custom-tech-logo"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default About;
