import {FaBox} from "react-icons/fa6";
import clsx from "clsx";

const ProductDetailsTop = ({level1, level2, level3, mobile}) => {

    return (
        <>
            <div className="product-details-top flex items-center justify-between">
                <div
                    className={clsx("product-details-top-right flex gap-x-2 text-[12px] overflow-x-auto hide-scrollbar", mobile ? "text-[#5c5c5c] font-yekan-bold" : "text-[#81858b]")}>
                    <h2 className="whitespace-nowrap">دیجی کالا</h2>
                    <span>/</span>
                    <h2 className="whitespace-nowrap">
                        {level1?.title}
                    </h2>
                    <span>/</span>
                    <h2 className="whitespace-nowrap">
                        {level2?.title}
                    </h2>
                    <span>/</span>
                    <h2 className="text-[#424242] font-yekan-bold whitespace-nowrap">
                        {level3?.title}
                    </h2>
                </div>
                {
                    !mobile &&
                    <div
                        className="product-details-top-left flex items-center text-[#a1a3a8] text-[12px] gap-x-2 cursor-pointer">
                        <h2 className="whitespace-nowrap">فروش در دیجی کالا</h2>
                        <FaBox className="text-[14px]"/>
                    </div>
                }
            </div>
        </>
    )
}
export default ProductDetailsTop
