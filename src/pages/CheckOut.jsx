import React, {useState, useEffect} from 'react'
import CheckoutTopSide from "../components/checkout/CheckoutTopSide.jsx";
import AddressBox from "../components/checkout/AddressBox.jsx";
import PricesBox from "../components/checkout/PricesBox.jsx";
import RightBottomBox from "../components/checkout/RightBottomBox.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {resetShippingInfo, resetSelectTime} from "../redux/shipping/shippingSlice.js";
import clsx from "clsx";

const CheckOut = () => {
    const {cartProducts} = useSelector(state => state.cart)
    const {selectTime,shippingInfo} = useSelector(state => state.shipping)
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        if (cartProducts.length === 0) {
            navigate('/cart')
            dispatch(resetSelectTime())
            dispatch(resetShippingInfo())
        }

    }, [cartProducts.length]);
    const totalPrice = cartProducts.map(item => {
        return item.price * item.quantity
    }).reduce((item, total) => {
        return item + total
    }, 0)
    const totalFinalPrice = cartProducts.map(item => {
        return item.finalPrice * item.quantity
    }).reduce((item, total) => {
        return item + total
    }, 0)
    const profit = totalPrice - totalFinalPrice
    return (
        <>
            {
                isOpen &&
                <div className="fixed inset-y-0 inset-x-0 bg-black/30 lg:hidden"></div>
            }
            <div className="checkout w-[95%] lg:w-[85%] mx-auto mt-10">
                <div className="checkout-top">
                    <CheckoutTopSide>آدرس و زمان ارسال</CheckoutTopSide>
                </div>
                <div className="checkout-bottom grid gap-x-2 grid-cols-1 lg:grid-cols-[3fr_1fr]">
                    <div className="right-section">
                        <AddressBox/>
                        <RightBottomBox cartProducts={cartProducts} isOpen={isOpen} setIsOpen={setIsOpen}/>
                    </div>
                    <div className="left-section relative">
                        <PricesBox cartProducts={cartProducts}/>
                    </div>
                </div>
                <div className="footer-mobile lg:hidden sticky bottom-0 flex justify-between items-center p-2 pb-4 bg-white">
                  <div className="right-section w-[50%]">
                      {
                          !selectTime ?
                              <button
                                  className={clsx("w-full py-3 rounded-md text-[#ef4056] border border-[#ef4056] text-[14px] font-yekan-bold mt-2 text-center block")}>انتخاب
                                  زمان ارسال
                              </button>
                              :
                              <button onClick={() => navigate('/payment')}
                                      className={clsx("w-full py-3 rounded-md text-white border bg-[#ef4056] text-[14px] font-yekan-bold mt-2 text-center block")}>ثبت
                                  سفارش
                              </button>
                      }
                  </div>
                  <div className="left-section">
                      <div className="left-section-top text-[10px] text-[#81858b] mb-2">جمع سبد خرید</div>
                      <div className="left-section-bottom">
                          <h2 className="text-[13px] font-shabnam font-semibold">
                              {
                                  !selectTime ?
                                      totalFinalPrice.toLocaleString()
                                      : (totalFinalPrice + shippingInfo?.finalShippingFee).toLocaleString()
                              }
                              <span className="text-[10px] font-yekan-bold">تومان</span></h2>
                      </div>
                  </div>

                </div>
            </div>
        </>
    )
}
export default CheckOut
