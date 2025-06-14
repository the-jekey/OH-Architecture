import React from 'react'

const About = () => {
  return (
    <div className='h-[70vh] w-full  leading-0  px-4 font-semibold tracking-normal'>
      <div className="text w-full  text-8xl lg:font-black" >
        <p>let's build a space</p>
        <p className='text-center'> that inspires and</p>
        <p className='text-end'>  feels like home</p>
      </div>
      <div className="button py-8 px-2 uppercase text-center">
        <button className=' text-center px-4 py-1 md:py-2 md:text-2xl md:px-6 bg-black text-white font-bold rounded-full'>
          tell about your project
        </button>
      </div>
      <hr />
    </div>
  )
}

export default About
