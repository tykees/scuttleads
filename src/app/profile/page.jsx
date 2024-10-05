"use client"
import { useUser } from '@clerk/nextjs';
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
              <h3>{user?.fullName}</h3>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Profile