import React from 'react';
import { Button } from "@/components/ui/button";
import DomainSearch from './DomainSearch';


function Services() {
  return (
    <div className='services pb-10'>
        <div className='flex justify-center'>
        <video width={1000} height={1000} controls>
            <source src="/ads.mp4" type="video/mp4"/>
        </video>
        </div>
       <DomainSearch/>
        <div className='flex justify-center'>
        <h1 className='text-center text-slate-200 text-[80px] leading-tight w-[900px] font-extrabold'>Creative power that goes beyond templates</h1>
        </div>
        <p className='text-center text-slate-400'>You design, we generate the code — for everything from fully custom layouts to complex animations.</p>
        <div className='flex justify-center'>
        <Button variant="outline" className="text-black w-[150px] mt-5 h-[50px] bg-primary">Get in Touch</Button>
        </div>
    </div>
  )
}

export default Services