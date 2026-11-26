import React, {useState} from 'react'
import {IoIosArrowUp, IoIosArrowDown,IoIosArrowBack} from "react-icons/io";
import {TfiHeadphoneAlt} from "react-icons/tfi";
import digiLogo from '/src/assets/images/Logo.webp'
import FooterMobileBottom from "./FooterMobileBottom.jsx";
const footerItems = [
    {
        id: 1,
        mainTitle: "با دیجی کالا",
        subTitles: [
            {
                id: 1,
                title: "اتاق خبر دیجی کالا"
            },
            {
                id: 2,
                title: "فروش در دیجی کالا"
            },
            {
                id: 3,
                title: "فرصت های شغلی"
            },
            {
                id: 4,
                title: "گزارش تخلف در دیجی کالا"
            },
            {
                id: 5,
                title: "تماس با دیجی کالا"
            }, {
                id: 6,
                title: "درباره دیجی کالا"
            }
        ]
    },

    {
        id: 2,
        mainTitle: "خدمات مشتریان",
        subTitles: [
            {
                id: 1,
                title: "پاسخ به پرسش های متداول"
            },
            {
                id: 2,
                title: "رویه های بازگردادن کالا"
            },
            {
                id: 3,
                title: "شرایط استفاده"
            },
            {
                id: 4,
                title: "حریم خصوصی"
            },
            {
                id: 5,
                title: "گزارش باگ"
            }
        ]
    },
    {
        id: 3,
        mainTitle: "راهنمای خرید از دیجی کالا",
        subTitles: [
            {
                id: 1,
                title: "نحوه ثبت سفارش"
            },
            {
                id: 2,
                title: "رویه ارسال سفارش"
            },
            {
                id: 3,
                title: "شیوه های پرداخت"
            }
        ]
    }
]
const FooterMobile = () => {
    const [isOpen, setIsOpen] = useState([
        {
            id: 1,
            toggle: false
        },
        {
            id: 2,
            toggle: false
        },
        {
            id: 3,
            toggle: false
        },
        {
            id: 4,
            toggle: false
        }
    ])
    const handleOpen = (id) => {
        setIsOpen(
            isOpen.map(item => {
                if (item.id === id) {
                    return {...item, toggle: true}
                }
                return item
            })
        )
    }
    const handleClose = (id) => {
        setIsOpen(
            isOpen.map(item => {
                if (item.id === id) {
                    return {...item, toggle: false}
                }
                return item
            })
        )
    }
    return (
        <>
            <div className="footer-mobile">
                <div className="footer-mobile-top p-4">
                    <button
                        className="px-4 py-2 rounded-2xl bg-[#F2F2F2] flex items-center gap-x-2 text-[12px] font-yekan-bold text-black/80 mx-auto">
                        <h2>رفتن به بالا</h2>
                        <IoIosArrowUp/>
                    </button>
                    <div className="footer-mobile-top-item flex justify-between items-center py-2">
                        <div className="footer-mobile-top-item-right flex gap-x-3">
                            <div className="size-10 bg-[#F2F2F2] rounded-full flex items-center justify-center">
                                <TfiHeadphoneAlt className="rotate-y-180 text-xl"/>
                            </div>
                            <div className="text-[12px]">
                                <h2 className="mb-2 font-yekan-bold text-black/80">تماس با پشتیبانی</h2>
                                <h2 className="text-black/50">۷ روز هفته، ۲۴ ساعت</h2>
                            </div>
                        </div>
                        <div className="footer-mobile-top-item-left">
                            <button
                                className="px-4 py-2 rounded-2xl bg-[#F2F2F2] text-[12px] font-yekan-bold text-black/80 cursor-pointer">تماس
                            </button>
                        </div>
                    </div>
                    <div className="line w-full h-px bg-black/10"></div>
                    <div className="footer-mobile-top-item flex justify-between items-center py-2">
                        <div className="footer-mobile-top-item-right flex gap-x-3">
                            <div className="size-10">
                                <img className="rounded-full" src={digiLogo} alt=""/>
                            </div>
                            <div className="text-[12px]">
                                <h2 className="mb-2 font-yekan-bold text-black/80">اپلیکیشن دیجی‌کالا</h2>
                                <h2 className="text-black/50">تجربه خرید بهتر در</h2>
                            </div>
                        </div>
                        <div className="footer-mobile-top-item-left">
                            <button
                                className="px-4 py-2 rounded-2xl bg-[#F2F2F2] text-[12px] font-yekan-bold text-black/80 cursor-pointer">دانلود
                            </button>
                        </div>
                    </div>
                    <div className="line w-full h-px bg-black/10"></div>
                    {
                        footerItems.map((item, index) => {
                            return <div
                                className="footer-mobile-top-item flex justify-between items-start p-2 border-b border-black/10">
                                <div className="footer-mobile-top-item-right">
                                    <h2 className="main-title text-[13px] font-bold leading-10">{item.mainTitle}</h2>
                                    {
                                        isOpen[index].toggle &&
                                        <div className="sub-titles text-[12px] text-black/60">
                                            {
                                                item.subTitles.map(item => {
                                                    return <h2 className="leading-10" key={item.id}>{item.title}</h2>
                                                })
                                            }
                                        </div>
                                    }
                                </div>
                                <div className="footer-mobile-top-item-left py-2">
                                    {
                                        !isOpen[index].toggle &&
                                        <IoIosArrowDown onClick={() => handleOpen(item.id)}/>
                                    }
                                    {
                                        isOpen[index].toggle &&
                                        <IoIosArrowUp onClick={() => handleClose(item.id)}/>
                                    }

                                </div>
                            </div>
                        })
                    }
                    <div className="footer-mobile-top-item text-[12px] my-4">
                        <h2 className="mb-2">دیجی کالا؛ بزرگترین فروشگاه اینترنتی ایران</h2>
                        <div className="leading-5 relative">
                            <p className="line-clamp-3 text-black/50 text-[10px]">دیجی کالا سال‌ها است که به انتخاب اول بسیاری از خریداران اینترنتی تبدیل شده است. دیجی کالا به عنوان بزرگ‌ترین و معتبرترین فروشگاه آنلاین ایران، شناخته‌شده‌ترین فروشگاه نیز محسوب می‌شود. این فروشگاه آنلاین نه‌تنها گسترده‌ترین تنوع کالا را در دسته‌بندی‌های مختلف ارائه می‌دهد، بلکه با خدمات بی‌نظیر، ارسال سریع، ضمانت اصل بودن کالا و پشتیبانی حرفه‌ای، استاندارد جدیدی در خرید اینترنتی ایران تعریف کرده است. این فروشگاه با سال‌ها تجربه و اعتماد مشتریان، کامل‌ترین و بهترین گزینه برای خرید آنلاین در ایران محسوب می‌شود. این روزها بازار دیجی کالا حتی فرصت خرید آسان از فروشگاه های اینستاگرامی را در اختیار شما قرار داده است و اگر هم خرید حضوری را ترجیح می‌دهید فروشگاه حضوری دیجی کالا هر روز بر تعداد شعب خود می‌افزاید. </p>
                            {
                                isOpen[3].toggle &&
                                <div className="text-black/50 text-[10px]">
                                    <h2 className="text-[14px] font-yekan-bold my-3">ویژگی های مهم دیجی کالا</h2>
                                    <p>یکی از ویژگی‌های مهم در خرید از دیجی کالا، تنوع بی‌نظیر محصولات است. این فروشگاه اینترنتی طیف وسیعی از کالاها را در دسته‌های مختلف از جمله لوازم دیجیتال، لوازم خانگی، مد و پوشاک، لوازم آرایشی و بهداشتی، محصولات سلامت و زیبایی، و بسیاری از محصولات دیگر ارائه می‌دهد. به عنوان مثال، اگر به دنبال خرید یا بررسی قیمت گوشی باشید، دیجی کالا مجموعه‌ای از بهترین گوشی‌ها از برندهای معتبر اپل و سامسونگ مانند آیفون ۱۷، گوشی S25، گوشی‌های مختلف از برند شیائومی مانند شیائومی نوت ۱۴ و بسیاری از برندهای دیگر را در اختیار شما قرار می‌دهد. همچنین برای علاقه‌مندان به لوازم دیجیتال، این فروشگاه اینترنتی انواع لپ تاپ، تلویزیون، اسپیکر، و هندزفری بلوتوثی با کیفیت بالا را برای خرید آنلاین ارائه می‌دهد. دیجی کالا، مقصدی بی‌پایان برای خرید آسان، سریع و مطمئن است. راهی که هر آنچه نیاز دارید از قیمت لپ تاپ تا یک ایرپاد مطمئن را در اختیار شما قرار می‌دهد. </p>
                                    <h2 className="text-[14px] font-yekan-bold my-3">ارسال سریع و مطمئن کالا</h2>
                                    <p>یکی از مهم‌ترین دغدغه‌های کاربران خرید آنلاین، زمان تحویل کالا است. دیجی کالا برای حل این مشکل، گزینه‌های مختلف ارسال را در نظر گرفته است تا کاربران بتوانند بر اساس نیاز خود، روش ارسال مناسب را انتخاب کنند. به عنوان مثال، ارسال کالا به صورت تحویل امروز با ارسال سریع دیجی‌کالا، از جمله روش‌های خرید سریع از این فروشگاه اینترنتی است. این امکانات باعث می‌شود که خریداران بتوانند سفارش خود را در کوتاه‌ترین زمان ممکن دریافت کنند. علاوه بر این، در صورتی که کالای خریداری شده از لحاظ کیفیت یا هر دلیل دیگری رضایت مشتری را جلب نکرده باشد، دیجی کالا ضمانت بازگشت کالا را ارائه می‌دهد. این ویژگی موجب اعتماد بیشتر مشتریان به خرید آنلاین از فروشگاه اینترنتی دیجی کالا شده است.</p>
                                    <h2 className="text-[14px] font-yekan-bold my-3">تخفیف های ویژه و جشنواره ها</h2>
                                    <p>دیجی کالا به طور منظم جشنواره‌ها و تخفیف‌های ویژه‌ای را برگزار می‌کند که برای مشتریان فرصت خرید کالاهای باکیفیت با قیمت‌های مناسب به همراه خواهد داشت. این تخفیف‌ها در ایام خاص مانند بلک فرایدی یا همان حراج جمعه سیاه، خرید هدیه روز مادر و کادو روز پدر، شب یلدا و جشنواره‌های فصلی تابستان و زمستان توجه بسیاری از خریداران را جلب می‌کند. در این جشنواره‌ها، دیجی کالا تخفیف‌های عالی روی محصولات مختلف از جمله گوشی‌های موبایل، لپ تاپ‌ها، تلویزیون‌ها، و حتی محصولات مناسب سازمانی مثل پک هدیه یلدا ارائه می‌دهد. می‌توانید گوشی ایفون ۱۶ یا گوشی S25 را با تخفیف‌های ویژه خریداری کنید و از قیمت مناسب بهره‌مند شوید. دیجی کالا فراتر از یک فروشگاه اینترنتی، یک تجربه خرید مطمئن در بین کاربران مختلف بوده است که با ارائه بزرگ‌ترین تنوع کالا، قیمت‌های مختلف و خدماتی بی‌نقص، به مقصد اول خریداران آنلاین در ایران تبدیل شده است.</p>
                                    <h2 className="text-[14px] font-yekan-bold my-3">انواع محصولات فروشگاه دیجی کالا</h2>
                                    <p>دیجی کالا دارای محصولات متنوعی در گروه‌های مختلف است که خرید آنها بسیار راحت و سریع است. به عنوان مثال، اگر به دنبال قاب گوشی یا هندزفری بلوتوثی باشید، می‌توانید مدل‌های مختلف و برندهای گوناگونی را در این فروشگاه پیدا کنید. </p>
                                    <h2 className="text-[14px] font-yekan-bold my-3">موبایل و کالای دیجیتال</h2>
                                    <p>دیجی‌کالا انواع گوشی‌های هوشمند از برندهای معتبر جهانی مانند سامسونگ، اپل، شیائومی و هواوی را با مشخصات و قیمت‌های متنوع عرضه می‌کند. علاوه بر موبایل، دیجی‌کالا مجموعه‌ای از لوازم جانبی مانند هدفون، هندزفری، ساعت‌های هوشمند، تبلت‌ها و لپ تاپ را نیز در اختیار مشتریان قرار می‌دهد. با امکان مقایسه محصولات، مطالعه نظرات کاربران و دسترسی به جدیدترین مدل‌ها، دیجی‌کالا به یکی از مقاصد اصلی خرید آنلاین در حوزه موبایل و کالای دیجیتال تبدیل شده است. از دهه گذشته همواره دیجی کالا به عنوان اولین گزینه برای خرید گوشی سامسونگ، آیفون های اپل و گوشی شیائومی محسوب می‌شده است و تا امروز هم در عرضه این موبایل های محبوب به بازار، دیجی‌کالا اولین فروشگاه آنلاین بوده است.</p>
                                    <h2 className="text-[14px] font-yekan-bold my-3">کتاب و لوازم تحریر</h2>
                                    <p>کتاب، لوازم تحریر و هنر در دیجی کالا یک مجموعه بی‌نظیر از محصولات فرهنگی و هنری است که به علاقه‌مندان به کتابخوانی، هنر و نوشتن کمک می‌کند تا دنیای خود را گسترش دهند. از کتاب‌های چاپی و کتاب‌های صوتی گرفته تا مجلات خارجی و داخلی و آثار معروف‌ترین نویسندگان مثل سعدی، حافظ، مولانا و فروغ فرخزاد، تمامی نیازهای کتابخوان‌ها را پوشش می‌دهد. همچنین با مجموعه‌ای از لوازم تحریر، ابزار نقاشی و رنگ‌آمیزی، آلبوم‌های عکس و فرش‌های دستبافت، به شما این امکان را می‌دهد تا دنیای هنر و خلاقیت خود را به بهترین نحو پرورش دهید. همچنین هر سال تقریبا همزمان با تهران و نمایشگاه بین المللی کتاب، دیجی کالا نمایشگاه مجازی کتاب خود را برگزار می‌کند تا آنها که فرصت حضور در نمایشگاه را ندارند، بتوانند مجازی از کتاب ها بازدید و خرید کنند. </p>
                                    <h2 className="text-[14px] font-yekan-bold my-3">لوازم آرایشی و بهداشتی</h2>
                                    <p>در دسته محصولات آرایشی و بهداشتی، دیجی کالا مجموعه‌ای از بهترین و پرطرفدارترین برندهای جهانی را در اختیار کاربران قرار می‌دهد. محصولات متنوعی همچون مرطوب كننده‌ها، كرم پودر، ضدآفتاب، ريمل و رژلب از برندهایی مانند لورال، کلینیک و میبلین در دیجی کالا موجود هستند که برای هر سلیقه و نیاز قابل انتخاب هستند. علاوه بر این، شما می‌توانید محصولات مراقبت از پوست و مو مانند شامپو، کرم‌های ضد چروک و ماسک صورت را در این فروشگاه بیابید و خرید آنلاین خود را به راحتی انجام دهید. دیجی کالا، بزرگ‌ترین و معتبرترین فروشگاه آنلاین لوازم آرایشی ایران، جایی که تنوع، کیفیت و اطمینان در خرید یکجا جمع شده‌اند.</p>

                                </div>
                            }
                            {
                                !isOpen[3].toggle &&
                                <div className="effect bg-linear-to-t from-white to-transparent w-full h-15 absolute top-0"></div>
                            }

                            {
                                !isOpen[3].toggle &&
                                <div onClick={()=>handleOpen(4)} className="more flex items-center gap-x-2 mt-4 cursor-pointer">
                                    <h2>مشاهده بیشتر</h2>
                                    <IoIosArrowBack />
                                </div>
                            }
                            {
                                isOpen[3].toggle &&
                                <div onClick={()=>handleClose(4)} className="more flex items-center gap-x-2 mt-4 cursor-pointer">
                                    <h2>بستن</h2>
                                    <IoIosArrowBack />
                                </div>
                            }
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default FooterMobile
