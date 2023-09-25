import React, { useRef } from 'react';
import animation from './mail.json'
import Lottie from 'react-lottie';
import './contact.css';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6ucb7aq', 'template_30pwmpt', form.current, '5Fay3I6MerrROpMQJ')
      .then((result) => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Email Send Successfully',
            showConfirmButton: false,
            timer: 1500
          })
      }, (error) => {
          console.log(error.text);
      });
  };

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return (
        <div id='contact' className='bg-[#011424] px-4 lg:px-20 pb-10'>
            <h1 className='text-transparent text-3xl bg-clip-text font-extrabold bg-gradient-to-r from-blue-400 to-purple-800 py-8 text-center'>Contact Me</h1>
            <div className='glow border-2 flex flex-col-reverse py-4 lg:flex-row justify-center items-center rounded-md relative'>
            <form data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1200" ref={form} onSubmit={sendEmail} className='flex flex-col gap-3 w-full px-4 lg:w-[40%] text-white'>
                <label htmlFor=""><span className='text-xl font-semibold text-white'>Name:</span> <br />
                 <input className='lg:w-[85%] w-full py-2 px-4 mt-1 rounded-md border-2 bg-transparent' type="text" name="from_name" placeholder='Your Name' /> <br />
                </label>
                <label htmlFor=""><span className='text-xl font-semibold text-white'>Email:</span> <br />
                 <input className='lg:w-[85%] w-full py-2 px-4 mt-1 rounded-md border-2 bg-transparent' type="email" name="from_email" placeholder='example@gmail.com' /> <br />
                </label>
                <label htmlFor=""><span className='text-xl font-semibold text-white'>Your Message:</span> <br />
                 <textarea name='message' placeholder="Your Message" className="lg:w-[85%] w-full py-2 px-4 mt-1 rounded-md border-2 bg-transparent h-32" ></textarea>
                </label>
                <button className='px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-800 rounded-md w-[24%] text-white font-semibold' >Send</button>
            </form>
            <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1200" className='lg:w-[40%]'>
            <Lottie options={defaultOptions}/>
            </div>
            </div>
        </div>
    );
};

export default Contact;