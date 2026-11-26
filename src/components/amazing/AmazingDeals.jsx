import React, {useRef, useState, useEffect} from 'react';
import Card from "../card/Card.jsx";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Navigation} from 'swiper/modules';
import NextBtn from "./NextBtn.jsx";
import PreBtn from "./PreBtn.jsx";
import { IoArrowBack } from "react-icons/io5";
import {useNavigate} from "react-router";
import digiLogo from '/src/assets/images/e1.svg'
import amazingLogo from '/src/assets/images/e2.svg'
import { IoIosArrowBack } from "react-icons/io";

import clsx from "clsx";
import Timer from "./Timer.jsx";
const AmazingDeals = ({products,isGreen}) => {
    const navigate=useNavigate()
    const [isEnd,setIsEnd]=useState(false)
    const [isBegin,setIsBegin]=useState(true)
    return (
        <>
            <div className="container-1 w-[95%] lg:w-[85%] mx-auto">
                <div className={clsx("amazing-deals  p-3 lg:p-4  lg:pr-41 relative lg:rounded-2xl",isGreen ?"bg-[#6DBA29]":"bg-[#E3344E]")}>
                    <div className="digi-logo lg:absolute lg:top-0 lg:right-0 flex lg:flex-col justify-start pb-2 lg:items-center lg:justify-center gap-5 h-full lg:w-41">
                        <img className="w-6 lg:w-17" src={digiLogo} alt=""/>
                        <img className="w-25 lg:w-32" src={amazingLogo} alt=""/>
                      <Timer/>
                        <button className="p-2 rounded-md bg-white lg:flex gap-x-2 items-center text-[12px] cursor-pointer hidden">
                            <h2>مشاهده همه</h2>
                            <IoIosArrowBack />
                        </button>
                        <button className="flex gap-x-2 items-center text-[12px] cursor-pointer lg:hidden text-white font-yekan-bold absolute left-3 top-4">
                            <h2>همه</h2>
                            <IoIosArrowBack />
                        </button>
                    </div>

                    <Swiper
                     onSlideChange={(swiper)=>{setIsEnd(swiper.isEnd);setIsBegin(swiper.isBeginning)}}
                        slidesPerView="auto"
                        spaceBetween={5}

                        pagination={{
                            clickable: true,
                        }}
                        modules={[Navigation]}
                        className="mySwiper h-58 lg:h-71 relative"
                    >
                        {
                            products.map(item => {
                                return <SwiperSlide onClick={()=>navigate(`/product/${item.id}`)} className="max-w-33.5 lg:max-w-42">
                                    <Card key={item.id} {...item}/>
                                </SwiperSlide>
                            })
                        }
                        <SwiperSlide className="max-w-33.5 lg:max-w-42">
                            <div className="w-33.5 h-58 lg:w-42 lg:h-71 bg-white flex flex-col justify-center items-center gap-y-3">
                                <div className="size-13 border border-black/10 rounded-full flex justify-center items-center">
                                    <IoArrowBack className="text-2xl"/>
                                </div>
                                <h2 className="text-[12px]">مشاهده همه</h2>
                            </div>
                        </SwiperSlide>
                        {
                            !isBegin &&
                            <NextBtn/>
                        }


                        {

                            !isEnd &&
                            <PreBtn/>
                        }

                    </Swiper>
                </div>
            </div>
        </>
    )
}
export default AmazingDeals
