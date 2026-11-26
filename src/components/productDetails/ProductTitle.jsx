import React, {useState} from 'react'

import {IoIosArrowBack} from "react-icons/io";
import {FaRegHeart} from "react-icons/fa";
import {IoShareSocialOutline} from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
const ProductTitle = ({level3,product}) => {
    const [isActiveHeart,setIsActiveHeart]=useState(false)
    return (
        <>
            <div className="product-title w-full pt-4 lg:pt-0  px-4 lg:px-0  lg:static transform -translate-y-8 lg:translate-0 bg-white rounded-t-3xl lg:rounded-t-0">
             <div className="flex justify-between lg:justify-start">
                 <div className="flex items-center text-[12px] lg:text-[14px] text-[#5c5c5c] gap-x-2 mb-3 lg:mb-5">
                     <h2>دیجی کالا</h2>
                     <IoIosArrowBack/>
                     <h2>{level3?.title}</h2>
                 </div>
                 <div className="actions lg:hidden flex gap-x-5">
                     <IoShareSocialOutline/>
                     {
                         !isActiveHeart &&
                         <FaRegHeart onClick={()=>setIsActiveHeart(true)}/>
                     }
                     {
                         isActiveHeart &&
                         <FaHeart className="text-red-600" onClick={()=>setIsActiveHeart(false)}/>
                     }
                 </div>
             </div>
                <h2 className="text-[16px] lg:text-[18px] font-yekan-bold leading-8 lg:leading-10">{product?.title}</h2>
            </div>
        </>
    )
}
export default ProductTitle
