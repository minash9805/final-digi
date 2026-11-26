import React from 'react'
import {IoIosArrowBack} from "react-icons/io";
import {useSwiper} from "swiper/react";
import clsx from "clsx";

const PreBtn = ({isPopularBrands}) => {
    const swiper = useSwiper()

    return (
        <>
            <div onClick={() => swiper.slideNext()}
                 className={clsx("pre-btn absolute  left-4 z-50 size-10 bg-white rounded-full flex justify-center items-center border border-black/10 text-xl", isPopularBrands ? "top-10" : "top-25 lg:top-30")}>
                <IoIosArrowBack/>
            </div>
        </>
    )
}
export default PreBtn
