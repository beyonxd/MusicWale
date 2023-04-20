'use client';

import React from 'react'
import Button from '@mui/material/Button';

const BookShow = () => {
  return (
    <div className="BookYourShow__container inline-block border rounded-md p-2">
          <form id="bookShow" className="flex flex-col" action="post">
            <input className='w-[250px] m-2 p-2' type="text" name="name" placeholder="Enter Your Name" />
        <input className='w-[250px] m-2 p-2' type="email" name="email" placeholder="Enter your email" />
        <input className='w-[250px] m-2 p-2' type="text" name="place" placeholder="Enter the location" />
            <Button className='Btn p-2 m-2 w-[250px]' variant="conatined" color="primary" href={"/"}>
        Hire Sound Systems
      </Button>
          </form>
        </div>
  )
}

export default BookShow