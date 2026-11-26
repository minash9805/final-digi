import React from 'react'
import {IoClose, IoSearchOutline, IoCartOutline} from "react-icons/io5";
import {IoMdMore} from "react-icons/io";
import {useNavigate} from "react-router";
import {useSelector} from "react-redux";

const ProductHeader = () => {
    const {cartProducts}=useSelector(state => state.cart)
    const navigate = useNavigate()
    return (
        <>
            <div className="product-header flex items-center justify-between py-5 text-2xl px-4 bg-white">
                <div className="product-header-right">
                    <IoClose className="cursor-pointer" onClick={()=>navigate('/')}/>
                </div>
                <div className="product-header-left flex items-center gap-x-4">
                    <IoSearchOutline onClick={()=>navigate('/search')}/>
                   <div onClick={()=>navigate('/cart')} className=" relative">
                       <IoCartOutline className="rotate-y-180 cursor-pointer"/>
                       {
                           cartProducts.length>0 &&
                           <div className="size-3.25 rounded-[3px] bg-[#ef4056] text-white absolute top-3 left-3 text-[10px] flex justify-center items-center font-shabnam">{cartProducts.length}</div>
                       }
                   </div>
                    <IoMdMore/>
                </div>
            </div>
        </>
    )
}
export default ProductHeader
