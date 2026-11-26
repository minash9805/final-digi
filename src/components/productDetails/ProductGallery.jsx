import React from 'react'
import ProductActions from "./ProductActions.jsx";
const ProductGallery = ({product}) => {
    return (
        <>
            <div className="product-gallery mt-4 grid grid-cols-[10%_90%] h-fit">
                <ProductActions/>
                <div className="product-details-right-bottom-left">
                    <img className="" src={product?.thumbnail} alt=""/>
                </div>
            </div>
        </>
    )
}
export default ProductGallery
