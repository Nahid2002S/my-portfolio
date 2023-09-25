import React from 'react';
import project1 from '../../assets/project-1.png'
import project2 from '../../assets/project-2.png'
import project3 from '../../assets/project-3.png'
import './projects.css';
import { FaCss3Alt, FaReact, FaCcStripe } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiReactquery, SiAxios, SiFirebase } from "react-icons/si";
import { BsFlower1 } from "react-icons/bs";

const Projects = () => {
    return (
        <div id='projects' className='bg-[#011424] px-24'>

<dialog id="my_modal_1" className="modal">
  <form method="dialog" className="modal-box bg-gradient-to-r from-blue-500 to-purple-800 text-blue-50 font-semibold">
    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    <h3 className="font-bold text-lg mb-3">Feature Of PHOTO PLANET:</h3>
    <ul>
      <li>1. There are three role in this website and different dashboard for each role.</li>
      <li>2. Admin can make a user to instructor and admin can delete a user, Admin can approve class.</li>
      <li>3. Instructor can add class, update her class, and student can enroll class by payment.</li>
    </ul>
  </form>
</dialog>
<dialog id="my_modal_2" className="modal">
  <form method="dialog" className="modal-box bg-gradient-to-r from-blue-500 to-purple-800 text-blue-50 font-semibold mb-3">
    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    <h3 className="font-bold text-lg">Feature Of KIDS FERRARI:</h3>
    <ul>
      <li>1. You can add, delete and update toys from here.</li>
      <li>2. You will found toys by category and view details.</li>
      <li>3. You can see your toys and all toys and also search toys.</li>
    </ul>
  </form>
</dialog>
<dialog id="my_modal_3" className="modal">
  <form method="dialog" className="modal-box bg-gradient-to-r from-blue-500 to-purple-800 text-blue-50 font-semibold mb-3">
    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    <h3 className="font-bold text-lg">Feature Of TOKYO KITCHEN:</h3>
    <ul>
      <li>1. You can see our chefs and view their recipes.</li>
      <li>2. You can't see chefs full details without login.</li>
      <li>3. You can see blogs and download all blogs as PDF.</li>
    </ul>
  </form>
</dialog>

             <h1 className='text-transparent text-3xl bg-clip-text font-extrabold bg-gradient-to-r from-blue-400 to-purple-800 pt-8 pb-12 text-center'>My Projects</h1>
            <div data-aos="flip-left" data-aos-easing="linear"
                    data-aos-duration="1500" className='bg-[#011424] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center lg:gap-0 md:gap-6 gap-6'>
            <div className="card rounded-none skewCard text-blue-100 bg-white/10 backdrop-blur-xl lg:w-96 w-72 bg-base-100 shadow-xl">
            <div className="image-wrap">
               <img src={project1} />
             </div>
  <div className="card-body">
    <h2 className="card-title">PHOTO PLANET</h2>
    <p>Photography Learning Website</p>
    <p>Technology:</p>
    <ul className='flex flex-wrap gap-2 font-bold'>
      <li><SiTailwindcss className='text-2xl text-[#2fa1e3]'></SiTailwindcss></li>
      <li><FaReact className='text-2xl text-[#61dbfb]'></FaReact></li>
      <li><SiExpress className='text-2xl text-[#fff]'></SiExpress></li>
      <li><SiMongodb className='text-2xl text-[#589636]'></SiMongodb></li>
      <li><SiReactquery className='text-2xl text-[#d31850]'></SiReactquery></li>
      <li><SiAxios className='text-2xl text-[#2c8bb1]'></SiAxios></li>
      <li><SiFirebase className='text-2xl text-[#ffaa3b]'></SiFirebase></li>
      <li><BsFlower1 className='text-2xl text-[#18d3aa]'></BsFlower1></li>
      <li><FaCcStripe className='text-2xl text-indigo-400'></FaCcStripe></li>
    </ul>
    <div className="card-actions my-2">
      <a href='https://assignment-12-auth-ca106.web.app/' target='blank' className='px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-800 text-bold shadow-md'>Live Site</a>
      <a href='https://github.com/Nahid2002S/photo-planet-client' target='blank' className='px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-800 text-bold shadow-md'>Client Code</a>
      <a href='https://github.com/Nahid2002S/photo-planet-server' target='blank' className='px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-800 text-bold shadow-md'>Server Code</a>
      <button onClick={()=>window.my_modal_1.showModal()} className='px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-800 text-bold shadow-md'>Feature</button>
    </div>
  </div>
</div>
   <div className="card rounded-none lg:animCard skewCard text-blue-100 bg-white/10 backdrop-blur-xl lg:w-96 w-72 bg-base-100 shadow-xl">
     <div className="image-wrap">
         <img src={project2} />
      </div>
  <div className="card-body">
    <h2 className="card-title">KIDS FERRARI</h2>
    <p>A Toy Marketplace Website</p>
    <p>Technology:</p>
    <ul className='flex gap-2 font-bold'>
      <li><SiTailwindcss className='text-2xl text-[#2fa1e3]'></SiTailwindcss></li>
      <li><FaReact className='text-2xl text-[#61dbfb]'></FaReact></li>
      <li><SiExpress className='text-2xl text-[#fff]'></SiExpress></li>
      <li><SiMongodb className='text-2xl text-[#589636]'></SiMongodb></li>
      <li><SiFirebase className='text-2xl text-[#ffaa3b]'></SiFirebase></li>
    </ul>
    <div className="card-actions my-2">
      <a href='https://assignment-11-authentica-8d3dd.web.app/' target='blank' className='px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-800 text-bold shadow-md'>Live Site</a>
      <a href='https://github.com/Nahid2002S/kids-ferrari-client' target='blank' className='px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-800 text-bold shadow-md'>Client Code</a>
      <a href='https://github.com/Nahid2002S/kids-ferrari-server' target='blank' className='px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-800 text-bold shadow-md'>Server Code</a>
      <button onClick={()=>window.my_modal_2.showModal()} className='px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-800 text-bold shadow-md'>Feature</button>
    </div>
  </div>
</div>
    <div className="card rounded-none lg:animCard skewCard lg:w-96 w-72 text-blue-100 bg-white/10 backdrop-blur-xl shadow-xl">
        <div className="image-wrap">
             <img src={project3} />
        </div>
  <div className="card-body">
    <h2 className="card-title">TOKYO KITCHEN</h2>
    <p>Japanese Chefs Website</p>
    <p>Technology:</p>
    <ul className='flex gap-2 font-bold'>
      <li><FaCss3Alt className='text-2xl text-[#335bf8]'></FaCss3Alt></li>
      <li><SiTailwindcss className='text-2xl text-[#2fa1e3]'></SiTailwindcss></li>
      <li><FaReact className='text-2xl text-[#61dbfb]'></FaReact></li>
      <li><SiExpress className='text-2xl text-[#fff]'></SiExpress></li>
      <li><SiFirebase className='text-2xl text-[#ffaa3b]'></SiFirebase></li>
    </ul>
    <div className="card-actions my-2">
      <a href='https://assignment-10-auth-bfb28.web.app/' target='blank' className='px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-800 text-bold shadow-md'>Live Site</a>
      <a href='https://github.com/Nahid2002S/tokyo-kitchen' target='blank' className='px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-800 text-bold shadow-md'>Client Code</a>
      <a href='https://github.com/Nahid2002S/tokyo-kitchen-server' target='blank' className='px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-800 text-bold shadow-md'>Server Code</a>
      <button onClick={()=>window.my_modal_3.showModal()} className='px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-800 text-bold shadow-md'>Feature</button>
    </div>
  </div>
</div>
</div>
        </div>
    );
};

export default Projects;