import React from 'react';
import man from '../../assets/img-3.png'
import './about.css'
import { FaFacebook, FaGithub, FaYoutube } from 'react-icons/fa';

const About = () => {
    return (
        <div id='about' className='bg-[#011424] pt-12 pb-12 lg:px-32 px-5'>
            <h1 className='text-transparent text-3xl bg-clip-text font-extrabold bg-gradient-to-r from-blue-400 to-purple-800 mb-24 text-center'>About Me</h1>
            <div className='flex flex-col lg:flex-row justify-center items-center gap-16'>
                <div className='backBlur h-[350px] rounded-md relative'    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1200">
                    <img className='skewImg h-full w-[240px] rounded-md' src={man} alt="" />
                </div>
                <div className='line hidden lg:block'></div>
                <div className='lg:w-[50%]' data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1200">
                <p className='text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-blue-300 to-purple-400 text-justify pb-3'>
                 Welcome to my portfolio website! I am a MERN stack developer, passionate about creating exceptional web applications. With a love for problem-solving and a keen eye for detail, I thrive in the world of coding and constantly seek innovative ways to bring ideas to life. My journey as a developer has equipped me with a strong foundation in front-end development, where I specialize in crafting immersive user experiences with React.js. On the back-end, I am adept at leveraging the power of Node.js and Express.js to build scalable and efficient server-side solutions. With a relentless pursuit of excellence, I am committed to delivering high-quality code that not only meets client requirements but exceeds expectations.</p>
                 <hr />
                 <div className='pt-3 flex gap-4'>
                    <a href="https://www.facebook.com/nahid.mojumder.984/" target='blank'>
                    <FaFacebook className='text-3xl text-[#0195eb] bg-blue-50 cursor-pointer p-1 rounded-md'></FaFacebook>
                    </a>
                    <a href="https://github.com/Nahid2002S" target='blank'>
                    <FaGithub className='text-3xl text-[#171515] bg-blue-50 cursor-pointer p-1 rounded-md'></FaGithub>
                    </a>
                    <a href="https://www.youtube.com/@programmingzero" target='blank'>
                    <FaYoutube className='text-3xl text-[#d60925] bg-blue-50 cursor-pointer p-1 rounded-md'></FaYoutube>
                    </a>
                 </div>
            </div>
            </div>
            </div>
    );
};

export default About;