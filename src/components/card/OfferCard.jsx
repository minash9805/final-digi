import React from 'react'
import {FaStar} from "react-icons/fa";
import clsx from "clsx";
import {useNavigate} from "react-router";

const OfferCard = ({id, title, price, discount, finalPrice, rating, thumbnail}) => {
    const navigate = useNavigate()
    return (
        <>
            <div
                className="offer-card w-48 h-82 lg:w-78 lg:h-120.75 p-4 hover:shadow-xl cursor-pointer relative border border-black/10 lg:border-0 rounded-lg"
                onClick={() => navigate(`/product/${id}`)}>
                <div className="image mb-2 lg:mb-10 flex justify-center items-center">
                    <img className="w-50.75  lg:w-60 lg:h-60" src={thumbnail} alt=""/>
                </div>
                <h2 className="title text-[12px] text-[#3f4064] line-clamp-2 leading-6 mb-8">{title}</h2>
                <div
                    className="rate absolute top-40 right-5 lg:static flex items-center justify-end gap-x-2 mb-5 border border-black/10 lg:border-0 rounded-2xl bg-white px-1">
                    <span
                        className="text-[11px] lg:text-[12px] font-shabnam font-semibold order-2 lg:order-1">{rating}</span>
                    <FaStar className="text-[#f9bc00] text-[11px] lg:text-[16px] order-1 lg:order-2"/>
                </div>
           <div className="desktop-price">
               <div
                   className={clsx("final-price flex items-center mb-2 lg:mb-5", discount > 0 ? "justify-between" : "justify-end")}>
                   {
                       discount > 0 &&
                       <div
                           className="hidden lg:flex final-price-right w-8.5 h-5 font-shabnam bg-[#d32f2f] text-white text-[12px] rounded-2xl  justify-center items-center">
                           {discount}%
                       </div>
                   }
                   <div className="hidden final-price-left lg:flex items-center gap-x-1">
                       <h2 className="text-[16px] text-[#3f4064] font-shabnam font-bold">{finalPrice.toLocaleString()}</h2>
                       <h2 className="text-[10px] font-yekan-bold">تومان</h2>
                   </div>
               </div>
               {
                   discount > 0 &&
                   <div
                       className="hidden  price line-through text-[12px] text-[#c0c2c5] font-shabnam lg:flex justify-end font-semibold">{price.toLocaleString()}</div>
               }
           </div>
                <div className="mobile-price lg:hidden">
                    <div className="price-top  h-4.5">
                        {
                            discount > 0 &&
                            <div className="flex items-center justify-end gap-x-2 font-shabnam">
                                <h2 className="price text-[11px] lg:text-[12px] text-[#c0c2c5] font-bold line-through">{price.toLocaleString()}</h2>
                                <h2 className="discount bg-[#D32F2F] text-white px-2 rounded-xl text-[11px] lg:text-[12px] font-bold">{discount}%</h2>
                            </div>
                        }
                    </div>
                    <div className="price-bottom flex justify-end gap-x-1 items-center text-[#23254e]">
                        <h2 className="final-price text-[16px] lg:text-[19px] font-bold font-shabnam">{finalPrice.toLocaleString()}</h2>
                        <span className="text-[10px] font-bold">تومان</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default OfferCard
