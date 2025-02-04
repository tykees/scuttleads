"use client"
import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { FaCheckCircle } from "react-icons/fa";
import { toast } from "sonner";
import './ads.css';
import GlobalApi from '../_utils/GlobalApi';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


const Page = () => {
    const { user, isLoaded}  = useUser();
    const router = useRouter();
    console.log(user)
    
    const createUserAds = (planName) => {
        const email = user?.primaryEmailAddress?.emailAddress;
        GlobalApi.createAds(email, planName).then(resp => {
          console.log(resp);

          if (resp?.createUseradsplan?.name === "Adbooster") {
            // Show success message
            toast("You have successfully Enrolled", {
              description: "Happy Learning!",
            });
            // Redirect
            router.push('/adsbooster');
          } else if(resp?.createUseradsplan?.name === "BoostMax") {

            toast("You have successfully Enrolled", {
              description: "Happy Learning!",
            });

            router.push('/boostmax');
          } else if(resp?.createUseradsplan?.name === "BoostPlus") {
            toast("You have successfully Enrolled", {
              description: "Happy Learning!",
            });

            router.push('/boostplus');
          } else if(resp?.createUseradsplan?.name === "BoostPro") {
            toast("You have successfully Enrolled", {
                description: "Happy Learning!",
              });
  
              router.push('/boostpro');
          } else if(resp?.createUseradsplan?.name === "Max") {
            toast("You have successfully Enrolled", {
                description: "Happy Learning!",
              });
  
              router.push('/max');
          } else if(resp?.createUseradsplan?.name === "Elite") {
            toast("You have successfully Enrolled", {
                description: "Happy Learning!",
              });
  
              router.push('/elite');
          } else if(resp?.createUseradsplan?.name === "HyperPro") {
            toast("You have successfully Enrolled", {
                description: "Happy Learning!",
              });
  
              router.push('/hyperpro');
          }
        }).catch(error => {
          toast.error("Enrollment failed. Please try again later.");
          console.error("Enrollment error:", error);
        });
        
      };
  return (
    <div className='ads_page'>
       <div className='pt-28 app_head_img text-center'>
        {/* <h2 className='text-[50px] text-white font-bold'>Hello!</h2> */}
        <div className='flex justify-center my-4'>
        {/* <p className='w-[640px] text-slate-100 text-[20px] font-medium'>We know you like to know about the safety of your pupils and update the parents as well. PocketShuttle is designed for schools and parents.</p> */}
        </div>
       </div>
       
       <h1 className='text-center text-[50px] font-extrabold text-white'>30 Days Category</h1>
       <div className='grid grid-cols-1 place-items-center justify-center items-center'>
            <div className='border mt-10 w-[300px] p-4 bg-inherit  my-1 hover:shadow-xl border-pink-400 h-[360px] shadow-md rounded-lg'>
            <p className='text-[18px] text-pink-400 text-left'>Adbooster</p>
            <p className='text-slate-300 text-[12px] text-left'>4 Ads Queue</p>
                <div className='flex justify-between items-center'>
                <h4 className='text-left text-slate-300 text-[32px] font-extrabold'>N20,400</h4>
                <div className='flex justify-center items-center'>
                    <Image src="/fb.gif" width={50} height={50}/>
                    <Image src="/insta.gif" width={50} height={50}/>
                </div>
                </div>
                <div className='mt'>
                    {
                        user&&isLoaded ?
                        <Button variant="outline" className="text-black border-none w-[100%] mt-5 h-[50px] text-[20px] bg-pink-400" onClick={() => createUserAds('Adbooster')} >Get Started</Button>
                        :
                     <Link href={"/sign-up"}> <Button variant="outline" className="text-black border-none w-[100%] mt-5 h-[50px] text-[20px] bg-pink-400">Get Started</Button> </Link>  
                    }
              
                </div>
                <div className=' pt-4 text-slate-300 text-[15px] text-left'>
                <ul>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Ads Thumbnail Design</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Reach 2,000 - 3,000 people</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Facebook and Instagram</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Right Location</li>
                </ul>
                </div>
            </div>
       </div>
    {/* section */}
       <h1 className='text-center text-[50px] font-extrabold text-white'>90 Days Category</h1>
       <div className='grid md:grid-cols-3 grid-cols-1 place-items-center justify-center items-center'>
            <div className='border w-[300px] p-4 bg-inherit  my-1 hover:shadow-xl border-blue-400 h-[360px] shadow-md rounded-lg'>
            <p className='text-[18px] text-blue-400 text-left'>BoostMax</p>
            <p className='text-slate-300 text-[12px] text-left'>4 Ads Queue</p>
                <div className='flex justify-between items-center'>
                <h4 className='text-left text-slate-300 text-[32px] font-extrabold'>N54,400</h4>
                <div className='flex justify-center items-center'>
                    <Image src="/fb.gif" width={50} height={50}/>
                    <Image src="/insta.gif" width={50} height={50}/>
                </div>
                </div>
                <div className='mt'>
                {
                user&&isLoaded ?
                        <Button variant="outline" className="text-black border-none w-[100%] mt-5 h-[50px] text-[20px] bg-blue-400" onClick={() => createUserAds('BoostMax')} >Get Started</Button>
                        :
                     <Link href={"/sign-up"}> <Button variant="outline" className="text-black border-none w-[100%] mt-5 h-[50px] text-[20px] bg-blue-400">Get Started</Button> </Link>  
                    }
                </div>
                <div className=' pt-4 text-slate-300 text-[15px] text-left'>
                <ul>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Banner Design</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> 90 Days</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Reach 10,000</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Facebook and Instagram</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Right Location</li>
                </ul>
                </div>
            </div>
            <div className='border w-[300px] p-4 bg-inherit  my-1 hover:shadow-xl border-teal-400 h-[360px] shadow-md rounded-lg'>
            <p className='text-[18px] text-teal-400 text-left'>BoostPlus</p>
            <p className='text-slate-300 text-[12px] text-left'>4 Ads Queue</p>
                <div className='flex justify-between items-center'>
                <h4 className='text-left text-slate-300 text-[32px] font-extrabold'>N103,700</h4>
                <div className='flex justify-center items-center'>
                    <Image src="/fb.gif" width={50} height={50}/>
                    <Image src="/insta.gif" width={50} height={50}/>
                </div>
                </div>
                <div className='mt'>
                {
                        user&&isLoaded ?
                        <Button variant="outline" className="text-black border-none w-[100%] mt-5 h-[50px] text-[20px] bg-teal-400" onClick={() => createUserAds('BoostPlus')} >Get Started</Button>
                        :
                     <Link href={"/sign-up"}> <Button variant="outline" className="text-black border-none w-[100%] mt-5 h-[50px] text-[20px] bg-teal-400">Get Started</Button> </Link>  
                    }
                </div>
                <div className=' pt-4 text-slate-300 text-[15px] text-left'>
                <ul>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Banner Design</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> 90 Days</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Reach 10,000</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Facebook and Instagram</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Right Location</li>
                </ul>
                </div>
            </div>
            <div className='border w-[300px] p-4 bg-inherit  my-1 hover:shadow-xl border-green-400 h-[360px] shadow-md rounded-lg'>
            <p className='text-[18px] text-green-400 text-left'>BoostPro</p>
            <p className='text-slate-300 text-[12px] text-left'>4 Ads Queue</p>
                <div className='flex justify-between items-center'>
                <h4 className='text-left text-slate-300 text-[32px] font-extrabold'>N255,000</h4>
                <div className='flex justify-center items-center'>
                    <Image src="/fb.gif" width={50} height={50}/>
                    <Image src="/insta.gif" width={50} height={50}/>
                </div>
                </div>
                <div className='mt'>
                {
                        user&&isLoaded ?
                        <Button variant="outline" className="text-black border-none w-[100%] mt-5 h-[50px] text-[20px] bg-green-400" onClick={() => createUserAds('BoostPro')} >Get Started</Button>
                        :
                     <Link href={"/sign-up"}> <Button variant="outline" className="text-black border-none w-[100%] mt-5 h-[50px] text-[20px] bg-green-400">Get Started</Button> </Link>  
                    }
                </div>
                <div className=' pt-4 text-slate-300 text-[15px] text-left'>
                <ul>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Banner Design</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> 90 Days</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Reach 10,000</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Facebook and Instagram</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Right Location</li>
                </ul>
                </div>
            </div>
       </div>
       <h1 className='text-center text-[50px] font-extrabold text-white'>180 Days Category</h1>
       <div className='grid md:grid-cols-3 grid-cols-1 place-items-center justify-center items-center'>
            <div className='border w-[300px] p-4 bg-inherit  my-1 hover:shadow-xl border-sky-600 h-[360px] shadow-md rounded-lg'>
            <p className='text-[18px] text-sky-600 text-left'>Max</p>
            <p className='text-slate-300 text-[12px] text-left'>4 Ads Queue</p>
                <div className='flex justify-between items-center'>
                <h4 className='text-left text-slate-300 text-[32px] font-extrabold'>N107,100</h4>
                <div className='flex justify-center items-center'>
                    <Image src="/fb.gif" width={50} height={50}/>
                    <Image src="/insta.gif" width={50} height={50}/>
                </div>
                </div>
                <div className='mt'>
                {
                        user&&isLoaded ?
                        <Button variant="outline" className="text-black border-none w-[100%] mt-5 h-[50px] text-[20px] bg-sky-600" onClick={() => createUserAds('Max')} >Get Started</Button>
                        :
                     <Link href={"/sign-up"}> <Button variant="outline" className="text-black border-none w-[100%] mt-5 h-[50px] text-[20px] bg-sky-600">Get Started</Button> </Link>  
                    }
                </div>
                <div className=' pt-4 text-slate-300 text-[15px] text-left'>
                <ul>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Banner Design</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> 90 Days</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Reach 10,000</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Facebook and Instagram</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Right Location</li>
                </ul>
                </div>
            </div>
            <div className='border w-[300px] p-4 bg-inherit  my-1 hover:shadow-xl border-teal-700 h-[360px] shadow-md rounded-lg'>
            <p className='text-[18px] text-teal-700 text-left'>Elite</p>
            <p className='text-slate-300 text-[12px] text-left'>4 Ads Queue</p>
                <div className='flex justify-between items-center'>
                <h4 className='text-left text-slate-300 text-[32px] font-extrabold'>N207,400</h4>
                <div className='flex justify-center items-center'>
                    <Image src="/fb.gif" width={50} height={50}/>
                    <Image src="/insta.gif" width={50} height={50}/>
                </div>
                </div>
                <div className='mt'>
                {
                        user&&isLoaded ?
                        <Button variant="outline" className="text-black border-none w-[100%] mt-5 h-[50px] text-[20px] bg-teal-700" onClick={() => createUserAds('Elite')} >Get Started</Button>
                        :
                     <Link href={"/sign-up"}> <Button variant="outline" className="text-black border-none w-[100%] mt-5 h-[50px] text-[20px] bg-teal-700">Get Started</Button> </Link>  
                    }
                </div>
                <div className=' pt-4 text-slate-300 text-[15px] text-left'>
                <ul>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Banner Design</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> 90 Days</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Reach 10,000</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Facebook and Instagram</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Right Location</li>
                </ul>
                </div>
            </div>
            <div className='border w-[300px] p-4 bg-inherit  my-1 hover:shadow-xl border-green-700 h-[360px] shadow-md rounded-lg'>
            <p className='text-[18px] text-green-700 text-left'>HyperPro</p>
            <p className='text-slate-300 text-[12px] text-left'>4 Ads Queue</p>
                <div className='flex justify-between items-center'>
                <h4 className='text-left text-slate-300 text-[32px] font-extrabold'>N510,000</h4>
                <div className='flex justify-center items-center'>
                    <Image src="/fb.gif" width={50} height={50}/>
                    <Image src="/insta.gif" width={50} height={50}/>
                </div>
                </div>
                <div className='mt'>
                {
                        user&&isLoaded ?
                        <Button variant="outline" className="text-black border-none w-[100%] mt-5 h-[50px] text-[20px] bg-green-700" onClick={() => createUserAds('HyperPro')} >Get Started</Button>
                        :
                     <Link href={"/sign-up"}> <Button variant="outline" className="text-black border-none w-[100%] mt-5 h-[50px] text-[20px] bg-green-700">Get Started</Button> </Link>  
                    }
                </div>
                <div className=' pt-4 text-slate-300 text-[15px] text-left'>
                <ul>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Banner Design</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> 90 Days</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Reach 10,000</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Facebook and Instagram</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Right Location</li>
                </ul>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Page