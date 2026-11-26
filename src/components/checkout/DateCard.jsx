import React from 'react'
import clsx from "clsx";

const DateCard = ({id, day, date, shippingFee, finalShippingFee,shippingInfo}) => {
    return (
        <>
            <div
                className={clsx("border  rounded-md p-2 w-fit flex flex-col justify-center items-center gap-y-2", shippingInfo?.id === id ? "border-black/50" : "border-black/10")}>
                <h2 className="text-[14px] text-[#23254e]">{day}</h2>
                <h2 className="text-[14px] text-[#0c0c0c]">{date}</h2>
                <div className="bg-[#f0f0f1] rounded-md p-1">
                    <h2 className="text-[#94969c] text-[10px] line-through font-shabnam text-center">{shippingFee.toLocaleString()}</h2>
                    <div className="flex gap-x-1">
                        <h2 className="text-[12px] text-[#23254e] font-shabnam">{finalShippingFee.toLocaleString()}</h2>
                        <h2 className="text-[10px]">تومان</h2>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DateCard
