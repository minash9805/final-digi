import React from 'react'
import digiLogo from '/src/assets/images/header-logo.svg'
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import footerTop1 from '/src/assets/images/footer-top-1.svg'
import footerTop2 from '/src/assets/images/footer-top-2.svg'
import footerTop3 from '/src/assets/images/footer-top-3.svg'
import footerTop4 from '/src/assets/images/footer-top-4.svg'
import footerTop5 from '/src/assets/images/footer-top-5.svg'
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaTelegramPlane,FaWhatsapp } from "react-icons/fa";
const FooterTop = () => {
    const footerTopCenter=[
        {
            id:1,
            title:"امکان تحویل اکسپرس",
            img:footerTop1
        },
        {
            id:2,
            title:"امکان پرداخت در محل",
            img:footerTop2
        },
        {
            id:3,
            title:"7 روز هفته 24 ساعته",
            img:footerTop3
        },  {
            id:4,
            title:"هفت روز ضمانت بازگشت کالا",
            img:footerTop4
        },
        {
            id:5,
            title:"ضمانت اصل بودن کالا",
            img:footerTop5
        }
    ]
    const footerTopBottom=[
        {
            id:1,
            mainTitle:"با دیجی کالا",
            subTitles:[
                {
                    id:1,
                    title:"اتاق خبر دیجی کالا"
                },
                {
                    id:2,
                    title:"فروش در دیجی کالا"
                },
                {
                    id:3,
                    title:"فرصت های شغلی"
                },
                {
                    id:4,
                    title:"گزارش تخلف در دیجی کالا"
                },
                {
                    id:5,
                    title:"تماس با دیجی کالا"
                }, {
                    id:6,
                    title:"درباره دیجی کالا"
                }
            ]
        },

        {
            id:2,
            mainTitle:"خدمات مشتریان",
            subTitles:[
                {
                    id:1,
                    title:"پاسخ به پرسش های متداول"
                },
                {
                    id:2,
                    title:"رویه های بازگردادن کالا"
                },
                {
                    id:3,
                    title:"شرایط استفاده"
                },
                {
                    id:4,
                    title:"حریم خصوصی"
                },
                {
                    id:5,
                    title:"گزارش باگ"
                }
            ]
        },
        {
            id:3,
            mainTitle:"راهنمای خرید از دیجی کالا",
            subTitles:[
                {
                    id:1,
                    title:"نحوه ثبت سفارش"
                },
                {
                    id:2,
                    title:"رویه ارسال سفارش"
                },
                {
                    id:3,
                    title:"شیوه های پرداخت"
                }
            ]
        }
    ]
    return (
        <>
            <div className="footer-top px-4">
                <div className="footer-top-top">
                    <div className="header-top-top-item flex justify-between w-full">
                        <img className="w-50" src={digiLogo} alt=""/>
                        <button className="flex border border-black/10 px-4 py-3 rounded-md items-center gap-x-2 text-black/50 cursor-pointer">
                            <span className="text-[12px] font-yekan-bold">بازگشت به بالا</span>
                            <MdOutlineKeyboardArrowUp className="text-lg"/>
                        </button>
                    </div>
                    <div className="footer-top-top-item flex items-center gap-x-4 text-[12px] text-black/70 mt-4">
                        <h2>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</h2>
                        <div className="line w-px h-3 bg-black/30"></div>
                        <h2>۰۲۱-۹۱۰۰۰۱۰۰</h2>
                        <div className="line w-px h-3 bg-black/30"></div>
                        <h2>
                            ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</h2>
                    </div>
                </div>
                <div className="footer-top-center grid grid-cols-5 my-10">
                    {
                        footerTopCenter.map(item=>{
                            return <div key={item.id} className="footer-top-center-item text-[12px] text-black/70 flex flex-col items-center gap-y-1 cursor-pointer">
                                <img src={item.img} alt={item.title}/>
                                <h2>{item.title}</h2>
                            </div>
                        })
                    }
                </div>
                <div className="footer-top-bottom grid grid-cols-[23%_23%_23%_31%] xl:grid-cols-4 my-4">
                    {
                        footerTopBottom.map(item=>{
                            return <div key={item.id} className="footer-top-bottom-item">
                                <h2 className="mb-2 font-yekan-bold">{item.mainTitle}</h2>
                                {
                                    item.subTitles.map(item=>{
                                        return <h2 key={item.id} className="text-[14px] leading-10 text-black/50 cursor-pointer">{item.title}</h2>
                                    })
                                }
                            </div>
                        })
                    }
                    <div className="footer-top-bottom-item font-yekan-bold flex flex-col gap-y-5">
                        <h2>همراه ما باشید!</h2>
                        <div className="flex text-4xl text-black/30 justify-between mb-4 cursor-pointer">
                            <AiFillInstagram />
                            <BsTwitterX />
                            <TbBrandLinkedinFilled />
                            <FaTelegramPlane />
                            <FaWhatsapp />
                        </div>
                        <h2>با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید</h2>
                        <div>
                            <div className="flex justify-between gap-x-2">
                                <div className="px-4 py-3 rounded-md bg-[#F0F0F1] w-full"><input className="outline-0" placeholder="ایمیل شما" type="text"/></div>
                                <button className="px-4 py-3 bg-[#E0E0E2] rounded-md text-white">ثبت</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FooterTop
