import React from 'react'
import category1 from '/src/assets/images/c1.webp'
import category2 from '/src/assets/images/c2.webp'
import category3 from '/src/assets/images/c3.webp'
import category4 from '/src/assets/images/c4.webp'
import category5 from '/src/assets/images/c5.webp'
import category6 from '/src/assets/images/c6.webp'
import category7 from '/src/assets/images/c7.webp'
import category8 from '/src/assets/images/c8.webp'
import category9 from '/src/assets/images/c9.webp'
import category10 from '/src/assets/images/c10.webp'
import category11 from '/src/assets/images/c11.webp'
import category12 from '/src/assets/images/c12.webp'
import category13 from '/src/assets/images/c13.webp'
import category14 from '/src/assets/images/c14.webp'
import category15 from '/src/assets/images/c15.webp'
import category16 from '/src/assets/images/c16.webp'
import category17 from '/src/assets/images/c17.webp'
import category18 from '/src/assets/images/c18.webp'

const categories = [
    {
        id: 1,
        items: [
            {
                id: 11,
                title: "موبایل",
                image: category1
            },
            {
                id: 12,
                title: "ابزارآلات",
                image: category2
            }
        ]
    },
    {
        id: 2,
        items: [
            {
                id: 13,
                title: "لپ تاپ",
                image: category3
            },
            {
                id: 14,
                title: "پزشکی و سلامت",
                image: category4
            }
        ]
    },
    {
        id: 3,
        items: [
            {
                id: 15,
                title: "کالای دیجیتال",
                image: category5
            },
            {
                id: 16,
                title: "شهر کتاب و هنر",
                image: category6
            }
        ]
    },
    {
        id: 4,
        items: [
            {
                id: 17,
                title: "خانه و آشپزخانه",
                image: category7
            },
            {
                id: 18,
                title: "ورزش و سفر",
                image: category8
            }
        ]
    },
    {
        id: 5,
        items: [
            {
                id: 19,
                title: "لوازم خانگی برقی",
                image: category9
            },
            {
                id: 20,
                title: "کارت هدیه",
                image: category10
            }
        ]
    },
    {
        id: 6,
        items: [
            {
                id: 21,
                title: "آرایشی بهداشتی",
                image: category11
            },
            {
                id: 22,
                title: "سوپرمارکتی",
                image: category12
            }
        ]
    },
    {
        id: 7,
        items: [
            {
                id: 23,
                title: "مد و پوشاک",
                image: category13
            },
            {
                id: 24,
                title: "اسباب بازی و کودک",
                image: category14
            }
        ]
    },
    {
        id: 8,
        items: [
            {
                id: 25,
                title: "طلا و نقره",
                image: category15
            },
            {
                id: 26,
                title: "بومی محلی",
                image: category16
            }
        ]
    },
    {
        id: 9,
        items: [
            {
                id: 27,
                title: "خودرو و موتور",
                image: category17
            },
            {
                id: 28,
                title: "پت شاپ",
                image: category18
            }
        ]
    }
]
const Categories = () => {
    return (
        <>
            <div className="container-1 w-[95%] lg:w-[85%] mx-auto">
                <div className="categories flex overflow-x-auto hide-scrollbar justify-between mt-6 mb-10">
                    {
                        categories.map(item => {
                            return <div key={item.id} className="category-item flex flex-col gap-y-4 min-w-25 lg:min-w-32 max-w-25">
                                {
                                    item.items.map(item => {
                                        return <div key={item.id} className="category-item-bottom flex flex-col gap-y-3 items-center cursor-pointer">
                                            <img className="w-18 lg:w-25" src={item.image} alt=""/>
                                            <h2 className="text-[11px] lg:text-[12px] text-[#0c0c0c]/80">{item.title}</h2>
                                        </div>
                                    })
                                }

                            </div>
                        })
                    }


                </div>
            </div>
        </>
    )
}
export default Categories
