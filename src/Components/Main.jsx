import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { motion, stagger } from 'motion/react'
import React from 'react'

const Main = () => {

       return (
              <>
                     <div className="main relative overflow-hidden  w-full h-screen  font-['font']">
                            <motion.img initial={{ opacity: 0, scale: 1.1, }} animate={{ scale: 1, opacity: 1, }} transition={{ delay: 0.4, ease: "easeInOut" }} data-scroll data-scroll-speed="-0.8" className=' relative h-full w-full object-cover scale-[1.1]' src="./image-5.avif" alt="" />
                            <div className="navbar absolute top-0 left-0 flex justify-between w-full p-4 text-white">
                                   <div className="h1  overflow-hidden">
                                          <motion.h1 initial={{ y: 50, }} animate={{ y: 0, }} transition={{ delay: 0.4, ease: "easeInOut", staggerChildren: 10, }} className='text-2xl font-bold md:text-4xl'>OH Architecture</motion.h1>
                                   </div>
                                   <motion.div className=" overflow-hidden links text-[13px]  text-start md:flex md:text-[vw] md:gap-6 items-center uppercase pt-3  font-bold">
                                          <motion.h1 initial={{ y: 50, }} animate={{ y: 0, }} transition={{ delay: 0.4, ease: "easeInOut", }}  >Home</motion.h1>
                                          <motion.h1 initial={{ y: 50, }} animate={{ y: 0, }} transition={{ delay: 0.4, ease: "easeInOut", }}  >studio</motion.h1>
                                          <motion.h1 initial={{ y: 50, }} animate={{ y: 0, }} transition={{ delay: 0.4, ease: "easeInOut", }}  >process</motion.h1>
                                          <motion.h1 initial={{ y: 50, }} animate={{ y: 0, }} transition={{ delay: 0.4, ease: "easeInOut", }}  >gallery</motion.h1>
                                   </motion.div>
                                   <div className="buttin hidden  relative right-0 items-end pt-6">
                                          <button className='px-4 py-2 bg-black font-bold rounded-full'>
                                                 Get in touch
                                          </button>
                                   </div>
                            </div>
                            <div className="px-4 absolute bottom-5 left-0 text-white text-3xl  w-full flex justify-between overflow-hidden">
                                   <motion.p
                                          initial={{ opacity: 0 }}
                                          animate={{ opacity: 1 }}
                                          transition={{ delay: 0.4, ease: "easeInOut" }}

                                          className='mb-16 w-[70%] text-[3vw] text-start md:text-2xl md:top-18 md:w-[60%] lg:w-[40%] relative lg:top-18 font-["font"]'>
                                          We design homes and spaces guided by
                                          your vision, bringing together thoughtful
                                          design, collaboration, and creativity to shape
                                          homes that simply work how you live.
                                   </motion.p>
                                   <motion.h1
                                          initial={{ y: 50, }}
                                          animate={{ y: 0, }}
                                          transition={{ delay: 0.4, ease: "easeInOut", }}
                                          className='flex justify-end items-end mb-16 text-[10px] lg:relative lg:top-16'>
                                          (scroll down)
                                   </motion.h1>
                            </div>


                     </div >

              </>
       )
}

export default Main
