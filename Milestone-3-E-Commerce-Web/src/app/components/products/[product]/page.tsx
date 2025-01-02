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

const Product = async ({params}:{params:{product:number}}) => {
    const products = await fetch(`https://jsonserver.reactbd.com/amazonpro/${params.product}`);
    const product:ProductProps = await products.json();
  return (
    <div>
    {
    <Link href={"#"}>
        <div className='max-w-screen-sm flex flex-col p-10 gap-10'>
            <h3 className='text-4xl font-bold'>{product.title}</h3>
            <div className='flex border-[1px] max-md:flex-col max-md:items-center'>
                <Image 
                    src={product?.image} 
                    width={500} 
                    height={500} 
                    alt={"image"}
                    className='border-r-[1px] w-[300px] h-85 object-cover max-md:border-r-0 max-md:border-b-[1px]'
                ></Image>
                <div className='px-4 py-2 text-sm flex flex-col gap-1'>
                    <h3 className='text-xl font-bold'>Product Details</h3>
                    <p className='font-semibold'><span>Price: </span>${product.price}</p>
                    <p className='text-gray-500'><span className='text-black font-semibold'>Title: </span>{product?.title}</p>
                    <p className='text-gray-500'><span className='text-black font-semibold'>Category: </span>{product.category}</p>
                    <p className='text-gray-500'><span className='text-black font-semibold'>Detail: </span>{product.description}</p>
                    <div className='flex flex-col gap-4'>
                        <p className='font-semibold'>Quantity {product.quantity}</p>
                        <button className='text-xl font-bold text-left hover:text-[#23A6F0] duration-200'>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    </Link>
    }
    </div>
  )
}

export default Product
