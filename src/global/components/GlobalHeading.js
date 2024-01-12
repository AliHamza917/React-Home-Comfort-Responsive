import React from 'react'

const GlobalHeading = (props) => {
  return (
      <div>
          
          <br/><p className='text-[8vw] mt-[8vw] md:text-[4vw] md:mt-0'>{props.txt} <b className=' text-txtColor-200 text-[8vw]  md:text-[4vw]'>{props.txtbold }</b></p>
      
      </div>
      
  )
}

export default GlobalHeading
