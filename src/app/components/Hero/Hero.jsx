import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button"

import './hero.css'

function Hero() {
  return (
    <div className='md:px-20 px-8 hero'>
        <div className='flex md:pt-32 pt-20 justify-between items-center flex-wrap-reverse'>
            <div>
              <p className='text-[50px] md:text-left text-center text-slate-100 leading-none font-medium'>Grow Your <span className=''></span> <br/> <span className='md:text-[80px] text-[50px] font-extrabold '>Business <br/> <span className='md:text-[80px] text-[50px] font-extrabold'>With Us</span> </span></p>
              <p className='md:w-[500px] md:text-left text-center w-[300px] mt-5 text-slate-400'> We offer services that navigate your business to the next phase of sales and create a stable online presence without breaking the Bank. Your visibility is certain with us.</p>
              <div className='flex text-center md:gap-8 gap-4 mt-5'>
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