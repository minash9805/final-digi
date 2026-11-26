import React, {useState} from 'react'
import { AiOutlineMenu,AiOutlineGold } from "react-icons/ai";
import { PiFireSimple } from "react-icons/pi";
import { FaBasketShopping } from "react-icons/fa6";
import { LuShirt } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { RiDiscountPercentLine } from "react-icons/ri";
import HeaderBottomMobile from "./HeaderBottomMobile.jsx";
import {useSelector} from "react-redux";
import MegaMenu from "./MegaMenu.jsx";
import clsx from "clsx";
const HeaderBottom = () => {
    const {isAuth}=useSelector(state => state.login)
    const [openMenu,setOpenMenu]=useState(false)
    return (
        <>

                    <div className={clsx("header-bottom hidden lg:flex justify-between items-center px-4 relative")}>
                        <div className="header-bottom-right flex items-center gap-x-4 xl:gap-x-5">
                            <div onMouseEnter={()=>setOpenMenu(true)} onMouseLeave={()=>setOpenMenu(false)} className="header-bottom-right-item flex items-center gap-x-2 cursor-pointer py-2">
                                <AiOutlineMenu className="text-xl"/>
                                <h2 className="text-[14px] font-yekan-bold">دسته بندی کالا ها</h2>
                                <MegaMenu openMenu={openMenu}/>
                            </div>
                            <div className="line w-px h-4 bg-black/10 py-2"></div>
                            <div className="header-bottom-right-item flex items-center gap-x-1 xl:gap-x-2 text-black/50 font-yekan-bold cursor-pointer">
                                <RiDiscountPercentLine />
                                <h2 className="text-[12px]">شگفت انگیز ها</h2>
                            </div>
                            <div className="header-bottom-right-item flex items-center gap-x-1 xl:gap-x-2 text-black/50 font-yekan-bold cursor-pointer">
                                <FaBasketShopping className="text-md"/>
                                <h2 className="text-[12px]">سوپرمارکت</h2>
                            </div>
                            <div className="header-bottom-right-item flex items-center gap-x-1 xl:gap-x-2 text-black/50 font-yekan-bold cursor-pointer">
                                <AiOutlineGold className="text-xl"/>
                                <h2 className="text-[12px]">طلا و نقره دیجیتال</h2>
                            </div>
                            <div className="header-bottom-right-item flex items-center gap-x-1 xl:gap-x-2 text-black/50 font-yekan-bold cursor-pointer">
                                <PiFireSimple />
                                <h2 className="text-[12px]">پرفروش ترین ها</h2>
                            </div>
                            <div className="header-bottom-right-item flex items-center gap-x-1 xl:gap-x-2 text-black/50 font-yekan-bold cursor-pointer">
                                <LuShirt />
                                <h2 className="text-[12px]">دیجی استایل</h2>
                            </div>
                            <div className="line w-px h-4 bg-black/10 -mr-2"></div>
                            <div className="header-bottom-right-item flex items-center gap-x-1 xl:gap-x-2 text-black/50 font-yekan-bold -mr-2 cursor-pointer">
                                <h2 className="text-[12px]">در دیجی کالا بفروشید!</h2>
                            </div>
                        </div>
                        {
                            isAuth &&
                            <div className="header-bottom-left flex items-center gap-x-2 text-black/70 font-yekan-bold cursor-pointer relative group py-2">
                                <IoLocationOutline className="text-lg"/>
                                <h2 className="text-[12px]">تحویل به خانه</h2>
                                <div className="z-50 h-10 items-center bg-gray-600 absolute top-8 left-0 text-[12px] whitespace-nowrap py-2 rounded-md text-white hidden group-hover:flex px-3">
                                    <h2>مشاهده موجودی کالا ها و ارسال سریع تر</h2>
                                </div>
                            </div>
                        }
                        {
                            !isAuth &&
                            <div className="header-bottom-left px-4 py-2 rounded-2xl flex gap-x-2 bg-[#FFF6ED] text-orange-400 font-yekan-bold cursor-pointer relative group">
                                <IoLocationOutline className="text-lg"/>
                                <h2 className="text-[12px]">انتخاب آدرس</h2>
                                <div className="z-50 group-hover:flex items-center bg-gray-600 absolute top-10 text-white p-2 text-[12px] rounded-md hidden">انتخاب آدرس</div>
                            </div>
                        }
                    </div>
                    <HeaderBottomMobile/>

        </>
    )
}
export default HeaderBottom
