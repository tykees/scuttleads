import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import './ads.css';


const page = () => {
  return (
    <div className='ads_page'>
       <div className='pt-28 app_head_img text-center'>
        <h2 className='text-[50px] text-white font-bold'>Hello!</h2>
        <div className='flex justify-center my-4'>
        <p className='w-[640px] text-slate-100 text-[20px] font-medium'>We know you like to know about the safety of your pupils and update the parents as well. PocketShuttle is designed for schools and parents.</p>
        </div>
       </div>
       
       <h1 className='text-center text-[50px] text-white'>60 Days Category</h1>
       <div className='grid grid-cols-4 justify-center items-center'>
            <div className='border w-[300px] p-4 bg-inherit  my-1 hover:shadow-xl hover:bg-blue-400 transition-all border-blue-400 h-[360px] shadow-md rounded-lg'>
            <p className='text-[18px] text-blue-400 text-left'>Cream Plan</p>
            <p className='text-slate-300 text-[12px] text-left'>Reach: 10,000 people</p>
                <div className='flex justify-between items-center'>
                <h4 className='text-left text-white text-[48px] font-extrabold'>$30</h4>
                <div className='flex justify-center items-center'>
                    <Image src="/fb.gif" width={50} height={50}/>
                    <Image src="/insta.gif" width={50} height={50}/>
                </div>
                </div>
                <p className='text-white text-[18px] text-left'>4 slots</p>
               
                <h4 className='text-left mt-2 text-white text-[28px] font-extrabold'>90 Days</h4>
                <div className='mt'>
                <Button variant="outline" className="text-black w-[100%] mt-5 h-[50px] bg-blue-400"> <Image src='/basket.gif' width={50} height={50} /></Button>
                </div>
            </div>
            <div className='border w-[300px] p-4 bg-inherit  my-1 hover:shadow-xl transition-all border-slate-300 h-[360px] shadow-md rounded-lg'>
                <h4>$30 for 90Days</h4>
                <p>4 Companies</p>
                <p>Facebook and Instgram</p>
                <p>Reach: 10,000 people</p>
            </div>
            <div className='border w-[300px] p-4 bg-inherit my-1 hover:shadow-xl transition-all border-slate-300 h-[360px] shadow-md rounded-lg'>
                <h4>$30 for 90Days</h4>
                <p>4 Companies</p>
                <p>Facebook and Instgram</p>
                <p>Reach: 10,000 people</p>
            </div>
            <div className='border w-[300px] p-4 bg-inherit my-1 hover:shadow-xl transition-all border-slate-300 h-[360px] shadow-md rounded-lg'>
                <h4>$30 for 90Days</h4>
                <p>4 Companies</p>
                <p>Facebook and Instgram</p>
                <p>Reach: 10,000 people</p>
            </div>
       </div>
    </div>
  )
}

export default page