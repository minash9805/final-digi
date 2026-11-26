import React from 'react'
import {Outlet, useLocation} from "react-router";
import Header from "./header/Header.jsx";
import Footer from "./footer/Footer.jsx";
import FooterMobileBottom from "./footer/FooterMobileBottom.jsx";
import clsx from "clsx";

const Layout = () => {
    const location = useLocation()
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <header className={clsx(!location.pathname.startsWith('/product') ? "sticky top-0 z-50" : "sticky top-0 z-50 lg:static")}>
                    <Header/>
                </header>
                <main className="flex-1">
                    <Outlet/>
                </main>
                <Footer/>
                <div
                    className={clsx("footer-mobile-bottom sticky bottom-0 z-50 lg:hidden pb-4", location.pathname.startsWith('/product') && "hidden")}>
                    <FooterMobileBottom/>
                </div>
            </div>

        </>
    )
}
export default Layout
