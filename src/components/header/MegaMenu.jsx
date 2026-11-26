import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {fetchMegaMenu} from "../../redux/megaMenu/megaMenuSlice.js";
import clsx from "clsx";
import {IoIosArrowBack} from "react-icons/io";
import {
    FaMobileAlt,
    FaLaptop,
    FaHome,
    FaTshirt,
    FaHeartbeat,
    FaBook,
    FaDumbbell,
    FaCar,
    FaBaby,
    FaShoppingBasket,
    FaGem,
    FaTools,
    FaHeadphones,
    FaCouch,
    FaPalette
} from "react-icons/fa";

const icons = {
    FaMobileAlt,
    FaLaptop,
    FaHome,
    FaTshirt,
    FaHeartbeat,
    FaBook,
    FaDumbbell,
    FaCar,
    FaBaby,
    FaShoppingBasket,
    FaGem,
    FaTools,
    FaHeadphones,
    FaCouch,
    FaPalette
}
const MegaMenu = ({openMenu}) => {
    const {megaMenu, loading, error} = useSelector(state => state.megaMenu)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchMegaMenu())
    }, []);

    return (
        <>

            <div
                className={clsx("mega-menu absolute w-[85%] xl:w-[65%] h-102 top-9 z-50", openMenu ? "block" : "hidden")}>
                <div dir="ltr" className="mega-menu-right w-[23%] bg-[#EFEFF0] h-full overflow-y-auto">
                    {
                        megaMenu.map(item => {
                            const Icon = icons[item.icon]
                            return <div key={item.id}
                                        className={clsx("mega-menu-right-item hover:bg-white hover:text-red-600 flex items-center justify-end p-4 gap-x-2 transition-all duration-150 ease-linear group")}>
                                <h2 className="text-[12px] whitespace-nowrap">{item.title}</h2>
                                {
                                    Icon &&
                                    <Icon/>
                                }
                                <div
                                    className={clsx("mega-menu-right-item-child p-4 absolute top-0 left-0 h-full bg-white w-[77%] overflow-y-auto scrollbar-thumb-black/30", item.title === "موبایل و کالای دیجیتال" ? "block" : "hidden group-hover:block")}>
                                    <div dir="rtl"
                                         className="mega-menu-right-item-child-title text-blue-800 font-yekan-bold flex gap-x-1 items-center">
                                        <h2 className="text-[12px]">همه محصولات {item.title}</h2>
                                        <IoIosArrowBack className="text-[12px]"/>
                                    </div>
                                    <div dir="rtl" className="grid grid-cols-3 mt-5">
                                        {
                                            item.children.map(item => {
                                                return <div className="sub-menu">
                                                    <div key={item.id}
                                                         className="sub-menu-title flex items-center gap-x-1 text-black hover:text-red-600 transition-all duration-150 ease-linear">
                                                        <div className="line w-[1.5px] h-3 bg-red-600"></div>
                                                        <h2 className="text-[14px] font-yekan-bold ">{item.title}</h2>
                                                        <IoIosArrowBack className="text-[12px]"/>
                                                    </div>
                                                    <div className="sub-menu-items my-4">
                                                        {
                                                            item.children.map(item => {
                                                                return <h2
                                                                    className="text-[12px] text-black/50 font-yekan-bold leading-8 hover:text-red-600 transition-all duration-150 ease-linear"
                                                                    key={item.id}>{item.title}</h2>
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>

                            </div>
                        })
                    }
                </div>
                <div className="mega-menu-left"></div>
            </div>

        </>
    )
}
export default MegaMenu
