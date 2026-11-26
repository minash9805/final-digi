import React, {useEffect} from 'react'
import clsx from "clsx";
import {FiMinus, FiPlus} from "react-icons/fi";
import {decrease, increase, remove} from "../../redux/cart/cartSlice.js";
import {GoTrash} from "react-icons/go";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router";

const Actions = ({id, quantity, isCardPage, isProductPage, isCheckoutPage}) => {
    const dispatch = useDispatch()
    return (
        <>
            <div className="actions">
                <div
                    className={clsx("quantity flex items-center  bg-gray-400/10 mt-4", isCardPage ? "gap-x-8 w-fit px-4 py-3 rounded-3xl" : isProductPage ? "justify-between text-red-600  w-full p-3 shadow-xl rounded-md text-xl" : isCheckoutPage ? "text-[#ed1944] bg-white border border-black/10 gap-x-5 px-4 py-2 rounded-md" : "gap-x-3 w-fit px-2 py-1 rounded-2xl")}>
                    <FiPlus onClick={() =>dispatch(increase(id))}/>
                    <span className="font-shabnam">{quantity}</span>
                    {
                        quantity > 1 &&
                        <FiMinus onClick={() => dispatch(decrease(id))}/>
                    }
                    {
                        quantity === 1 &&
                        <GoTrash onClick={() => {dispatch(remove(id))}}/>
                    }
                </div>
            </div>
        </>
    )
}
export default Actions
