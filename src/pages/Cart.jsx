import React, {useEffect} from 'react'
import CartBox from "../components/cart/CartBox.jsx";
import {useDispatch, useSelector} from "react-redux";
import PriceDetails from "../components/cart/PriceDetails.jsx";
import DigiMehr from "../components/cart/DigiMehr.jsx";
import DigiPlus from "../components/cart/DigiPlus.jsx";
import SliderBox from "../components/sliderBox/SliderBox.jsx";
import EmptyCartBox from "../components/cart/EmptyCartBox.jsx";
import {fetchProducts} from "../redux/products/productsSlice.js";
import clsx from "clsx";
const Cart = () => {
    const {isAuth} = useSelector(state => state.login)
    const {products} = useSelector(state => state.products)
    const {cartProducts} = useSelector(state => state.cart)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
        window.scrollTo({top:0})
    }, []);
    const catId = cartProducts[0]?.categoryId
    const pros = products?.filter(item => {
        return item.categoryId === catId
    })
    return (
        <>
            {
                cartProducts.length > 0 &&
                <>
                    <div className="container-1 w-[95%] lg:w-[85%] mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-x-5 mt-4">
                            <div className="right-section order-3 lg:order-1">
                                <CartBox isAuth={isAuth} isCartPage={true}/>
                            </div>
                            <div className="left-section lg:order-2">
                                <div className="hidden lg:block">
                                    <PriceDetails cartProducts={cartProducts}/>
                                </div>
                                <div className={clsx("order-1  lg:mb-0",isAuth ? "-mb-4 ": " mb-4")}>
                                    <DigiPlus/>
                                </div>
                                {
                                    isAuth &&
                                    <div className="order-2 mb-2 lg:mb-0">
                                        <DigiMehr/>
                                    </div>
                                }
                            </div>
                        </div>

                    </div>
                    <div className="line w-full h-1.5 bg-gray-400/20 lg:hidden"></div>
                    <SliderBox products={pros}>
                        <h2 className="text-[18px] text-[#1f1f1f] font-yekan-bold mb-4">به سبد خرید شما میخوره</h2>
                    </SliderBox>
                </>
            }
                {
                    cartProducts.length === 0
                    &&
                    <>
                        <div className="container-1 w-[95%] lg:w-[85%] mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-x-5 mt-4 items-start relative">
                               <div className="order-2 lg:order-1">
                                   <EmptyCartBox/>
                               </div>
                                <div className="-mt-6 order-1 lg:order-2 lg:sticky top-0">
                                    <DigiPlus/>
                                    {
                                        isAuth &&
                                        <div className="-mt-4 lg:mt-0">
                                            <DigiMehr/>
                                        </div>
                                    }

                                </div>

                            </div>
                        </div>
                        <div className="line w-full h-1.5 bg-gray-400/20 lg:hidden"></div>
                    </>
                }
        </>
    )
}
export default Cart
