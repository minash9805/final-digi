import React from 'react'
import Price from "../productDetails/Price.jsx";
import Actions from "../productDetails/Actions.jsx";
import {add} from "../../redux/cart/cartSlice.js";
import {useDispatch, useSelector} from "react-redux";

const ProductFooter = ({product}) => {
    const cartProduct = {...product, quantity: 1, stock: product?.stock - 1}
    const {cartProducts} = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const findProduct = cartProducts?.find(item => {
        return item.id === product?.id
    })
    return (
        <div className="product-footer p-4  bg-white border-t border-black/10 flex items-center justify-between">
            {
                !findProduct ?
                <button onClick={() => dispatch(add(cartProduct))}
                        className="w-[50%] py-3 rounded-md text-white bg-[#ef4056] text-[14px]">افزودن به سبد
                    خرید</button>

               :
                <div className="w-[50%]"><Actions id={product.id} quantity={findProduct.quantity} isProductPage={true}/></div>
            }
            <Price price={product?.price} discount={product?.discount} finalPrice={product?.finalPrice}/>
        </div>
    )
}
export default ProductFooter
