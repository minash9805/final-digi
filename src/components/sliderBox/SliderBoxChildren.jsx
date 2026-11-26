import React from 'react'
import {IoIosArrowBack} from "react-icons/io";

const SliderBoxChildren = ({catId}) => {
    return (
        <>
            <div className="slider-box-children">
                <div className="slider-header flex justify-between mb-4">
                    <div className="slider-header-right">
                        <h2 className="text-[16px] lg:text-[20px] text-[#1f1f1f] font-yekan-bold mb-2">{catId?.title}</h2>
                        <h2 className="text-[12px] lg:text-[14px] text-[#5c5c5c]">براساس سلیقه شما</h2>
                    </div>
                    <div className="slider-header-left relative">
                        <button
                            className="p-2 rounded-md bg-white lg:flex gap-x-2 items-center text-[12px] cursor-pointer hidden">
                            <h2>مشاهده همه</h2>
                            <IoIosArrowBack/>
                        </button>
                        <button
                            className="flex gap-x-2 items-center text-[12px] cursor-pointer lg:hidden font-yekan-bold absolute left-3 top-4">
                            <h2>همه</h2>
                            <IoIosArrowBack/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SliderBoxChildren
