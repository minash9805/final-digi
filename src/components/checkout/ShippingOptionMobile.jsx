import React, {useEffect, useState} from 'react'
import {IoTimeOutline} from "react-icons/io5";
import {setSelectTime, setShippingInfo} from "../../redux/shipping/shippingSlice.js";
import DateCard from "./DateCard.jsx";
import clsx from "clsx";
import {IoIosArrowBack} from "react-icons/io";
import {useDispatch, useSelector} from "react-redux";
import {LiaTruckMovingSolid} from "react-icons/lia";
import {AiOutlineClose} from "react-icons/ai";

const ShippingOptionMobile = ({shippingOption, activeTime, setActiveTime, isOpen, setIsOpen}) => {

    const dispatch = useDispatch()
    const {shippingInfo, selectTime} = useSelector(state => state.shipping)
    return (
        <div>
            <div className="shipping-options mt-10 ">
                <div className="top-section flex justify-between items-center gap-x-5">
                    <div className="top-section-right ">
                        <h2 className="text-[11px] text-black mb-2">زمان تحویل : <span
                            className="text-[12px] text-[#23254e] font-yekan-bold">
                            {
                                !selectTime ?
                                    "انتخاب نشده" :
                                    `${shippingInfo.day} ${shippingInfo.date} ساعت ${selectTime}`
                            }
                        </span></h2>
                        <h2 className="text-[11px] text-black">هزینه ارسال : <span
                            className="text-[12px] text-[#23254e] font-yekan-bold">
                            {
                                !selectTime ?
                                    "تعیین نشده"
                                    :
                                    <span className="font-shabnam text-[12px] text-[#23254e] font-semibold"><span
                                        className="line-through text-[#c0c2c5] decoration-1">{shippingInfo.shippingFee.toLocaleString()}</span> {shippingInfo.finalShippingFee.toLocaleString()} تومان</span>
                            }
                        </span></h2>
                    </div>
                    <div className="top-section-left">
                        {
                            !selectTime ?
                                <button onClick={() => setIsOpen(true)}
                                        className="px-3 py-2 rounded-md font-yekan-bold bg-[#ef4056] text-white text-[12px] whitespace-nowrap">انتخاب
                                    زمان</button> :
                                <button onClick={() => setIsOpen(true)}
                                        className="px-3 py-2 rounded-md font-yekan-bold text-[#ef4056] border border-[#ef4056] text-[12px] whitespace-nowrap">تغییر
                                    زمان</button>
                        }
                    </div>
                </div>
                {

                    <div className={clsx("fixed inset-x-0 bottom-0 z-50 transition-all duration-400",isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none")}>
                        <div className="center-section mt-4 bg-white  p-4">
                            <div
                                className="center-section-top flex justify-between mb-10 border-b border-black/10 pb-2">
                                <div className="right-section">
                                    <h2 className="text-[14px] text-[#0c0c0c] font-yekan-bold mb-2">انتخاب بازه
                                        زمانی</h2>
                                    <div className='flex items-center gap-x-2'>
                                        <LiaTruckMovingSolid className="text-xl text-rose-700"/>
                                        <h2 className="text-[10px]">ارسال عادی</h2>
                                    </div>
                                </div>
                                <div className="left-section text-lg">
                                    <AiOutlineClose onClick={() => setIsOpen(false)}/>
                                </div>
                            </div>
                            <div className="center-section-bottom flex gap-x-2 overflow-x-auto hide-scrollbar">
                                {
                                    shippingOption.map(item => {
                                        return <div className="" onClick={() => {
                                            dispatch(setShippingInfo(item.id));
                                            setActiveTime(null)
                                        }}><DateCard key={item.id} {...item} shippingInfo={shippingInfo}/>
                                        </div>
                                    })
                                }
                            </div>
                            <div id="time" className="center-section-bottom mt-2">
                                {
                                    shippingInfo?.deliveryTimes.map(item => {
                                        return <div className="flex  items-center gap-x-2 py-4 border-b border-black/10"
                                                    onClick={() => {
                                                        setActiveTime(item.id);
                                                        dispatch(setSelectTime(item.time));
                                                        setIsOpen(false)
                                                    }} key={item.id}>
                                            <div
                                                className={clsx("size-5  rounded-full", activeTime === item.id ? "border-6 border-blue-500" : "border-2 border-black")}></div>
                                            <h2 className={clsx("text-[14px]", activeTime === item.id && "font-bold")}>ساعت {item.time} </h2>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                }
                <div
                    className="bottom-section flex items-center gap-x-1 text-[14px] text-[#b12ba4] font-yekan-bold mt-4 cursor-pointer">
                    <h2>با ارسال رایگان بخرید</h2>
                    <IoIosArrowBack/>
                </div>
            </div>
        </div>
    )
}
export default ShippingOptionMobile
