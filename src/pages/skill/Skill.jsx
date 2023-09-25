import React from 'react';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare, FaReact, FaNodeJs, FaCcStripe, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiReactquery, SiZotero, SiAxios, SiRedux, SiFirebase, SiVercel, SiNetlify, SiCanva } from "react-icons/si";
import { BsFlower1, BsFlower3 } from "react-icons/bs";
import { TbBrandNextjs, TbBrandVscode } from "react-icons/tb";

const Skill = () => {
    return (
        <div id='skills' className='bg-[#011424] lg:px-20 px-4'>
            <h1 className='text-transparent text-3xl bg-clip-text font-extrabold bg-gradient-to-r from-blue-400 to-purple-800 pt-12 pb-10 text-center'>Skills Showcase</h1>
            <div>
                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1200">
                    <h2 className='text-transparent text-xl bg-clip-text font-extrabold bg-gradient-to-r from-blue-400 to-purple-800 pb-3'>EXPERTISE:</h2>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                        <div className='flex items-center justify-between bg-gradient-to-r from-blue-400 via-purple-600 to-transparent border-2 border-[#012c50] py-2 px-4 font-bold'>
                        <p>HTML</p>
                        <FaHtml5 className='text-2xl text-[#e34c26]'></FaHtml5>
                        </div>
                        <div className='flex justify-between items-center bg-gradient-to-r from-blue-400 via-purple-600 to-transparent border-2 border-[#012c50] py-2 px-4 font-bold'>
                        <p>CSS</p>
                        <FaCss3Alt className='text-2xl text-[#335bf8]'></FaCss3Alt>
                        </div>
                        <div className='flex justify-between items-center bg-gradient-to-r from-blue-400 via-purple-600 to-transparent border-2 border-[#012c50] py-2 px-4 font-bold'>
                        <p>BOOTSTRAP</p>
                        <FaBootstrap className='text-2xl text-[#e059f8]'></FaBootstrap>
                        </div>
                        <div className='flex justify-between items-center bg-gradient-to-r from-blue-400 via-purple-600 to-transparent border-2 border-[#012c50] py-2 px-4 font-bold'>
                        <p>TAILWIND</p>
                        <SiTailwindcss className='text-2xl text-[#2fa1e3]'></SiTailwindcss>
                        </div>
                        <div className='flex justify-between items-center bg-gradient-to-r from-blue-400 via-purple-600 to-transparent border-2 border-[#012c50] py-2 px-4 font-bold'>
                        <p>JAVASCRIPT</p>
                        <FaJsSquare className='text-2xl text-[#f0db4f]'></FaJsSquare>
                        </div>
                        <div className='flex justify-between items-center bg-gradient-to-r from-blue-400 via-purple-600 to-transparent border-2 border-[#012c50] py-2 px-4 font-bold'>
                        <p>REACT JS</p>
                        <FaReact className='text-2xl text-[#61dbfb]'></FaReact>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1200">
                    <h2 className='text-transparent text-xl bg-clip-text font-extrabold bg-gradient-to-r from-blue-400 to-purple-800 pb-3 pt-6'>FAMILIER:</h2>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                        <div className='flex justify-between items-center bg-gradient-to-r from-blue-400 via-purple-600 to-transparent border-2 border-[#012c50] py-2 px-4 font-bold'>
                        <p>EXPRESS JS</p>
                        <SiExpress className='text-2xl text-[#fff]'></SiExpress>
                        </div>
                        <div className='flex justify-between items-center bg-gradient-to-r from-blue-400 via-purple-600 to-transparent border-2 border-[#012c50] py-2 px-4 font-bold'>
                        <p>NODE JS</p>
                        <FaNodeJs className='text-2xl text-[#3c873a]'></FaNodeJs>
                        </div>
                        <div className='flex justify-between items-center bg-gradient-to-r from-blue-400 via-purple-600 to-transparent border-2 border-[#012c50] py-2 px-4 font-bold'>
                        <p>MONGODB</p>
                        <SiMongodb className='text-2xl text-[#589636]'></SiMongodb>
                        </div>
                        <div className='flex justify-between items-center bg-gradient-to-r from-blue-400 via-purple-600 to-transparent border-2 border-[#012c50] py-2 px-4 font-bold'>
                        <p>REACT QUERY</p>
                        <SiReactquery className='text-2xl text-[#d31850]'></SiReactquery>
                        </div>
                        <div className='flex justify-between items-center bg-gradient-to-r from-blue-400 via-purple-600 to-transparent border-2 border-[#012c50] py-2 px-4 font-bold'>
                        <p>JWT</p>
                        <BsFlower1 className='text-2xl text-[#18d3aa]'></BsFlower1>
                        </div>
                        <div className='flex justify-between items-center bg-gradient-to-r from-blue-400 via-purple-600 to-transparent border-2 border-[#012c50] py-2 px-4 font-bold'>
                        <p>STRIPE</p>
                        <FaCcStripe className='text-2xl text-indigo-400'></FaCcStripe>
                        </div>
                        <div className='flex justify-between items-center bg-gradient-to-r from-blue-400 via-purple-600 to-transparent border-2 border-[#012c50] py-2 px-4 font-bold'>
                        <p>SSL COMMERZ</p>
                        <SiZotero className='text-2xl text-[#1844d3]'></SiZotero>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1200">
                    <h2 className='text-transparent text-xl bg-clip-text font-extrabold bg-gradient-to-r from-blue-400 to-purple-800 pb-3 pt-6'>COMPORTABLE:</h2>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                        <div className='flex justify-between items-center bg-gradient-to-r from-blue-400 via-purple-600 to-transparent border-2 border-[#012c50] py-2 px-4 font-bold'>
                        <p>NEXT JS</p>
                        <TbBrandNextjs className='text-2xl text-[#000000]'></TbBrandNextjs>
                        </div>
                        <div className='flex justify-between items-center bg-gradient-to-r from-blue-400 via-purple-600 to-transparent border-2 border-[#012c50] py-2 px-4 font-bold'>
                        <p>REDUX</p>
                        <SiRedux className='text-2xl text-[#a270f3]'></SiRedux>
                        </div>
                        <div className='flex justify-between items-center bg-gradient-to-r from-blue-400 via-purple-600 to-transparent border-2 border-[#012c50] py-2 px-4 font-bold'>
                        <p>AXIOS</p>
                        <SiAxios className='text-2xl text-[#2c8bb1]'></SiAxios>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1200">
                    <h2 className='text-transparent text-xl bg-clip-text font-extrabold bg-gradient-to-r from-blue-400 to-purple-800 pb-3 pt-6'>TOOLS:</h2>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                        <div className='flex justify-between items-center bg-gradient-to-r from-blue-400 via-purple-600 to-transparent border-2 border-[#012c50] py-2 px-4 font-bold'>
                        <p>GITHUB</p>
                        <FaGithub className='text-2xl text-[#000000]'></FaGithub>
                        </div>
                        <div className='flex justify-between items-center bg-gradient-to-r from-blue-400 via-purple-600 to-transparent border-2 border-[#012c50] py-2 px-4 font-bold'>
                        <p>FIREBASE</p>
                        <SiFirebase className='text-2xl text-[#ffaa3b]'></SiFirebase>
                        </div>
                        <div className='flex justify-between items-center bg-gradient-to-r from-blue-400 via-purple-600 to-transparent border-2 border-[#012c50] py-2 px-4 font-bold'>
                        <p>VERCEL</p>
                        <SiVercel className='text-2xl text-[#000000]'></SiVercel>
                        </div>
                        <div className='flex justify-between items-center bg-gradient-to-r from-blue-400 via-purple-600 to-transparent border-2 border-[#012c50] py-2 px-4 font-bold'>
                        <p>NETLIFY</p>
                        <SiNetlify className='text-2xl text-[#3cd6bd]'></SiNetlify>
                        </div>
                        <div className='flex justify-between items-center bg-gradient-to-r from-blue-400 via-purple-600 to-transparent border-2 border-[#012c50] py-2 px-4 font-bold'>
                        <p>CANVA</p>
                        <SiCanva className='text-2xl text-[#20c4cb]'></SiCanva>
                        </div>
                        <div className='flex justify-between items-center bg-gradient-to-r from-blue-400 via-purple-600 to-transparent border-2 border-[#012c50] py-2 px-4 font-bold'>
                        <p>CHATGPT</p>
                        <BsFlower3 className='text-2xl text-[#0fb6ad]'></BsFlower3>
                        </div>
                        <div className='flex justify-between items-center bg-gradient-to-r from-blue-400 via-purple-600 to-transparent border-2 border-[#012c50] py-2 px-4 font-bold'>
                        <p>VS CODE</p>
                        <TbBrandVscode className='text-2xl text-[#1f7be4]'></TbBrandVscode>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;

