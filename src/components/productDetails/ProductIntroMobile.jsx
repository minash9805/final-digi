import React from 'react'

const ProductIntroMobile = ({product}) => {
    return (
        <>
            <div className="product-intro-mobile px-4 mt-4 lg:hidden border-b border-black/10 pb-8">
                <h2 className="text-[#212121] mb-4 font-yekan-bold">معرفی کالا</h2>
                <h2 className="text-[12px] leading-8">{product?.title}</h2>
            </div>
        </>
    )
}
export default ProductIntroMobile
