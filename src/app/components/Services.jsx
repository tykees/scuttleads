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
        <h1 className='text-center text-slate-200 text-[80px] leading-tight w-[800px] font-extrabold'> Save over 60% on Facebook and Instagram Ads</h1>
        </div>
        <p className='text-center text-slate-400'> Advertisement solution that solves the hassle of cost. You select, we build, deploy and advertise your brand. </p>
        <div className='flex justify-center'>
        <Button variant="outline" className="text-black w-[150px] mt-5 h-[50px] bg-primary">Get in Touch</Button>
        </div>
    </div>
  )
}

export default Services