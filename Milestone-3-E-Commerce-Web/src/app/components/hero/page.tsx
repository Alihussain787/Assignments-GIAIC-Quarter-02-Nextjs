"use client"
import React from 'react'
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { FaArrowDown } from "react-icons/fa";
import Link from 'next/link'

const Hero = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    pauseOnHover: true
  };

  return (
  <div>
    <div style={{backgroundImage:"url('/bg-image1.jpg')"}} className='bg-center bg-cover bg-fixed'>
    <Slider {...settings}>
      <div className="w-full h-[600px] overflow:hidden max-md:h-full">
        <div className="w-full flex items-center justify-between px-10 max-md:flex-col max-md:py-10 max-md:gap-20">
          <div className='h-[600px] w-1/2 flex flex-col justify-center items-center gap-4 max-md:w-full max-md:h-1/2'>
            <h1 className='text-[#252B42] text-4xl font-bold max-md:text-center'>
              Pick The Best Product For You
            </h1>
            <p className='text-[#252B42]'>here is the best products</p>
            <div className='flex flex-col justify-center gap-4'>
              <p className='w-[250px] flex justify-center'> <FaArrowDown className='text-2xl text-[#252B42] animate-bounce w-6 h-6 ...'/></p>
              <Link href={"/components/products"} className='w-[250px] flex items-center justify-center font-bold text-[#252B42] bg-[#23A6F0] px-10 py-4 rounded hover:bg-[#252B42] hover:text-[#23A6F0] duration-200'>
                Explore Products
              </Link>
            </div>
          </div>
          <div className='w-1/2 h-[500px] flex items-center justify-end max-md:w-full max-md:h-[300px]'>
            <Image src={"/woman-shopping.png"} width={1000} height={1000} alt='img' className='w-[400px]'></Image>
          </div>
        </div>
      </div>
      <div className="w-full h-[600px] overflow:hidden max-md:h-full">
        <div className="w-full flex items-center justify-between px-10 max-md:flex-col max-md:py-10 max-md:gap-20">
          <div className='h-[600px] w-1/2 flex flex-col justify-center items-center gap-4 max-md:w-full max-md:h-1/2'>
            <h1 className='text-[#252B42] text-4xl font-bold max-md:text-center'>
              Pick The Best Product For You
            </h1>
            <p className='text-[#252B42]'>here is the best products</p>
            <div className='flex flex-col justify-center gap-4'>
              <p className='w-[250px] flex justify-center'> <FaArrowDown className='text-2xl text-[#252B42] animate-bounce w-6 h-6 ...'/></p>
              <Link href={"/components/products"} className='w-[250px] flex items-center justify-center font-bold text-white bg-[#23A6F0] px-10 py-4 rounded hover:bg-[#252B42] hover:text-[#23A6F0] duration-200'>
                Explore Products
              </Link>
            </div>
          </div>
          <div className='w-1/2 h-[500px] flex items-center justify-end max-md:w-full max-md:h-[300px]'>
            <Image src={"/2.png"} width={1000} height={1000} alt='img' className='w-[500px]'></Image>
          </div>
        </div>
      </div>
      <div className="w-full h-[600px] overflow:hidden max-md:h-full">
        <div className="w-full flex items-center justify-between px-10 max-md:flex-col max-md:py-10 max-md:gap-20">
          <div className='h-[600px] w-1/2 flex flex-col justify-center items-center gap-4 max-md:w-full max-md:h-1/2'>
            <h1 className='text-[#252B42] text-4xl font-bold max-md:text-center'>
              Pick The Best Product For You
            </h1>
            <p className='text-[#252B42]'>here is the best products</p>
            <div className='flex flex-col justify-center gap-4'>
              <p className='w-[250px] flex justify-center'> <FaArrowDown className='text-2xl text-[#252B42] animate-bounce w-6 h-6 ...'/></p>
              <Link href={"/components/products"} className='w-[250px] flex items-center justify-center font-bold text-white bg-[#23A6F0] px-10 py-4 rounded hover:bg-[#252B42] hover:text-[#23A6F0] duration-200'>
                Explore Products
              </Link>
            </div>
          </div>
          <div className='w-1/2 h-[500px] flex items-center justify-end max-md:w-full max-md:h-[300px]'>
            <Image src={"/4.png"} width={1000} height={1000} alt='img' className='w-[500px]'></Image>
          </div>
        </div>
      </div>
    </Slider>
    </div>
  </div>
  )
}

export default Hero
