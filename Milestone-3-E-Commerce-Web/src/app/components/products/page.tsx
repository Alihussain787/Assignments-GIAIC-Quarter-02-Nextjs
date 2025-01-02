"use client"
import Link from 'next/link';
import Image from 'next/image';
import React from 'react'

interface ProductProps {
  _id: number,
  title: string,
  description: string,
  image: string,
  price: number,
  previousPrice: number,
  isNew: boolean,
  category: string,
  brand: string,
  quantity: number
}
const Products = async () => {

    const products = await fetch(`https://jsonserver.reactbd.com/amazonpro`);
    const productList:ProductProps[] = await products.json();

  return (
    <div className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 py-10'>
      {
        productList.map((item) => (
          <Link href={`/components/products/${item?._id}`} key={item._id}>
            <div className='max-w-screen-sm border-[1px] border-gray-300 rounded-md overflow:hidden hover:border-[#23A6F0] duration-300'>
              <Image 
                src={item?.image} 
                width={500} 
                height={500} 
                alt={"image"}
                className='w-full h-85 object-cover'
              ></Image>
              <div className='px-4 py-2 text-sm flex flex-col gap-1'>
                <p className='text-gray-500'>{item?.title}</p>
                <p className='font-semibold'>${item.price}</p>
                <div className='flex justify-between'>
                  <button className='hover:text-[#23A6F0] duration-200'>Add to cart</button>
                  <button className='uppercase text-xs font-semibold hover:text-[#23A6F0] duration-200'>More info</button>
                </div>
            </div>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default Products
