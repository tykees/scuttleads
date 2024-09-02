import Image from "next/image";
import Cards from "./components/Cards";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services";
import Started from "./components/Started";


export default function Home() {
  
  return (
    <div>
      <Hero/>
      <Services/>
      <Cards/>
      <Started/>
    </div>
  );
}
