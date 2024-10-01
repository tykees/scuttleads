import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const page = () => {
  return (
    <div className='mt-40 text-center'>
        <h2>Cheapest Way to get your business online.</h2>
        <h1>Over 50% OFF</h1>
        <p>On All Responsive Website and UI designs</p>
        <p>Mobile + Desktop + Tablet</p>
        <div className='flex justify-center items-center'>
            <Image src='/res.png' width={500} height={500}/>
        </div>
        <Button variant="" className="text-black text-[20px]">GET OFFER</Button>
        <div className='grid grid-cols-5'>
         <p>.com <span>N22,000</span></p>
         <p>.org <span>N12,500</span></p>
         <p>.ng <span>N10,000</span></p>
         <p>.app <span>N41,000</span></p>
         <p>.com.ng <span>3,000</span></p>
         <p>.online <span>N5,000</span></p>
         <p>.africa <span>N22,000</span></p>
         <p>.store <span>N10,000</span></p>
         <p>.tech <span>N10,000</span></p>
         <p>.org.ng <span>5,000</span></p>
        </div>
    </div>
  )
}

export default page