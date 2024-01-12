import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layouts = ({children}) => {
  return (
      <>
          <Header />
          {children}
          <Footer/>
          
          
      
      </>
      
  )
}

export default Layouts
