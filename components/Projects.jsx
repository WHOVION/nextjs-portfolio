import React from 'react'
import sfImg from '../public/studiofits.png'
import blImg from '../public/battlelofi.png'
import dImg from '../public/dotify.png'
import uhImg from '../public/ultimatehang.png'
// {/* src='/./assets/skills/namelogo.png'  */}
// import sfImg from '../public/assets/projects/studiofits.jpeg'
// import blImg from '../public/assets/projects/battlelofi.jpeg'
// import dImg from '../public/assets/projects/dotify.jpeg'
// import uhImg from '../public/assets/projects/ultimatehang.jpeg'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>

             <ProjectItem title='StudioFits' backgroundImg={sfImg} projectUrl='/studiofits' />
             <ProjectItem title='BattleLofi' backgroundImg={blImg} projectUrl='/battlelofi' />
             <ProjectItem title='dotify' backgroundImg={dImg} projectUrl='/dotify' />
             <ProjectItem title='Ultimate Hangman' backgroundImg={uhImg} projectUrl='/ultimatehang' />

            </div>
        </div>
    </div>
  )
}

export default Projects