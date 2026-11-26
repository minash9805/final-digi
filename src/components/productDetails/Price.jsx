import React from 'react'


const Price = ({price,discount,finalPrice}) => {
    return (
        <>
            <div className="price">

                    {
                       discount > 0 &&
                        <div className="flex items-center justify-end gap-x-2 mb-1">
                            <h2 className="price text-[12px] text-[#c0c2c5] font-shabnam line-through">{price?.toLocaleString()}</h2>
                            <h2 className="discount font-shabnam px-2 py-px bg-[#d32f2f] text-white rounded-2xl w-fit text-[12px] font-semibold">% {discount}</h2>
                        </div>
                    }
                    <div className="flex justify-end items-center gap-x-1">
                        <h2 className="final-price text-[19px] font-shabnam font-semibold">{finalPrice?.toLocaleString()}</h2>
                        <h2 className="text-[10px] font-yekan-bold">تومان</h2>
                    </div>

            </div>
        </>
    )
}
export default Price
