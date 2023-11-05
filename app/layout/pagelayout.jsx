import React from 'react'
import image1 from '../assets/img1.jpg'
import Image from 'next/image'



export default function PageLayout({children}) {
  return (
    <div className='flex w-full h-screen bg-gradient-to-b from-gray-300 to-gray-100'>
      <div className=' m-auto rounded-lg w-3/5 h-3/4 grid lg:grid-cols-2'>
        <div className=' relative overflow-hidden'>
          <Image src={image1} alt='image' fill={true} sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' objectFit='cover'/>
        </div>
        <div className='flex flex-col justify-evenly bg-gray-50'>
          <div className=' text-center py-10'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
