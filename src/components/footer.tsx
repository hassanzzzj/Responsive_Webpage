import Image from "next/image";
import fb from "@/assets/fb.png";
import insta from "@/assets/ig.png";
import twitter from "@/assets/twitter.png";
import gh from "@/assets/gh.png";
import paypal from "@/assets/paypal.png";
import g_pay from "@/assets/g_pay.png";
import a_pay from "@/assets/a_pay.png";
import ms_card from "@/assets/ms_card.png";
import visa from "@/assets/visa.png";
export default function footer(){
    return(
        <>
        <div className="w-[392px] h-[688px] md:h-[409px] absolute top-[3773px] md:top-[3960px] md:w-[1440px]  bg-[#F0F0F0]">
           <div className="md:flex md:justify-around md:mt-[50px] ">
           <div> <div >
                <p className="w-[144px] h-[20px] md:w-[167px] md:h-[23px] font-bold text-[28.85px] md:text-[33.45px] pt-[31.58px] md:pt-0 leading-[34.62px] md:leading-[40.15px] ml-4 text-[#000000]">SHOP.CO</p>
                <p className="w-[357px] md:w-[248px] h-[40px] md:h-[66px] font-normal text-[14px] pt-[45.58px] md:pt-10 leading-[20px] md:leading-[22px] ml-[17px] text-[#00000099]">
                We have clothes that suits your style and which you're proud to wear. From women to men.
                </p>
            </div>
            <div className="w-[148px] h-[28px] md:mt-[65px] ml-4 flex justify-between mt-[65px]">
            <Image src={twitter} alt='' />
            <Image src={fb} alt='' />
            <Image src={insta} alt='' />
            <Image src={gh} alt='' />
            </div>
            </div>
           <div className="grid gap-4 grid-cols-2 md:grid-cols-4"> 
            <div className="w-[91px] h-[146px] ml-4 grid gap-4 mb-6 ">
                <p className="w-[88px] h-[18px]  font-medium text-[14px]  leading-[18px] ml-4 text-[#000000] mt-6">Company</p>
                <p className="w-[91px] h-[18px]  font-normal text-[14px]  leading-[16px] ml-4 text-[#00000099]">About</p>
                <p className="w-[91px] h-[18px]  font-normal text-[14px]  leading-[16px] ml-4 text-[#00000099]">Features</p>
                <p className="w-[91px] h-[18px]  font-normal text-[14px]  leading-[16px] ml-4 text-[#00000099]">Works</p>
                <p className="w-[91px] h-[18px]  font-normal text-[14px]  leading-[16px] ml-4 text-[#00000099]">Career</p>

            </div>
            <div className="w-[121px] h-[146px] grid gap-4 ">
                <p className="w-[88px] h-[18px]  font-medium text-[14px]  leading-[18px] ml-4 text-[#000000] mt-6">Help</p>
                <p className="w-[121px] h-[18px]  font-normal text-[14px]  leading-[16px] ml-4 text-[#00000099]">Customer Support</p>
                <p className="w-[121px] h-[18px]  font-normal text-[14px]  leading-[16px] ml-4 text-[#00000099]">Delivery Details</p>
                <p className="w-[128px] h-[18px]  font-normal text-[14px]  leading-[16px] ml-4 text-[#00000099]">Terms & Conditions</p>
                <p className="w-[121px] h-[18px]  font-normal text-[14px]  leading-[16px] ml-4 text-[#00000099]">Privacy Policy</p>

            </div>
            <div className="w-[91px] h-[146px] ml-4 grid gap-4 ">
                <p className="w-[32px] h-[18px]  font-medium text-[14px] tracking-[0.3em] leading-[18px] ml-4  text-[#000000] mt-6">FAQ</p>
                <p className="w-[121px] h-[18px]  font-normal text-[14px]  leading-[16px] ml-4 text-[#00000099]">Account</p>
                <p className="w-[121px] h-[18px]  font-normal text-[14px]  leading-[16px] ml-4 text-[#00000099]">Manage Deliveries</p>
                <p className="w-[121px] h-[18px]  font-normal text-[14px]  leading-[16px] ml-4 text-[#00000099]">Orders</p>
                <p className="w-[121px] h-[18px]  font-normal text-[14px]  leading-[16px] ml-4 text-[#00000099]">Payment</p>

            </div>
            <div className="w-[159px] h-[146px] grid gap-4 ">
                <p className="w-[107px] h-[18px]  font-medium text-[14px]  leading-[18px] ml-4 tracking-[0.3em] text-[#000000] mt-6">RESOURCES</p>
                <p className="w-[159px] h-[18px]  font-normal text-[14px]  leading-[16px] ml-4 text-[#00000099]">Free eBook</p>
                <p className="w-[159px] h-[18px]  font-normal text-[14px]  leading-[16px] ml-4 text-[#00000099]">Development Tutorial</p>
                <p className="w-[159px] h-[18px]  font-normal text-[14px]  leading-[16px] ml-4 text-[#00000099]">How to -Blog</p>
                <p className="w-[159px] h-[18px]  font-normal text-[14px]  leading-[16px] ml-4 text-[#00000099]">Youtube Playlist</p>

            </div>
            </div></div>
            <div className="w-[358px] md:w-[1240px] mt-16 ml-4 md:ml-[100px] border-[1px] rotate-0 border-[#0000001A]"></div>

            <div>
                <p  className="w-[269px] h-[19px]  font-normal text-[14px] md:pt-6 leading-[18.9px] ml-[61px] md:ml-[100px] md:text-left text-[#00000099] pt-4">Shop.co © 2000-2023, All Rights Reserved</p>
            </div>
            <div className=" w-[240.93px] ml-[74px] pt-6 md:w-[281.07px] md:ml-[1059px] md:pt-0 flex justify-between">
            <Image src={visa} alt='' />
            <Image src={ms_card} alt='' />
            <Image src={paypal} alt='' />
            <Image src={a_pay} alt='' />
            <Image src={g_pay} alt='' />

            </div>
        </div>
        </>
    );
}