import React from 'react';
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-[#00111d] items-center py-5 pb-20 lg:pb-6 lg:px-20 px-4 text-neutral-content">
  <div>
   <img className='w-[100px] h-[100px]' src={logo} alt="" />
    <p>Copyright © 2023 - All right reserved</p>
  </div> 
</footer>
        </div>
    );
};

export default Footer;