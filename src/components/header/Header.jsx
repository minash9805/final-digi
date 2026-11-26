import React, {useEffect, useState} from 'react'
import HeaderTop from "./HeaderTop.jsx";
import HeaderCenter from "./HeaderCenter.jsx";
import HeaderBottom from "./HeaderBottom.jsx";
import clsx from "clsx";
import {useLocation} from "react-router";
import ProductHeader from "./ProductHeader.jsx";
import CartHeader from "./CartHeader.jsx";

const Header = () => {

    const location = useLocation()
    console.log(location)
    const isProductPage = location.pathname.startsWith('/product')
    const isCartPage = location.pathname === '/cart'
    return (
        <>
            <div className={clsx("bg-white pb-2 relative", (isProductPage || isCartPage) && "hidden lg:block")}>
                <div className=" bg-white">
                    <HeaderTop/>
                    <HeaderCenter/>
                </div>
                <HeaderBottom/>
            </div>
            <div className={clsx("product-header", location.pathname.startsWith('/product') ? "lg:hidden" : "hidden")}>
                <ProductHeader/>
            </div>
            <div className={clsx("cart-header", isCartPage ? "lg:hidden" : "hidden")}>
                <CartHeader/>
            </div>
        </>
    )
}
export default Header
