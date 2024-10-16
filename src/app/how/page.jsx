import Image from 'next/image';
import React from 'react';


function How() {
  return (
    <div className='pt-36'>
      <Image className='m-auto' src={"/work.png"} width={200} height={200} alt="work"/>
          <h1 className='text-[50px] text-center px-10'>How is works?</h1>
        <div className='md:flex pt-10 justify-center items-center gap-10 px-10'>
            <div>
              <h1 className='text-[18px] font-bold pb-4'>What is <span className='text-green-600'>ScuttleAds?</span></h1>
              <p className='pb-5'>We are a company with vast developers, designers, data scientists, and marketers. We set up scuttleAds to help business owners get access to quality services without breaking the bank, especially, on the aspect of facebook of instagram advertisements. </p>
            </div>
            <div>
              <h1 className='text-[18px] font-bold pb-4'>Build?</h1>
              <p className='pb-5'>Build a site with a click. Yes, you do not have to do anything- we do everything. You just have to communicate your desire through our chat channel with a representative and your site will be up in stipulated time. </p>
            </div>
            <div>
              <h1 className='text-[18px] font-bold pb-4'>Buckets?</h1>
              <p className='pb-5'>Facebook and other social media promotion and advertisements is on the high site and alot of businesses have been enable to take their business online. ScuttleAds built a simple algorithm that runs ads collectively and with the aim of driving traffic to the website of the clients, effectively.</p>
            </div>
        </div>
    </div>
  )
}

export default How