import React from 'react'
import Price from "../productDetails/Price.jsx";
import clsx from "clsx";
import Actions from "../productDetails/Actions.jsx";
import { MdOutlineStore } from "react-icons/md";
const CartItem = ({id, title, thumbnail, price, discount, finalPrice, quantity, isCartPage,index,length}) => {


    return (
        <>
            <div className={clsx("grid grid-cols-[2fr_8fr] gap-x-1 lg:gap-x-3 p-4",(length-1!==index || !isCartPage) && "border-b border-black/10")}>
                <div className="right-section ">
                    <img src={thumbnail} alt=""/>
                    <div className="lg:hidden"><Actions quantity={quantity} id={id} isCardPage={isCartPage}/></div>
                </div>
                <div className={clsx("left-section", isCartPage ? "grid grid-cols-1 lg:grid-cols-[3fr_1fr] items-start" : "")}>
                    <div className="left-section-top">
                        <h2 className={clsx("line-clamp-1 mb-4 text-[#1f1f1f]", isCartPage ? "text-[12px] lg:text-[14px]" : "text-[12px]")}>{title}</h2>
                        {
                            isCartPage &&
                            <div className="text-[11px] lg:text-[12px] text-[#5c5c5c] flex items-center gap-x-1 lg:gap-x-2">
                                <MdOutlineStore className="text-xl min-w-5"/>
                                <h2 className="truncate">دیجی کالا <span>.</span> ضمانت گارانتی و سلامت فیزیکی کالا</h2>
                            </div>
                        }
                    </div>
                    <div
                        className={clsx("left-section-bottom flex items-end lg:items-center justify-between", isCartPage ? "flex-col" : "flex-row")}>
                        <div className={clsx("hidden lg:block",isCartPage && "order-2")}>
                            <Actions quantity={quantity} id={id} isCardPage={isCartPage}/>
                        </div>
                        <div className={clsx("price",isCartPage && "order-1")}>
                            <Price price={price} discount={discount} finalPrice={finalPrice}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CartItem
