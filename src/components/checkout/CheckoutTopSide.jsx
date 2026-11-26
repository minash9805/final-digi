import React from 'react'
import {IoMdArrowForward} from "react-icons/io";
import digiLogo from '/src/assets/images/digikala-header.svg'
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import {resetShippingInfo,resetSelectTime} from "../../redux/shipping/shippingSlice.js";
const CheckoutTopSide = ({children, isPaymentPage}) => {
    const navigate = useNavigate()
    const dispatch=useDispatch()
    const handleClick = () => {
        if (isPaymentPage) {
            navigate('/checkout')

        } else {
            navigate('/cart')
            dispatch(resetShippingInfo())
            dispatch(resetSelectTime())
        }
    }
    return (
        <>
            <div className="lg:border border-black/10 p-4 flex lg:justify-center relative rounded-md mb-2 border-b">
                <div onClick={handleClick}
                     className="right-section flex items-center gap-x-1 lg:absolute right-4 top-3.25 cursor-pointer">
                    <IoMdArrowForward className="text-xl"/>
                    <h2 className="text-[#0c0c0c] text-[14px] lg:text-[16px] font-yekan-bold">{children}</h2>
                </div>
                <div className="center-section hidden lg:block">
                    <img src={digiLogo} alt=""/>
                </div>
            </div>
        </>
    )
}
export default CheckoutTopSide
