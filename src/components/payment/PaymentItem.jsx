import React, {useEffect, useState} from 'react'
import clsx from "clsx";

const PaymentItem = ({titleTop, titleBottom, children, item,isActive}) => {



    return (
        <>
            <div
                 className={clsx("item flex items-center gap-x-3  p-4 rounded-md w-full", isActive === item ? "border border-[#146ED5] bg-blue-100/30" : " border border-black/10")}>
                <div className="item-right text-xl">
                    {children}
                </div>
                <div className="item-left flex items-center justify-between w-full">
                    <div className="right-section text-[#1f1f1f]">
                        <h2 className="text-[12px] lg:text-[14px]  font-yekan-bold mb-2 line-clamp-1">{titleTop}</h2>
                        <h2 className="text-[11px] lg:text-[12px] font-shabnam line-clamp-1">{titleBottom}</h2>
                    </div>
                    {
                        isActive===item ?
                            <div className="left-section min-w-4 size-4 border-2 border-[#146ED5] rounded-full flex items-center justify-center">
                                <div className="size-2 bg-[#146ED5] rounded-full"></div>
                            </div>
                            :
                            <div className="left-section min-w-4 size-4 border border-black/40 rounded-full"></div>
                    }


                </div>
            </div>
        </>
    )
}
export default PaymentItem
