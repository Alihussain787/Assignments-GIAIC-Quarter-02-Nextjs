"use client"
import Typewriter from 'typewriter-effect'
import { FaArrowDown } from "react-icons/fa";
import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div>
      <div className="bg-white h-[530px] flex flex-col items-center justify-center gap-4">
        <h1 className='text-[#252B42] text-4xl font-bold max-md:text-center'>
          <Typewriter
            options={{
            strings: [
              "Latest news, Articles & Stories"
            ],
            autoStart: true,
            loop: true,
          }}
          />
        </h1>
        <p className='text-[#252B42]'>here is the best posts</p>
        <FaArrowDown className='text-2xl text-[#252B42] animate-bounce w-6 h-6 ...'/>
        <Link href={"/components/posts"} className='font-bold text-[#252B42] bg-[#23A6F0] px-10 py-4 rounded hover:bg-[#252B42] hover:text-white duration-200'>
          See All
        </Link>
      </div>
    </div>
  )
}

export default Hero
