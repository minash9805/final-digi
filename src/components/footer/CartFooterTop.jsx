import React from 'react'
import {useSelector} from "react-redux";
import {IoIosArrowDown} from "react-icons/io";
import {useNavigate} from "react-router";

const CartFooterTop = ({cartProducts}) => {
const {isAuth}=useSelector(state => state.login)
    const navigate=useNavigate()
    const handleClick=()=>{
    if (isAuth){
        navigate('/checkout')
    }else {
        navigate('/login',{
            state:{from:'/cart'}
        })
    }
    }
    return (
        <>
            {
                cartProducts.length>0 &&
                <div className="flex justify-between items-center">
                    <div className="right-section w-[50%]">
                        <button onClick={handleClick} className="w-full py-3 text-white bg-[#ed1944] rounded-md cursor-pointer">ثبت سفارش</button>
                    </div>
                    <div className="left-section">
                        <div className="left-section-top text-[12px] text-[#1f1f1f] flex items-center gap-x-2 mb-2">
                            <h2>جمع <span className="font-shabnam">{cartProducts.length}</span> کالا
                            </h2>
                            <IoIosArrowDown/>
                        </div>
                        <div className="left-section-bottom text-[#1f1f1f] flex items-center gap-x-1">
                            <h2 className="font-shabnam font-semibold">
                                {
                                    Number(  cartProducts.map(item => {
                                        return item.finalPrice * item.quantity
                                    }).reduce((item,total)=>{
                                        return item+total
                                    },0)).toLocaleString()
                                }
                            </h2>
                            <h2 className="text-[10px] font-yekan-bold">تومان</h2>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
export default CartFooterTop
