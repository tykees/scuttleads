import React from 'react';
import Image from 'next/image';

function Cards() {
  return (
    <div>
        <div className='container mx-auto'>
            <h1 className='text-[90px] mt-20 leading-none font-extrabold'>We&apos;ll help you <br/> get started</h1>
            <p className='mt-6'>Sneak peek of a few websites to view.<br/>We build based on your prefrences.</p>
            <div className='md:flex text-center justify-around gap-5 m-5 flex-wrap'>
            <div className='w-[300px] p-4 bg-inherit border my-1 hover:shadow-xl transition-all border-slate-300 h-[360px] shadow-md rounded-lg'>
                    <Image src='/socials.jpg' width={300} height={300} alt="social" />
                   <p className='text-slate-900 text-left text-xl font-bold'>1 page</p>
                   <p className='text-left text-sm w-[250px] mt-3'>A clocking system that notify the parent/school for child pick off and drop off.</p>
                   <div className='flex justify-between mt-10 items-center'>
                     <div className='text-sm'>EXPLORE MORE</div>
                   </div>
                </div>
                <div className='w-[300px] p-4 bg-inherit border my-1 hover:shadow-xl border-slate-300 h-[360px] shadow-md rounded-lg'>
                <Image src='/data.png' width={300} height={150} alt="social" />
                   <p className='text-slate-900 text-left text-xl font-bold'>Data Analysis</p>
                   <p className='text-left text-sm w-[250px] mt-3'>ParentS/School know when the pupils are in School when they step out of School.</p>
                   <div className='flex justify-between mt-10 items-center'>
                     <div className='text-sm'>EXPLORE MORE</div>
                   </div>
                </div>
                <div className='w-[300px] p-4 bg-inherit border my-1 hover:shadow-xl border-slate-300 h-[360px] shadow-md rounded-lg'>
                <Image src='/website.png' width={300} height={150} alt="social" />
                   <p className='text-slate-900 text-left text-xl font-bold'>Get a Site</p>
                   <p className='text-left text-sm w-[250px] mt-3'>ParentS/School know when the pupils are in School when they step out of School.</p>
                   <div className='flex justify-between mt-10 items-center'>
                     <div className='text-sm'>EXPLORE MORE</div>
                   </div>
                </div>
                <div className='w-[300px] p-4 bg-inherit border my-1 hover:shadow-xl border-slate-300 h-[360px] shadow-md rounded-lg'>
                <Image src='/task.png' width={300} height={150} alt="social" />
                   <p className='text-slate-900 text-left text-xl font-bold'>Quest Task</p>
                   <p className='text-left text-sm w-[250px] mt-3'>A security system that trigger an alert to security organizations incase of emergency.</p>
                   <div className='flex justify-between mt-10 items-center'>
                     <div className='text-sm'>EXPLORE MORE</div>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards