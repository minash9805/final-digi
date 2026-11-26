import React from 'react'
import {RiGeminiLine} from "react-icons/ri";
import {IoIosArrowBack} from "react-icons/io";
import { RiHomeSmileFill } from "react-icons/ri";
const DigiMehr = () => {
    return (
        <>
            <div className="digi-mehr px-8 py-4 mt-6 rounded-xl border border-[#059675]/20 bg-[#f2fbf9]">
                <div className="digi-plus-top flex justify-between">
                    <div className="right-section flex items-center gap-x-2">
                        <RiHomeSmileFill className="text-[#059675] text-xl"/>
                        <h2 className="text-[12px] lg:text-[14px] text-[#1f1f1f]">
                            به سبد خریدتان مهر اضافه کنید</h2>
                    </div>
                    <div className="left-section flex items-center gap-x-1 text-[#059675] text-[12px]">
                        <h2>افزودن</h2>
                        <IoIosArrowBack />
                    </div>
                </div>
                <div className="digi-plus-bottom text-[11px] lg:text-[12px] text-[#5c5c5c] mt-2">
                    <h2>در مهارت‌آموزی کودکان کم‌برخوردار همراه شویم</h2>
                </div>
            </div>
        </>
    )
}
export default DigiMehr
