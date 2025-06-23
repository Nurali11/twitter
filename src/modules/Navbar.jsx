import React from 'react'
import { NavListItems } from '../hooks/paths'
import { Link, Links, NavLink } from 'react-router-dom'
import { LogoIcon } from '../assets/icons'

const Navbar = () => {
  return (
    <div className='w-[30%]'>
      <div className=''>
        <Link to={"/"}><LogoIcon/></Link>
      </div>
      <ul className='flex flex-col gap-[30px] mt-[49px]'>
        {NavListItems.map((item, index) => (
          <li key={index} className='my-[2px] '>
            <NavLink to={item.path} className='text-[#000] flex items-center gap-[20px]'>
              {item.icon}
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar