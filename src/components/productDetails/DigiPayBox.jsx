import React from 'react'
import {MdPayments} from "react-icons/md";
import {IoIosArrowBack} from "react-icons/io";

const DigiPayBox = () => {
    return (
        <>
            <div
                className="right-item-bottom-box-1 flex gap-x-2 border border-black/10 p-3 rounded-md">
                <div
                    className="size-8 bg-[#F7F7F8] rounded-full flex justify-center items-center text-blue-700">
                    <MdPayments className="text-lg"/>
                </div>
                <div>
                    <h2 className="text-[12px] lg:text-[14px] text-[#1f1f1f] mb-2 font-yekan-bold">الان بخر <span
                        className="font-shabnam">4</span> قسطه پرداخت کن !</h2>
                    <h2 className="text-[12px] lg:text-[14px] text-[#5c5c5c] mb-2">بااعتبار دیجی پی فقط
                        ماهی <span
                            className="font-shabnam">475000</span> تومان</h2>
                    <div
                        className="flex items-center gap-x-2 text-[11px] px-2 py-1 bg-blue-700/10 text-blue-700 w-fit rounded-2xl">
                        <h2>راهنمای استفاده</h2>
                        <IoIosArrowBack/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DigiPayBox
