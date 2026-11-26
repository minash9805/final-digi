import React from 'react'

const MiniCard = ({title,logo}) => {
    return (
        <>
            <div className="mini-card w-22.5 h-31 border border-black/10 rounded-md px-2 cursor-pointer relative">
                <div className="cover w-22.5 h-21 bg-gray-400/10 absolute top-0 inset-x-0 rounded-t-md lg:hidden"></div>
                <div className="h-22.5 flex items-center">
                    <img className="w-22.5 rounded-t-md" src={logo} alt=""/>
                </div>
                <h2 className="text-[11px] lg:text-[12px] text-center font-yekan-bold mt-1">{title}</h2>
            </div>
        </>
    )
}
export default MiniCard
