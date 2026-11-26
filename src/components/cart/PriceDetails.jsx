import React from 'react'
import { PiWarningCircleLight } from "react-icons/pi";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router";
const PriceDetails = ({cartProducts}) => {
    const {isAuth}=useSelector(state => state.login)
    const navigate=useNavigate()
    const handleClick=()=>{
        if (!isAuth){
            navigate('/login',{
                state:{from:'/cart'}
            })
        }
        else {
            navigate('/checkout')
        }
    }
    const totalPrice=cartProducts.map(item=>{
        return (item.price)*(item.quantity)
    }).reduce((item,total)=>{
        return item+total
    },0)
    const totalFinalPrice=cartProducts.map(item=>{
        return item.finalPrice*item.quantity
    }).reduce((item,total)=>{
        return item+total
    },0)
    const profit=totalPrice-totalFinalPrice
    return (
        <>
            <div className="price-details border border-black/10 rounded-2xl py-8 bg-[#F7F8FA] h-fit">
                <h2 className="text-[#1f1f1f] font-yekan-bold mb-8 px-4">جزییات پرداخت</h2>
                <div className="price-details-item flex justify-between items-center text-[14px] text-[#5c5c5c] px-4 py-2">
                    <h2 className="right-section">مجموع قیمت کالاها (<span className="font-shabnam">{cartProducts.length}</span> کالا)</h2>
                    <div className="left-section flex gap-x-1 items-center">
                        <h2 className="font-shabnam">{totalPrice.toLocaleString()}</h2>
                        <h2 className="text-[10px] font-yekan-bold">تومان</h2>
                    </div>
                </div>
                <div className="price-details-item flex justify-between items-center text-[14px] text-[#2e7b32] bg-[#3daa581f] px-4 py-2">
                    <h2 className="right-section">سود شما از خرید</h2>
                    <div className="left-section flex gap-x-1 items-center">
                        <h2 className="font-shabnam text-[16px] font-bold">{profit.toLocaleString()}</h2>
                        <h2 className="text-[10px] font-yekan-bold">تومان</h2>
                    </div>
                </div>
                <div className="price-details-item flex justify-between items-center text-[14px] text-[#5c5c5c] px-4 py-2">
                    <h2 className="right-section font-yekan-bold">مجموع سبد خرید</h2>
                    <div className="left-section flex gap-x-1 items-center">
                        <h2 className="font-shabnam text-[16px] font-bold">{totalFinalPrice.toLocaleString()}</h2>
                        <h2 className="text-[10px] font-yekan-bold">تومان</h2>
                    </div>
                </div>
                <button onClick={handleClick} className="py-3 rounded-md w-[90%] text-white bg-[#ed1944] mx-auto block mt-4 cursor-pointer">ثبت سفارش</button>
                <div className="warning px-4 flex gap-x-1 mt-5">
                    <PiWarningCircleLight />
                    <h2 className="text-[12px] text-[#5c5c5c] leading-6">
                        مبلغ سفارش هنوز پرداخت نشده و‌ در صورت اتمام موجودی، کالاها از سبد حذف می‌شوند.</h2>
                </div>
            </div>
        </>
    )
}
export default PriceDetails
