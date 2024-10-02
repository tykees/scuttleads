"use client"
import { UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
// import Cards from "./components/Cards";
// import Hero from "./components/Hero/Hero";
// import Services from "./components/Services";
// import Started from "./components/Started";


export default function Home() {
  const router = useRouter();
  const {user, isLoaded} = useUser()
  useEffect(()=>{
    if(user) {
      router.push("/adsbuckets")
    }
    else {
      isLoaded&&router.push("/website")
    }
  },[user])

  return (
    <div>
     <UserButton afterSignOutUrl="/sign-in" />
    </div>
  );
}
