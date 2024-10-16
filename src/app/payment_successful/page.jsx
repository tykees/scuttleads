import Image from 'next/image';
import { Button } from "@/components/ui/button";
import React from 'react'
import Link from 'next/link';

function Payment() {
  return (
    <div className='pt-20'>
        <div className='m-auto w-[350px] h-[600px]'>
            <div className='bg-primary pt-10 rounded-3xl h-[300px]'>
                <Image className='m-auto border-4 border-white rounded-full' src={'/mark.gif'} width={100} height={100} alt="mark"/>
                <p className='text-center text-[25px] pt-5'>Payment Successful</p>
            </div>
            <div className='bg-white'>
                <p className='text-center'>Wish to log your payment on our support desk?</p>
                <p className='text-center text-green-400 underline'><Link href={"/"}>Log here</Link></p>
                <Button variant="outline" className="text-black mt-4 border w-[350px] text-[16px] h-[50px] bg-primary">Back to Profile</Button>
            </div>
        </div>
    </div>
  )
}

export default Payment