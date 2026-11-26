import React from 'react'

const ProductGalleryMobile = ({product}) => {
    return (
        <>
            <div className="grid grid-cols-3 sm:grid-cols-5 grid-rows-2 mt-4 gap-3 sm:gap-4 px-4">
                <div className="col-start-1 col-end-3 row-start-1 row-end-3">
                    <img className="rounded-lg"  src={product?.thumbnail} alt=""/>
                </div>
                <div className="col-start-3 col-end-4 row-start-1 row-end-2">
                    <img className="rounded-lg" src={product?.thumbnail} alt=""/>
                </div>
                <div className="col-start-3 col-end-4 row-start-2 row-end-3">
                    <img className="rounded-lg" src={product?.thumbnail} alt=""/>
                </div>
                <div className="col-start-4 col-end-6 row-start-1 row-end-3 hidden sm:block">
                    <img className="rounded-lg" src={product?.thumbnail} alt=""/>
                </div>
            </div>
        </>
    )
}
export default ProductGalleryMobile
