import React, {useEffect, useState} from 'react'
import { LiaTruckMovingSolid } from "react-icons/lia";
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";
import {useSelector} from "react-redux";
const OrderSummary = () => {
    const {shippingInfo,selectTime}=useSelector(state => state.shipping)
    const {cartProducts}=useSelector(state => state.cart)
    const totalFinalPrice=cartProducts.map(item=>{
        return item.finalPrice
    }).reduce((item,total)=>{
        return item+total
    },0)
    const [isOpen,setIsOpen]=useState(false)

    useEffect(() => {
        if (isOpen){
            const pic=document.getElementById("pic")
            pic.scrollIntoView({
                behavior:"smooth"
            })
        }
    }, [isOpen]);
    return (
        <>
            <div className="order-summary border border-black/10 py-4 px-6 rounded-md mt-4">
                <h2 className="top-section text-[14px] lg:text-[16px] text-[#0c0c0c] font-yekan-bold">خلاصه سفارش</h2>
                <div className="center-section flex items-center gap-x-5 mt-10">
                    <LiaTruckMovingSolid className="text-[24px] text-red-700 rotate-y-180"/>
                    <h2 className="text-[13px] lg:text-[15px] text-[#23254e] font-yekan-bold">{shippingInfo?.day} {shippingInfo?.date} - بازه {selectTime}</h2>
                    <h2 className="text-[11px] bg-[#f0f0f1] w-fit px-2 py-1 rounded-2xl"> {cartProducts.length} کالا</h2>
                </div>
                <div className="bottom-section">
                    <div className="bottom-section-top flex items-center justify-between text-[12px] text-[#62666d] mt-5">
                        <h2>ارسال عادی</h2>
                        {
                            !isOpen ?
                                <div onClick={()=>setIsOpen(true)} className="flex items-center gap-x-1 cursor-pointer">
                                    <h2>جزییات مرسوله</h2>
                                    <IoIosArrowDown />
                                </div>
                                :
                                <div onClick={()=>setIsOpen(false)} className="flex items-center gap-x-1 cursor-pointer">
                                    <h2>بستن</h2>
                                    <IoIosArrowUp />
                                </div>
                        }
                    </div>
                    {
                        isOpen &&
                        <div  className="bottom-section-bottom mt-4">
                            <div className="flex flex-wrap gap-3">
                                {
                                    cartProducts.map(item=>{
                                        return <img className="w-24" src={item.thumbnail} alt=""/>
                                    })
                                }
                            </div>
                            <h2 id="pic" className="text-[12px] text-[#62666d] font-yekan-bold mt-4">مبلغ مرسوله :
                                <span className="font-shabnam">{totalFinalPrice.toLocaleString()} <span className="text-[10px] font-yekan-bold">تومان</span></span>
                            </h2>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}
export default OrderSummary
