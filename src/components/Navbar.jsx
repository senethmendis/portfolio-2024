import { useState } from "react";
import { navigationItems } from "../constants/constants";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <>
      <nav className="w-full flex justify-between py-6 px-6 items-center">
        <div className="flex gap-6 items-center">
          <HiOutlineMenuAlt2
            size={40}
            color="orange"
            className=" md:hidden hover:bg-white  rounded-full p-1"
            onClick={() => {
              setNav(!nav);
            }}
          />
          <h1 id="Home-top" className="uppercase">
            Seneth
          </h1>
        </div>

        <ul className="md:flex gap-8 hidden text-xl">
          {navigationItems.map((items) => (
            <li key={items.link} className="hover:underline">
              <a href={items.link} className="uppercase">
                {items.linkName}
              </a>
            </li>
          ))}
        </ul>
        <a className="custom-btn" href="#Contact">
          Contact Me
        </a>
      </nav>

      <ul
        className={`${
          nav
            ? "text-white absolute top-20  gap-8 z-50  w-[130px] text-center py-3 backdrop-blur-xl border border-white/20 px-3 ml-3 rounded-md hover:bg-slate-950/30 transition-all duration-100"
            : "hidden"
        }  `}
      >
        {navigationItems.map((items) => (
          <li key={items.link} className="hover:underline py-2">
            <a href={items.link}>{items.linkName}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navbar;
