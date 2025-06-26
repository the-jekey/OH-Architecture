import React from 'react'

const About = () => {
  return (
    <div className='h-[70vh] md:h-[40vh] lg:h-[60vh] w-full overflow-hidden leading-0  px-4 font-semibold tracking-normal'>
      <div className=" w-full  text-6xl lg:font-black uppercase md:text-7xl text-start" >
        <p>let's build a space</p>
        <p className='text-'> that inspires and</p>
        <p className='text-'>  feels like home</p>
      </div>
      <div className="button py-8 px-2 uppercase text-center">
        <button className=' text-center px-4 py-6 md:px-7 md:py-6 capitalize  md:text-2xl bg-black text-white font-bold rounded-full'>
          tell about your project
        </button>
      </div>
      <hr />
    </div>
  )
}

export default About
