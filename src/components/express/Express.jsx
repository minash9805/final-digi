import React, {useEffect, useState} from 'react'
import SliderBox from "../sliderBox/SliderBox.jsx";
import expressLogo from '/src/assets/images/express-logo.webp'
import {IoIosArrowBack} from "react-icons/io";
import clsx from "clsx";

const Express = ({products, user,isAuth}) => {
    const express = products.filter(item => {
        return item.isExpress
    }).slice(0, 10)
    const [filter, setFilter] = useState([])
    useEffect(() => {
        setFilter(express)
    }, [products]);
    const [isActive, setIsActive] = useState(0)
    const handleFilter = (catId) => {
      if (catId!==0){
          setFilter(
              products.filter(item => {
                  return item.isExpress && item.categoryId === catId
              })
          )
      }else {
          setFilter(express)
      }
        setIsActive(catId)

    }

    return (
        <>
            <div className="express">
                <SliderBox products={filter} isExpress={true}>
                    <div className="express-header">
                        <div className="express-header-top flex justify-between items-center">
                            <div className="express-top-right flex gap-x-2 items-center">
                                <img className="w-20.5 h-6" src={expressLogo} alt=""/>
                                <h2 className="text-[20px] text-[#1f1f1f] font-yekan-bold">تحویل بگیر!</h2>
                            </div>
                            {
                                isAuth &&
                                <div className="express-top-left">
                                    <button
                                        className="p-2 rounded-md bg-[#E9E9EB] lg:flex gap-x-2 items-center text-[12px] cursor-pointer hidden">
                                        <h2>مشاهده همه</h2>
                                        <IoIosArrowBack/>
                                    </button>
                                    <button className="flex gap-x-2 items-center text-[12px] cursor-pointer lg:hidden font-yekan-bold absolute left-3 top-6">
                                        <h2>همه</h2>
                                        <IoIosArrowBack />
                                    </button>
                                </div>
                            }
                        </div>
                        {
                            isAuth &&
                            <div className="express-header-center text-[12px] text-[#62666d] p-2 my-3 rounded-md bg-[#F6EFDD]">
                                <h2><span
                                    className="font-bold">خانه</span>: {user?.address.city} {user?.address.street} {user?.address.details}
                                </h2>
                            </div>
                        }
                        {
                            !isAuth &&
                            <div className="express-header-center lg:flex lg:justify-between p-3 my-3 rounded-md bg-[#FDECCE]">
                                <div className="express-header-center-right mb-2 lg:mb-0">
                                    <h2 className="text-[12px] lg:text-[14px] ">برای بررسی امکان ارسال، آدرس را انتخاب کنید.</h2>
                                </div>
                                <div className="express-header-center-left flex justify-end gap-x-1 items-center text-[#f57f17]">
                                    <h2 className="text-[12px] lg:text-[14px] font-yekan-bold">انتخاب آدرس</h2>
                                    <IoIosArrowBack/>
                                </div>
                            </div>
                        }
                        {
                            isAuth &&
                            <div className="express-header-bottom flex mb-3 gap-x-2 font-yekan-bold overflow-x-auto hide-scrollbar">
                                <div
                                    onClick={()=>handleFilter(0)}
                                    className={clsx("express-header-bottom-item whitespace-nowrap px-4 py-2 rounded-2xl border text-[11px] lg:text-[12px] cursor-pointer", isActive===0 ? "border-black/50" : "border-black/10")}>همه
                                </div>
                                <div onClick={() => handleFilter(11)}
                                     className={clsx("express-header-bottom-item whitespace-nowrap px-4 py-2 rounded-2xl border text-[11px] lg:text-[12px] cursor-pointer", isActive===11 ? "border-black/50" : "border-black/10")}>آرایشی
                                    بهداشتی
                                </div>
                                <div
                                    onClick={() => handleFilter(12)}
                                    className={clsx("express-header-bottom-item whitespace-nowrap px-4 py-2 rounded-2xl border text-[11px] lg:text-[12px] cursor-pointer", isActive===12 ? "border-black/50" : "border-black/10")}>مد
                                    و پوشاک
                                </div>
                                <div
                                    onClick={() => handleFilter(16)}
                                    className={clsx("express-header-bottom-item whitespace-nowrap px-4 py-2 rounded-2xl border text-[11px] lg:text-[12px] cursor-pointer", isActive===16 ? "border-black/50" : "border-black/10")}>پت
                                    شاپ
                                </div>
                                <div
                                    onClick={() => handleFilter(17)}
                                    className={clsx("express-header-bottom-item whitespace-nowrap px-4 py-2 rounded-2xl border text-[11px] lg:text-[12px] cursor-pointer", isActive===17 ? "border-black/50" : "border-black/10")}>کتاب
                                    و لوازم تحریر
                                </div>
                            </div>
                        }
                    </div>
                    {
                        !isAuth &&
                        <div className="cover h-58 lg:h-72 w-[98%] absolute bg-[#FFF9E6]/50 inset-y-0 top-34.5 lg:top-28 z-40"></div>
                    }
                </SliderBox>
            </div>
        </>
    )
}
export default Express
