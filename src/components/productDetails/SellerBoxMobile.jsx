import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineStore } from "react-icons/md";
import { GoShieldCheck } from "react-icons/go";
import { LuCalendarCheck2 } from "react-icons/lu";
import {FiTruck} from "react-icons/fi";
import {RiGeminiLine} from "react-icons/ri";
import { BiTimer } from "react-icons/bi";
const SellerBoxMobile = () => {
    return (
        <>
            <div className="seller-box-mobile mt-4 px-4 border-b-8 border-gray-400/20 pb-4">
                <div className="top-section flex items-center justify-between mb-4">
                    <h2 className="top-section-right text-[#212121] font-yekan-bold">فروشنده</h2>
                    <div className="top-section-left text-[12px] text-[#424750] font-yekan-bold flex items-center gap-x-1">
                        <h2>انتخاب از دو فروشنده دیگر</h2>
                        <IoIosArrowBack />
                    </div>
                </div>
                <div className="seller-box-mobile-item flex items-center gap-x-4">
                 <div className="pb-4">
                     <div className="right-section size-9 bg-[#f0f0f1] rounded-full flex items-center justify-center">
                         <MdOutlineStore className="text-xl"/>
                     </div>
                 </div>
                    <div className="left-section border-b border-black/10 w-full pb-4">
                        <div className="left-section-top flex gap-x-2">
                            <div className="right-section flex items-center gap-x-1 text-[12px] text-[#0c0c0c]">
                                <h2 className="font-yekan-bold">دیجی کالا</h2>
                                <IoIosArrowBack />
                            </div>
                            <div className="left-section px-2 py-px text-[12px] text-[#00a049] bg-[#00a049]/10 rounded-2xl w-fit font-yekan-bold">منتخب</div>
                        </div>
                        <div className="left-section-bottom flex gap-x-2 mt-2">
                            <div className="flex gap-x-1 justify-between text-[12px] text-[#0c0c0c] border border-black/10 rounded-2xl py-px px-1">
                                <span className="">رضایت از کالا</span>
                                <span className="font-shabnam px-2 text-white bg-[#00a049] rounded-2xl">86%</span>
                            </div>
                            <div className="flex gap-x-1 justify-between text-[12px] text-[#0c0c0c] border border-black/10 rounded-2xl py-px px-1">
                                <span className="">عملکرد</span>
                                <span className="px-2 text-white bg-[#00a049] rounded-2xl">عالی</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="seller-box-mobile-item flex items-center gap-x-4 mt-2">
                    <div className="pb-4">
                        <div className="right-section size-9 bg-[#f0f0f1] rounded-full flex items-center justify-center">
                            <GoShieldCheck className="text-xl"/>
                        </div>
                    </div>
                    <div className="left-section border-b border-black/10 w-full pb-4 text-[12px] text-[#0c0c0c] font-yekan-bold">
                     <h2>گارانتی 18 ماهه شرکتی</h2>
                    </div>
                </div>
                <div className="seller-box-mobile-item flex items-center gap-x-4 mt-2">
                    <div className="pb-4">
                        <div className="right-section size-9 bg-[#f0f0f1] rounded-full flex items-center justify-center">
                            <LuCalendarCheck2 className="text-xl"/>
                        </div>
                    </div>
                    <div className="left-section border-b border-black/10 w-full pb-4 text-[12px] text-[#0c0c0c] font-yekan-bold">
                        <h2>روش ها و هزینه های تحویل</h2>
                        <div className="flex items-center gap-x-2 mt-2">
                            <FiTruck className="text-[#ed1944] rotate-y-180 text-[12px]"/>
                            <h2 className="text-[12px] text-[#81858d]">تحویل عادی دیجی کالا <span
                                className="text-[11px] text-[#424242] font-yekan-bold">وابسته به سبد</span>
                            </h2>
                        </div>
                        <div className="flex items-center gap-x-2 mt-2">
                                <BiTimer className="text-[#1028ff] rotate-y-180 text-[14px]" />
                            <h2 className="text-[12px] text-[#81858d]">تحویل سریع فردا دیجی کالا <span
                                className="text-[11px] text-[#424242] font-yekan-bold">وابسته به سبد</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="seller-box-mobile-item flex items-center gap-x-4 mt-4">
                    <div className="pb-4">
                        <div className="right-section size-9 bg-[#f0f0f1] rounded-full flex items-center justify-center">
                            <RiGeminiLine className="text-xl"/>
                        </div>
                    </div>
                    <div className="left-section border-b border-black/10 w-full pb-4 text-[12px] text-[#0c0c0c] font-yekan-bold">
                        <h2>ویژه اعضای پلاس</h2>
                      <h2 className="text-[#81858b] text-[11px] mt-2">ارسال سریع و رایگان دیجی کالا (فقط تهران و کرج)</h2>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SellerBoxMobile
