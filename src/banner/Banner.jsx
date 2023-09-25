import React from 'react';
import { FaDownload } from 'react-icons/fa';
import man from '../assets/man.png'
import './banner.css'
import { Typewriter } from 'react-simple-typewriter'
import resume from './resume.pdf'
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiMongodb } from "react-icons/si";


const Banner = () => {
    return (
          <div id='home' className='lg:h-[112vh] lg:px-20 px-4 bg-gradient-to-b from-[#0b0b13] to-[#011220] -mt-20'>
            <div className='flex flex-col-reverse lg:flex-row justify-center items-center gap-8 pt-28'>
                <div className='flex flex-col gap-3' data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1200">
                    <h3 className='text-transparent text-2xl bg-clip-text font-extrabold bg-gradient-to-r from-blue-200 to-purple-400 mb-3'>Hey, I Am</h3>
                    <h1 className='text-transparent bg-clip-text text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-800'>SAHIM MOJUMDER NAHID</h1>
                    <h2 className='text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-blue-400 to-purple-800 -mt-2'>
                    <Typewriter
                       words={['WEB DESIGNER', 'FRONTEND DEVELOPER', 'BACKEND DEVELOPER', 'MERN STACK DEVELOPER']}
                       loop={true}
                       cursor
                       cursorStyle='|'
                       typeSpeed={70}
                       deleteSpeed={50}
                       delaySpeed={1000}
                   />
                    </h2>
                    <p className=' text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-blue-200 to-purple-400 mb-3'>Crafting dynamic web experiences with MERN superpowers, I bring your <br /> ideas to life with JavaScript magic, React resilience, Node.js versatility, and MongoDB mastery!!</p>
                    <div className='flex gap-2'>
                    <a href='https://drive.google.com/file/d/1cUN0Vxrj4v-8mgYPBMcpirj4dZYDUf6S/view' target='blank' className='px-4 py-2 text-white bg-gradient-to-r from-blue-400 to-purple-800 font-bold rounded-md'>View Resume</a>
                    <a href={resume} download className='px-4 py-2 text-white bg-gradient-to-r from-blue-400 to-purple-800 font-bold rounded-md'><FaDownload></FaDownload></a>
                    </div>
                    
                </div>
                <div className='photo mb-4 lg:mb-0 relative' data-aos="fade-up"
                     data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1500">
                  <img className='w-[600px]' src={man} alt="" />
                  <FaReact className='react text-5xl font-bold text-[#61dbfb] absolute top-[80%] left-[16%]'></FaReact>
                  <FaNodeJs className='node text-5xl text-[#61dbfb] absolute top-[80%] left-[73%]'></FaNodeJs>
                  <SiExpress className='express text-5xl text-[#61dbfb] absolute top-[23%] left-[73%]'></SiExpress>
                  <SiMongodb className='mongodb text-5xl text-[#61dbfb] absolute top-[23%] left-[17%]'></SiMongodb>
                </div>
            </div>
            <div className='w-64 h-96 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-950 to-tansparent blur opacity-30 absolute top-[40%] rounded-full left-[-10%]' ></div>
            <div className='w-96 h-72 hidden lg:block bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-tansparent blur opacity-30 absolute top-[-25%] rounded-full left-[15%]' ></div>
            <div className='w-96 h-96 hidden lg:block bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-tansparent blur opacity-20 absolute top-[15%] rounded-full left-[55%]' ></div>
            <div className='ball absolute top-[6%] left-[20%] lg:left-[60%]'></div>
          </div>

    );
};

export default Banner;