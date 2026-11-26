import React from 'react'
import { IoArrowBack,IoArrowForward } from "react-icons/io5";
import {useSwiper} from "swiper/react";
const SliderButtons = () => {
    const swiper=useSwiper()
    return (

        <>
            <div className="slider-buttons group-hover:flex absolute z-50 right-5 bottom-8 text-black/80 hidden">
                <button onClick={()=>swiper.slidePrev()} className="text-2xl size-10 rounded-full flex justify-center items-center bg-white">
                    <IoArrowForward />
                </button>
                <button onClick={()=>swiper.slideNext()} className="text-2xl size-10 rounded-full flex justify-center items-center bg-white">
                    <IoArrowBack />
                </button>
            </div>
        </>
    )
}
export default SliderButtons
