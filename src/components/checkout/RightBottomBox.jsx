import React, {useEffect, useState} from 'react'
import DigiPlus from "../cart/DigiPlus.jsx";
import {LiaTruckMovingSolid} from "react-icons/lia";
import Actions from "../productDetails/Actions.jsx";
import {IoTimeOutline} from "react-icons/io5";
import DateCard from "./DateCard.jsx";
import clsx from "clsx";
import { IoIosArrowBack } from "react-icons/io";
import {useDispatch, useSelector} from "react-redux";
import {setShippingInfo,setSelectTime} from "../../redux/shipping/shippingSlice.js";
import ShippingOptionMobile from "./ShippingOptionMobile.jsx";
const RightBottomBox = ({cartProducts,isOpen,setIsOpen}) => {
const dispatch=useDispatch()
    const {shippingInfo,selectTime}=useSelector(state => state.shipping)
    const [activeTime, setActiveTime] = useState(null)
    const shippingOptions = [
        {
            id: 1,
            day: "شنبه",
            date: "۳۰ آبان",
            shippingFee: 249000,
            finalShippingFee: 206000,
            deliveryTimes: [
                {id: 1, time: "۹-۱۲"},
                {id: 2, time: "۱۲-۱۶"},
                {id: 3, time: "۱۹-۲۱"}
            ]
        },
        {
            id: 2,
            day: "یکشنبه",
            date: "۱ آذر",
            shippingFee: 249000,
            finalShippingFee: 200000,
            deliveryTimes: [
                {id: 1, time: "۹-۱۲"},
                {id: 2, time: "۱۶-۱۸"},
                {id: 3, time: "۱۹-۲۱"}
            ]
        },
        {
            id: 3,
            day: "دوشنبه",
            date: "۲ آذر",
            shippingFee: 249000,
            finalShippingFee: 185000,
            deliveryTimes: [
                {id: 1, time: "۱۰-۱۲"},
                {id: 2, time: "۱۴-۱۶"},
                {id: 3, time: "۱۹-۲۱"}
            ]
        },
        {
            id: 4,
            day: "سه‌شنبه",
            date: "۳ آذر",
            shippingFee: 249000,
            finalShippingFee: 170000,
            deliveryTimes: [
                {id: 1, time: "۹-۱۲"},
                {id: 2, time: "۱۲-۱۵"},
                {id: 3, time: "۱۹-۲۱"}
            ]
        },
        {
            id: 5,
            day: "چهارشنبه",
            date: "۴ آذر",
            shippingFee: 249000,
            finalShippingFee: 164000,
            deliveryTimes: [
                {id: 1, time: "۹-۱۲"},
                {id: 2, time: "۱۵-۱۸"},
                {id: 3, time: "۱۹-۲۱"}
            ]
        }
    ];

return (
        <>
            <div className="lg:border border-black/10 p-4 rounded-md mt-4 mb-8">
                <div className="digi-plus -mt-10 lg:mt-0">
                    <DigiPlus/>
                </div>
          <div className="p-4 border border-black/10 rounded-lg mt-4 lg:p-0 lg:border-0 lg:mt-0 -mb-10 lg:mb-0">
              <div className="top-section flex gap-x-5 items-center mt-4 ">
                  <div className="top-section-right">
                      <LiaTruckMovingSolid className="text-[36px] text-[#ef4056]"/>
                  </div>
                  <div className="top-section-left">
                      <div className="top-section flex items-center gap-x-1 text-[#23254e]">
                          <h2 className="font-yekan-bold text-[#23254e]">ارسال عادی</h2>
                          <h2 className="text-[11px] text-[#62666d] p-2 rounded-xl bg-[#f0f0f1]"><span
                              className="font-shabnam">{cartProducts.length}</span> کالا</h2>
                      </div>
                      <div className="bottom-section text-[11px] text-[#62666d]"><span
                          className="font-shabnam">1</span> روز
                      </div>
                  </div>
              </div>
              <div className="cart-items mt-8 flex flex-wrap gap-y-5 gap-x-8 ">
                  {
                      cartProducts.map(item => {
                          return <div className="item flex flex-col items-center justify-center">
                              <img className="w-22.5" src={item.thumbnail} alt=""/>
                              <div className="w-fit">
                                  <Actions id={item.id} quantity={item.quantity} isCheckoutPage={true}/>
                              </div>
                          </div>
                      })
                  }
              </div>
              <div className="lg:hidden"> <ShippingOptionMobile shippingOption={shippingOptions} activeTime={activeTime} setActiveTime={setActiveTime} isOpen={isOpen} setIsOpen={setIsOpen}/></div>
          </div>
                <div className="shipping-options mt-10  hidden lg:block">
                    <div className="top-section flex items-center gap-x-5">
                        <div className="top-section-right text-xl">
                            <IoTimeOutline/>
                        </div>
                        <div className="top-section-left ">
                            <div className="text-[12px] text-[#23254e] flex gap-x-2">
                                {
                                    shippingInfo ?
                                        <h2>هزینه ارسال <span className="text-[#94969c] line-through font-shabnam">

                                    {shippingInfo?.shippingFee.toLocaleString()}
                                </span></h2>:
                                        <h2>هزینه ارسال <span className="text-[#94969c] line-through font-shabnam">{Number(249000).toLocaleString()}</span></h2>
                                }

                                {
                                    shippingInfo ?
                                        <h2 className="font-semibold font-shabnam">
                                            {shippingInfo?.finalShippingFee.toLocaleString()}
                                        </h2>:
                                        <h2 className="font-shabnam">{Number(206000).toLocaleString()}</h2>
                                }

                                <h2 className="-mr-1 font-yekan-bold">تومان</h2>
                            </div>

                            {
                                selectTime===null ?
                                    <h2 className="text-[14px] font-yekan-bold mt-2">زمان انتخاب نشده</h2>
                                    :
                                    <h2 className="text-[14px] text-[#23254e] font-yekan-bold mt-2">{shippingInfo?.day} {shippingInfo?.date} ساعت {selectTime} </h2>
                            }
                        </div>
                    </div>
                    <div className="center-section mt-4">
                        <div className="center-section-top flex gap-x-2">
                            {
                                shippingOptions.map(item => {
                                    return <div className="" onClick={() => {dispatch(setShippingInfo(item.id));setActiveTime(null)}}><DateCard key={item.id} {...item} shippingInfo={shippingInfo}/>
                                    </div>
                                })
                            }
                        </div>
                        <div id="time" className="center-section-bottom mt-2">
                            {
                                shippingInfo?.deliveryTimes.map(item => {
                                    return <div className="flex  items-center gap-x-2 py-4 border-b border-black/10"
                                                onClick={() => {
                                                    setActiveTime(item.id);
                                                    dispatch(setSelectTime(item.time));
                                                }} key={item.id}>
                                        <div
                                            className={clsx("size-5  rounded-full", activeTime === item.id ? "border-6 border-blue-500" : "border-2 border-black")}></div>
                                        <h2 className={clsx("text-[14px]", activeTime === item.id && "font-bold")}>ساعت {item.time} </h2>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div className="bottom-section flex items-center gap-x-1 text-[14px] text-[#b12ba4] font-yekan-bold mt-4 cursor-pointer">
                        <h2>با ارسال رایگان بخرید</h2>
                        <IoIosArrowBack />
                    </div>
                </div>

            </div>
        </>
    )
}
export default RightBottomBox
