import React from 'react'
import {FaRegHeart} from "react-icons/fa";
import {LuBellRing, LuChartSpline} from "react-icons/lu";
import {MdCompare, MdFormatListBulleted} from "react-icons/md";
import {IoShareSocialOutline} from "react-icons/io5";
const ProductActions = () => {
    return (
        <>
            <div className="product-actions">
                <div
                    className=" flex flex-col gap-y-5 text-xl text-[#1f1f1f]/90">
                    <FaRegHeart/>
                    <IoShareSocialOutline/>
                    <LuBellRing/>
                    <LuChartSpline/>
                    <MdCompare/>
                    <MdFormatListBulleted/>
                </div>
            </div>
        </>
    )
}
export default ProductActions
