import React from 'react'
import {RiGeminiLine} from "react-icons/ri";
import {IoIosArrowBack} from "react-icons/io";
import truck from '/src/assets/images/truck.svg'
const PlusBox = () => {
    return (
        <>
            <div className="right-item-bottom-box-3 border border-black/10 rounded-md p-3 pb-0">
                <div className="right-item-bottom-box-3-top flex items-center gap-x-2">
                    <RiGeminiLine className="text-2xl text-[#B12BA4] hidden lg:block"/>
                    <div className="size-9 lg:hidden rounded-full bg-[#f2f2f2] flex items-center justify-center">
                        <RiGeminiLine strokeWidth={1} className="text-lg text-[#B12BA4]"/>
                    </div>
                    <h2 className="text-[#424750] lg:text-[#B12BA4] text-[12px] lg:text-[16px] font-yekan-bold lg:font-yekan-regular">
                        ارسال <span className="font-bold">رایگان</span> سفارش‌ها برای اعضای پلاس
                    </h2>
                </div>
                <div
                    className="right-item-bottom-box-3-center text-[11px] text-[#81858b] flex flex-col gap-y-3 mt-4 pr-8 font-yekan-bold lg:font-yekan-regular">
                    <h2>
                        ۴ ارسال رایگان دیجیکالا</h2>
                    <h2>
                        ۲ ارسال هایپرمارکت</h2>
                    <h2>
                        ۴ ارسال رایگان سوپرمارکت</h2>
                    <h2>
                        پشتیبانی اختصاصی</h2>
                </div>
                <div
                    className="right-item-bottom-box-3-bottom pr-8 flex justify-between items-center my-4 lg:my-0">
                    <div className="flex items-center gap-x-2 text-[#b12ba4] lg:text-[#1672dd] text-[11px] lg:text-[14px] font-yekan-bold lg:font-yekan-regular border border-[#b12ba4] lg:border-0 rounded-2xl lg:rounded-0 px-2 py-1 lg:p-0">
                        <h2>خرید اشتراک <span className="lg:hidden">پلاس</span></h2>
                        <IoIosArrowBack/>
                    </div>
                    <img className="hidden lg:block" src={truck} alt=""/>
                </div>
            </div>
        </>
    )
}
export default PlusBox
