import React from 'react'

const Footer = () => {
       return (
              <div className=' w-full  overflow-hidden lg:flex lg:justify-between lg:items-center bg-[#fcfcfc] text-black font-bold text-sm uppercase  md:text-xl lg:text-sm'>
                     <div className="part-1  w-full p-6 leading-none flex flex-col gap-2.5 justify-between">
                            <img className='h-[60%] w-[100%] object-cover' src="./image-2.avif" alt="" />
                            <h1 className='text-[12vw] font-black relative'>OH</h1>
                            <p className='font-semibold relative bottom-0'> OH ARCHITECTURE © 2025<br />
                                   3:05 AM QLD, we are closed</p>

                     </div>
                     <div className="part-2 h-[100%] w-full px-4">
                            <p className='font-semibold'>(Navigation)</p>
                            <div className="h1 font-bold text-[8vw] lg:text-6xl uppercase ">

                                   <h1>Bio</h1>
                                   <h1>Home</h1>
                                   <h1>About</h1>
                                   <h1>Contact</h1>
                                   <h1>Testimonail</h1>
                            </div>
                            <div className="bittomm">
                                   <p className='font-bold'>
                                          Privacy Policy <br />
                                          Terms of Service</p>
                            </div>
                     </div>
                     <div className="part-3 mt-5 h-[100%] w-full flex flex-col justify-between font-semibold px-3" >
                            <div className="partone">
                                   <h2 className='mt-4 md:text-3xl lg:text-xl'>(acknowledgement)</h2>
                                   <p className='mt-4 text-[13px] md:text-xl'>We respectfully acknowledge the Turrbal people, the Traditional Owners and Custodians of the Country on which we work. We pay our respects to Elders past and present, and acknowledge their continuing connection to land, sea and community.</p>
                            </div>
                            <div className="parttwo mt-5 lg:text-xl md:xl">
                                   <p>((info))</p>
                                   <div className="link text-[13px]">
                                          A: 101 Days Rd, Grange QLD 4051 <br />
                                          E: info@oharchitecture.com.au <br />
                                          P: 07 3110 1031 <br />
                                          H: Monday to Friday, 8:30am - 5:00pm
                                   </div>

                            </div>
                            <div className="partthree flex justify-between items-center mt-12  text-[12px] capitalize">
                                   <p>Instagram</p>
                                   <a href="https://www.instagram.com/the_jekeyy/" className=''>
                                          <p>made by jekey</p>
                                   </a>
                            </div>

                     </div>

              </div>
       )
}

export default Footer
