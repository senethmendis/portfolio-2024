import React from "react";
import { navigationItems, socialIcons } from "../constants/constants";

const Footer = () => {
  return (
    <footer className="w-full h-[400px] flex flex-col justify-center md:px-32 border border-white/15 backdrop-blur-2xl px-3 relative">
      <div>
        <h1 className="text-4xl">Seneth Mendis</h1>
        <ul className="flex gap-8 py-7">
          {navigationItems.map((item) => (
            <li key={item.link} className="custom-btn">
              <a href={item.link}>{item.linkName}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-row justify-between items-center py-5">
        <strong>2024 SenethMendis All Right Reserved.</strong>
        <div className="flex">
          {socialIcons.map((icon) => (
            <a key={icon.link} href={icon.link} className="p-4">
              <img
                loading="lazy"
                src={icon.icon}
                alt=""
                className="w-[20px] h-[20px] invert-img"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
