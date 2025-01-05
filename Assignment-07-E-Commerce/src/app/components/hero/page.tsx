import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div>
        <div className="bg-white h-[525px] border-b-[1px] border-gray-400 flex flex-col items-center justify-center gap-4">
            <h1 className='text-[#23A6F0] text-4xl font-bold'>My Products Store</h1>
            <div className='bg-[#23A6F0] rounded p-4'>
                <Link href={"/components/products"} className='hover:text-black text-white font-bold duration-200'>Product List</Link>
            </div>
        </div>
    </div>
  )
}
export default Hero
