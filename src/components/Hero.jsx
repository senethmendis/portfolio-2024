import { useGSAP } from "@gsap/react";
import { curcle, mySelfNostyle } from "../assets";
import { ScrollTrigger } from "gsap/all";
import { socialIcons } from "../constants/constants";
import gsap from "gsap/gsap-core";
gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#social-icons",
      {
        x: 200,
        scale: 1.1,
        repeat: -1,
        yoyo: true,
        stagger: {
          amount: 1.5,
          grid: [1, 1],
          axis: "y",
          ease: "circ.inout",
        },
      },
      {
        x: 0,
        scale: 1.1,
        repeat: 0,
        yoyo: false,
        stagger: {
          amount: 1.5,
          grid: [2, 1],
          axis: "y",
          ease: "circ.inout",
        },
        scrollTrigger: {
          trigger: "#social-icons",
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    gsap.to("#blue-round", {
      scale: 1.05,
      repeat: -1,
      yoyo: true,
      duration: 2,
      delay: 0.3,
      scrollTrigger: {
        trigger: "#blue-round",
        start: "top top",
      },
    });
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      "#seneth-name",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.5,
        scrollTrigger: {
          trigger: "#seneth-name",
          start: "top 60%",
          end: "bottom ",
          toggleActions: "restart pause resume reset",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      "#my-img",

      {
        y: 250,
      },
      {
        y: 0,

        scrollTrigger: {
          trigger: "#seneth-name",
          start: "top 60%",
          end: "bottom ",
          toggleActions: "restart pause resume reset",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <section className=" flex justify-center items-center relative">
      <img
        id="blue-round"
        src={curcle}
        loading="lazy"
        alt="cucle"
        className="md:w-[500px] w-[300px] top-44 md:top-10 md:bottom-0 absolute z-10"
      />
      {
    //  <h1
//id="seneth-name"
      //  className="text-[100px] md:text-[250px] leading-9 top-60 absolute z-10"
     // >
       // SENETH
     // </h1>

      }

      <img
        id="my-img"
        src={mySelfNostyle}
        alt="cucle"
        className="w-[800px] lg:w-[1000px]  absolute md:bottom-0 z-10"
      />

      <div className="aqua__gradient absolute w-[30%] h-[30%] top-0 bottom-0 z-0" />
      <div className="pink__gradient absolute w-[30%] h-[30%] bottom-0 z-0" />

      <div className="md:absolute z-50 md:right-0 md:mr-16 md:mb-56">
        <ul className="hidden md:flex md:flex-col gap-10">
          {socialIcons.map((item) => (
            <li key={item.link} id="social-icons">
              <a href={item.link} target="_blank">
                <img
                  src={item.icon}
                  alt={item.icon}
                  className="w-[40px] invert-img"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
