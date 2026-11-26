import React from 'react'

const TrendCard = ({title,thumbnail,index}) => {
    return (
        <>
            <div className="trend-card flex gap-x-2 lg:gap-x-0 lg:grid lg:grid-cols-[1fr_2fr] items-center ml-2 mb-2 lg:border-0 border border-black/10 rounded-md">
                <div className="trend-card-right relative">
                    <img className="min-w-18 h-18 lg:min-w-22 lg:h-22 rounded-r-md lg:rounded-r-0" src={thumbnail} alt=""/>
                    <div className="min-w-18 h-18 bg-gray-400/10 absolute top-0 inset-y-0 lg:hidden"></div>
                </div>

                <div className="trend-card-left flex gap-x-2 items-start">
                    <span className="bg-[#ef4056] min-w-5.5 min-h-5.5 rounded-full flex justify-center items-center text-white font-shabnam">{index+1}</span>
                    <h2 className="line-clamp-2 text-[11px] lg:text-[12px] text-[#3f4064] leading-6">{title}</h2>
                </div>
            </div>
        </>
    )
}
export default TrendCard
