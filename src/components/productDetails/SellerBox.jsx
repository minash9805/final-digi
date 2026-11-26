import React from 'react'
import {MdOutlineStoreMallDirectory} from "react-icons/md";
import clsx from "clsx";
import {FiMinus, FiPlus, FiTruck} from "react-icons/fi";
import {GoShieldCheck, GoTrash} from "react-icons/go";
import {useDispatch, useSelector} from "react-redux";
import {add, decrease, increase, remove} from "../../redux/cart/cartSlice.js";
const SellerBox = ({name, price, delivery, isDefault, index,product}) => {
    const {cartProducts}=useSelector(state => state.cart)
    const dispatch=useDispatch()
    const cartProduct={...product,quantity:1,stock:product?.stock-1}
    const findProduct=cartProducts.find(item=>{
        return Number(item.id)===Number(cartProduct?.id)
    })
    return (
        <>
            <div className={clsx("seller-box grid grid-cols-[1fr_1fr_1fr_2fr] xl:grid-cols-4 p-4 mb-2 rounded-md items-center", index % 2 !== 0 ? "bg-[#F7F7F8]" : "bg-white")}>
                <div className="box-1 flex items-center gap-x-2">
                    <MdOutlineStoreMallDirectory className="text-2xl"/>
                    <div>
                        <div className="flex items-center gap-x-2">
                            <h2 className="text-[15px] text-[#3f4064]">{name}</h2>
                            {
                                isDefault &&
                                <div
                                    className="text-[11px] text-[#00a049] bg-[#00a049]/10 w-fit rounded-2xl px-2 py-px font-yekan-bold">منتخب</div>
                            }
                        </div>
                        <div className="text-[12px] flex items-center gap-x-2 text-[#81858b] mt-4">
                            <h2><span className="text-[#b1b64d]">۸۰%</span> رضایت از کالا</h2>
                            <div className="line w-px h-3 bg-black/10"></div>
                            <h2>عملکرد <span className="text-[#00a049] font-yekan-bold">عالی</span></h2>
                        </div>
                    </div>
                </div>
                <div className="box-2 flex items-center gap-x-2 text-[12px]">
                    <FiTruck />
                    <h2 className="text-[#81858b]">تحویل عادی دیجی کالا {delivery}</h2>
                </div>
                <div className="box-3">
                    <div className="left-item-center-bottom flex items-center gap-x-2 ">
                        <GoShieldCheck className="text-xl"/>
                        <h2 className="text-[15px] text-[#3f4064]">
                            گارانتی اصالت و سلامت فیزیکی کالا</h2>
                    </div>
                </div>
                <div className="box-4 flex gap-x-2 justify-end">
                    {
                        isDefault ?
                        <div className="flex items-center gap-x-1">
                            {
                                product?.discount>0 &&
                                <h2 className="text-[12px] text-[#c0c2c5] line-through font-shabnam">{product?.price.toLocaleString()}</h2>
                            }
                            <h2 className="text-[19px] text-[#23254e] font-shabnam font-semibold">{product?.finalPrice.toLocaleString()}</h2>
                            <h2 className="text-[10px] -mr-px font-yekan-bold">تومان</h2>
                            {
                                product?.discount>0 &&
                                <h2 className="text-[12px] text-white bg-[#d32f2f] w-fit px-2 py-px rounded-2xl font-shabnam font-semibold">{product?.discount}%</h2>
                            }
                        </div>
                            :
                            <div className="flex items-center gap-x-1">
                                <h2 className="text-[19px] text-[#23254e] font-shabnam font-semibold">{price.toLocaleString()}</h2>
                                <h2 className="text-[10px] font-yekan-bold">تومان</h2>
                            </div>
                    }
                    {
                        isDefault &&
                        <div>
                            {
                                !findProduct &&
                                <button onClick={()=>dispatch(add(cartProduct))}
                                        className="cart py-2 rounded-lg text-white bg-[#ef4056] w-36 text-[14px] mt-2 font-yekan-bold whitespace-nowrap">افزودن
                                    به سبد خرید
                                </button>
                            }
                            {
                                findProduct &&
                                <div className="quantity flex items-center gap-x-5 bg-white p-4 w-fit rounded-md shadow-2xl text-[#ed1944]">
                                    <FiPlus onClick={()=>dispatch(increase(product?.id))}/>
                                    <span className="font-shabnam">{findProduct?.quantity}</span>
                                    {
                                        findProduct?.quantity>1 &&
                                        <FiMinus onClick={()=>dispatch(decrease(product?.id))}/>
                                    }
                                    {
                                        findProduct?.quantity===1 &&
                                        <GoTrash onClick={()=>dispatch(remove(product?.id))}/>
                                    }
                                </div>
                            }
                        </div>

                    }
                    {
                        !isDefault &&
                        <button
                            className="cart py-2 rounded-lg text-white bg-[#ef4056] w-36 text-[14px] mt-2 font-yekan-bold whitespace-nowrap">افزودن
                            به سبد خرید
                        </button>
                    }
                </div>
            </div>
        </>
    )
}
export default SellerBox
