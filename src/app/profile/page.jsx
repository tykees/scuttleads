"use client"
import { useUser } from '@clerk/nextjs';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import GlobalApi from '../_utils/GlobalApi';
import { TiMessages } from "react-icons/ti";
import { CgWebsite } from "react-icons/cg";




function Profile({}) {

  const { user } = useUser();
  console.log(user)
  const [userEnrolledAds, setUserEnrolledAds] = useState([]);
  useEffect(()=>{
    user&&getYourAds();
  },[user])

  const getYourAds = ()=> {
    GlobalApi.getUserAllAdsPlan(user?.primaryEmailAddress?.emailAddress).then(resp =>{
      console.log(resp.useradsplans);
      setUserEnrolledAds(resp.useradsplans)
    })
  }

  return (
    <div>
        <div className='pt-30'>
          <div className='bg-green-400 h-[400px]'></div>
          <div className='mt-[-200px]'>
          <div className='bg-white border m-auto  rounded-lg md:w-[700px] w-[350px] h-[550px]'>
            <div className='flex justify-center items-center'>
              <div className='flex justify-center  text-green-600 items-center gap-2 pl-6'>
              <CgWebsite className='md:text-[25px] text-[16px]' />
              <p className='md:text-[25px] text-[16px]'>Connect</p>
                </div>
              <Image className='m-auto border border-slate-50 mt-[-50px] rounded-full shadow-md' src={user?.imageUrl} width={150} height={150} alt="userImage"/>

              <div className='flex justify-center  text-green-600 items-center gap-2 pr-6'>
                <TiMessages className='md:text-[25px] text-[16px]' />
                <p className='md:text-[25px] text-[16px]'>Message</p>
              </div>
            </div>
              <h3 className='text-center md:text-[30px] text-[20px] font-medium'>{user?.fullName}</h3>
              <h3 className='text-center text-green-400 text-[20px] font-medium'>{user?.username}</h3>
             
              <h3 className='text-center text-[20px] mt-10'>Ads Subscriptions</h3>
              <div className='grid md:grid-cols-5 grid-cols-3 px-5 pt-5 items-center gap-3'>
              
              {
                userEnrolledAds.map((item, index)=>(
                  <div key={index}>
                    <div className='border bg-slate-100 text-slate-400 md:text-[16px] text-[12px] md:min-w-[110px] min-w-[50px] rounded-md text-center'>
                   {item.name}
                 </div>
                  </div>
                ))
              }
              </div>
              <div className='flex justify-center items-center gap-10 mt-12'>
              <Button variant="outline" className="text-black w-[150px] h-[50px]">Get a Site</Button>
              <Button variant="outline" className="text-black w-[150px] h-[50px] bg-green-400">Support</Button>
              </div>
              <div className='flex justify-center items-center mt-20'>
              <h3 className='text-center text-slate-300 text-[14px] font-medium pr-3'>Date of Registration:</h3>
              <h3 className='text-center text-slate-300 text-[14px] font-medium'>{user?.createdAt.getDate()}-</h3>
              <h3 className='text-center text-slate-300 text-[14px] font-medium'>{user?.createdAt.getMonth() + 1}-</h3> 
              <h3 className='text-center text-slate-300 text-[14px] font-medium'>{user?.createdAt.getFullYear()}</h3> 
              </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Profile