"use client"
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import AdPlans from '../_components/AdPlans';
import { FaCheckCircle } from "react-icons/fa";

const page = () => {
  return (
    <div className='mt-40 text-center'>
        <h2>Cheapest Way to get your business online.</h2>
        <h1>Over 50% OFF</h1>
        <p>On All Responsive Website and UI designs</p>
        <p>Mobile + Desktop + Tablet</p>
        <div className='flex justify-center items-center'>
            <Image src='/res.png' width={500} height={500}/>
        </div>
        <AdPlans/>

        <Button variant="" className="text-black text-[20px]">GET OFFER</Button>
        <div className='grid grid-cols-5'>
         <p>.com <span>N22,000</span></p>
         <p>.org <span>N12,500</span></p>
         <p>.ng <span>N10,000</span></p>
         <p>.app <span>N41,000</span></p>
         <p>.com.ng <span>3,000</span></p>
         <p>.online <span>N5,000</span></p>
         <p>.africa <span>N22,000</span></p>
         <p>.store <span>N10,000</span></p>
         <p>.tech <span>N10,000</span></p>
         <p>.org.ng <span>5,000</span></p>
        </div>

        <div className='grid grid-cols-3 place-items-center justify-center items-center'>
            <div className='border w-[300px] p-4 bg-inherit  my-1 hover:shadow-xl border-blue-400 h-[360px] shadow-md rounded-lg'>
            <p className='text-[18px] text-blue-400 text-left'>1 Page Sales Site</p>
            <p className='text-slate-300 text-[12px] text-left'>4 Ads Queue</p>
                <div className='flex justify-between items-center'>
                <h4 className='text-left text-slate-300 text-[48px] font-extrabold'>N20,000</h4>
               
                </div>
                <div className='mt'>
                <Button variant="outline" className="text-black border-none w-[100%] mt-5 h-[50px] text-[20px] bg-blue-400">Get Started</Button>
                </div>
                <div className=' pt-4 text-slate-300 text-[15px] text-left'>
                <ul>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Banner Design</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> 90 Days</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Reach 10,000</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Facebook and Instagram</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Right Location</li>
                </ul>
                </div>
            </div>
            <div className='border w-[300px] p-4 bg-inherit  my-1 hover:shadow-xl border-teal-400 h-[360px] shadow-md rounded-lg'>
            <p className='text-[18px] text-teal-400 text-left'>Cream Plan</p>
            <p className='text-slate-300 text-[12px] text-left'>6 Pages Standard</p>
                <div className='flex justify-between items-center'>
                <h4 className='text-left text-slate-300 text-[48px] font-extrabold'>N50,000</h4>
                
                </div>
                <div className='mt'>
                <Button variant="outline" className="text-black border-none w-[100%] mt-5 h-[50px] text-[20px] bg-teal-400">Get Started</Button>
                </div>
                <div className=' pt-4 text-slate-300 text-[15px] text-left'>
                <ul>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Banner Design</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> 90 Days</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Reach 10,000</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Facebook and Instagram</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Right Location</li>
                </ul>
                </div>
            </div>
            <div className='border w-[300px] p-4 bg-inherit  my-1 hover:shadow-xl border-teal-400 h-[360px] shadow-md rounded-lg'>
            <p className='text-[18px] text-teal-400 text-left'>Cream Plan</p>
            <p className='text-slate-300 text-[12px] text-left'>Pro State FullStack</p>
                <div className='flex justify-between items-center'>
                <h4 className='text-left text-slate-300 text-[48px] font-extrabold'>Contact Us</h4>
               
                </div>
                <div className='mt'>
                <Button variant="outline" className="text-black border-none w-[100%] mt-5 h-[50px] text-[20px] bg-teal-400">Get Started</Button>
                </div>
                <div className=' pt-4 text-slate-300 text-[15px] text-left'>
                <ul>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Banner Design</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> 90 Days</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Reach 10,000</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Facebook and Instagram</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Right Location</li>
                </ul>
                </div>
            </div>
       </div>
    </div>
  )
}

export default page