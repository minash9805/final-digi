import React from 'react'
import CartItem from "./CartItem.jsx";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router";
import clsx from "clsx";
const CartBox = ({isAuth,isCartPage}) => {
    const {cartProducts} = useSelector(state => state.cart)
    const navigate = useNavigate()
    const handleClick = () => {
        if (isAuth) {
            navigate('/checkout')
        } else {
            navigate('/login',{
                state:{
                    from:'/cart'
                }
            })
        }
    }
    return (
        <>
            <div className="cart-box">
                <div className={clsx("cart-items px-2 py-4 lg:border border-black/10 bg-white flex-col",isCartPage ? "rounded-2xl" :"max-h-104 overflow-y-auto hide-scrollbar")}>
                    <div className="header flex items-center px-4 gap-x-3">
                        <h2 className="font-yekan-bold text-[18px]">خلاصه سبد خرید شما</h2>
                        <h2 className="text-[12px]"><span className="font-shabnam">{cartProducts.length}</span> کالا
                        </h2>
                    </div>
                    <div>
                        {
                            cartProducts.map((item,index) => {
                                return <CartItem key={item.id} {...item} isCartPage={isCartPage} index={index} length={cartProducts.length}/>
                            })
                        }
                    </div>
                    {
                        !isCartPage &&
                        <div className="flex justify-between items-center px-4 mt-4">
                            <button onClick={handleClick} className="w-[50%] py-2 rounded-md text-white bg-[#ef4056] cursor-pointer">ثبت
                                سفارش
                            </button>
                            <h2 className="total-price font-shabnam flex items-center gap-x-1">
                                <div className="text-[19px] font-shabnam font-semibold">
                                    {
                                        Number(cartProducts.map(item => {
                                            return (item.finalPrice) * (item.quantity)
                                        }).reduce((item, total) => {
                                            return total + item
                                        }, 0)).toLocaleString()
                                    }
                                </div>
                                <span className="text-[10px] font-yekan-bold">تومان</span>
                            </h2>
                        </div>
                    }
                </div>

            </div>
        </>
    )
}
export default CartBox
