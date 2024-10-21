import React from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

function Services() {
  return (
    <div className='services pb-10'>
      <div className='flex justify-center'>
        <video 
          width={1000} 
          height={1000} 
          autoPlay 
          loop 
          muted 
          playsInline // Ensures autoplay works on mobile browsers
          style={{ pointerEvents: 'none' }} // Disables any interaction with the video
        >
          <source src="/ads.mp4" type="video/mp4" />
        </video>
      </div>

      <div className='flex justify-center'>
        <h1 className='text-center pt-10 text-slate-200 md:text-[80px] text-[40px] leading-tight md:w-[800px] w-[300px] font-extrabold'>
          Save over 60% on Facebook and Instagram Ads
        </h1>
      </div>

      <p className='text-center px-10 text-slate-400'>
        Advertisement solution that solves the hassle of cost. You select, we build, deploy, and advertise your brand.
      </p>

      <div className='flex justify-center'>
        <Link href={"/adsbuckets"}>
          <Button variant="outline" className="text-black w-[150px] mt-5 h-[50px] bg-primary">
            START SELLING
          </Button>
        </Link> 
      </div>
    </div>
  );
}

export default Services;
