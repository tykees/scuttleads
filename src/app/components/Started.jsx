import React from 'react';
import { Button } from "@/components/ui/button";


function Started() {
  return (
    <div className='started'>
        <div className='md:flex py-40 justify-between px-10 items-center'>
            <h1 className='md:text-[100px] text-[50px] md:w-1/2 font-extrabold text-slate-50 leading-tight'>Get started for free</h1>
            <div>
              <p className='md:w-[400px] w-[250px] text-slate-50'> Build with us. We design, code, publish and host for you. Your success is our Priority.</p>
              <Button variant="outline" className="text-black w-[150px] mt-5 h-[50px] bg-primary">Get in Touch</Button>
            </div>
        </div>
    </div>
  )
}

export default Started