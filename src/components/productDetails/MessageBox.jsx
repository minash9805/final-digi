import React, {useState} from 'react'
import clsx from "clsx";
import { AiOutlineClose } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";
import { RiArrowLeftSLine } from "react-icons/ri";
import {useNavigate} from "react-router";
import MessageBoxCard from "../card/MessageBoxCard.jsx";
const MessageBox = ({show,setShow,similarProducts}) => {
const navigate=useNavigate()
    return (
        <div className={clsx('w-94  bg-white border border-black/10 rounded-md p-3 fixed left-5 bottom-5 z-50 transition-all duration-400 ease-out', !show ? "translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100")}>
        <div className="top-section flex justify-between items-center border-b border-black/10 pb-3 mb-3">
            <div className="flex items-center gap-x-2">
                <AiOutlineClose onClick={()=>setShow(false)}  className="text-xl cursor-pointer"/>
                <BsCheckCircleFill className="text-[#00a049] text-md"/>
                <h2 className="text-[#107e18] text-[15px] font-yekan-bold">کالا اضافه شد!</h2>
            </div>
            <div onClick={()=>navigate('/cart')} className="flex items-center justify-center gap-x-1 text-[12px] text-[#212121] px-3 py-2 rounded-2xl bg-[#f0f0f1] cursor-pointer">
                <h2>برو به سبد خرید</h2>
                <RiArrowLeftSLine className="text-lg"/>
            </div>
        </div>
            <div className="bottom-section overflow-y-auto h-100 hide-scrollbar">
                <h2 className="text-[15px] font-yekan-bold mb-3">خریدت رو کامل تر کن</h2>
                {
                    similarProducts.slice(0,3).map(item=>{
                        return <MessageBoxCard setShow={setShow} key={item.id} {...item}/>
                    })
                }
            </div>
        </div>
    )
}
export default MessageBox
