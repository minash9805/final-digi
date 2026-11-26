import React, { useState} from 'react'
import clsx from "clsx";
import {MdMoreVert, MdOutlineStore} from "react-icons/md";
import {FaStar} from "react-icons/fa";
import {AiOutlineLike, AiOutlineDislike} from "react-icons/ai";
import {GoShieldCheck, GoTrash} from "react-icons/go";
import {LuCalendarCheck2} from "react-icons/lu";
import {add, decrease, increase, remove} from "../../redux/cart/cartSlice.js";
import {FiMinus, FiPlus} from "react-icons/fi";
import {useDispatch, useSelector} from "react-redux";

const ProductIntroduction = ({product,comments}) => {
    const {cartProducts}=useSelector(state => state.cart)
    const dispatch=useDispatch()
    const cartProduct={...product,quantity:1,stock:product?.stock-1}
    const findProduct=cartProducts.find(item=>{
        return Number(item.id)===Number(cartProduct?.id)
    })
    const [isActive, setIsActive] = useState("btn1")
    const handleClick = (btn, id) => {
        setIsActive(btn)
        document.getElementById(id).scrollIntoView()
    }

    return (
        <>
            <div className="product-introduction mt-4">
                <div
                    className="product-introduction-top text-[12px] text-[#81858b] flex gap-x-5 font-yekan-bold border-b border-black/10  px-4">
                    <h2 className={clsx("py-4", isActive === "btn1" && "text-[#ef4056] border-b-4 border-[#ef4056] rounded-b-sm")}
                        onClick={() => handleClick("btn1", "intro")}>معرفی</h2>
                    <h2 className={clsx("py-4", isActive === "btn2" && "text-[#ef4056] border-b-4 border-[#ef4056] rounded-b-sm")}
                        onClick={() => handleClick("btn2", "spec")}>مشخصات</h2>
                    <h2 className={clsx("py-4", isActive === "btn3" && "text-[#ef4056] border-b-4 border-[#ef4056] rounded-b-sm")}
                        onClick={() => handleClick("btn3", "comments")}>دیدگاه ها</h2>
                    <h2 className={clsx("py-4", isActive === "btn4" && "text-[#ef4056] border-b-4 border-[#ef4056] rounded-b-sm")}
                        onClick={() => handleClick("btn4", "")}>پرسش ها</h2>
                </div>
                <div className="product-introduction-bottom grid gap-x-10 grid-cols-[3fr_1fr] relative">
                    <div className="product-introduction-bottom-right pr-4">
                        <div className="intro my-8 border-b-4 border-gray-400/20 pb-6">
                            <h2 id="intro" className="font-yekan-bold">معرفی</h2>
                            <div className="line w-25 h-0.5 bg-[#ef4056] my-2"></div>
                            <h2 className="text-[14px] leading-8 text-[#23254e]">{product?.title}</h2>
                        </div>
                        <div className="spec my-8 border-b-4 border-gray-400/20 pb-10">
                            <h2 id="spec" className="font-yekan-bold">مشخصات</h2>
                            <div className="line w-25 h-0.5 bg-[#ef4056] my-2"></div>
                            <div className="grid grid-cols-[1fr_3fr] mt-10">
                                <h2 id="spec" className="font-yekan-bold">مشخصات</h2>
                                <div>
                                    {
                                        product?.specifications[0].items.map(item => {
                                            return <div className="grid grid-cols-[1fr_2fr]">
                                                <h2 className="text-[14px] text-[#82858b] py-4">{item.title}</h2>
                                                <h2 className="text-[14px] text-[#0c0c0c] py-4 border-b border-gray-400/10">{item.value}</h2>
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="comments my-8 border-b-4 border-gray-400/20 pb-10 relative">
                            <h2 id="comments" className="font-yekan-bold">امتیاز و دیدگاه کاربران</h2>
                            <div className="line w-25 h-0.5 bg-[#ef4056] my-2"></div>
                            <div className="grid grid-cols-[1fr_3fr] gap-x-5 ">
                                <div className="rate-box  h-fit sticky top-0 pt-5">
                                    <h2 className="text-[10px]"><span className="text-[26px] ">۴.۱</span> از ۵</h2>
                                    <div className="flex items-start gap-x-2 my-4">
                                        <div className="flex text-xl gap-x-1 text-orange-300">
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar className="text-[#a2a2a2]"/>
                                        </div>
                                        <h2 className="text-[10px] text-[#a1a3a8]">از مجموع ۱۴ امتیاز</h2>
                                    </div>
                                    <h2 className="text-[11px] text-[#3f4064]">شما هم درباره این کالا دیدگاه ثبت
                                        کنید</h2>
                                    <button
                                        className="px-4 py-2 rounded-md border border-[#ef4056] text-[#ef4056] text-[12px] font-yekan-bold mt-4 w-[80%]">ثبت
                                        دیدگاه
                                    </button>
                                </div>
                                <div>
                                    {
                                        comments?.filter(item => {
                                            return Number(item.productId) === Number(product?.id)
                                        }).map(item => {
                                            return <div className="comment-box p-4 border-y border-black/10">
                                                <div className="comment-box-top flex justify-between">
                                                    <div className="comment-box-top-right flex items-center gap-x-5">
                                                        <h2 className="text-[14px] text-[#424242] font-yekan-bold">{item.userName}</h2>
                                                        <h2 className="px-2 py-px rounded-2xl text-[11px] text-[#2e7b32] bg-[#2e7b32]/10 w-fit font-yekan-bold">خریدار</h2>
                                                    </div>
                                                    <div
                                                        className="comment-box-top-left flex gap-x-2 items-center text-[#767981]">
                                                        <h2 className="font-shabnam text-[11px]">{item.createdAt}</h2>
                                                        <MdMoreVert className="text-[#a2a2a2]"/>
                                                    </div>
                                                </div>
                                                <div className="comment-box-center">
                                                    <div className="stars flex gap-x-1 text-orange-300 my-4">
                                                        {
                                                            Array.from({length: item.rating}).map(item => {
                                                                return <FaStar className="text-xl"/>
                                                            })
                                                        }
                                                    </div>
                                                    <div
                                                        className="main-comment text-[14px] text-[#0c0c0c] leading-8">{item.comment}</div>
                                                </div>
                                                <div
                                                    className="comment-box-bottom flex items-center justify-between mt-4">
                                                    <div className="comment-box-bottom-right flex items-center gap-x-2">
                                                        <MdOutlineStore className="text-[#333333]"/>
                                                        <h2 className="text-[11px] text-[#212121]">دیجی کالا</h2>
                                                    </div>
                                                    <div className="comment-box-bottom-left flex gap-x-5">
                                                        <div className="flex items-center gap-x-px">
                                                            <span className="font-shabnam">{item.likes}</span>
                                                            <AiOutlineLike/>
                                                        </div>
                                                        <div className="flex items-center gap-x-px">
                                                            <span className="font-shabnam">0</span>
                                                            <AiOutlineDislike/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>


                <div className="mb-10">
                    <div
                        className="product-introduction-bottom-left border border-black/10 rounded-md p-4 h-fit mt-4 bg-[#F8F8F8] sticky top-5">
                        <div className="section-top mt-4 flex gap-x-2 items-start ">
                            <img className="w-20" src={product?.thumbnail} alt=""/>
                            <h2 className="text-[12px] line-clamp-2 leading-8">{product?.title}</h2>
                        </div>
                        <div className="line w-full h-px bg-black/10 mt-4"></div>
                        <div className="section-center flex flex-col gap-y-4 mt-4">
                            <div className="flex items-center text-[12px] text-[#3f4064] gap-x-2">
                                <MdOutlineStore className="text-lg"/>
                                <h2>دیجی کالا</h2>
                            </div>
                            <div className="flex items-center text-[12px] text-[#3f4064] gap-x-2">
                                <GoShieldCheck className="text-lg"/>
                                <h2>گارانتی اصالت و سلامت فیزیکی کالا</h2>
                            </div>
                            <div className="flex items-center text-[12px] text-[#3f4064] gap-x-2">
                                <LuCalendarCheck2 className="text-lg text-[#1672dd]"/>
                                <h2>موجود در انبار فروشنده و دیجی‌کالا</h2>
                            </div>
                        </div>
                        <div className="section-bottom">
                            <div className="section-bottom-top mt-4">
                                {
                                    product?.discount > 0 &&
                                    <div className="flex justify-end gap-x-2 mb-1">
                                        <h2 className="price text-[12px] text-[#c0c2c5] font-shabnam line-through">{product?.price.toLocaleString()}</h2>
                                        <h2 className="discount font-shabnam px-2 py-px bg-[#d32f2f] text-white rounded-2xl w-fit text-[12px] font-semibold">% {product?.discount}</h2>
                                    </div>
                                }
                                <div className="flex justify-end items-center gap-x-1">
                                    <h2 className="final-price text-[19px] font-shabnam font-semibold">{product?.finalPrice.toLocaleString()}</h2>
                                    <h2 className="text-[10px] font-yekan-bold">تومان</h2>
                                </div>
                            </div>
                            <div className="section-bottom-bottom mt-2">
                                <h2 className="text-[#107e18] text-[12px] font-yekan-bold">
                                    بهترین قیمت در ۳۰ روز گذشته</h2>
                                {
                                    !findProduct &&
                                    <button onClick={()=>dispatch(add(cartProduct))}
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
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
export default ProductIntroduction
