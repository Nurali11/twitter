import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Home} from '../pages'
import { NavListItems, path } from "../hooks/paths"
import Sidebar from '../modules/Sidebar'
import Navbar from '../modules/Navbar'


const HomeRoutes = () => {
  return (
    <div className='flex w-[1200px] mx-auto justify-between mt-[30px]'>
      <Navbar/>
      <div className='w-[40%]'>
        <Routes>
          {NavListItems.map(item => <Route path={item.path} element={item.element}/>)}
        </Routes>
      </div>
      <Sidebar/>
    </div>
  )
}

export default HomeRoutes