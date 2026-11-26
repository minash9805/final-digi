import React from 'react'
import SellerBox from "./SellerBox.jsx";

const Sellers = ({product}) => {
    return (
        <>
            <div className="sellers mt-8">
                <h2 className="title text-[#0c0c0c] font-yekan-bold">فروشندگان این کالا</h2>
                <div className="line w-20 h-0.5 bg-[#ef394e] rounded-md mt-2"></div>
                <div className="mt-4">
                    {
                        product?.sellers.map((item,index) => {
                            return <SellerBox key={item.id} {...item} index={index} product={product}/>
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default Sellers
