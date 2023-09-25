import React from 'react';
import './service.css'
import { FaBroom, FaReact, FaNodeJs } from 'react-icons/fa';

const Services = () => {
    return (
        <div id='service' className='bg-[#011424] px-4 lg:px-16'>
            <h1 className='text-transparent text-3xl bg-clip-text font-extrabold bg-gradient-to-r from-blue-400 to-purple-800 py-12 text-center'>My Services</h1>
            <div className='contain grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center gap-4'>
                <div data-aos="flip-left" data-aos-easing="linear"
                    data-aos-duration="1500" className='box'>
                    <span></span>
                    <div className='content'>
                        <FaBroom className='icon text-2xl my-1 text-blue-200'></FaBroom>
                        <h2 className='text-2xl font-bold mb-2 text-blue-200'>Responsive Web Design</h2>
                        <p className='font-semibold mb-3 text-blue-200'>I Makes Fully Responsive Web Application For Mobile, Tablet And Large Device.</p>
                        <button className='px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-800 rounded-tr-full rounded-br-full border-2'>Contact Now</button>
                    </div>
                </div>
                <div data-aos="flip-right" data-aos-easing="linear"
                    data-aos-duration="1500" className='box'>
                    <span></span>
                    <div className='content'>
                        <FaReact className='icon2 text-2xl my-1 text-blue-200'></FaReact>
                        <h2 className='text-2xl font-bold mb-2 text-blue-200'>Frontent Web Development</h2>
                        <p className='font-semibold mb-3 text-blue-200'>I Makes Interesting User Interface And Single Page  By Using React JS And Next JS.</p>
                        <button className='px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-800 rounded-tr-full rounded-br-full border-2'>Contact Now</button>
                    </div>
                </div>
                <div data-aos="flip-left" data-aos-easing="linear"
                    data-aos-duration="1500" className='box'>
                    <span></span>
                    <div className='content'>
                        <FaNodeJs className='icon text-2xl my-1 text-blue-200'></FaNodeJs>
                        <h2 className='text-2xl font-bold mb-2 text-blue-200'>Backend Web Development</h2>
                        <p className='font-semibold mb-3 text-blue-200'>I Makes Logical API's And Design Database By Using Express JS And MongoDB</p>
                        <button className='px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-800 rounded-tr-full rounded-br-full border-2'>Contact Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;