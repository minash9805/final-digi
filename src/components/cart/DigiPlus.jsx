import React from 'react'
import { RiGeminiLine } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";
const DigiPlus = () => {
    return (
        <>
            <div className="digi-plus px-8 py-4 mt-6 rounded-xl border border-[#b12ba4]/20 bg-[#fff7fe]">
                <div className="digi-plus-top flex gap-x-2 justify-between">
                    <div className="right-section flex items-center gap-x-2">
                        <RiGeminiLine strokeWidth={1} className="text-[#b12ba4] text-lg"/>
                        <h2 className="text-[12px] lg:text-[14px] text-[#1f1f1f]">
                            هر ماه ۱۰ ارسال رایگان با ‌پلاس!</h2>
                    </div>
                    <div className="left-section flex items-center gap-x-1 text-[#b12ba4] text-[12px]">
                        <h2>افزودن</h2>
                        <IoIosArrowBack />
                    </div>
                </div>
                <div className="digi-plus-bottom text-[10px] lg:text-[11px] text-[#62666d] mt-2 font-yekan-bold">
                    <h2>۴ ارسال دیجی‌کالا | ۲ ارسال هایپرمارکت | ۴ ارسال سوپرمارکت</h2>
                </div>
            </div>
        </>
    )
}
export default DigiPlus
