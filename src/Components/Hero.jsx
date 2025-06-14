import React from 'react'

const Hero = () => {
       return (
              <div className=' w-full bg-[#fcfcfc] text-black lg:py-20 px-2 font-bold'>
                     <div className="naem w-full  flex justify-between items-end">
                            <div className="name w-[70%] flex items-center " >
                                   <h1 className='uppercase text-5xl lg:text-[10vw] mb-12 md:text-[10vw]'>
                                          feture <br />
                                          <p className='text-end inline-block px-15 '>product</p>
                                   </h1>

                            </div>
                            <h1 className='text-4xl md:text-[6vw] md:top-0 lg:text-[9vw] md:mb-12 '>(06)</h1>

                     </div>
                     <div>
                            <div className="product w-full h-96  md:h-[65vh] lg:flex lg:justify-between">
                                   <div className="pro-1 w-[60%] h-[100%] lg:h-[30%] lg:w-[40%]">
                                          <img src="./image-7.avif" alt="" />
                                          <div className="bottom flex justify-between items-center md:text-2xl">
                                                 <h1>01</h1>
                                                 <h1>Myrtle Pool House</h1>
                                                 <h1>2024</h1>
                                          </div>
                                   </div>
                            </div>
                            <div className="product w-full flex justify-end py-[15vw] lg:items-baseline">
                                   <div data-scroll data-scroll-speed="2" className="pro-1 w-[60%] h-[100%] lg:h-[20%] lg:w-[50%]  ">
                                          <img className='lg:h-[10%]' src="./image-10.avif" alt="" /> 
                                          <div className="bottom flex justify-between items-center md:text-2xl">
                                                 <h1>02</h1>
                                                 <h1>HAIG</h1>
                                                 <h1>2024</h1>
                                          </div>
                                   </div>
                            </div>
                     </div>
                     <div>
                            <div className="product w-full h-96  md:h-[65vh] lg:flex lg:justify-between">
                                   <div className="pro-1 w-[60%] h-[100%] lg:h-[30%] lg:w-[40%]">
                                          <img src="./image-10.avif" alt="" />
                                          <div className="bottom flex justify-between items-center md:text-2xl">
                                                 <h1>03</h1>
                                                 <h1>Sidney House</h1>
                                                 <h1>2023</h1>
                                          </div>
                                   </div>
                            </div>
                            <div className="product w-full flex justify-end py-[15vw]">
                                   <div className="pro-1 w-[60%] h-[100%] lg:h-[50%] lg:w-[40%] ">
                                          <img src="./image-9.avif" alt="" />
                                          <div className="bottom flex justify-between items-center md:text-2xl">
                                                 <h1>04</h1>
                                                 <h1>Clifton</h1>
                                                 <h1>2025</h1>
                                          </div>
                                   </div>
                            </div>
                     </div>
                     <div>
                            <div className="product w-full h-96  md:h-[65vh] lg:flex lg:justify-between">
                                   <div className="pro-1 w-[60%] h-[100%] lg:h-[30%] lg:w-[40%]">
                                          <img src="./image-8.avif" alt="" />
                                          <div className="bottom flex justify-between items-center md:text-2xl">
                                                 <h1>05</h1>
                                                 <h1>Sweetman</h1>
                                                 <h1>2025</h1>
                                          </div>
                                   </div>
                            </div>
                            <div className="product w-full flex justify-end py-[15vw]">
                                   <div className="pro-1 w-[60%] h-[100%] lg:h-[50%] lg:w-[40%] ">
                                          <img src="./image-6.avif" alt="" />
                                          <div className="bottom flex justify-between items-center md:text-2xl">
                                                 <h1>02</h1>
                                                 <h1>Heal</h1>
                                                 <h1>2024</h1>
                                          </div>
                                   </div>
                            </div>
                     </div>









              </div>
       )
}

export default Hero
