"use client"
import {useEffect, useState} from "react"
import Link from 'next/link';
import Image from 'next/image';
import React from 'react'

interface ProductProps {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number
  }
}

const Products = () => {

  const [data, setData] = useState<ProductProps[]>([]);

  console.log("Data ",data);

  useEffect(() => {
    async function fetchdata(){
      const products = await fetch('https://fakestoreapi.com/products');
      setData(await products.json());
    }
    fetchdata()
  }, [])
  return (
    <div className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 py-10'>
      {
        data.map((item) => (
          <Link href={`/components/products/${item?.id}`} key={item.id}>
            <div className='h-full max-h-[450px] border-[1px] border-gray-300 rounded-md overflow:hidden hover:border-[#23A6F0] duration-300'>
              <div className="w-full h-full flex flex-col items-center justify-between py-2">
                <div className="h-full flex items-center justify-center">
                  <Image 
                    src={item?.image} 
                    width={500} 
                    height={500} 
                    alt={"image"}
                    className='w-[150px] h-50 cover'
                  ></Image>
                </div>
                  
                <div className='w-full h-1/2 px-2 text-sm flex flex-col justify-end gap-1'>
                  <p className='text-gray-500'>{item?.title}</p>
                  <p className='font-semibold'>Price ${item.price}</p>
                  <div className='flex justify-between font-bold'>
                    <button className='bg-gray-200 p-2 rounded hover:bg-[#23A6F0] hover:text-white duration-200'>Add to cart</button>
                    <button className='bg-gray-200 p-2 rounded uppercase text-xs hover:bg-[#23A6F0] hover:text-white duration-200'>More info</button>
                  </div>
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
