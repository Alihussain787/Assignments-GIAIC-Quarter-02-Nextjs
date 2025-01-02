"use client"
import {useEffect, useState} from "react"
import React from 'react'

interface PostProps {
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
  }

const Post = ({params}:{params:{post:number}}) => {

    const [data, setData] = useState<PostProps>();

    const [comment, setComment] = useState("");
    const [yourComment, setYourComment] = useState("");

    const [display, setDisplay] = useState(false);

    function printComment(){
        setYourComment(comment);
    }
    
    useEffect(() => {
        async function fetchData(){
            const datafetching = await fetch(`https://dummyjson.com/posts/${params.post}`);
            setData(await datafetching.json())
        }
        fetchData();
    });

  return (
    <div className='w-full flex flex-col items-center justify-center py-10 px-10 gap-4'>
        <div className='w-1/2 flex flex-col bg-[#23A6F0] py-2 rounded'>
            <p className='px-4'>User ID: {data?.userId}</p>
            <div className='flex flex-col'>
               <div className='p-4 flex flex-col gap-2'>
                <p>Title: {data?.title}</p>
                <p className='text-gray-600'>{data?.body}</p>
              </div>
              <div className='items-center flex gap-4 py-2 px-4'>
                <button onClick={() => setDisplay((prevDisplay) => !prevDisplay)} className="h-[32px]">Comment</button>
                <div style={{ display: display ? "block" : "none" }} className="w-full relative flex items-center justify-center gap-4">
                    <input type="text" placeholder="Comment..." onChange={(text) => setComment(text.target.value)} className="w-full h-[30px] outline-0"/>
                    <button onClick={() => {setDisplay((prevDisplay) => !prevDisplay); printComment()}} className="text-white bg-green-500 w-[200px] h-[30px] absolute right-0">Submit</button>
                </div>
              </div>
            </div>
          </div>
          <p className="w-1/2 text-black px-4 py-2">{yourComment}</p>
    </div>
  )
}

export default Post
