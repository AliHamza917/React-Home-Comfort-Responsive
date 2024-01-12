import React from 'react'
import logoImg from '../../../assets/images/home/banner/banner.svg'

 
const ServiceBanner = () => {
  return (
    <div className=' grid w-[80vw]  md:grid-cols-2 '>
      
      <div className='w-[48vw] h-[51vh] sm:w-[80vw] sm:h-[47vw] md:h-[30vw] md:w-[60vw] '> 
        <div className='py-14 px-15 '>
          <small className='py-2 px-2 bg-txtColor-200 rounded-3xl p-1 text-white font-bold'>Best in Dubai</small>
          <h1 className=' text-[6vw] font-medium md:text-[4vw] sm:text-1vw'>Welcome To</h1>
          <b className='text-6xl md:text-[3vw]'>Home <b className=' text-txtColor-200 md:text-[3vw]'>Comfort</b></b>
          <p className=' text-[#1E1E1E;] text-3vw md:text-[1.4vw]'>Home Comfort provides home repair services in<br /> Dubai with reasonable rates. We fix it right with<br /> home comfort professional experts.
          </p>  
        </div>
      </div>
          
      <div className=" logo  w-[80vw] h-[45vw]  sm:w-[60vw] sm:h-[41vw] sm:ml-[10vw] sm:mt-[2vw]   md:h-[30vw]  md:w-[30vw] ">
        <img className=' rounded-full p-1' src={logoImg} alt="" />    
      </div><br/>
      
    </div>
  )
}

export default ServiceBanner
