import { useGSAP } from "@gsap/react";
import { curcle, mySelfNostyle } from "../assets";
import { ScrollTrigger } from "gsap/all";
import { socialIcons } from "../constants/constants";
import gsap from "gsap/gsap-core";
import { useRef } from "react";
import { MouseParallax } from "react-just-parallax";
import { BackgroundCircles } from "./design/BackgroundCircles";
import { BiMouse } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  const parallaxRef = useRef();
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

  return (
    <section
      className="flex flex-col justify-center items-center bg-cover object-cover mx-auto my-auto"
      ref={parallaxRef}
    >
      <a
        href="#Project"
        className="cursor-pointer flex flex-col justify-center items-center absolute z-50 bottom-10 animate-bounce text-black"
      >
        <IoIosArrowUp size={15} />
        <BiMouse size={50} color="000" />
        <IoIosArrowDown size={15} />
      </a>

      <img
        id="blue-round"
        src={curcle}
        loading="lazy"
        alt="cucle"
        className="md:w-[500px] w-[300px] top-32 md:top-16 lg:top-20  absolute -z-10"
      />

      <img
        id="my-img"
        src={mySelfNostyle}
        alt="my self"
        className="md:w-[800px] md:h-[800px] aspect-auto"
      />

      <div className="absolute -z-50">
        <BackgroundCircles />
      </div>

      <div className="aqua__gradient absolute w-[30%] h-[30%] top-0 bottom-0 -z-20" />
      <div className="pink__gradient absolute w-[30%] h-[30%] bottom-0 -z-20" />

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
