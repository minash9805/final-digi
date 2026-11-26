import React, {useState} from 'react'
import {FaStar} from "react-icons/fa6";
import {useNavigate} from "react-router";


const MessageBoxCard = ({id,title, thumbnail, price, discount, finalPrice, rating,setShow}) => {

    const navigate = useNavigate()
    return (
        <>
            <div onClick={()=>{navigate(`/product/${id}`);setShow(false)}}
                className="message-box-card grid grid-cols-[1fr_2fr] gap-x-2 border-b border-black/10 py-2 min-h-32.25 cursor-pointer">
                <div className="right-section relative">
                    <img className="w-25" src={thumbnail} alt=""/>


                </div>
                <div className="left-section">
                    <div className="title line-clamp-1 text-[14px] text-[#424242] leading-8">{title}</div>
                    <div className="rate flex items-center gap-x-2 font-shabnam text-[12px] text-[#424242] mt-2">
                        <FaStar className="text-orange-300 text-[14px]"/>
                        <h2>{rating}</h2>
                    </div>
                    <div className="price flex items-center font-shabnam gap-x-1 justify-end mt-2">
                        {
                            discount > 0 &&
                            <>
                                <div
                                    className="discount bg-[#ed1944] text-white rounded-2xl flex justify-center items-center w-8 h-5 text-[12px]">%{discount}</div>
                                <div className="price text-[#a2a2a2] line-through decoration-1">
                                    <h2>{price.toLocaleString()}</h2>
                                </div>
                            </>
                        }
                        <div
                            className="final-price text-[18px] text-[#1f1f1f] font-semibold">{finalPrice.toLocaleString()}</div>
                        <div className="text-[10px] font-yekan-bold">تومان</div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default MessageBoxCard
