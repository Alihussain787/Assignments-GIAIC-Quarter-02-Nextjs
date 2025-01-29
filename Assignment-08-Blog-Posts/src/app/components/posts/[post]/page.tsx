import { client } from '@/sanity/lib/client';
import React from 'react'
import Image from "next/image";

interface PostType {
  _id: number,
  title: string,
  description: string,
  postImage: string,
  tags: [string,string,string],
  likes: number,
  dislikes: number,
}

const Post = async ({ params }: { params: { post: string } }) => {
  const { post } = params;
  if (!post) {
    return <p>Error: "post" parameter not found!</p>;
  }


  const response = await client.fetch(`*[_type == "post"][_id == "${post}"]
    {
      _id,
      title,
      description,
      "postImage":postImage.asset->url,
      likes,
      dislikes,
      comments,
    }
  `);

  const data:PostType[] = await response;
  console.log("data",data);
  return (
    <div className='max-w-screen-xl mx-auto grid grid-cols-1 gap-10 py-10 px-10'>
    {
      data.map((post) => (
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
              <p className='text-gray-600'>{post.description}</p>
            </div>
          </div>
        </div>
      ))
    }
  </div>
  )
}

export default Post
