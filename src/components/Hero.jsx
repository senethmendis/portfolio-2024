import { useGSAP } from "@gsap/react";
import { curcle, mySelfNostyle } from "../assets";
import { socialIcons } from "../constants/constants";
import gsap from "gsap/gsap-core";

const Hero = () => {
  useGSAP(() => {
    gsap.to("#social-icons", {
      scale: 1.1,
      repeat: -1,
      duration: 2,
      yoyo: true,
      stagger: {
        amount: 1.5,
        grid: [2, 1],
        axis: "y",
        ease: "circ.inout",
      },
    });
    gsap.to("#blue-round", {
      scale: 1.05,
      repeat: -1,
      yoyo: true,
      duration: 2,
      delay: 0.3,
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
      }
    );
    gsap.fromTo(
      "#my-img",

      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.7,
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
      <h1
        id="seneth-name"
        className="text-[100px] md:text-[250px] leading-9 top-60 absolute z-10"
      >
        SENETH
      </h1>

      <img
        id="my-img"
        src={mySelfNostyle}
        alt="cucle"
        className="w-[600px] md:w-[800px]  absolute md:bottom-0 z-10"
      />

      <div className="aqua__gradient absolute w-[30%] h-[30%] top-0 bottom-0 z-0" />
      <div className="pink__gradient absolute w-[30%] h-[30%] bottom-0 z-0" />

      <div className="hidden md:absolute z-50 md:right-0 md:mr-16 md:mb-56">
        <ul className="flex md:flex-col gap-10">
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
