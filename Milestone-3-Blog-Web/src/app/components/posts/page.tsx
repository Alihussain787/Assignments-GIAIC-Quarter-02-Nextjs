"use client"
import React from 'react'
import Link from 'next/link'

interface PostProps {
  posts:[{
    id: number,
  title: string,
  body: string,
  tags: [string,string,string],
  reactions:{
    likes:number,
    dislikes:number
  },
  views: number,
  userId: number,
  }]
}
const Posts = async () => {

  const datafetching = await fetch("https://dummyjson.com/posts");
  const data: PostProps = await datafetching.json();
  
  return (
    <div className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10 py-10 px-10'>
      {
        data.posts.map((item) => (
          <div key={item.id} className='flex flex-col bg-[#23A6F0] py-2 rounded'>
            <p className='border-t border-b text-center py-2'>User ID: {item.userId}</p>
            <div className='h-full flex flex-col justify-between'>
               <div className='p-4 flex flex-col gap-2'>
                <p>Title: {item.title}</p>
                <p className='text-gray-600'>Post:{item.id} {item.body}</p>
              </div>
              <div className='border-t border-b flex gap-8 items-center justify-center py-2'>
                <p>{item.views} Views</p>
                <p>{item.reactions.likes} Likes</p>
                <p>{item.reactions.likes} Dislikes</p>
              </div>
            </div>
            <div className='flex items-center justify-center text-white pt-2 font-bold'>
                 <Link className='hover:text-black' href={`/components/posts/${item?.id}`}>Read More...</Link>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Posts
