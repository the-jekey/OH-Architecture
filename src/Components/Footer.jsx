import React from 'react'

const Footer = () => {
       return (
              <div className='h-screen w-full flex '>
                     <div className="part-1 h-[100%] w-1/3 p-6 leading-none flex flex-col justify-between">
                            <img className='h-[60%] w-[60%] object-cover' src="./image-2.avif" alt="" />
                            <h1 className='text-[12vw] font-black relative'>GH</h1>
                            <p className='font-semibold relative bottom-0'>© 2025<br />
                                   3:05 AM QLD, we are closed</p>

                     </div>
                     <div className="part-2 h-[100%] w-1/3 flex flex-col justify-between">
                            <p className='font-semibold'>(Navigation)</p>
                            <div className="h1 font-bold text-[4vw] uppercase leading-[12vh] ">

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
                     <div className="part-3 h-[100%] w-1/3 flex flex-col justify-between font-semibold px-3" >
                            <div className="partone">
                                   <h2>(acknowledgement)</h2>
                                   <p>We respectfully acknowledge the Turrbal people, the Traditional Owners and Custodians of the Country on which we work. We pay our respects to Elders past and present, and acknowledge their continuing connection to land, sea and community.</p>
                            </div>
                            <div className="parttwo">
                                   <p>((info))</p>
                                   <div className="link">
                                          A: 101 Days Rd, Grange QLD 4051
                                          E: info@oharchitecture.com.au
                                          P: 07 3110 1031
                                          H: Monday to Friday, 8:30am - 5:00pm
                                   </div>
                                   <div className="hp">
                                          <div className="img size-[30vh]">

                                          </div>
                                   </div>
                            </div>
                            <div className="partthree flex justify-between items-center">
                                   <p>Instagram</p>
                                   <p>made by jekey</p>
                            </div>

                     </div>

              </div>
       )
}

export default Footer
