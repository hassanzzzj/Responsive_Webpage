import Image from "next/image";
import cross from "@/assets/X.png";
export default function Header() {
    return (
  <div className="w-[390px] h-[34px] bg-[#000000] top-[9px] px-[54px] py-[9px] md:w-[1440px] md:h-[38px] md:flex ">
    
    <p className="w-[304px] h-4 font-normal text-xs leading-[16.2px] text-white  md:w-[351px] md:h-[38px] md:ml-[544px] ">Sign up and get 20% off to your first order. <a href="" className=" underline underline-offset-3 font-medium" >Sign Up Now</a></p>
    <div className="hidden md:flex md:ml-[425px]"><Image src={cross} alt='' /></div>
  </div>
    );
  }
  