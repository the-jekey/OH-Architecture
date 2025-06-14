import React from 'react'

const Process = () => {
       return (
              <div className=' w-full py-10 h-[150vh] lg:flex'>
                     <div className="partOne">
                            <p className='font-bold uppercase px-2'>(Our process)</p>
                            <img className='px-2 py-5 ' src="./image-3.avif" alt="" />
                            <div className="faq px-2 uppercase">
                                   <p className='border-b-1 font-semibold my-2'>(01) sketch design</p>
                                   <p className='border-b-1 font-semibold my-2'>(02) Design Development
                                   </p>
                                   <p className='border-b-1 font-semibold my-2'>(03) Development Application</p>
                                   <p className='border-b-1 font-semibold my-2'>(04) Interior Design</p>
                                   <p className='border-b-1 font-semibold my-2'>(05)
                                          Building approval plans + documentation</p>
                                   <p className='border-b-1 font-semibold my-2'>(06)
                                          Construction plans + documentation
                                   </p>

                            </div>
                     </div>
                     <div className="partTwo px-2 pt-20 font-semibold text-2xl lg:text-4xl lg:font-bold w-[100%]">
                            <h1>Our approach at OH Architecture
                                   is designed to make your journey
                                   from concept to completion as
                                   smooth and enjoyable as possible.</h1>
                            <div className="br">
                                   <br />
                            </div>
                            <h1>With our 6-stages plan, we prioritize
                                   clarity, collaboration, and your unique
                                   vision. Each stage is crafted to keep
                                   you informed, inspired, and involved.</h1>
                            <div className="button py-8 px-2 uppercase">
                                   <button className=' uppercasepx-4 py-3 md:py-5 md:text-2xl md:px-8 bg-black text-white font-bold rounded-full'>
                                          our studio
                                   </button>
                            </div>
                     </div>

              </div>
       )
}

export default Process
