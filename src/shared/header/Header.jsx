import React from 'react';
import { FaAddressCard, FaBrain, FaColumns, FaHome, FaPhoneSquareAlt, FaModx } from "react-icons/fa";
import { NavHashLink as NavLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <div className='grid justify-items-center px-4 lg:px-0'>
            <div id='light' className="backdrop-blur-md bg-white/10 border-purple-500 border-2 rounded-md fixed lg:top-[80%] bottom-0 w-[95%] flex justify-center lg:w-[22rem] h-[4rem] z-10">
  <div className="navbar-start">

  </div>
  <div className="navbar-center flex">
    <ul className="menu menu-horizontal px-1 text-white">
      <li className='text-2xl tooltip tooltip-warning' data-tip="Home"><NavLink to='#home' className=' hover:text-orange-600 bg-gradient-to-r from-blue-400 to-purple-800 rounded-full p-2 mr-2'><FaHome></FaHome></NavLink></li>
      <li className='text-2xl tooltip tooltip-warning' data-tip="About Me"><NavLink to='#about' className=' hover:text-orange-600 bg-gradient-to-r from-blue-400 to-purple-800 rounded-full p-2 mr-2'><FaAddressCard></FaAddressCard></NavLink></li>
      <li className='text-2xl tooltip tooltip-warning' data-tip="My Skills"><NavLink to='#skills' className=' hover:text-orange-600 bg-gradient-to-r from-blue-400 to-purple-800 rounded-full p-2 mr-2'><FaBrain></FaBrain></NavLink></li>
      <li className='text-2xl tooltip tooltip-warning' data-tip="My Service"><NavLink to='#service' className=' hover:text-orange-600 bg-gradient-to-r from-blue-400 to-purple-800 rounded-full p-2 mr-2'><FaModx></FaModx></NavLink></li>
      <li className='text-2xl tooltip tooltip-warning' data-tip="My Projects"><NavLink to='#projects' className=' hover:text-orange-600 bg-gradient-to-r from-blue-400 to-purple-800 rounded-full p-2 mr-2'><FaColumns></FaColumns></NavLink></li>
      <li className='text-2xl tooltip tooltip-warning' data-tip="Contact" ><NavLink to='#contact' className=' hover:text-orange-600 bg-gradient-to-r from-blue-400 to-purple-800 rounded-full p-2 mr-2'><FaPhoneSquareAlt></FaPhoneSquareAlt></NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
  </div>
</div>
</div>
    );
};

export default Header;