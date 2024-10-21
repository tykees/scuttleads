"use client"
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import AdPlans from '../_components/AdPlans';
import { FaCheckCircle } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useUser } from '@clerk/nextjs';
import GlobalApi from '../_utils/GlobalApi';
import Link from 'next/link';


const Page = () => {
    const { user, isLoaded}  = useUser();
    const router = useRouter();
    console.log(user)
    
    const createUserSite = (planName) => {
        const email = user?.primaryEmailAddress?.emailAddress;
        GlobalApi.createSite(email, planName).then(resp => {
          console.log(resp);

          if (resp?.createUsersiterequest?.name === "One Page Sales/Contact") {
            // Show success message
            toast("You have successfully Enrolled", {
              description: "Happy Learning!",
            });
            // Redirect
            router.push('/onepage');
          } else if(resp?.createUsersiterequest?.name === "6 Pages Standard") {

            toast("You have successfully Enrolled", {
              description: "Happy Learning!",
            });

            router.push('/sixpage');
          } else if(resp?.createUsersiterequest?.name === "Extendable") {
            toast("You have Enrolled", {
              description: "Happy Learning!",
            });

            router.push('/extendable');
          }
        }).catch(error => {
          toast.error("Enrollment failed. Please try again later.");
          console.error("Enrollment error:", error);
        });
        
      };
  return (
    <div className='pt-40 web_page text-center'>
        <h2 className='text-slate-400'>Cheapest Way to get your business online.</h2>
        <h1 className='text-green-400 text-[50px] font-extrabold'>Over 50% OFF</h1>
        <p className='text-slate-400'>On All Responsive Website and UI designs</p>
        <p className='text-slate-400'>Mobile + Desktop + Tablet</p>
        <div className='flex justify-center items-center'>
            <Image src='/res.png' width={500} height={500}/>
        </div>
        <AdPlans/>

        {/* <Button variant="" className="text-black text-[20px]">GET OFFER</Button> */}
        {/* <div className='grid text-slate-300 grid-cols-5'>
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
        </div> */}

        <div className='grid md:grid-cols-4 grid-cols-1 place-items-center justify-center items-center'>
            <div className='border mt-10 w-[300px] p-4 bg-inherit  my-1 hover:shadow-xl border-blue-400 h-[420px] shadow-md rounded-lg'>
            <p className='text-[18px] text-blue-400 text-left'>One Page Sales/Contact</p>
                <div className='flex justify-between items-center'>
                <h4 className='text-left text-slate-300 text-[48px] font-extrabold'>N43,000</h4>
               
                </div>
                <div className='mt'>
                  {
                    user&&isLoaded ?
                    <Button variant="outline" className="text-black border-none w-[100%] mt-5 h-[50px] text-[20px] bg-blue-400" onClick={() => createUserSite('One Page Sales/Contact')} >Get Started</Button>
                    :
                    <Link href={"/sign-up"}> <Button variant="outline" className="text-black border-none w-[100%] mt-5 h-[50px] text-[20px] bg-blue-400">Get Started</Button> </Link>  
                  }
               
                </div>
                <div className=' pt-4 text-slate-300 text-[15px] text-left'>
                <ul>
                    <li className='flex items-center gap-2'><FaCheckCircle />1 Year Host Plan</li>
                    <li className='flex items-center gap-2'><FaCheckCircle />1 Year Domain</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Managed by ScuttleAds</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Shared Hosting</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> SEO</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Customer Support</li>
                </ul>
                </div>
            </div>
            <div className='border mt-10 w-[300px] p-4 bg-inherit  my-1 hover:shadow-xl border-teal-400 h-[420px] shadow-md rounded-lg'>
            <p className='text-slate-300 text-[12px] text-left'>6 Pages Standard</p>
                <div className='flex justify-between items-center'>
                <h4 className='text-left text-slate-300 text-[48px] font-extrabold'>N80,000</h4>
                
                </div>
                <div className='mt'>
                  {
                    user&&isLoaded? 
                    <Button variant="outline" className="text-black border-none w-[100%] mt-5 h-[50px] text-[20px] bg-teal-400" onClick={() => createUserSite('6 Pages Standard')}>Get Started</Button>
                    :
                    <Link href={"/sign-up"}> <Button variant="outline" className="text-black border-none w-[100%] mt-5 h-[50px] text-[20px] bg-teal-400">Get Started</Button> </Link>  
                  }
               
                </div>
                <div className=' pt-4 text-slate-300 text-[15px] text-left'>
                <ul>
                <li className='flex items-center gap-2'><FaCheckCircle />1 Year Host Plan</li>
                    <li className='flex items-center gap-2'><FaCheckCircle />1 Year Domain</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> WP Dashboard</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> WP Hosting</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> 4 Subdomains</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> 10 Business mail</li>
                    <li className='flex items-center gap-2'><FaCheckCircle />SEO</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Manage by ScuttleAds/Owner</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> More Customer Support</li>
                </ul>
                </div>
            </div>
            <div className='border mt-10 w-[300px] p-4 bg-inherit  my-1 hover:shadow-xl border-green-400 h-[420px] shadow-md rounded-lg'>
            <p className='text-slate-300 text-[12px] text-left'>Extendable Business</p>
                <div className='flex justify-between items-center'>
                <h4 className='text-left text-slate-300 text-[48px] font-extrabold'>N125,000</h4>
               
                </div>
                <div className='mt'>
                  {
                    user&&isLoaded?
                    <Button variant="outline" className="text-black border-none w-[100%] mt-5 h-[50px] text-[20px] bg-green-400" onClick={() => createUserSite('Extendable')}>Get Started</Button>
                    :
                    <Link href={"/sign-up"}> <Button variant="outline" className="text-black border-none w-[100%] mt-5 h-[50px] text-[20px] bg-green-400">Get Started</Button> </Link> 
                  }
               
                </div>
                <div className=' pt-4 text-slate-300 text-[15px] text-left'>
                <ul>
                <li className='flex items-center gap-2'><FaCheckCircle />1 Year Host Plan</li>
                    <li className='flex items-center gap-2'><FaCheckCircle />1 Year Domain</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> WP Dashboard</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> WP Hosting</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> 5 Subdomains</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> 10 Business mail</li>
                    <li className='flex items-center gap-2'><FaCheckCircle />SEO</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Manage by ScuttleAds/Owner</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Piority Customer Support</li>
                </ul>
                </div>
            </div>
            <div className='border mt-10 w-[300px] p-4 bg-inherit  my-1 hover:shadow-xl border-pink-400 h-[420px] shadow-md rounded-lg'>
            <p className='text-slate-300 text-[12px] text-left'>Full Stack + Mobile App</p>
                <div className='flex justify-between items-center'>
                <h4 className='text-left text-slate-300 text-[48px] font-extrabold'>Contact Us</h4>
               
                </div>
                <div className='mt'>
                <Button variant="outline" className="text-black border-none w-[100%] mt-5 h-[50px] text-[20px] bg-pink-400" onClick={() => createUserSite('Extendable Business')}>Get Started</Button>
                </div>
                <div className=' pt-4 text-slate-300 text-[15px] text-left'>
                <ul>
                </ul>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Page