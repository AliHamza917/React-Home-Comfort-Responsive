import React from 'react'
import logo from '../../assets/images/logo/logo.svg'

const Header = () => {
  return (
      <>
          
          <header className='flex lg:justify-between items-center px-3 py-4 sm:justify-center'>
              <button className='flex sm:gap-2 "'><img src={logo} alt="" /></button>
              <div >
                  <ul className='hidden lg:flex gap-3 items-center'>
                        {listItem}
                      <li className='font-extrabold text-white bg-txtColor-200 p-2 rounded-3xl '>+9212345678</li>
                  </ul>
                  <ul></ul>
              </div>
          </header>
      
    </>
  )
}

export default Header

const itemsNames = ['Home', 'Services', 'Contact Us'];
const listItem = itemsNames.map((itemsName) => <li className=' font-bold text-txtColor-100 hover:text-txtColor-200'><a href={itemsName}>{itemsName}</a></li>);