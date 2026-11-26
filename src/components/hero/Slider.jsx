import React, {useEffect, useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Autoplay, Navigation} from 'swiper/modules';
import {useDispatch, useSelector} from "react-redux";
import {fetchBanners} from "../../redux/banners/bannersSlice.js";

import SliderButtons from "./SliderButtons.jsx";
const Slider = () => {
    const {hero, loading, error} = useSelector(state => state.banners)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchBanners())
    }, []);
    return (
        <>
            <div className="banner-slider hidden lg:block mt-1">
                <Swiper  loop={true} autoplay={{
                    delay:3000,
                    disableOnInteraction: false,
                }}  modules={[Autoplay,Navigation]} speed={1000} className="mySwiper h-100 relative group">

                    {
                        hero.map(item => {
                            return <SwiperSlide key={item.id}>
                                <img title={item.title} className="h-full object-cover rounded-md" src={item.image} alt=""/>
                            </SwiperSlide>
                        })
                    }
                    <SliderButtons/>
                </Swiper>

            </div>
            <div className="banner-slider-mobile lg:hidden mt-4">
                <Swiper slidesPerView={1.1} centeredSlides={true} spaceBetween={10} loop={true} autoplay={{
                    delay:3000,
                    disableOnInteraction: false,
                }}  modules={[Autoplay]} speed={1000} className="mySwiper h-45 relative group">

                    {
                       hero.map(item => {
                            return <SwiperSlide className="" key={item.id}>
                                <img title={item.title} className="h-full object-cover block mx-auto rounded-lg" src={item.image} alt=""/>
                            </SwiperSlide>
                        })
                    }

                </Swiper>

            </div>
        </>
    )
}
export default Slider
