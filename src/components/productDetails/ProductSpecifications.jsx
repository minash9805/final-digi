import React from 'react'
import {IoIosArrowBack} from "react-icons/io";
import {FaStar} from "react-icons/fa6";
const ProductSpecifications = ({product}) => {
    return (
        <>
           <div className="product-specifications -mt-8 lg:mt-0 px-4 lg:px-0 border-b-8 lg:border-0 border-gray-400/20 pb-5 lg:pb-0">
               <div className="right-item-top flex items-center gap-x-2 my-5">
                   <FaStar className="text-orange-300"/>
                   <h2 className="text-[11px] text-[#c0c2c5]"><span
                       className="text-[12px] text-black font-shabnam">5  </span>
                       (امتیاز ۱۰ خریدار) </h2>
                   <h2 className="flex items-center text-[12px] text-[#424750] font-shabnam gap-x-1 bg-[#f2f2f2] w-fit rounded-2xl px-2 py-1 font-semibold">
                       <span>10 دیدگاه</span>
                       <IoIosArrowBack/>
                   </h2>
                   <h2 className="flex items-center text-[12px] text-[#424750] font-shabnam gap-x-1 bg-[#f2f2f2] w-fit rounded-2xl px-2 py-1 font-semibold">
                       <span>7 پرسش</span>
                       <IoIosArrowBack/>
                   </h2>
               </div>
               <div className="line w-full h-px bg-black/10 mb-4 lg:hidden"></div>
               <div className="right-item-center">
                   <h2 className="mb-4 font-yekan-bold">ویژگی ها</h2>
                   <div className="flex overflow-x-auto hide-scrollbar lg:flex-wrap gap-3">
                       {
                           product?.specifications[0].items.map(item => {
                               return <div className="lg:bg-[#f2f2f2] px-4 py-2 rounded-lg border border-black/10 lg:border-0">
                                   <div className="flex gap-x-1 text-[12px] text-[#81858b] items-center  mb-2">
                                       <h2 className="whitespace-nowrap">{item.title}</h2>
                                       <IoIosArrowBack className="lg:hidden"/>
                                   </div>
                                   <h2 className="text-[12px] text-[#3f4064] font-yekan-bold whitespace-nowrap">{item.value}</h2>
                               </div>
                           })
                       }
                   </div>
                   <div className="lg:grid grid-cols-3 items-center my-5 hidden">
                       <div className="line w-full h-px bg-black/10"></div>
                       <div
                           className="text-[12px] text-[#0c0c0c] flex justify-self-center items-center gap-x-2 font-yekan-bold border border-black/10 rounded-md w-fit px-4 py-3">
                           <h2>مشاهده همه ویژگی ها</h2>
                           <IoIosArrowBack/>
                       </div>
                       <div className="line w-full h-px bg-black/10"></div>
                   </div>
               </div>
           </div>


        </>
    )
}
export default ProductSpecifications
