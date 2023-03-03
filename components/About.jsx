import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I am</h2>
                <p className='py-2 text-gray-600'>// I am not your normal developer</p>
                <p className='py-2 text-gray-600'>
                As a kid, I was always fascinated by the world of superheroes, particularly Batman and Iron Man. What drew me to them was their vast creativity to using technology to solve problems and fight crime. Although I knew I may not be as brilliant as these fictional characters, I was still inspired by their innovative spirit and fierce dedication. As I grew older, this passion for technology and innovation stayed with me and drove me to pursue a career in tech. To this day, I am still driven by the same passion that motivated me as a child to strive for excellence and approach challenges with a creative and innovative mindset, just like my heroes did.
                </p>
                <p className='py-2 text-gray-600'>
                To further pursue my passion for technology, I decided to attend a coding bootcamp. This experience was a turning point for me, as I discovered the vast opportunities that coding and tech provided. I was able to develop my skills in coding, web development, and programming, and gained valuable hands-on experience working on real-world projects. Today, armed with my newfound skills, I am actively seeking a role in the tech space where I can use my passion for technology to create innovative solutions and make a positive impact in the world.
                </p>
                <Link href='/#projects'>
                  <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects</p>
                </Link>
            </div>
            <div className='h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className='rounded-xl' src='/me.png' alt='/' width='250' height='0' />
                {/* <Image className='rounded-xl' src='/../public/me.jpeg' alt='/' width='250' height='0' /> */}
            </div>
        </div>
    </div>
  )
}

export default About