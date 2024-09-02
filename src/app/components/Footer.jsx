import React from 'react';
import Image from 'next/image';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";




const Footer = () => {
    const day = new Date();
    const year = day.getFullYear()
  return (
    <>
    <div className='footer_bg pt-30'>
    <div className='container mx-auto'>
        <div className='flex justify-between pt-16 items-center'>
            <div>
            <Image className='ml-4' src="/newwhite.png" width={100} height={100} alt="logo" />
            </div>
            <div className='col_1 flex justify-center items-center mr-4 gap-3 text-slate-400 text-[20px]'>
           <p className='border border-slate-300 text-slate-300 p-2 rounded-full'><FaFacebookF/></p> 
           <p className='border border-slate-300 text-slate-300 p-2 rounded-full'> <FaLinkedinIn /></p>
           <p className='border border-slate-300 text-slate-300 p-2 rounded-full'> <FaXTwitter /></p>
           <p className='border border-slate-300 text-slate-300 p-2 rounded-full'> <FaInstagram /></p>
            </div>
        </div>
        <p className='border-b border-slate-400 pb-10 pt-3'></p>
        <div className='pt-4 pb-8 flex justify-between items-center flex-wrap'>
            <div className='flex justify-start text-[12px] items-end md:items-center gap-5 text-slate-400 flex-wrap md:ml-0 ml-4'>
                <p>Term of Service</p>
                <p>Cookies and Policy</p>
                <p>Faq</p>
                <p>Support</p>
                <p>Careers</p>
            </div>
            <div className='text-slate-400 ml-4 mt-4 md:mt-0 text-center text-[12px]'>
                <p className='text-center'>Copyright © {year} PocketShuttle. All rights reserved.</p>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Footer