"use client"
import { useUser } from '@clerk/nextjs';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import React from 'react';


function Profile({}) {
  const { user } = useUser();
  console.log(user)

  return (
    <div>
        <div className='pt-30'>
          <div className='bg-green-400 h-[400px]'></div>
          <div className='mt-[-200px]'>
          <div className='bg-white border m-auto  rounded-lg w-[800px] h-[400px]'>
             <Image className='m-auto border border-slate-50 mt-[-50px] rounded-full shadow-md' src={user?.imageUrl} width={150} height={150} alt="userImage"/>
              <h3 className='text-center text-[30px] font-medium'>{user?.fullName}</h3>
              <h3 className='text-center text-green-400 text-[20px] font-medium'>{user?.username}</h3>
              <div className='flex justify-center items-center'>
              <h3 className='text-center text-slate-200 text-[16px] font-medium'>{user?.createdAt.getDate()} -</h3>
              <h3 className='text-center text-slate-200 text-[16px] font-medium'>{user?.createdAt.getMonth() + 1} -</h3> 
              <h3 className='text-center text-slate-200 text-[16px] font-medium'>{user?.createdAt.getFullYear()}</h3> 
              </div>
              <div className='flex justify-center items-center gap-10 mt-16'>
              <Button variant="outline" className="text-black w-[150px] h-[50px]">Get a Site</Button>
              <Button variant="outline" className="text-black w-[150px] h-[50px] bg-green-400">Support</Button>
              </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Profile