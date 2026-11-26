import React, {useEffect, useState} from 'react'
import {useParams, useSearchParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../redux/products/productsSlice.js";
import {fetchCategories} from "../redux/categories/categoriesSlice.js";
import {fetchComments} from "../redux/comments/commentsSlice.js";
import {TiWarning} from "react-icons/ti";
import ProductDetailsTop from "../components/productDetails/ProductDetailsTop.jsx";
import AmazingBox from "../components/productDetails/AmazingBox.jsx";
import ProductGallery from "../components/productDetails/ProductGallery.jsx";
import ProductTitle from "../components/productDetails/ProductTitle.jsx";
import ProductSpecifications from "../components/productDetails/ProductSpecifications.jsx";
import DigiPayBox from "../components/productDetails/DigiPayBox.jsx";
import PlusBox from "../components/productDetails/PlusBox.jsx";
import ProductPurchase from "../components/productDetails/ProductPurchase.jsx";
import ProductDetailsBottom from "../components/productDetails/ProductDetailsBottom.jsx";
import Sellers from "../components/productDetails/Sellers.jsx";
import ProductIntroduction from "../components/productDetails/productIntroduction.jsx";
import SliderBox from "../components/sliderBox/SliderBox.jsx";
import ProductGalleryMobile from "../components/productDetails/ProductGalleryMobile.jsx";
import SellerBoxMobile from "../components/productDetails/SellerBoxMobile.jsx";
import ProductIntroMobile from "../components/productDetails/ProductIntroMobile.jsx";
import ProductSpecificationsMobile from "../components/productDetails/ProductSpecificationsMobile.jsx";
import ProductCommentsMobile from "../components/productDetails/ProductCommentsMobile.jsx";
import ProductFooter from "../components/footer/ProductFooter.jsx";
import MessageBox from "../components/productDetails/MessageBox.jsx";
const ProductDetails = () => {
    const [show,setShow]=useState(false)
    const params = useParams()
    const {products} = useSelector(state => state.products)
    const {categories} = useSelector(state => state.categories)
    const {comments} = useSelector(state => state.comments)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
        dispatch(fetchCategories())
        dispatch(fetchComments())
        window.scrollTo({top: 0})
    }, []);
    const product = products.find(item => {
        return item.id === params.id
    })

    const level3 = categories?.find(item => {
        return Number(item.id) === Number(product?.categoryId)
    })
    const level2 = categories?.find(item => {
        return Number(item.id) === Number(level3?.parentId)
    })
    const level1 = categories?.find(item => {
        return Number(item.id) === Number(level2?.parentId)
    })
    const similarProducts = products.filter(item => {
        return item.categoryId === product?.categoryId
    })


    return (
        <>
<MessageBox show={show} setShow={setShow} similarProducts={similarProducts}/>
            <div className="product-details-desktop px-4 mt-5 hidden lg:block">
                <ProductDetailsTop level1={level1} level2={level2} level3={level3}/>
                <div className="product-details-center grid grid-cols-[1fr_2fr] gap-x-5">
                    <div className="product-details-center-right relative">
                        <AmazingBox/>
                        <ProductGallery product={product}/>
                    </div>
                    <div className="product-details-center-left pt-15">
                        <div className="product-details-center-left-top">
                            <ProductTitle level3={level3} product={product}/>
                        </div>
                        <div
                            className="product-details-center-left-bottom grid grid-cols-[60%_40%] gap-x-5 mt-2 relative">
                            <div className="right-item border-t-2 border-black/10">
                                <ProductSpecifications product={product}/>

                                <div className="right-item-bottom">
                                    <h2 className="text-[18px] text-[#1f1f1f] font-yekan-bold mb-4">روش‌های پرداخت
                                        اعتباری</h2>
                                    <DigiPayBox/>
                                    <div
                                        className="right-item-bottom-box-2 text-[12px] text-[#81858b] flex gap-x-2 my-4">
                                        <TiWarning className="text-xl"/>
                                        <h2 className="leading-6">
                                            درخواست مرجوع کردن کالا در گروه هدفون، هدست و هندزفری با دلیل "انصراف از
                                            خرید"
                                            تنها در صورتی قابل تایید است که کالا در شرایط اولیه باشد (در صورت پلمب بودن،
                                            کالا نباید باز شده باشد).</h2>
                                    </div>
                                    <PlusBox/>
                                </div>
                            </div>
                            <div className="left-item w-[90%] h-109 sticky top-5">
                                <ProductPurchase product={product} setShow={setShow}/>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="product-details-bottom ">
                    <ProductDetailsBottom/>
                </div>
                <div className="sellers  border-b-4 pb- border-gray-400/20 pb-8">
                    <Sellers product={product}/>
                </div>
                <ProductIntroduction product={product} comments={comments}/>
                <div className="">
                    <SliderBox products={similarProducts} productDetails={true}>
                        <h2 className="text-[16px] lg:text-[20px] text-[#1f1f1f] font-yekan-bold mb-4">کالاهای
                            مشابه</h2>
                    </SliderBox>
                </div>
            </div>
            <div className="product-details-mobile lg:hidden relative">
                <div className="sticky top-5">
                    <div className="px-4 mt-5">
                        <ProductDetailsTop level1={level1} level2={level2} level3={level3} mobile={true}/>
                    </div>
                    <div className="images">
                        <ProductGalleryMobile product={product}/>
                    </div>
                </div>
                <div className="bg-white relative z-40">
                    <div className="">
                        <AmazingBox/>
                        <ProductTitle level3={level3} product={product}/>
                    </div>
                    <ProductSpecifications product={product}/>
                    <SellerBoxMobile/>
                    <div className="px-4 mt-4 border-b-8 border-gray-400/20 pb-4">
                        <h2 className="text-[#1f1f1f] font-yekan-bold mb-4">روش‌های پرداخت
                            اعتباری</h2>
                        <DigiPayBox/>
                    </div>
                    <div className="px-4 mt-4 border-b-8 border-gray-400/20 pb-4">
                        <h2 className="text-[#1f1f1f] font-yekan-bold mb-4">دیگر سرویس های دیجی کالا</h2>
                        <PlusBox/>
                    </div>
                    <ProductIntroMobile product={product}/>
                    <ProductSpecificationsMobile product={product}/>
                    <ProductCommentsMobile comments={comments} product={product}/>
                    <SliderBox products={similarProducts} productDetails={true}>
                        <h2 className="text-[16px] lg:text-[20px] text-[#1f1f1f] font-yekan-bold mb-4">کالاهای
                            مشابه</h2>
                    </SliderBox>
                </div>
            </div>
            <div className="product-footer sticky bottom-0 z-50 lg:hidden">
                <ProductFooter product={product}/>
            </div>
        </>
    )
}
export default ProductDetails
