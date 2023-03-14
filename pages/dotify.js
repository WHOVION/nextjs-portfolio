import React from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'
import dImg from '../public/dotify.png'
import {RiRadioButtonFill} from 'react-icons/ri'

const dotify = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={dImg} alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
              <h2 className='py-2'>Dotify</h2>
              <h3>Full-stack music application (Dec 2022)</h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p>Dotify is a knockoff version of another popular music app that I can't name for legal reasons. When you make an account and log into dotify, you will get a list of the most up to date top 100 songs from all genres. As a user, you will be able to see details of each song(Song name, Artist, Genre, Price) and be able to favorite any song and add/remove songs on your favorites playlist. Unfortunetly, the app doesn't support previews at this time so best way to hear the song is looking it up on Youtube. Told you, knockoff.</p>
                <ul>
                  <li>- Successfully integrated the Apple Music API using Axios</li>
                  <li>- Allow users to effortlessly manage their favorite songs by implementing CRUD functionality</li>
                  <li>- Employed a MVC pattern in conjunction with server-side rendering, resulting in efficient updates and scalability</li>
                </ul>
                <a href='https://deploy-dotify.herokuapp.com/' target='_blank'>
                  <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
                </a>
                <a href='https://github.com/WHOVION/project-2' target='_blank'>
                  <button className='px-8 py-2 mt-4'>Code</button>
                </a>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> API(itunes)</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> HTML/CSS</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Javascript</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> PostgreSQL</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Sequelize</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> CSS Frameworks</p>
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

export default dotify