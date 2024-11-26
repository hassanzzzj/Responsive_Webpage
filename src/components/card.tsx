import Image from "next/image";
interface icardprop{
    name : string
    rating : number
    star_img: str
    img : str
    price : number
}
export default function Card(prop : icardprop) {
    const {name,rating,star_img,img,price} = prop;
    return (
        <>
        <div className=" mt-5">
        <div><Image src={img} alt='' /></div>
        <div className="  mt-4">
      <p className="font-bold h-[22px] md:h-[27px] text-sm md:text-lg w-[220px]  md:w-[290px] leading-[21.6px] md:leading-[27px] text-[#000000] ">{name}</p>
      <div className="w-[127px]  h-4 md:h-[19px] md:w-[150px] mt-1 flex justify-between ">
      <Image src={star_img} alt='' />
      <p className="font-normal  text-xs md:text-[14px] leading-[16.2px] md:leading-[18.9px] text-[#000000] ">{rating}/ <span className="text-[#00000099]">5</span> </p>
      </div>
      <p className="font-bold h-[27px] md:h-8  text-xl md:text-2xl w-[46px] md:w-[55px] leading-[27px] md:leading-[32.4px] text-[#000000] mt-1 ">${price}</p>
    </div>
        </div>
        </>
    );}