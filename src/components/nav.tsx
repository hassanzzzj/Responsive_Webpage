import Image from "next/image";
import Vector from "@/assets/Vector.png";
import cart from "@/assets/cart.png";
import acc from "@/assets/acc.png";
import search from "@/assets/search.png";
import search_2 from "@/assets/search_2.png";
export default function Nav() {
    return (
  <>
    <div className="w-[390px] h-16 md:hidden">
        <div className="w-[24px] h-[24px] pt-5 ml-[16px] md:hidden">
            <Image src={Vector} alt='' />
        </div>

        <div className="w-[126px] h-[18px] ml-[57px] mt-[-10px]">
       <p className="font-bold text-[25.2px] leading-[30.24px] "> SHOP.CO</p>
        </div> 
        <div className="w-[96px] h-[24px] mt-[-11px] ml-[274px] gap-3  flex justify-between">
        <Image src={search} alt='' /><Image src={cart} alt='' /><Image src={acc} alt='' />
        </div>
    </div>
    <div className="w-[1440px] h-[96px] hidden md:flex">
        <div className="w-[1240px] h-12 absolute flex top-[62px] ml-[100px] ">
        <div className="w-[160px] h-[22px] ">
       <p className="font-bold text-[32px] leading-[38.24px] "> SHOP.CO</p>
        </div> 
        <div className="w-[321px] h-[22px] pl-10 flex justify-between pt-[13px]">
          <p>Shop </p> 
          <p>On Sale</p>
          <p> New Arrivals</p>
          <p> Brands</p>
        </div>
        <div className="w-[577px] h-[48px]  ml-10 rounded-[62px]   px-4 py-3 flex bg-[#F0F0F0]">
        <Image src={search_2} alt='' />
         <p className="font-normal h-[22px] pl-3 text-[16px] w-[180px] leading-[21.6px] text-[#00000066] ">Search for Products...</p>
       </div>
       <div className="flex justify-between h-6 w-[62px] mt-3 ml-10"> 
       <Image src={cart} alt='' />
       <Image src={acc} alt='' />

       </div>
 
        </div>
    </div>
  </>
    );
  }
  