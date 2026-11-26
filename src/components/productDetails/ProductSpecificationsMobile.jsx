import React from 'react'

const ProductSpecificationsMobile = ({product}) => {
    return (
        <>
            <div className="product-specifications-mobile px-4 mt-4 border-b-8 border-gray-400/20 pb-4">
                <h2 className="text-[#212121] font-yekan-bold">جدول مشخصات</h2>
              <div className="flex flex-col mt-4">
                  {
                      product?.specifications[0].items.map(item=>{
                          return   <div className="item grid gap-x-4 grid-cols-[20%_80%] text-[12px] border-b border-black/10">
                              <h2 className="item-right bg-[#f0f0f1] py-3 px-2 leading-6">{item.title}</h2>
                              <h2 className="item-left py-3">{item.value}</h2>
                          </div>
                      })
                  }
              </div>
            </div>
        </>
    )
}
export default ProductSpecificationsMobile
