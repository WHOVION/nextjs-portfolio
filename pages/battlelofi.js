import React from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'
import blImg from '../public/battlelofi.png'
import {RiRadioButtonFill} from 'react-icons/ri'

const battlelofi = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={blImg} alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
              <h2 className='py-2'>BattleLofi</h2>
              <h3>MERN stack application for gamers to stay updated on the latest gaming events (Jan 2023)</h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p>Welcome to BattleLo-Fi, where you and your mates will never miss out on the next gaming session. Plan, organize and keep in touch with what, where and when. Keep it casual when and set up parties, or step it up and put together a friendly tournament. Collaborative Project.</p>
                <a href='https://battlelofi.netlify.app/' target='_blank'>
                  <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
                </a>
                <a href='https://github.com/WHOVION/battlelofi-client' target='_blank'>
                  <button className='px-8 py-2 mt-4'>Code</button>
                </a>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> HTML/CSS</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Javascript</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Node</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Express</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> React</p>
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

export default battlelofi