import React from 'react'

const Card = ({title,price,discount,finalPrice,thumbnail}) => {
    return (
        <>
            <div className="card-1 w-33.5 h-58 lg:w-42 lg:h-71 flex flex-col justify-between border border-black/10 p-2 bg-white">
                <div className="img h-28.5 lg:h-41">
                    <img className="" src={thumbnail} alt=""/>
                </div>
                <h2 className="title-1 line-clamp-2 text-[12px] lg:text-[14px] text-[#424242] leading-6">{title}</h2>
                <div className="price-top  h-4.5">
                    {
                        discount>0 &&
                    <div className="flex items-center justify-end gap-x-2 font-shabnam">
                        <h2 className="discount bg-[#D32F2F] text-white px-2 rounded-xl text-[11px] lg:text-[12px] font-bold">{discount}%</h2>
                        <h2 className="price text-[11px] lg:text-[12px] text-[#c0c2c5] font-bold line-through">{price.toLocaleString()}</h2>
                    </div>
                    }
                </div>
                <div className="price-bottom flex justify-end gap-x-1 items-center text-[#23254e]">
                    <h2 className="final-price text-[16px] lg:text-[19px] font-bold font-shabnam">{finalPrice.toLocaleString()}</h2>
                    <span className="text-[10px] font-bold">تومان</span>
                </div>
            </div>
        </>
    )
}
export default Card
