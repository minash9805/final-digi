import React from 'react'
import digiLogo from '/src/assets/images/Logo.webp'
import {IoIosArrowBack} from "react-icons/io";
import {RiHomeSmile2Fill, RiChatSmile2Line} from "react-icons/ri";
import {BiCategoryAlt} from "react-icons/bi";
import {MdOutlineShoppingCart} from "react-icons/md";
import {CgProfile} from "react-icons/cg";
import {NavLink, useLocation} from "react-router";
import {HiOutlineUserCircle} from "react-icons/hi2";
import {BsChat, BsCart3} from "react-icons/bs";
import {useSelector} from "react-redux";
import CartFooterTop from "./CartFooterTop.jsx";
import clsx from "clsx";
const FooterMobileBottom = () => {
    const {cartProducts}=useSelector(state => state.cart)
    const location=useLocation()
    return (
        <>
            <div className={clsx("footer-mobile-bottom",location.pathname==='/cart' && "bg-white p-4 border-t border-gray-400/10 -mb-4")}>
                <div className={clsx("cart-footer-top",location.pathname==='/cart'? "block":"hidden")}>
                    <CartFooterTop cartProducts={cartProducts}/>
                </div>
                <div
                    className={clsx("footer-mobile-bottom-top flex justify-between border border-gray-400/10 bg-white shadow-lg rounded-4xl p-2 w-[80%] mx-auto",location.pathname==='/cart' && "hidden")}>
                    <div className="right-part flex items-center gap-x-4">
                        <div className="w-10 h-10">
                            <img className="rounded-full" src={digiLogo} alt=""/>
                        </div>
                        <div>
                            <h2 className="text-[12px] text-[#1f1f1f] mb-1">اپلیکیشن دیجی کالا</h2>
                            <h2 className="text-[11px] text-[#848484]">تجربه خرید بهتر و روان تر</h2>
                        </div>
                    </div>
                    <div className="left-part flex items-center gap-x-1">
                        <h2 className="text-[12px] text-[#1f1f1f]">دانلود</h2>
                        <IoIosArrowBack className="text-[12px]"/>
                    </div>
                </div>
                <div
                    className="footer-mobile-bottom-bottom flex justify-between p-1 w-[70%] xs:w-[50%] sm:w-[40%] mx-auto border border-gray-400/10 bg-white shadow-lg rounded-4xl mt-4">
                    <NavLink to={'/'} className={({isActive}) => isActive ? "bg-gray-400/10  rounded-full" : ""}>
                        <div className="item-home p-2 text-2xl text-[#848484]">
                            <RiHomeSmile2Fill/>
                        </div>
                    </NavLink>

                        <div className="item-categories p-2 text-2xl text-[#848484]">
                            <BiCategoryAlt/>
                        </div>

                    <NavLink to={'/cart'} className={({isActive}) => isActive ? "bg-gray-400/10  rounded-full" : ""}>
                        <div className="item-cart p-2 text-2xl text-[#848484] relative">
                            <BsCart3/>
                            {
                                cartProducts.length>0 &&
                                <div className="size-4 bg-[#ed1944] text-white rounded-full absolute top-0 left-0 text-[10px] flex justify-center items-center font-shabnam">{cartProducts.length}</div>
                            }
                        </div>
                    </NavLink>

                        <div className="item-comments p-2 text-2xl text-[#848484]">
                            <BsChat/>
                        </div>

                    <NavLink to={'/login'}
                             className={({isActive}) => isActive ? "bg-gray-400/10  rounded-full" : ""}>
                        <div className="item-profile p-2  text-[26px] text-[#848484]">
                            <HiOutlineUserCircle/>
                        </div>
                    </NavLink>
                </div>
            </div>
        </>
    )
}
export default FooterMobileBottom
