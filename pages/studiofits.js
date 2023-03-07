import React from 'react'
import Image from 'next/legacy/image#priority'
import Link from 'next/link'
import sfImg from '../public/studiofits.png'
import {RiRadioButtonFill} from 'react-icons/ri'

const studiofits = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={sfImg} alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
              <h2 className='py-2'>StudioFits</h2>
              <h3>PERN stack application for users to keep track of their closet (Feb 2023)</h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p>StudioFits is a new innovative form of technology used to advance fasion. This millon dollar software is a clothing app designed for users to keep track of their closet. What better way but to have StudioFits to keep track of all of your clothes? Imagine a lifestyle without losing socks and t-shirts. Collaborative Project.
                </p>
                <ul>
                  <li>- Implemented User Auth so only users logged in can CRUD their closet</li>
                  <li>- Implemented filter functions for users to filter clothing pieces by 'Type' or 'Name'</li>
                  <li>- Project was more focused on getting more proficient with React. Practiced implementing more re-usable components</li>
                </ul>
                <a href='#'>
                  <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
                </a>
                <a href='https://github.com/WHOVION/project4-client' target='_blank'>
                  <button className='px-8 py-2 mt-4'>Code</button>
                </a>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> HTML/CSS</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Javascript</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> React</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> PostgreSQL</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Express</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> React-Bootstrap</p>
                    </div>
                </div>
            </div>
            <Link href='/#projects'>
              <p className='underline cursor-pointer'>Back</p>
            </Link>
        </div>


    </div>
  )
}

export default studiofits