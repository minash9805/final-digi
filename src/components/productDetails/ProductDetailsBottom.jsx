import React from 'react'
import logo1 from '/src/assets/images/pd1.svg'
import logo2 from '/src/assets/images/pd2.svg'
import logo3 from '/src/assets/images/pd3.svg'
import logo4 from '/src/assets/images/pd4.svg'
import logo5 from '/src/assets/images/pd5.svg'
const ProductDetailsBottom = () => {
    return (
        <>
            <div className="grid grid-cols-5 pt-4 pb-6 border-t border-b-4 border-gray-400/20 mt-4">
                <div
                    className="product-details-bottom-item text-[11px] text-[#a1a3a8] flex justify-center items-center gap-x-2 font-semibold">
                    <img className="w-10.5" src={logo1} alt=""/>
                    <h2>امکان تحویل اکسپرس</h2>
                </div>
                <div
                    className="product-details-bottom-item text-[11px] text-[#a1a3a8] flex justify-center items-center gap-x-2 font-semibold">
                    <img className="w-10.5" src={logo2} alt=""/>
                    <h2>24 ساعته 7 روز هفته</h2>
                </div>
                <div
                    className="product-details-bottom-item text-[11px] text-[#a1a3a8] flex justify-center items-center gap-x-2 font-semibold">
                    <img className="w-10.5" src={logo3} alt=""/>
                    <h2>امکان پرداخت در محل</h2>
                </div>
                <div
                    className="product-details-bottom-item text-[11px] text-[#a1a3a8] flex justify-center items-center gap-x-2 font-semibold">
                    <img className="w-10.5" src={logo4} alt=""/>
                    <h2>هفت روز ضمانت بازگشت کالا</h2>
                </div>
                <div
                    className="product-details-bottom-item text-[11px] text-[#a1a3a8] flex justify-center items-center gap-x-2 font-semibold">
                    <img className="w-10.5" src={logo5} alt=""/>
                    <h2>ضمانت اصل بودن کالا</h2>
                </div>
            </div>
        </>
    )
}
export default ProductDetailsBottom
