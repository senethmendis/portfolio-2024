import { useState } from "react";
import { navigationItems } from "../constants/constants";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <>
      <nav className="w-full flex justify-between py-3 px-3 items-center">
        <div className="flex gap-6 items-center">
          <HiOutlineMenuAlt2
            size={40}
            className=" md:hidden"
            onClick={() => {
              setNav(!nav);
            }}
          />
          <h1 className="uppercase">Seneth</h1>
        </div>

        <ul className="md:flex gap-8 hidden text-xl">
          {navigationItems.map((items) => (
            <li key={items.link} className="hover:underline">
              <a href={items.link}>{items.linkName}</a>
            </li>
          ))}
        </ul>
        <button className="custom-btn">Contact</button>
      </nav>

      <ul
        className={`${
          nav
            ? "text-white  gap-8 bg-slate-900 w-[130px] text-center py-3 rounded-md ml-3 absolute z-50 border border-white/15"
            : "hidden"
        }  `}
      >
        {navigationItems.map((items) => (
          <li key={items.link} className="hover:underline py-2">
            <a href="">{items.linkName}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navbar;
