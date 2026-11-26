import React from 'react'
import emptyBasket from '/src/assets/images/hand-basket.svg'
const EmptyCartBox = () => {
    return (
        <>
            <div className="empty-cart-box lg:border border-black/10 p-4 rounded-2xl">
                <div className="empty-cart-box-top text-[20px] text-[#1f1f1f] font-yekan-bold mb-10">
                    <h2 className="hidden lg:block">سبد خرید</h2>
                </div>
                <div className="empty-cart-box-bottom flex flex-col items-center justify-center mb-10">
                    <img className="w-30" src={emptyBasket} alt=""/>
                    <h2 className="text-[16px] lg:text-[18px] text-[#1f1f1f] font-yekan-bold">سبد دیجی‌کالایی شما خالی است!</h2>
                </div>
            </div>
        </>
    )
}
export default EmptyCartBox
