import React from 'react'
import EmailBtn from '../Clients/EmailBtn'

const Footer = () => {
  return (
    
    <div className='flex flex-col footer__container w-full max-sm:mt-30 mt-40 justify-center items-center'>
      <hr className=' border-t-1 w-3/4 border-neutral-800' />
      <div className='emailUs__container flex mt-5 mb-10'>
        <p className='text-2xl mr-2'>Email Us</p>
        <EmailBtn />
      </div>
      
    </div>
  )
}

export default Footer