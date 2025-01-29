"use client"
import { FaArrowDown } from "react-icons/fa";
import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div style={{backgroundImage:"url('/bg-image-1.jpg')"}} className='bg-center bg-cover bg-fixed'>
      <div className="heroBox h-[600px] flex flex-col items-center justify-center gap-4">
        <h1 className='text-[#252B42] text-5xl font-bold max-md:text-center'>
            My Blog Posts
        </h1>
        <p className='text-[#252B42] font-bold'>There is the best posts</p>
        <FaArrowDown className='text-2xl text-[#252B42] animate-bounce w-6 h-6 ...'/>
        <Link href={"/components/posts"} className='font-bold text-[#252B42] border-[2px] border-[#252B42] px-10 py-4 rounded hover:text-white hover:bg-[#252B42] duration-200'>
          See All
        </Link>
      </div>
    </div>
  )
}

export default Hero
