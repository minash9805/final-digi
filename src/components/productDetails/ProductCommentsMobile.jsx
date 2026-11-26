import React from 'react'
import {MdMoreVert, MdOutlineStore} from "react-icons/md";
import {FaStar} from "react-icons/fa";
import {AiOutlineDislike, AiOutlineLike} from "react-icons/ai";

const ProductCommentsMobile = ({product,comments}) => {
    return (
        <>
            <div className="product-comments-Mobile mt-4 px-4">
                <h2 className="text-[#222732] font-yekan-bold">دیدگاه کاربران</h2>
                <div className="mt-4 flex overflow-x-auto hide-scrollbar gap-x-2">
                    {
                        comments?.filter(item => {
                            return Number(item.productId) === Number(product?.id)
                        }).map(item => {
                            return <div className="comment-box p-4 border rounded-md border-black/10 min-w-70">
                                <div className="comment-box-top flex justify-between">
                                    <div className="comment-box-top-right flex items-center gap-x-5">
                                        <h2 className="text-[12px] lg:text-[14px] text-[#424242] font-yekan-bold">{item.userName}</h2>
                                        <h2 className="px-2 py-px rounded-2xl text-[11px] text-[#2e7b32] bg-[#2e7b32]/10 w-fit font-yekan-bold">خریدار</h2>
                                    </div>
                                    <div
                                        className="comment-box-top-left flex gap-x-2 items-center text-[#767981]">
                                        <h2 className="font-shabnam text-[11px]">{item.createdAt}</h2>
                                        <MdMoreVert className="text-[#a2a2a2]"/>
                                    </div>
                                </div>
                                <div className="comment-box-center">
                                    <div className="stars flex gap-x-1 text-orange-300 my-4">
                                        {
                                            Array.from({length: item.rating}).map(item => {
                                                return <FaStar className="text-xl"/>
                                            })
                                        }
                                    </div>
                                    <div
                                        className="main-comment text-[12px] lg:text-[14px] text-[#0c0c0c] line-clamp-2 leading-8 min-h-16">{item.comment}</div>
                                </div>

                                 <div
                                     className="comment-box-bottom flex items-center justify-between mt-4">
                                     <div className="comment-box-bottom-right flex items-center gap-x-2">
                                         <MdOutlineStore className="text-[#333333]"/>
                                         <h2 className="text-[11px] text-[#212121]">دیجی کالا</h2>
                                     </div>
                                     <div className="comment-box-bottom-left flex gap-x-5">
                                         <div className="flex items-center gap-x-px">
                                             <span className="font-shabnam">{item.likes}</span>
                                             <AiOutlineLike/>
                                         </div>
                                         <div className="flex items-center gap-x-px">
                                             <span className="font-shabnam">0</span>
                                             <AiOutlineDislike/>
                                         </div>
                                     </div>
                                 </div>

                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default ProductCommentsMobile
