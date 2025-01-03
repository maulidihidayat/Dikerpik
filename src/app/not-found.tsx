import Button2 from '@/Components/Info/Button2'
import React from 'react'

const notFound = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-56 mb-56'>
        <h1 className='text-xl font-semibold'>404 Not Found</h1>
        <p className='text-xl font-semibold mb-4'>Halaman yang kamu cari tidak ada.</p>
        <Button2 name='Kembali'/>
    </div>
  )
}

export default notFound