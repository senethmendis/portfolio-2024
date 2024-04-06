import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Phone } from "../components";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const Contact = () => {
  return (
    <section
      id="Contact"
      className="relative text-center md:text-end px-2 md:px-10 lg:px-32 flex flex-col-reverse md:flex-row  justify-center items-center   py-2 md:py-20 lg:py-32"
    >
      <a href="#Home-top">
        <MdKeyboardDoubleArrowUp
          scale={0.1}
          size={50}
          className="absolute  left-0 right-0 bottom-0 mx-auto animate-bounce duration-200 hover:bg-orange-500 rounded-full"
          color="white"
        />
      </a>

      <div className="w-full sm:w-1/2 h-auto flex justify-center items-center">
        <form
          action=""
          className="flex justify-center items-center py-4 flex-col sm:w-full sm:h-full md:w-[60%] md:h-[60%] backdrop-blur-2xl  gap-4 border border-white/15 px-4 rounded-lg"
        >
          <h1 className="pb-4 text-center">Send an Email to get in touch</h1>
          <input
            className="md:h-[50px] w-full lg:w-[400px] rounded-lg px-2"
            type="text"
            placeholder="Madara uchiha"
          />
          <input
            className="w-full h-[50px] lg:w-[400px] rounded-lg px-2 "
            type="text"
            placeholder="example@gmail.com"
          />
          <button className="custom-btn w-full lg:w-[400px]" type="submit">
            Send
          </button>
        </form>
      </div>
      <div className="w-full sm:w-1/2 h-auto flex justify-center items-center">
        <h1 className="text-6xl md:text-[100px] lg:[150px] py-6">Contact Us</h1>
      </div>

      <div className="absolute -z-50 top-0 bottom-0 right-0 left-0">
        <Canvas>
          <Stage environment="city" intensity={0.6}>
            <Phone />
          </Stage>
          <OrbitControls autoRotate={true} enableZoom={false} />
        </Canvas>
      </div>

      <div className="aqua__gradient absolute w-[30%] h-[30%] bottom-0 left-0 -z-10" />
    </section>
  );
};

export default Contact;
