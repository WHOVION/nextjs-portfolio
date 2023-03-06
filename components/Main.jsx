import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {GrDocumentPdf} from 'react-icons/gr'


const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>Lets build something together</p>
                <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-[#5651e5]'>Eszra J-S</span></h1>
                <h1 className='py-4 text-gray-700'>A Full-Stack Developer</h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>I seek to be in an environment where learning and personal growth is never-ending. When working on collaborative projects, I make clarity a top priority to allow everyone to be on the same page and work towards a common goal. I love teaching others when they need it, but I also love being taught myself. Helping others understand a concept better is always rewarding, and likewise, being taught a concept myself is equally fulfilling. As an experienced professional with strong communication and problem-solving skills, I bring a customer-focused approach to software engineering. 
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                   <div className='rounded-full shadow-lg shadow-gray-400 p-1.5 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <a href='https://www.linkedin.com/in/eszra-dev/' target='_blank'>
                        <FaLinkedinIn size='35px' />
                        </a>
                   </div>
                   <div className='rounded-full shadow-lg shadow-gray-400 p-1.5 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <a href='https://github.com/WHOVION' target='_blank'>
                        <FaGithub size='35px' />
                        </a>
                   </div>
                   <div className='rounded-full shadow-lg shadow-gray-400 p-1.5 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <a href='https://www.instagram.com/eszra_j_s/' target='_blank'>
                        <BsInstagram size='35px' />
                        </a>
                   </div>
                   <div className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <a href='https://drive.google.com/file/d/1ExlmM8UXRbKpCHXtFb94Ohs47UiCVnhy/view?usp=sharing' target='_blank'>
                        <GrDocumentPdf size='35px' />
                        </a>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main
