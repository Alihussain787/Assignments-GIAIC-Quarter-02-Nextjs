"use client"
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export default function SimpleSlider() {
  const settings = {
    dots: true,
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
      <Slider {...settings}>
      <div className='border-black w-[700px] h-[600px] overflow:hidden'>
        <div className="w-full h-screen bg-cover bg-center bg-screen" style={{backgroundImage: "url('/Ali.jpg')"}}>
          xyz
        </div>
      </div>
      <div className='border-black w-[700px] h-[600px] overflow:hidden'>
        <div className="w-full h-screen bg-cover bg-center bg-screen" style={{backgroundImage: "url('/Thor.jpg')"}}>
          xyz
        </div>
      </div>
      <div className='border-black w-[700px] h-[600px] overflow:hidden'>
        <div className="w-full h-screen bg-cover bg-center bg-screen" style={{backgroundImage: "url('/Zen.jpg')"}}>
          xyz
        </div>
      </div>
    </Slider>
    </div>
    // <Slider {...settings}>
    //   <div>
    //     <h3>1</h3>
    //   </div>
    //   <div>
    //     <h3>2</h3>
    //   </div>
    //   <div>
    //     <h3>3</h3>
    //   </div>
    //   <div>
    //     <h3>4</h3>
    //   </div>
    //   <div>
    //     <h3>5</h3>
    //   </div>
    //   <div>
    //     <h3>6</h3>
    //   </div>
    // </Slider>
  );
}