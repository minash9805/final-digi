import React from 'react'
import FooterTop from "./FooterTop.jsx";
import FooterCenter from "./FooterCenter.jsx";
import FooterBottom from "./FooterBottom.jsx";
import FooterMobile from "./FooterMobile.jsx";
import {useLocation} from "react-router";
import clsx from "clsx";
import ProductFooter from "./ProductFooter.jsx";

const Footer = () => {
    const location = useLocation()
    const isProductPage = location.pathname.startsWith('/product')
    return (
        <>

            <div className={clsx("mt-10", isProductPage && "hidden lg:block")}>
                <div className="footer-desktop hidden lg:block">
                    <FooterTop/>
                    <FooterCenter/>
                    <FooterBottom/>
                </div>
                <div className="footer-mobile lg:hidden">
                    <FooterMobile/>
                </div>
            </div>

        </>
    )
}
export default Footer
