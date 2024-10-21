import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { FaCheckCircle } from "react-icons/fa";
import Link from 'next/link';


function Max() {
  return (
    <div className='md:px-20 px-6 pt-28 onepage'>
        <div className=''>
            <div className='md:w-[500px] w-[350px] block m-auto'>
            <Image className=' block m-auto mt-10'  src={'/basket.gif'} width={100} height={100} alt="hero"/>
              <p className='text-[20px] text-center text-slate-100 leading-none mt-3 font-thin'>We Have Received Your Request For The <span className=''></span> <br/> <span className='text-[30px] font-extrabold '>Max<br/></span></p>
              <div className='border rounded-lg h-[200px] mt-5 shadow-lg'>
              <p className='md:w-[500px] w-[350px] mt-5 text-center text-slate-400 px-10'>Be rest assured that you will get the best of our service.</p>
              <p className='md:w-[500px] w-[350px] mt-5 text-center text-slate-400'>Upon payment, you will receive a mail on your plan status and when your ads will be live.</p>
              </div>
              <div className='fle gap-8 mt-[40px]'>
            <Link href={"https://paystack.com/pay/p9u89v-9is"}><Button variant="outline" className="bg-transparent border border-primary md:w-[500px] w-[350px] text-[23px] h-[50px] text-primary">Pay  N107,100 With PayStack</Button></Link>  
              <Button variant="outline" className="text-black mt-4 border border-slate-700 md:w-[500px] w-[350px] text-[23px] h-[50px] bg-primary">Transfer N107,100</Button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Max