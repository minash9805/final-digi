import React, {useState} from 'react'
import {LiaTruckMovingSolid} from "react-icons/lia";
import {IoIosArrowBack} from "react-icons/io";
import {useSelector} from "react-redux";
import {SiSemaphoreci} from "react-icons/si";
import {SlDirections} from "react-icons/sl";
import {IoTimeOutline} from "react-icons/io5";
import clsx from "clsx";

const AddressBox = () => {
    const {user} = useSelector(state => state.login)
    const [isActive, setIsActive] = useState("box1")
    return (
        <>
            <div className="lg:border border-black/10 p-4 rounded-md border-b pb-6 lg:pb-4">
                <div onClick={() => setIsActive("box1")}
                     className={clsx("top-box flex gap-x-4 items-center w-full border  p-4 rounded-md", isActive === "box1" ? "border-[#1672dd]" : "border-black/10")}>
                    <div className="top-box-right-section">
                        <LiaTruckMovingSolid/>
                    </div>
                    <div className="top-box-left-section flex justify-between w-full">
                        <div className="text-[12px] lg:text-[14px]">
                            <h2 className={clsx(isActive === "box1" && "text-[#1672dd] mb-2")}>ارسال به آدرس انتخاب
                                شده</h2>
                            {
                                isActive === "box1" &&
                                <h2 className="text-[#23254e]">{user?.address.city} {user?.address.street} {user?.address.details}</h2>
                            }
                        </div>
                        {
                            isActive === "box1" &&
                            <div className="flex items-center gap-x-1 text-[12px] text-[#1672dd]">
                                <h2>تغییر آدرس</h2>
                                <IoIosArrowBack/>
                            </div>
                        }
                    </div>
                </div>
                <div onClick={() => setIsActive("box2")}
                     className={clsx("bottom-box flex gap-x-4 items-center border  rounded-md p-4 mt-2", isActive === "box2" ? "border-[#1672dd]" : "border-black/10")}>
                    <div className="right-section">
                        <SiSemaphoreci className="text-xl"/>
                    </div>
                    <div className="left-section flex flex-col gap-y-2 text-[12px] lg:text-[14px] w-full">
                        <div
                            className={clsx("left-section-top text-[#0c0c0c] flex", isActive === "box2" ? "justify-between items-center w-full" : "hidden")}>
                            <h2 className={clsx(isActive === "box2" && "text-[#005bdb]")}>دریافت حضوری از گنجه</h2>
                            <div className="flex items-center gap-x-1 text-[12px] text-[#1672dd]">
                                <h2>تغییر گنجه</h2>
                                <IoIosArrowBack/>
                            </div>
                        </div>
                        <div className={clsx("left-section-center", isActive === "box2" ? "text-[#23254e] text-[14px]" : "text-[#62666d]")}>
                            <h2>مرکز دیجی کالا</h2>
                        </div>
                        {
                            isActive === "box1" &&
                            <div className="left-section-bottom flex gap-x-2">
                                <div
                                    className="flex items-center gap-x-1 text-[11px] lg:text-[12px] text-[#005bdb] bg-blue-600/10 justify-center p-2 rounded-2xl">
                                    <SlDirections/>
                                    <h2>تنوع در نقاط تحویل</h2>
                                </div>
                                <div
                                    className="flex items-center gap-x-1 text-[11px] lg:text-[12px] text-[#005bdb] bg-blue-600/10 justify-center p-2 rounded-2xl">
                                    <IoTimeOutline/>
                                    <h2>تنوع در نقاط تحویل</h2>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddressBox
