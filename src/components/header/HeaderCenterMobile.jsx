import React, {useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import hm1 from '/src/assets/images/hm1svg.svg'
import hm2 from '/src/assets/images/hm2.png'
import hm3 from '/src/assets/images/hm3.png'
import hm4 from '/src/assets/images/hm4.png'
import hm5 from '/src/assets/images/hm5.gif'
import hm6 from '/src/assets/images/hm6.png'
import hm7 from '/src/assets/images/hm7.png'
import hm8 from '/src/assets/images/hm8.png'
import hm9 from '/src/assets/images/hm9.png'
import hm10 from '/src/assets/images/hm10.png'


// import required modules
import {Pagination} from 'swiper/modules';
import divider from "daisyui/components/divider/index.js";

const HeaderCenterMobile = () => {
    const headerMobileItems = [
        {
            id: 1,
            img: hm1,
            title: ""
        },
        {
            id: 2,
            img: hm2,
            title: "دیجی کالا"
        },
        {
            id: 3,
            img: hm3,
            title: "سوپرمارکت"
        },
        {
            id: 4,
            img: hm4,
            title: "طلا و نقره"
        },
        {
            id: 5,
            img: hm5,
            title: "بازار"
        },
        {
            id: 6,
            img: hm6,
            title: "استایل"
        },
        {
            id: 7,
            img: hm7,
            title: "اعتبار خرید"
        },
        {
            id: 8,
            img: hm8,
            title: "گیشه"
        },
        {
            id: 9,
            img: hm9,
            title: "دارو"
        }, {
            id: 10,
            img: hm10,
            title: "هایپر مارکت"
        }
    ]
    return (
        <>
            <div className="lg:hidden flex overflow-x-auto gap-x-2 scrollbar-none hide-scrollbar mt-4">
                {
                    headerMobileItems.map(item => {
                        return (
                            <div
                                className="border border-black/10 rounded-md min-w-17.5 md:min-w-25 h-17.5 flex flex-col items-center justify-center">
                                <img className="w-10" src={item.img} alt=""/>
                                <h2 className="text-[12px]">{item.title}</h2>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default HeaderCenterMobile
