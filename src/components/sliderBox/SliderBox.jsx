import React, {useRef, useState, useEffect} from 'react';
import Card from "../card/Card.jsx";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Navigation} from 'swiper/modules';
import NextBtn from "../amazing/NextBtn.jsx";
import PreBtn from "../amazing/PreBtn.jsx";
import {useNavigate} from "react-router";
import clsx from "clsx";
import MiniCard from "../card/MiniCard.jsx";
import TrendCard from "../card/TrendCard.jsx";

const SliderBox = ({
                       products,
                       children,
                       isExpress,
                       brands,
                       isPopularBrands,
                       isBestSeller,
                       isTrending,
                       productDetails
                   }) => {
    const navigate = useNavigate()
    const [isEnd, setIsEnd] = useState(false)
    const [isBegin, setIsBegin] = useState(true)
    return (
        <>
            <div
                className={clsx("container-1  mx-auto my-5", productDetails === true ? "w-full" : "w-[95%] lg:w-[85%]")}>
                <div
                    className={clsx("slider-box relative rounded-2xl p-4", isExpress ? "bg-[#FFF9E6]" : "lg:border lg:border-black/10")}>
                    {children}
                    <div className="swiper">
                        <Swiper
                            onSlideChange={(swiper) => {
                                setIsEnd(swiper.isEnd);
                                setIsBegin(swiper.isBeginning)
                            }}
                            slidesPerView="auto"
                            spaceBetween={5}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Navigation]}
                            className={clsx("mySwiper relative", (!isPopularBrands && !isBestSeller && !isTrending) && "h-58 lg:h-71")}
                        >
                            {
                                (!isPopularBrands && !isBestSeller && !isTrending) &&
                                products.map(item => {
                                    return <SwiperSlide onClick={() => navigate(`/product/${item.id}`)}
                                                        className="max-w-33.5 lg:max-w-42">
                                        <Card key={item.id} {...item}/>
                                    </SwiperSlide>
                                })
                            }
                            {
                                isPopularBrands &&
                                brands.map(item => {
                                    return <SwiperSlide
                                                        className="max-w-25">
                                        <MiniCard key={item.id} {...item}/>
                                    </SwiperSlide>
                                })
                            }
                            {
                                (isBestSeller || isTrending) &&

                                <>
                                    <SwiperSlide className="lg:max-w-77 lg:min-w-77 max-w-[70%] min-w-[70%]">
                                        {
                                            products.slice(0, 3).map((item, index) => {
                                                return <div onClick={() => navigate(`/product/${item.id}`)}  className="cursor-pointer"><TrendCard key={item.id} {...item} index={index}/></div>
                                            })
                                        }
                                    </SwiperSlide>
                                    <SwiperSlide className="lg:max-w-77 lg:min-w-77 max-w-[70%] min-w-[70%]">
                                        {
                                            products.slice(3, 6).map((item, index) => {
                                                return <div onClick={() => navigate(`/product/${item.id}`)} className="cursor-pointer"><TrendCard key={item.id} {...item} index={index + 3}/></div>
                                            })
                                        }
                                    </SwiperSlide>
                                    <SwiperSlide className="lg:max-w-77 lg:min-w-77 max-w-[70%] min-w-[70%]">
                                        {
                                            products.slice(6, 9).map((item, index) => {
                                                return <div onClick={() => navigate(`/product/${item.id}`)}  className="cursor-pointer"><TrendCard key={item.id} {...item} index={index + 6}/></div>
                                            })
                                        }
                                    </SwiperSlide>
                                    <SwiperSlide className="lg:max-w-77 lg:min-w-77 max-w-[70%] min-w-[70%]">
                                        {
                                            products.slice(9, 12).map((item, index) => {
                                                return <div onClick={() => navigate(`/product/${item.id}`)}  className="cursor-pointer"><TrendCard key={item.id} {...item} index={index + 9}/></div>
                                            })
                                        }
                                    </SwiperSlide>
                                    <SwiperSlide className="lg:max-w-77 lg:min-w-77 max-w-[70%] min-w-[70%]">
                                        {
                                            products.slice(12, 15).map((item, index) => {
                                                return <div onClick={() => navigate(`/product/${item.id}`)}   className="cursor-pointer"><TrendCard key={item.id} {...item} index={index + 12}/></div>
                                            })
                                        }
                                    </SwiperSlide>
                                </>

                            }

                            {
                                !isBegin &&
                                <NextBtn isPopularBrands={isPopularBrands}/>
                            }


                            {

                                !isEnd &&
                                <PreBtn isPopularBrands={isPopularBrands}/>
                            }

                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SliderBox
