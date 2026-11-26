import React, {useEffect, useState} from 'react'
import {useNavigate} from "react-router";
import {useSelector} from "react-redux";
import clsx from "clsx";
const PricesBox = ({cartProducts,isPaymentPage,btnTitle}) => {
    const {shippingInfo,selectTime}=useSelector(state => state.shipping)
    const navigate=useNavigate()
    const handleClick=()=>{
        const target=document.getElementById("time")
        target.scrollIntoView({
            behavior:"smooth"
        })

    }
    const totalPrice = cartProducts.map(item => {
        return item.price * item.quantity
    }).reduce((item, total) => {
        return item + total
    }, 0)
    const totalFinalPrice = cartProducts.map(item => {
        return item.finalPrice * item.quantity
    }).reduce((item, total) => {
        return item + total
    }, 0)
    const profit = totalPrice - totalFinalPrice
    return (
        <>
            <div className="prices-box p-4 lg:border border-black/10 rounded-md sticky top-5">
                <div className="prices-box-item flex items-center justify-between py-4 border-b border-black/10">
                    <h2 className="text-[11px] lg:text-[12px] text-[#62666d] font-yekan-bold">قیمت کالاها (<span
                        className="font-shabnam">{cartProducts.length}</span>)</h2>
                    <h2 className="font-shabnam text-[12px] lg:text-[14px] text-[#62666d]">{totalPrice.toLocaleString()} <span
                        className="text-[10px] font-bold">تومان</span></h2>
                </div>
                <div className="prices-box-item text-[11px] lg:text-[12px] flex justify-between py-4 border-b border-black/10">
                    {
                        isPaymentPage ?
                            <h2>مجموع هزینه ارسال</h2>
                            :
                            <h2>ارسال عادی</h2>
                    }
                    {
                        !selectTime ?
                            <h2 className="text-[11px] text-[#23254e]">تعیین نشده</h2>
                            :
                            <div className="flex items-center gap-x-2">
                                <h2 className="line-through font-shabnam text-[12px] text-[#a1a3a8]">{shippingInfo?.shippingFee.toLocaleString()}</h2>
                                <h2 className="font-shabnam">{shippingInfo?.finalShippingFee.toLocaleString()} <span
                                    className="text-[10px] font-yekan-bold">تومان</span></h2>
                            </div>
                    }
                </div>
                {
                    profit>0 &&
                    <div className="prices-box-item text-[12px] lg:text-[14px] text-[#2e7b32] flex justify-between py-4">
                        <h2>سود شما از خرید</h2>
                        <h2 className="font-shabnam">{profit.toLocaleString()} <span
                            className="text-[10px] font-yekan-bold">تومان</span></h2>
                    </div>
                }
                <div className="prices-box-item text-[12px] lg:text-[14px] text-[#212121] flex justify-between py-4">
                    <h2>مبلغ قابل پرداخت</h2>
                    <div className="flex gap-x-2 items-center">
                        <h2 className="line-through font-shabnam text-[12px] text-[#a1a3a8]">

                            {

                              selectTime?
                              (totalPrice+shippingInfo?.shippingFee).toLocaleString()
                                  :
                                  profit>0 ? totalPrice.toLocaleString() : ""

                            }
                        </h2>
                        <h2 className="font-shabnam">
                            {
                                !selectTime ?
                                    totalFinalPrice.toLocaleString()
                                    : (totalFinalPrice + shippingInfo?.finalShippingFee).toLocaleString()
                            }
                            <span className="text-[10px] font-yekan-bold">تومان</span></h2>
                    </div>
                </div>
                {
                    !selectTime ?
                        <button onClick={handleClick}
                            className={clsx("w-full py-3 rounded-md text-[#ef4056] border border-[#ef4056] text-[14px] font-yekan-bold mt-2 ",isPaymentPage ? "hidden" :"hidden lg:block")}>انتخاب
                            زمان ارسال
                        </button>
                        :
                        <button onClick={()=>navigate('/payment')}
                            className={clsx("w-full py-3 rounded-md text-white border bg-[#ef4056] text-[14px] font-yekan-bold mt-2 ",isPaymentPage ? "hidden":"hidden lg:block")}>ثبت سفارش
                        </button>
                }
                {
                    isPaymentPage &&
                    <button
                            className="w-full py-3 rounded-md text-white border bg-[#ef4056] text-[14px] font-yekan-bold mt-2 hidden lg:block">پرداخت {btnTitle}
                    </button>
                }
            </div>
        </>
    )
}
export default PricesBox
