import React from 'react'
import services1 from '/src/assets/images/s1.webp'
import services2 from '/src/assets/images/s2.webp'
import services3 from '/src/assets/images/s3.webp'
import services4 from '/src/assets/images/s4.webp'
import services5 from '/src/assets/images/s5.webp'
import services6 from '/src/assets/images/s6.webp'
import services7 from '/src/assets/images/s7.webp'
import services8 from '/src/assets/images/s8.webp'
import services9 from '/src/assets/images/s9.webp'
import { IoIosMore } from "react-icons/io";
const ServicesSection = () => {
    return (
        <>
            <div className="container-1 w-[95%] lg:w-[85%] mx-auto">
                <div className="services flex gap-x-2 lg:grid grid-cols-10 my-5 overflow-x-auto scrollbar-none hide-scrollbar">
                    <div className="services-item text-[10px] lg:text-[12px] font-yekan-bold flex flex-col items-center gap-y-2 min-w-17 max-w-17 lg:max-w-full cursor-pointer">
                        <img className="size-13" src={services1} alt=""/>
                        <h2 className="text-center">اشتراک پلاس</h2>
                    </div>
                    <div className="services-item text-[10px] lg:text-[12px] font-yekan-bold flex flex-col items-center gap-y-2 min-w-17 max-w-17 lg:max-w-full cursor-pointer">
                        <img className="size-13" src={services2} alt=""/>
                        <h2 className="text-center">وام بانکی اعتبار خرید</h2>
                    </div>
                    <div className="services-item text-[10px] lg:text-[12px] font-yekan-bold flex flex-col items-center gap-y-2 min-w-17 max-w-17 lg:max-w-full cursor-pointer">
                        <img className="size-13" src={services3} alt=""/>
                        <h2 className="text-center">دیجی کوین</h2>
                    </div>
                    <div className="services-item text-[10px] lg:text-[12px] font-yekan-bold flex flex-col items-center gap-y-2 min-w-17 max-w-17 lg:max-w-full cursor-pointer">
                        <img className="size-13" src={services4} alt=""/>
                        <h2 className="text-center">دیجی استایل</h2>
                    </div>
                    <div className="services-item text-[10px] lg:text-[12px] font-yekan-bold flex flex-col items-center gap-y-2 min-w-17 max-w-17 lg:max-w-full cursor-pointer">
                        <img className="size-13" src={services5} alt=""/>
                        <h2 className="text-center">طلا و نقره دیجیتال</h2>
                    </div>
                    <div className="services-item text-[10px] lg:text-[12px] font-yekan-bold flex flex-col items-center gap-y-2 min-w-17 max-w-17 lg:max-w-full cursor-pointer">
                        <img className="size-13" src={services6} alt=""/>
                        <h2 className="text-center">بومی محلی</h2>
                    </div>
                    <div className="services-item text-[10px] lg:text-[12px] font-yekan-bold flex flex-col items-center gap-y-2 min-w-17 max-w-17 lg:max-w-full cursor-pointer">
                        <img className="size-13" src={services7} alt=""/>
                        <h2 className="text-center">سکه ات رو بفروش</h2>
                    </div>
                    <div className="services-item text-[10px] lg:text-[12px] font-yekan-bold flex flex-col items-center gap-y-2 min-w-17 max-w-17 lg:max-w-full cursor-pointer">
                        <img className="size-13" src={services8} alt=""/>
                        <h2 className="text-center">سوپرمارکت</h2>
                    </div>
                    <div className="services-item text-[10px] lg:text-[12px] font-yekan-bold flex flex-col items-center gap-y-2 min-w-17 max-w-17 lg:max-w-full cursor-pointer">
                        <img className="size-13" src={services9} alt=""/>
                        <h2 className="text-center">در دیجی کالا بفروش</h2>
                    </div>
                    <div className="services-item text-[10px] lg:text-[12px] font-yekan-bold flex flex-col items-center gap-y-2 min-w-17 max-w-17 lg:max-w-full cursor-pointer">
                        <div className="size-13 bg-[#F0F0F1] rounded-full flex justify-center items-center">
                            <IoIosMore className="text-2xl"/>
                        </div>
                        <h2 className="text-center">بیشتر</h2>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ServicesSection
