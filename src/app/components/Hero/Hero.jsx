import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button"

import './hero.css'

function Hero() {
  return (
    <div className='px-20 hero'>
        <div className='flex pt-32 justify-between items-center'>
            <div>
              <p className='text-[50px] text-slate-100 leading-none font-medium'>Grow Your <span className=''></span> <br/> <span className='text-[80px] font-extrabold '>Business <br/> <span className='text-[80px] font-extrabold'>With Us</span> </span></p>
              <p className='w-[500px] mt-5 text-slate-400'> We offer services that navigate your business to the next phase of sales and create a stable online presence without breaking the Bank. Your visibility is certain with us.</p>
              <div className='flex gap-8 mt-5'>
              <Button variant="outline" className="text-black border border-slate-700 w-[150px] h-[50px] bg-primary">Get Started</Button>
              <Button variant="outline" className="text-black border border-slate-700 w-[150px] h-[50px] bg-slate-100">Get in Touch</Button>
              </div>
            </div>
            <div>
            <Image  src={'/heroimage.png'} width={500} height={500} alt="hero"/>
            </div>
        </div>
    </div>
  )
}

export default Hero