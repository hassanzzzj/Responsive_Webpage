import Image from "next/image";
interface icardprop{
    name : string
    rating : number
    star_img: str
    img : str
    price : number
    disc_price : number
    disc_per : number
}

export default function disc_card(prop : icardprop) {
    const {name,rating,star_img,img,price,disc_per,disc_price} = prop;
    return (
        <>
        <div className=" mt-5">
        <div ><Image src={img} alt='' /></div>
        <div className=" mt-4">
      <p className="font-bold h-[22px] md:h-[27px] text-sm md:text-lg w-[220px] md:w-[250px] leading-[21.6px] md:leading-[27px] text-[#000000] ">{name}</p>
      <div className="w-[127px] h-4 md:h-5 md:w-[150px] flex justify-between mt-1 ">
      <Image src={star_img} alt='' />
      <p className="font-normal  text-xs md:text-sm leading-[16.2px] md:leading-[18.9px] text-[#000000]  ">{rating}/ <span className="text-[#00000099]">5</span> </p>
      </div>
     <div className="flex justify-between mt-1 w-[150px] md:w-[200px]" > 
      <p className="font-bold h-[27px] md:h-8  text-xl md:text-2xl w-[46px] md:w-[61px] leading-[27px] md:leading-[32.4px]  text-[#000000]  ">${disc_price}</p>
      <p className="font-bold h-[27px] md:h-8 line-through text-xl md:text-2xl w-[51px] md:w-[61px]  leading-[27px] md:leading-[32.4px] text-[#00000066]  ">${price}</p>
      <div className="w-[42px] h-5 flex mt-[6px] justify-center items-center rounded-[62px] px-[14px]   py-[6px]  bg-[#FF33331A]">
        <p className="font-medium h-[14px]  text-[10px] w-[26px] leading-[13.5px] text-[#FF3333]  ">-{disc_per}%</p>
        </div>
      </div> 
    </div>
        </div>
        </>
    );}