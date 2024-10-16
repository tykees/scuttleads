import React from 'react';
import Image from 'next/image';

function Cards() {
  return (
    <div>
        <div className='container mx-auto'>
            <h1 className='md:text-[90px] text-[50px] mt-20 leading-none font-extrabold'>We&apos;ll help you <br/> get started</h1>
            <p className='mt-6'>Other services we render to take your business forward.<br/>We build based on your prefrences.</p>
            <div className='md:flex text-center justify-around gap-5 m-5 flex-wrap'>
            <div className='w-[300px] p-4 bg-inherit border my-1 hover:shadow-xl transition-all border-slate-300 h-[360px] shadow-md rounded-lg'>
                    <Image src='/sile.gif' width={300} height={300} priority unoptimized alt="social" />
                   <p className='text-slate-900 text-left text-xl font-bold'>Motion Graphics</p>
                   <p className='text-left text-sm w-[250px] mt-3'>Build a better brand and be at the top of your business.</p>
                   <div className='flex justify-between mt-10 items-center'>
                     <div className='text-sm'>GET IN TOUCH</div>
                   </div>
                </div>
                <div className='w-[300px] p-4 bg-inherit border my-1 hover:shadow-xl border-slate-300 h-[360px] shadow-md rounded-lg'>
                <Image src='/data.png' width={300} height={150} alt="social" />
                   <p className='text-slate-900 text-left text-xl font-bold'>Data Analysis</p>
                   <p className='text-left text-sm w-[250px] mt-3'>Get a clear insight on your business data and know how to sell better.</p>
                   <div className='flex justify-between mt-10 items-center'>
                     <div className='text-sm'>GET IN TOUCH</div>
                   </div>
                </div>
                <div className='w-[300px] p-4 bg-inherit border my-1 hover:shadow-xl border-slate-300 h-[360px] shadow-md rounded-lg'>
                <Image src='/int.png' width={300} height={150} alt="social" />
                   <p className='text-slate-900 text-left text-xl font-bold'>Social Media Management</p>
                   <p className='text-left text-sm w-[250px] mt-3'>We have managers that are capable of handling your social media pages.</p>
                   <div className='flex justify-between mt-10 items-center'>
                     <div className='text-sm'>GET IN TOUCH</div>
                   </div>
                </div>
                <div className='w-[300px] p-4 bg-inherit border my-1 hover:shadow-xl border-slate-300 h-[360px] shadow-md rounded-lg'>
                <Image src='/blockchain.jpg' width={300} height={150} alt="social" />
                   <p className='text-slate-900 text-left text-xl font-bold'>Blockchain development</p>
                   <p className='text-left text-sm w-[250px] mt-3'>We build Web3 applications on Eth, Smart chain and others.</p>
                   <div className='flex justify-between mt-10 items-center'>
                     <div className='text-sm'>GET IN TOUCH</div>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards