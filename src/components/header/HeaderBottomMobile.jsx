import React from 'react'
import { IoSearch } from "react-icons/io5";
import digiLogo from '/src/assets/images/digi-logo.svg'
import { TbCameraSearch } from "react-icons/tb";
import { HiOutlineBell } from "react-icons/hi2";
import {useNavigate} from "react-router";
import {useSelector} from "react-redux";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
const HeaderBottomMobile = () => {
    const navigate=useNavigate()
    const {isAuth}=useSelector(state => state.login)
    return (
        <>
            <div className="header-bottom-mobile-search grid grid-cols-[80%_20%] p-4 lg:hidden">
                <div onClick={()=>navigate('/search')} className="header-bottom-mobile-right flex justify-between items-center text-black/40 font-yekan-bold px-4 py-2 rounded-3xl border border-black/20">
                    <div className="search-right flex items-center gap-x-1">
                        <IoSearch className="text-xl"/>
                        <h2>جستجو در</h2>
                        <img className="w-15" src={digiLogo} alt=""/>
                    </div>
                    <div className="search-left">
                        <TbCameraSearch className="text-xl text-[#431883]/70"/>
                    </div>
                </div>
                <div className="header-bottom-mobile-left rounded-full flex items-center border border-black/20 size-10 justify-center justify-self-end">
                    <HiOutlineBell className="text-xl"/>
                </div>
            </div>
            <div className="header-bottom-mobile-location px-4 lg:hidden block">
                {
                    isAuth &&
                    <div className="flex items-center gap-x-2 cursor-pointer">
                        <IoLocationOutline />
                        <h2 className="text-[12px]">تحویل به خانه</h2>
                        <IoIosArrowDown className="text-[14px]"/>
                    </div>
                }
                {
                    !isAuth &&
                    <div className="flex items-center gap-x-2 text-amber-700 cursor-pointer">
                        <IoLocationOutline />
                        <h2 className="text-[12px]">انتخاب آدرس</h2>
                        <IoIosArrowDown className="text-[14px]"/>
                    </div>
                }
            </div>
        </>
    )
}
export default HeaderBottomMobile
