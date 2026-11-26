import React from 'react'
import {useSelector} from "react-redux";
import { PiListHeart } from "react-icons/pi";
import { IoMdMore } from "react-icons/io";
const CartHeader = () => {
    const {cartProducts}=useSelector(state => state.cart)
    return (
        <>
            <div className="px-4 py-6 bg-white border-b border-black/10 flex justify-between">
                <div className="cart-header-right flex gap-x-2 items-center">
                    <h2 className="text-[#1f1f1f] font-yekan-bold">سبد خرید</h2>
                    {
                        cartProducts.length>0 &&
                        <h2 className="text-[11px] text-[#848484] font-yekan-bold"><span className="font-shabnam">{cartProducts.length}</span> کالا</h2>
                    }
                </div>
                <div className="cart-header-left text-2xl flex ">
                    <PiListHeart />
                    {
                        cartProducts.length>0 &&
                        <IoMdMore />
                    }
                </div>
            </div>
        </>
    )
}
export default CartHeader
