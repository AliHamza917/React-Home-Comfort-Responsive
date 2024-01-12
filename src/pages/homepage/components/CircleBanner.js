import React from 'react'
import Img1 from '../../../assets/images/icons/noun-twenty-four-hours-1239181.png'
import Img2 from '../../../assets/images/icons/noun-team.png'
import Img3 from '../../../assets/images/icons/noun-price.png'

const CircleBanner = () => {
  return (
    <div className='grid w-[80vw] px-[4vw] mt-[18vw] ml-[9.5vw] text-center md:mt-0 md:h-[15vw] md:grid-cols-3  md:w-[70vw]'>
        <div className='w-[40vw] h-[36vw]  md:w-[10vw] md:h-[9vw] bg-txtColor-300 rounded-full'><img src={Img1} alt="" /><br/><p className='text-3xl font-bold  md:text-2xl'>24/7 Service</p></div>
        <div className='w-[40vw] h-[36vw] mt-[10vw] md:mt-[1px]  md:w-[10vw] md:h-[9vw] bg-txtColor-300 rounded-full'><img src={Img1} alt="" /><br/><p className=' text-3xl font-bold md:text-2xl'>  Reasonable Rates</p></div>
        <div className='w-[40vw] h-[36vw] mt-[10vw] md:mt-[1px]  md:w-[10vw] md:h-[9vw] bg-txtColor-300 rounded-full'><img src={Img1} alt="" /><br/><p className=' text-3xl font-bold md:text-2xl'>Experienced Team</p></div>
      
    </div>
  )
}

export default CircleBanner

