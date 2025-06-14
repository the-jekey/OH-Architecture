import React from 'react'
import { motion } from "motion/react"

const MainTwo = () => {

       return (
              <div className='h-[90vh] md:h-[150vh] lg:h-[300vh]  w-full bg-[#fdfdfd] shadow-md'>
                     <div className="h1 lg:text-[12vw] text-[15vw] leading-13 my-5 mb-5 md:leading-[13vw] lg:leading-[15vw] uppercase font-bold text-start px-2 after:content-['HERAT WITH PEOPLE']">
                            <h1>Designing  </h1>
                            <h1>homes with</h1>
                     </div>
                     <motion.div

                            initial={{ opacity: 0, scale: 1.01, }}
                            whileInView={{ opacity: 1, scale: 1, }}
                            transition={{
                                   duration: 0.1, delay: .6,
                                   ease: [0.39, 0.24, 0.3, 1]
                            }}
                            className="img  w-[95%] mx-auto lg:w-[45%] lg:flex  ">
                            <img className=' w-full object-cover md:h-[50%] lg:py-4' src="./image-4.avif " alt="" />
                     </motion.div>
                     <div className="   w-[95%] relative mx-auto lg:w-[45%] ">
                            <p className=' font-bold md:text-2xl'>(our studio)</p>
                            <p className=' text-[3.5vw] w-[90%] lg:text-2xl font-semibold'>We design spaces for people. No matter the scale
                                   of the projects, our down-to-earth approach stays
                                   the same. We listen first, design second. We take
                                   the time to understand how you live, work, and
                                   move through your space.</p>
                            <br />
                            <p className='text-[3.5vw] w-[90%] lg:text-2xl font-semibold'>
                                   Then, we bring your vision to life. Drawing from real
                                   experience, we create contemporary, aspirational
                                   spaces that feel effortless and truly yours.</p>
                            <div className="button py-6">
                                   <button className='px-4 py-3 md:py-5 md:text-2xl md:px-8 bg-black text-white font-bold rounded-full'>
                                          Learn more about our studio
                                   </button>
                            </div>
                     </div>
              </div>
       )
}

export default MainTwo
