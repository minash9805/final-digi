import React, {useEffect, useState} from 'react'
import CheckoutTopSide from "../components/checkout/CheckoutTopSide.jsx";
import PaymentOptions from "../components/payment/PaymentOptions.jsx";
import OrderSummary from "../components/payment/OrderSummary.jsx";
import {PiWarningCircleLight} from "react-icons/pi";
import PricesBox from "../components/checkout/PricesBox.jsx";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router";

const Payment = () => {
    const {cartProducts}=useSelector(state => state.cart)
    const {shippingInfo,selectTime}=useSelector(state => state.shipping)
    const [btnTitle,setBtnTitle]=useState("اینترنتی")
    const navigate=useNavigate()
    useEffect(() => {
        if (cartProducts.length===0){
            navigate('/cart')
        }
    }, [cartProducts.length]);
    useEffect(() => {
        if (!shippingInfo || !selectTime ){
            navigate('/checkout')
        }
    }, []);
    return (
        <>
            <div className="payment w-[95%] lg:w-[85%] mx-auto mt-10 lg:my-10">
                <div className="payment-top">
                    <CheckoutTopSide isPaymentPage={true}>پرداخت</CheckoutTopSide>
                </div>
                <div className="payment-bottom grid gap-x-2 grid-cols-1 lg:grid-cols-[3fr_1fr]">
                    <div className="right-section">
                        <PaymentOptions setBtnTitle={setBtnTitle}/>
                        <OrderSummary/>
                        <div
                            className="border border-black/10 p-4 rounded-md flex items-center gap-x-2 mt-4 text-[12px] lg:text-[14px] text-[#81848b]">
                            <PiWarningCircleLight className="text-[16px] lg:text-[24px] text-[#848484]"/>
                            <h2>برای دریافت فاکتور، بعد از دریافت سفارش به حساب کاربری و صفحه جزئیات سفارش سر بزنید</h2>
                        </div>
                    </div>
                    <div className="left-section">
                        <PricesBox cartProducts={cartProducts} isPaymentPage={true} btnTitle={btnTitle}/>
                    </div>
                </div>
                <div className="footer-mobile lg:hidden sticky bottom-0 p-4 bg-white">
                    <button className="text-[14px] font-yekan-bold text-white bg-[#ef4056] w-full py-3 rounded-md">{btnTitle} پرداخت</button>
                </div>
            </div>
        </>
    )
}
export default Payment
