import React from 'react'
import { NavListItems } from '../hooks/paths'
import { Link, Links, NavLink } from 'react-router-dom'
import { LogoIcon, MoreIcons } from "../assets/icons";
import man from "../assets/images/man.svg";

const Navbar = () => {
  return (
    <div className="w-[30%] space-y-[30px]">
      <div className="">
        <Link to={"/"}>
          <LogoIcon />
        </Link>
      </div>
      <ul className="flex flex-col gap-[25px] mt-[49px]">
        {NavListItems.map((item, index) => (
          <li key={index} className="my-[2px] w-[200px]">
            <NavLink
              to={item.path}
              className="text-[#000] flex items-center gap-[20px]"
            >
              {item.icon}
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <button className="w-[230px] rounded-[27.5px] bg-[#1D9BF0] flex items-center justify-center text-[18px] font-bold text-white py-[10px] px-[80px]">
        Tweet
      </button>
      <div className="flex items-center justify-start gap-[10px]">
        <img src={man} />
        <div className="flex flex-col items-start justify-center ml-[20px]">
          <p className="text-[16px] font-bold">Bobur</p>
          <p className="text-[#0000008d]">@bobur_mavlonov</p>
        </div>
        <MoreIcons />
      </div>
    </div>
  );
};

export default Navbar