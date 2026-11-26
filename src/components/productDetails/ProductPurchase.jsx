import React, {useEffect} from 'react'
import {GoShieldCheck} from "react-icons/go";
import {LuCalendarCheck2} from "react-icons/lu";
import {FiTruck} from "react-icons/fi";
import {IoIosArrowBack} from "react-icons/io";
import {MdOutlineStore} from "react-icons/md";
import { FiPlus,FiMinus } from "react-icons/fi";
import { GoTrash } from "react-icons/go";
import {add,increase,decrease,remove} from "../../redux/cart/cartSlice.js";
import {useDispatch, useSelector} from "react-redux";
import Price from "./Price.jsx";
const ProductPurchase = ({product,setShow}) => {
    const {cartProducts}=useSelector(state => state.cart)
    const dispatch=useDispatch()
    const cartProduct={...product,quantity:1,stock:product?.stock-1}
    const findProduct=cartProducts.find(item=>{
        return Number(item.id)===Number(cartProduct?.id)
    })
    useEffect(() => {
        console.log(cartProducts)

    }, [cartProducts]);
    return (
        <>
            <div className="border border-black/10 rounded-md bg-[#F7F7F8]  p-4">
                <div className="left-item-top border-b border-black/10 pb-4">
                    <h2 className="text-[#0c0c0c] font-bold">فروشنده</h2>
                    <div className="flex gap-x-4 items-end text-[15px] text-[#3f4064] mt-4">
                        <MdOutlineStore className="text-2xl"/>
                        <h2>دیجی کالا</h2>
                    </div>
                    <div className="flex items-center gap-x-2 text-[12px] text-[#81858b] mt-4 pr-8">
                        <h2 className="whitespace-nowrap"><span
                            className="font-shabnam text-[#00a049] font-semibold">100%</span> رضایت از
                            کالا</h2>
                        <div className="line w-px h-5 bg-black/10"></div>
                        <h2 className="whitespace-nowrap">عملکرد <span
                            className="text-[#00a049] font-yekan-bold">عالی</span></h2>
                    </div>
                </div>
                <div className="left-item-center mt-4 border-b border-black/10 pb-4">
                 <Price price={product?.price} discount={product?.discount} finalPrice={product?.finalPrice}/>
                    <div className="left-item-center-center mt-2">
                        <h2 className="text-[#107e18] text-[12px] font-yekan-bold">
                            بهترین قیمت در ۳۰ روز گذشته</h2>
                        {
                            !findProduct &&
                            <button onClick={()=>{dispatch(add(cartProduct));setShow(true)}}
                                    className="cart py-3 rounded-lg text-white bg-[#ef4056] w-full text-[14px] mt-2 font-yekan-bold">افزودن
                                به سبد خرید
                            </button>
                        }
                        {
                            findProduct &&
                            <div className="quantity flex items-center gap-x-5 bg-white p-4 w-fit rounded-md shadow-2xl text-[#ed1944] mt-4">
                                <FiPlus onClick={()=>dispatch(increase(product?.id))}/>
                                <span className="font-shabnam">{findProduct?.quantity}</span>
                                {
                                    findProduct?.quantity>1 &&
                                    <FiMinus onClick={()=>dispatch(decrease(product?.id))}/>
                                }
                                {
                                    findProduct?.quantity===1 &&
                                    <GoTrash onClick={()=>dispatch(remove(product?.id))}/>
                                }
                            </div>
                        }
                    </div>
                    <div className="left-item-center-bottom mt-6 flex items-center gap-x-5">
                        <GoShieldCheck className="text-xl"/>
                        <h2 className="text-[12px] text-[#3f4064] font-yekan-bold">سرویس ویژه دیجی کالا:
                            ۷ روز تضمین بازگشت کالا</h2>
                    </div>
                </div>
                <div className="left-item-bottom mt-4">
                    <div className="left-item-bottom-top flex justify-between items-center">
                        <div className="flex items-center gap-x-2">
                            <LuCalendarCheck2 className="text-[#1672dd] text-xl"/>
                            <h2 className="text-[12px] text-[#3f4064] font-yekan-bold">روش و هزینه
                                تحویل</h2>
                        </div>
                        <IoIosArrowBack className="text-[#a2a2a2]"/>
                    </div>
                    <div className="left-item-bottom-bottom flex items-center gap-x-2 pr-5 mt-2">
                        <FiTruck className="text-[#ed1944] rotate-y-180 text-[12px]"/>
                        <h2 className="text-[12px] text-[#81858d]">تحویل عادی دیجی کالا <span
                            className="text-[11px] text-[#424242] font-yekan-bold">وابسته به سبد</span>
                        </h2>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductPurchase
