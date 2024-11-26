import Image from "next/image";
import img_1 from "@/assets/model.jpg";
import gucci from "@/assets/gucci.png";
import ck from "@/assets/ck.png";
import prada from "@/assets/prada.png";
import versace from "@/assets/versace.png";
import zara from "@/assets/zara.png";
import img_2 from "@/assets/img_2.png";
import img_3 from "@/assets/img_3.png";
import R_4 from "@/assets/4.5.png";
import R_3 from "@/assets/3.5.png";
import img_4 from "@/assets/img_4.png";
import img_5 from "@/assets/img_5.png";
import R_5 from "@/assets/5_star.png";
import R_l_5 from "@/assets/5_star_l.png";
import R_04 from "@/assets/4_star.png";
import R_03 from "@/assets/3.png";
import c_1 from "@/assets/c_1.png";
import c_2 from "@/assets/c_2.png";
import c_3 from "@/assets/c_3.png";
import c_4 from "@/assets/c_4.png";
import cl_1 from "@/assets/cl_1.png";
import cl_2 from "@/assets/cl_2.png";
import cl_3 from "@/assets/cl_3.png";
import cl_4 from "@/assets/cl_4.png";
import ver from "@/assets/ver.png";
import mail from "@/assets/mail.png";
import star_s from "@/assets/star_s.png";
import star_l from "@/assets/star_l.png";
import tshirt_1 from "@/assets/tshirt_1.png";
import tshirt_2 from "@/assets/tshirt_2.png";
import jeans_1 from "@/assets/jeans_1.png";
import jeans_2 from "@/assets/jeans_2.png";
import shirt_1 from "@/assets/shirt_1.png";
import shirt_2 from "@/assets/shirt_2.png";
import shirt_3 from "@/assets/shirt_3.png";
import short_1 from "@/assets/shorts_1.png";






import Card from "./card";
import Disc_card from "./disc_card";

