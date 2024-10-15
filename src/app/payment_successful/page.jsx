import Image from 'next/image';
import { Button } from "@/components/ui/button";
import React from 'react'

function Payment() {
  return (
    <div className='pt-20'>
        <div className='m-auto w-[500px] h-[600px]'>
            <div className='bg-primary rounded-3xl h-[300px]'>
                <Image className='m-auto border-4 border-white rounded-full' src={'/mark.gif'} width={150} height={150} alt="mark"/>
                <p>Success</p>
            </div>
            <div className='bg-white'>
                <p>Payment Successful</p>
                <Button variant="outline" className="text-black mt-4 border border-slate-700 w-[500px] text-[23px] h-[50px] bg-primary">Transfer  N43,000</Button>
            </div>
        </div>
    </div>
  )
}

export default Payment