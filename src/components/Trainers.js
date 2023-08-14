import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';

import trainer1 from '../image/instructors/1-1.jpg'
import trainer2 from '../image/instructors/img-1.jpg'
import trainer3 from '../image/instructors/img-4.jpg'
import trainer4 from '../image/instructors/team-4.jpg'
import trainer5 from '../image/instructors/team2201.jpg'

const Trainers = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
<<<<<<< HEAD
    <div className='lg:w-[80%] w-[90%] mx-auto'>
      <Carousel responsive={responsive} autoPlay={true} swipeable={true} draggable={true} infinite={true} arrows={false} autoPlaySpeed={10000} transitionDuration={700} className='text-black flex items-center justify-between py-10 mt-10'>
        <div className='bg-[#F6F6F7] mx-5 text-center pb-5  rounded-xl overflow-hidden hover:bg-white hover:shadow-lg transition-shadow'>
          <img src={trainer5} alt='' className='p-5 rounded-lg w-full' />
          <h3 className='text-[20px] font-extrabold py-3'>Mike Johnson</h3>
          <p className='text-[14px]'>CEO/Founder</p>
          <div className='flex items-center justify-center py-3 gap-5'>
            <Link><FaFacebook /></Link>
            <Link><FaInstagram /></Link>
            <Link><FaTwitter /></Link>
          </div>
        </div>

        <div className='bg-[#F6F6F7] mx-5 text-center pb-5 rounded-xl overflow-hidden hover:bg-white hover:shadow-lg transition-shadow'>
          <img src={trainer3} alt='' className='p-5 rounded-lg w-full' />
          <h3 className='text-[20px] font-extrabold py-3'>Samuel Ethan</h3>
          <p className='text-[14px]'>YOGA COACH</p>
          <div className='flex items-center justify-center py-3 gap-5'>
            <Link><FaFacebook /></Link>
            <Link><FaInstagram /></Link>
            <Link><FaTwitter /></Link>
          </div>
        </div>

        <div className='bg-[#F6F6F7] mx-5 text-center pb-5 rounded-xl overflow-hidden hover:bg-white hover:shadow-lg transition-shadow'>
          <img src={trainer2} alt='' className='p-5 rounded-lg w-full' />
          <h3 className='text-[20px] font-extrabold py-3'>Abigial Hannah</h3>
          <p className='text-[14px]'>CEO/Founder</p>
          <div className='flex items-center justify-center py-3 gap-5'>
            <Link><FaFacebook /></Link>
            <Link><FaInstagram /></Link>
            <Link><FaTwitter /></Link>
          </div>
        </div>

        <div className='bg-[#F6F6F7] mx-5 text-center pb-5 rounded-xl overflow-hidden hover:bg-white hover:shadow-lg transition-shadow'>
          <img src={trainer1} alt='' className='p-5 rounded-lg w-full' />
          <h3 className='text-[20px] font-extrabold py-3'>Milona Digits</h3>
          <p className='text-[14px]'>Body Building Expert</p>
          <div className='flex items-center justify-center py-3 gap-5'>
            <Link><FaFacebook /></Link>
            <Link><FaInstagram /></Link>
            <Link><FaTwitter /></Link>
          </div>
        </div>

        <div className='bg-[#F6F6F7] mx-5 text-center pb-5 overflow-hidden rounded-xl hover:bg-white hover:shadow-lg transition-shadow'>
          <img src={trainer4} alt='' className='p-5 rounded-lg w-full' />
          <h3 className='text-[20px] font-extrabold py-3'>Eleanor Grace</h3>
          <p className='text-[14px]'>YOGA COACH</p>
          <div className='flex items-center justify-center py-3 gap-5'>
            <Link><FaFacebook /></Link>
            <Link><FaInstagram /></Link>
            <Link><FaTwitter /></Link>
          </div>
        </div>
      </Carousel>
=======
    <div className='lg:w-[80%] w-[100%] mx-auto'>
                <Carousel responsive={responsive} autoPlay={true}  swipeable={true} draggable={true} infinite={true} arrows={false} autoPlaySpeed={5000} transitionDuration={700} className='text-black flex items-center justify-between py-10 mt-10'>
                              <div className='bg-[#F6F6F7] mx-5 text-center pb-5  rounded-xl overflow-hidden hover:bg-white hover:shadow-xl transition-all'>
                                             <img src={trainer5} alt='' className='p-5 rounded-lg w-full'/>
                                             <h3 className='text-[20px] font-extrabold py-3'>Mike Johnson</h3>
                                             <p className='text-[14px]'>CEO/Founder</p>
                                             <div className='flex items-center justify-center py-3 gap-5'>
                                                            <Link><FaFacebook /></Link>
                                                            <Link><FaInstagram /></Link>
                                                            <Link><FaTwitter /></Link>
                                             </div>
                              </div>

                              <div className='bg-[#F6F6F7] mx-5 text-center pb-5 rounded-xl overflow-hidden hover:bg-white hover:shadow-xl transition-all'>
                                             <img src={trainer3} alt='' className='p-5 rounded-lg w-full'/>
                                             <h3 className='text-[20px] font-extrabold py-3'>Samuel Ethan</h3>
                                             <p className='text-[14px]'>YOGA COACH</p>
                                             <div className='flex items-center justify-center py-3 gap-5'>
                                                            <Link><FaFacebook /></Link>
                                                            <Link><FaInstagram /></Link>
                                                            <Link><FaTwitter /></Link>
                                             </div>
                              </div>

                              <div className='bg-[#F6F6F7] mx-5 text-center pb-5 rounded-xl overflow-hidden hover:bg-white hover:shadow-xl transition-all'>
                                             <img src={trainer2} alt='' className='p-5 rounded-lg w-full'/>
                                              <h3 className='text-[20px] font-extrabold py-3'>Abigial Hannah</h3>
                                             <p className='text-[14px]'>CEO/Founder</p>
                                             <div className='flex items-center justify-center py-3 gap-5'>
                                                            <Link><FaFacebook /></Link>
                                                            <Link><FaInstagram /></Link>
                                                            <Link><FaTwitter /></Link>
                                             </div>
                              </div>

                              <div className='bg-[#F6F6F7] mx-5 text-center pb-5 rounded-xl overflow-hidden hover:bg-white hover:shadow-xl transition-all'>
                                             <img src={trainer1} alt='' className='p-5 rounded-lg w-full'/>
                                             <h3 className='text-[20px] font-extrabold py-3'>Milona Digits</h3>
                                             <p className='text-[14px]'>Body Building Expert</p>
                                             <div className='flex items-center justify-center py-3 gap-5'>
                                                            <Link><FaFacebook /></Link>
                                                            <Link><FaInstagram /></Link>
                                                            <Link><FaTwitter /></Link>
                                             </div>
                              </div>

                              <div className='bg-[#F6F6F7] mx-5 text-center pb-5 overflow-hidden rounded-xl hover:bg-white hover:shadow-xl transition-all'>
                                             <img src={trainer4} alt='' className='p-5 rounded-lg w-full'/>
                                             <h3 className='text-[20px] font-extrabold py-3'>Eleanor Grace</h3>
                                             <p className='text-[14px]'>YOGA COACH</p>
                                             <div className='flex items-center justify-center py-3 gap-5'>
                                                            <Link><FaFacebook /></Link>
                                                            <Link><FaInstagram /></Link>
                                                            <Link><FaTwitter /></Link>
                                             </div>
                              </div>
                </Carousel>
>>>>>>> ab332c462b911eadbd3a44d64f28512e69f7a2f8
    </div>
  )
}

export default Trainers