export default function Hero() {
    return (
  <>
    <div className="w-[390px] h-[853px] md:w-[1440px] md:h-[663px]  absolute md:top-[134px] md:flex md:justify-around bg-[#F2F0F1]">
      <div>  <div className="w-[315px] h-[93px] pt-[40px] ml-4 md:w-[577px] md:h-[173px] md:pt-[103px] md:ml-[100px] ">
            <p className="font-bold text-4xl leading-[34px] md:text-[64px] md:leading-[64px] text-[#000000]">FIND CLOTHES THAT MATCHES YOUR STYLE</p>
        </div>
        <div className="w-[358px] h-[50px] ml-4 pt-[20px] mt-10 md:w-[545px] md:h-[33px] md:ml-[100px]">
            <p className="font-normal text-sm leading-5 md:text-base md:leading-[22px] md:pt-[82] text-[#000000]">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>

        </div>
        <div className="w-[358px] h-[52px] ml-4 rounded-[62px] px-[54px] mt-[50px] py-4 flex justify-center md:w-[210px] md:h-[52px] md:ml-[100px] md:mt-[135px] bg-[#000000]">
        <p className="font-medium text-base leading-[21.6px] text-[#ffffff]">Shop Now</p>
        </div>
        {/* sm mobile settings */}
        <div className="w-[278px] h-[52px] ml-14 flex justify-between mt-5 md:hidden">
          <div className="w-[106px] h-[48px]">
            <p className="font-bold text-2xl leading-[32.4px] text-[#000000]">200+</p>
            <p className="font-normal text-xs leading-[22px] text-[#00000099] w-[107px]">International Brands</p>

          </div>
          <div className="w-[52px] h-0 border-[1px]  mt-9 rotate-90 border-[#0000001A] md:hidden "></div>
          <div className="w-[117px] h-12">
          <p className="font-bold text-2xl leading-[32.4px] text-[#000000]">2,000+</p>
          <p className="font-normal text-xs leading-[22px] text-[#00000099] w-[119px] ">High-Quality Products</p>
          </div>
        </div>
        <div className="w-[103px] h-12 ml-[144px] pt-3 md:hidden">
        <p className="font-bold text-2xl leading-[32.4px] text-[#000000]">3,000+</p>
        <p className="font-normal text-xs leading-[22px] text-[#00000099]  w-[95px] ">Happy Customers</p>
        </div>
        {/* md design */}
        <div className="hidden md:flex justify-between w-[596px] h-[74px] ml-[100px] mt-12">
          <div className="w-[106px] h-[48px]">
            <p className="font-bold text-2xl leading-[32.4px] text-[#000000]">200+</p>
            <p className="font-normal text-xs leading-[22px] text-[#00000099] w-[107px]">International Brands</p>

          </div>
          <div className="w-[117px] h-12">
          <p className="font-bold text-2xl leading-[32.4px] text-[#000000]">2,000+</p>
          <p className="font-normal text-xs leading-[22px] text-[#00000099] w-[119px] ">High-Quality Products</p>
          </div>
          <div className="w-[103px] h-12  ">
        <p className="font-bold text-2xl leading-[32.4px] text-[#000000]">3,000+</p>
        <p className="font-normal text-xs leading-[22px] text-[#00000099]  w-[95px] ">Happy Customers</p>
        </div>
        </div></div>
       <div>
        {/* Star small1 */}
        <div className="w-11 h-11 ml-[27px] absolute top-[540px] md:w-14 md:h-14 md:ml-[45px] md:top-[301px]">
        <Image src={star_s} alt='' />
          </div> 
          {/* Star Large */}
          <div className="w-[76px] h-[76px] ml-[293px] absolute top-[460px] md:w-[104px] md:h-[104px] md:top-[130px] md:ml-[460px]">
        <Image src={star_l} alt='' />
          </div> 
        <div className="w-[390px] h-[448px] mt-[16px] md:w-[570px] md:h-[563px]">
        <Image src={img_1} alt='' />
        </div></div>
    </div>
    {/* part 2 of hero */}
    <div className="w-[390px] h-[155px] absolute top-[951px]  md:w-[1440px] md:h-[122px]  md:top-[797px] bg-[#000000]">
     <div className="flex justify-around pt-[40.5px] md:items-center md:justify-around md:pt-10">
      <div>
      <Image src={versace} alt='' />
      </div>
      <div>
      <Image src={zara} alt='' />
      </div>
      <div>
      <Image src={gucci} alt='' />
      </div>
      <div className="hidden md:flex">
      <Image src={prada} alt='' />
      </div>
      <div className="hidden md:flex">
      <Image src={ck} alt='' />
      </div>
      
      </div>
      <div className="flex justify-around p-5 md:hidden">
      <div>
      <Image src={prada} alt='' />
      </div>
      <div>
      <Image src={ck} alt='' />
      </div></div>
    </div>

    <div className="w-[390px]  h-[38px] md:w-[1440px] md:mt-0 md:h-[180px] md:top-[919px] absolute bg-white top-[1077px] text-center">
      <p  className="font-bold bg text-[32px] leading-[38.4px] text-[#000000] pt-[50px]">NEW ARRIVALS</p>
    </div>
    
    <div className="flex ml-5 absolute top-[1100px] mt-[80px] w-[390px] md:hidden">
    <Card
    name="T-SHIRT WITH TAPE DETAILS"
    img={img_2}
    rating={4.5}
    star_img={R_4}
    price={120}/>
    <Disc_card 
    img={img_3}
    name="SKINNY FIT JEANS" 
    star_img={R_3}
    rating={3.5}
    price={260}
    disc_price={240}
    disc_per={20}
    />
  </div>
  <div className="hidden md:grid md:grid-cols-4 md:gap-5 md:ml-[100px] absolute md:top-[1034px]">
  <Card
    name="T-SHIRT WITH TAPE DETAILS"
    img={tshirt_1}
    rating={4.5}
    star_img={R_4}
    price={120}/>
    <Disc_card 
    img={jeans_1}
    name="SKINNY FIT JEANS" 
    star_img={R_3}
    rating={3.5}
    price={260}
    disc_price={240}
    disc_per={20}
    />
    <Card
    name="Checkered Shirt"
    img={shirt_1}
    rating={4.5}
    star_img={R_4}
    price={180}/>
    <Disc_card 
    img={shirt_2}
    name="Sleeve Stripped T-Shirt" 
    star_img={R_4}
    rating={4.5}
    price={160}
    disc_price={130}
    disc_per={30}
    />
  </div>
  {/* View all button */}
  <div className="w-[358px] h-[46px] md:w-[218px] md:h-[52px] md:ml-[611px] ml-4 rounded-[62px] absolute top-[1524px] md:top-[1548px] border-[1px] px-[54px] py-4 flex justify-center border-[#0000001A]">
    <p className="font-medium h-[19px] md:h-[22px]  text-[14px] md:text-base w-[52px] md:w-[59px] leading-[18.9px] md:leading-[21.6px] text-[#000000] ">View All</p>
    </div>
  

  <div className="w-[358px]  md:w-[1240px] md:ml-[100px]  absolute top-[1610px] md:top-[1664px] ml-4 border-[1px] rotate-0 border-[#0000001A]"></div>
  
  
  <div >
<p className="font-bold h-[38px] md:h-[58px]  text-[32px] md:text-5xl w-[231px] md:w-[346px] leading-[38.4px] md:leading-[57.6px] text-[#000000] text-center ml-20 md:ml-[546px] absolute top-[1650px] md:top-[1728px]">TOP SELLING</p>
  </div>
 
  <div className="flex ml-5 absolute top-[1620px] mt-[80px] w-[390px] md:hidden" >  
    <Disc_card
    img={img_4}
    name="Vertical Striped Shirt"
    price={235}
    disc_price={212}
    disc_per={20}
    rating={5}
    star_img={R_5}
    />
    <Card
    img={img_5}
    name="Courage Graphic T-shirt"
    rating={4}
    price={145}
    star_img={R_04}
    />
   </div>
   <div className="hidden md:grid md:grid-cols-4 md:gap-5 md:ml-[100px] absolute md:top-[1841px]">
   <Disc_card
    img={shirt_3}
    name="Vertical Striped Shirt"
    price={235}
    disc_price={212}
    disc_per={20}
    rating={5}
    star_img={R_5}
    />
    <Card
    img={tshirt_2}
    name="Courage Graphic T-shirt"
    rating={4}
    price={145}
    star_img={R_04}
    />
     <Card
    img={short_1}
    name="Loose Fit Bermuda Shorts"
    rating={3}
    price={80}
    star_img={R_03}
    />
     <Card
    img={jeans_2}
    name="Faded Skinny Jeans"
    rating={4.5}
    price={210}
    star_img={R_4}
    />

   </div>
    {/* View all button */}
    <div className="w-[358px] h-[46px] md:w-[218px] md:h-[52px] ml-4 md:ml-[611px] rounded-[62px] absolute top-[2027px] md:top-[2285px] border-[1px] px-[54px] py-4 flex justify-center border-[#0000001A]">
    <p className="font-medium h-[19px] md:h-[22px] text-[14px] md:text-base w-[52px] md:w-[59px] leading-[18.9px] md:leading-[21.6px] text-[#000000] ">View All</p>
    </div>
  

  {/* categories portion */}
  <div className="w-[358px] md:w-[1239px] h-[975px] md:h-[838px] absolute top-[2123px] md:top-[2417px] ml-4 md:ml-[100px] rounded-[20px] bg-[#F0F0F0]">

    <p className="w-[246px] md:w-[687px] h-[72px] md:h-[58px] mt-10 md:mt-[70px] ml-[56px] md:ml-[276px] font-bold   text-[32px] md:text-5xl leading-[36px] md:leading-[57.6px] text-[#000000] text-center ">BROWSE BY DRESS STYLE</p>
    <div className="grid gap-4 grid-cols-1  pl-6 pt-7 md:hidden"> 
      <div >
      <Image src={c_1} alt='' />
      </div>
      <div>
      <Image src={c_2} alt='' />
      </div>
      <div>
      <Image src={c_3} alt='' />
      </div>
      <div>
      <Image src={c_4} alt='' />
      </div>
    </div>
    <div className="absolute md:mt-[64px] ">
      <div className="hidden md:flex md:ml-[64px] md:gap-5">
      <div >
      <Image src={cl_1} alt='' />
      </div>
      <div>
      <Image src={cl_2} alt='' />
      </div></div>
      <div className="hidden md:flex md:ml-[64px] md:gap-5 md:mt-5">
      <div>
      <Image src={cl_3} alt='' />
      </div>
      <div>
      <Image src={cl_4} alt='' />
      </div>
     </div>
    </div>
  </div>

{/* Review Boxes Area */}
  <div className="w-[286px] md:w-[654px] h-[72px] md:h-[58px]  absolute top-[3148px] md:top-[3343px] ml-4 md:ml-[100px] font-bold   text-[32px] md:text-5xl leading-[36px] md:leading-[57.6px] text-[#000000] ">OUR HAPPY CUSTOMERS</div>
   <div>
     <div className="w-[358px] md:w-[400px] h-[186.19px]  md:h-[240px] absolute top-[3244px] md:top-[3461px] ml-4 md:ml-[100px] rounded-[20px] border-[1px] p-6 grid gap-[342px] border-[#0000001A]">
      <div className="w-[310px] md:w-[336px] h-[138.19px] md:h-[161.58px] grid gap-[17px] md:gap-[22px] ">
        <div className="md:hidden" >
        <Image src={R_5} alt='' />
        </div>
        <div className="hidden md:flex" >
        <Image src={R_l_5} alt='' />
        </div>
        <div className="w-[89px] md:w-[110px] h-[19px] md:h-6  flex justify-between"> <p className="font-bold   text-[16px] md:text-xl  leading-[22px] text-[#000000]  ">Sarah M.</p> <Image src={ver} alt='' /></div>
      <p className="w-[310px] md:w-[336px] h-[80px] md:h-[88px] font-normal  text-[14px] md:text-base leading-[20px] md:leading-[22px] text-[#00000099]  ">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
      </div>
    </div>


    <div className="hidden md:flex w-[358px] md:w-[400px] h-[186.19px]  md:h-[240px] absolute top-[3244px] md:top-[3461px] ml-4 md:ml-[520px] rounded-[20px] border-[1px] p-6 gap-[342px] border-[#0000001A]">
      <div className="w-[310px] md:w-[336px] h-[138.19px] md:h-[183.58px] grid gap-[16px] ">
        <div >
        <Image src={R_l_5} alt='' />
        </div>
        <div className="w-[89px] md:w-[93px] h-[19px] md:h-6 flex  justify-between"> <p className="font-bold   text-[16px] md:text-xl  leading-[22px] text-[#000000]  ">Alex K.</p> <Image src={ver} alt='' /></div>
      <p className="w-[310px] md:w-[336px] h-[80px] md:h-[110px] font-normal   text-[14px] md:text-base leading-[20px] md:leading-[22px] text-[#00000099]  ">"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
      </div>
    </div>

    
    <div className="hidden md:flex w-[358px]  md:w-[400px] h-[186.19px]  md:h-[240px] absolute top-[3244px] md:top-[3461px] ml-4 md:ml-[940px] rounded-[20px] border-[1px] p-6  gap-[342px] border-[#0000001A]">
      <div className="w-[310px] md:w-[336px] h-[138.19px] md:h-[161.58px] grid gap-[18px] ">
        <div >
        <Image src={R_l_5} alt='' />
        </div>
        <div className="w-[89px] md:w-[111px] h-[19px] md:h-6  flex justify-between"> <p className="font-bold   text-[16px] md:text-xl  leading-[22px] text-[#000000]  ">James L.</p> <Image src={ver} alt='' /></div>
      <p className="w-[310px] md:w-[336px] h-[80px] md:h-[110px] font-normal   text-[14px] md:text-base leading-[20px] md:leading-[22px] text-[#00000099]  ">"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p>
      </div>
    </div>
    
    </div>




{/* email box */}
    <div className=" w-[358px] md:w-[1240px] h-[293px] md:h-[180px] absolute top-[3480px] md:top-[3781px] ml-4 md:ml-[100px] md:flex rounded-[20px] m bg-[#000000]">
      <p className="w-[297px] md:w-[551px] h-[105px] md:h-[94px] font-bold   text-[32px] md:text-[40px]  leading-[35px] md:leading-[45px]  text-[#ffffff] text-center mt-8 ml-6 ">STAY UPTO DATE ABOUT OUR LATEST OFFERS</p>
     <div> <div className="w-[311px] md:w-[349px] h-[42px] md:h-12 flex justify-between ml-6 mt-8 md:ml-[212px] rounded-[62px] px-4 py-3 bg-[#ffffff]">
      <Image src={mail} alt='' />
        <p className="w-[310px] m h-[80px] md:h-[22px]  font-normal   text-[14px] md:text-base leading-[18.9px] md:leading-[21.6px] pl-3 text-[#00000066]">   Enter your email address</p>
      </div>
      <div className="w-[311px] md:w-[349px] h-[42px] md:h-12 flex justify-center ml-6 mt-3 md:ml-[212px] rounded-[62px] px-4 py-3 bg-[#ffffff]">
        <p className="w-[170px] h-[19px]  font-medium   text-[14px]  leading-[18.9px] pl-3 text-[#000000] text-center">   Subscribe to Newsletter</p>
      </div></div>
    </div>
  </>
    );
  }
  