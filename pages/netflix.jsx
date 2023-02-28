import React from 'react'
import Image from 'next/legacy/image'
import netflixImg from '../public/assets/projects/netflix.jpeg'

const netflix = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={netflixImg} alt='/' />
        </div>
    </div>
  )
}

export default netflix