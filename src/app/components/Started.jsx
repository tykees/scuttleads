import React from 'react';
import { Button } from "@/components/ui/button";


function Started() {
  return (
    <div className='started'>
        <div className='flex py-40 justify-between px-10 items-center'>
            <h1 className='text-[100px] w-1/2 font-extrabold text-slate-50 leading-tight'>Get started for free</h1>
            <div>
              <p className='w-[400px] text-slate-50'>Try Webflow for as long as you like with our free Starter plan. Purchase a paid Site plan to publish, host, and unlock additional features.</p>
              <Button variant="outline" className="text-black w-[150px] mt-5 h-[50px] bg-primary">Get in Touch</Button>
            </div>
        </div>
    </div>
  )
}

export default Started