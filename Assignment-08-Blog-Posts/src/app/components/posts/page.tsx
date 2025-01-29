"use client"
import React from 'react'
import { client } from '@/sanity/lib/client'
import Link from 'next/link'
import Image from 'next/image'

interface PostType {
  _id: number,
  title: string,
  description: string,
  postImage: string,
  tags: [string,string,string],
  likes: number,
  dislikes: number,
}

const Posts = async () => {

  const datafetching = await client.fetch(`
    *[_type == "post"]{
      _id,
      title,
      description,
      "postImage":postImage.asset->url,
      likes,
      dislikes,
      comments,
    }
    `);
  const posts: PostType[] = await datafetching;
  console.log("posts",posts);
  
  return (
    <div className='max-w-screen-xl mx-auto grid grid-cols-1 gap-10 py-10 px-10'>
      {
        posts.map((post) => (
          <div key={post._id} className='flex flex-col border p-4 rounded gap-10'>
            <h1 className='font-bold text-[24px] text-center'>{post.title}</h1>
            <div className='h-full flex flex-col justify-between'>
               <div className='flex flex-col gap-10'>
                <div className="flex items-center justify-center">
                    <Image
                      src={post.postImage}
                      alt="image"
                      width={239}
                      height={300}
                      className="w-full max-w-[400px] rounded"
                    />
                </div>
                <p className='text-gray-600 line-clamp-2'>{post.description}</p>
              </div>
            </div>
            <div className='flex justify-center items-center'>
                 <Link className='border-[1px] border-[#252B42] rounded hover:bg-[#252B42] hover:text-white text-[#252B42] py-2 px-4 font-bold' href={`/components/posts/${post?._id}`}>Read More...</Link>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Posts
