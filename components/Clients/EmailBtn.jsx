'use client';

import React from 'react'
import Button from '@mui/material/Button';

const EmailBtn = () => {
  return (
    <Button className='Btn max-sm:py-1 max-sm:px-2' variant="outlined" color="primary" onClick={() => window.location.href = 'mailto:jatinsaini187@gmail.com'}>
        Send Email
      </Button>
  )
}

export default EmailBtn