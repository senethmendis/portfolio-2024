import React from "react";
import { sprayCan } from "../assets";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap/gsap-core";
import {
  firebaselogo,
  nodelogo,
  htmllogo,
  csslogo,
  reactlogo,
} from "../assets/project-logos";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  let FollowBox = "#Wrap .FollowBox";
  gsap.set(FollowBox, {
    xPercent: -50,
    yPercent: -50,
    scale: 0,
  });

  window.addEventListener("mousemove", (e) => {
    gsap.to(FollowBox, 0.5, {
      x: e.clientX,
      y: e.clientY,
      stagger: 0.15,
      ease: "none",
    });

    let TL = gsap.timeline({
      defaults: { duration: 0.5, ease: "none" },
    });
    TL.to(FollowBox, {
      scale: 1,
      stagger: { amount: 0.15, from: "start", ease: "none" },
    });
    TL.to(
      FollowBox,
      {
        scale: 0,
        stagger: { amount: 0.15, from: "end", ease: "none" },
      },
      "<+=2.5"
    );
  });

  useGSAP(() => {
    gsap.fromTo(
      "#about-text",
      {
        y: 10,
        opacity: 0,
        ease: "power1.inOut",
      },
      {
        y: 0,
        opacity: 1,

        stagger: 0.1,
        scrollTrigger: {
          trigger: "#about-text",
          toggleActions: "restart pause resume reset",
        },
      }
    );
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      "#spray-img",
      {
        x: 500,
      },
      {
        x: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: "#spray-img",
          start: "top center",
          end: "bottom ",
          toggleActions: "restart pause resume reset",
          scrub: true,
        },
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

          <p id="about-text" className="w-[60%] py-4 text-xl">
            To Secure a Challenging Positive in a reputable organization to
            expand my learning’s, knowledgeand and skills. Secure a responsible
            career opportunity to fully utilize my training and skills, while
            making a significant contribution to the success of the company.
            <br />
          </p>
          <a href="https://www.linkedin.com/in/senethmendis/" target="_blank">
            <strong>Read More</strong>
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
      <div id="Wrap" className="w-full h-ful absolute z-50">
        <img
          src={reactlogo}
          alt=""
          className="FollowBox custom-tech-logo"
          loading="lazy"
        />
        <img
          src={htmllogo}
          alt=""
          className=" FollowBox custom-tech-logo"
          loading="lazy"
        />
        <img
          src={nodelogo}
          alt=""
          className="FollowBox custom-tech-logo"
          loading="lazy"
        />
        <img
          src={firebaselogo}
          alt=""
          className="FollowBox custom-tech-logo"
          loading="lazy"
        />
        <img
          src={csslogo}
          alt=""
          className="wFollowBox custom-tech-logo"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default About;
