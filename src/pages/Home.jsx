import React, {useEffect} from 'react'
import Slider from "../components/hero/Slider.jsx";
import ServicesSection from "../components/services/ServicesSection.jsx";
import AmazingDeals from "../components/amazing/AmazingDeals.jsx";
import SliderBox from "../components/sliderBox/SliderBox.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../redux/products/productsSlice.js";
import {fetchCategories} from "../redux/categories/categoriesSlice.js";
import {fetchLogin} from "../redux/login/loginSlice.js";
import {fetchBrands} from "../redux/brands/brandsSlice.js";
import Promo from "../components/banner/Promo.jsx";
import Express from "../components/express/Express.jsx";
import Categories from "../components/categories/Categories.jsx";
import SliderBoxChildren from "../components/sliderBox/SliderBoxChildren.jsx";
import { FaFireAlt } from "react-icons/fa";
import Offers from "../components/Offers.jsx";

const Home = () => {
    const {products} = useSelector(state => state.products)
    const {categories} = useSelector(state => state.categories)
    const {promo} = useSelector(state => state.banners)
    const {user, isAuth} = useSelector(state => state.login)
    const {brands} = useSelector(state => state.brands)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
        dispatch(fetchCategories())
        dispatch(fetchLogin())
        dispatch(fetchBrands())
    }, []);
    const products15 = products.filter(item => {
        return item.categoryId === 15
    })
    const categoryId15 = categories.find(item => {
        return Number(item.id) === 15
    })
    const products2 = products.filter(item => {
        return item.categoryId === 2
    })
    const categoryId2 = categories.find(item => {
        return Number(item.id) === 2
    })
    const products1 = products.filter(item => {
        return item.categoryId === 1
    })
    const categoryId1 = categories.find(item => {
        return Number(item.id) === 1
    })
    const products3 = products.filter(item => {
        return item.categoryId === 3
    }).slice(0, 10)
    const categoryId3 = categories.find(item => {
        return Number(item.id) === 3
    })
    const products5 = products.filter(item => {
        return item.categoryId === 5
    }).slice(0, 10)
    const categoryId5 = categories.find(item => {
        return Number(item.id) === 5
    })
    const products6 = products.filter(item => {
        return item.categoryId === 6
    }).slice(0, 10)
    const categoryId6 = categories.find(item => {
        return Number(item.id) === 6
    })
    const products7 = products.filter(item => {
        return item.categoryId === 7
    }).slice(0, 10)
    const categoryId7 = categories.find(item => {
        return Number(item.id) === 7
    })
    const products4 = products.filter(item => {
        return item.categoryId === 4
    })
    const categoryId4 = categories.find(item => {
        return Number(item.id) === 4
    })
    const amazingPart1 = products.filter(item => {
        return item.isAmazing
    }).slice(0, 10)
    const amazingPart2 = products.filter(item => {
        return item.isAmazing
    }).slice(10, 20)
    const promoPart1 = promo.slice(0, 4)
    const promoPart2 = promo.slice(4, 8)
    const promoPart3 = promo.slice(8, 10)
    const promoPart4 = promo.slice(10, 12)
    const trendProducts=products.filter(item=>{
        return item.isTrending
    }).slice(0,15)
    const bestSellers=[...products].sort((a,b)=>{
        return b.soldCount - a.soldCount
    }).slice(0,15)
    const offers=products.filter(item=>{
        return item.isEditorChoice
    })
    useEffect(() => {
        window.scrollTo({top:0})
    }, []);
    return (
        <>
            <Slider/>
            <ServicesSection/>
            <AmazingDeals products={amazingPart1}/>
            <Promo promo={promoPart1}/>
            <Express products={products} user={user} isAuth={isAuth}/>
            <Promo promo={promoPart2}/>
            <AmazingDeals products={amazingPart2} isGreen={true}/>
            <Categories/>
            <Promo promo={promoPart3}/>
            <SliderBox products={products15}>
                <SliderBoxChildren catId={categoryId15}/>
            </SliderBox>
            <SliderBox products={products2}>
                <SliderBoxChildren catId={categoryId2}/>
            </SliderBox>
            <Promo promo={promoPart4}/>
            <SliderBox products={products1}>
                <SliderBoxChildren catId={categoryId1}/>
            </SliderBox>
            <SliderBox products={products4}>
                <SliderBoxChildren catId={categoryId4}/>
            </SliderBox>
            <SliderBox products={products3}>
                <SliderBoxChildren catId={categoryId3}/>
            </SliderBox>
            <SliderBox products={products6}>
                <SliderBoxChildren catId={categoryId6}/>
            </SliderBox>
            <SliderBox brands={brands} isPopularBrands={true}>
                <h2 className="text-[16px] lg:text-[20px] text-[#1f1f1f] font-yekan-bold mb-5">محبوب ترین برند ها</h2>
            </SliderBox>
            <SliderBox products={products7}>
                <SliderBoxChildren catId={categoryId7}/>
            </SliderBox>
            <SliderBox products={products5}>
                <SliderBoxChildren catId={categoryId5}/>
            </SliderBox>
            <SliderBox products={bestSellers} isBestSeller={true}>
                <div className="children flex gap-x-2 items-center mb-5">
                    <FaFireAlt className="text-xl rotate-y-180 text-red-500"/>
                    <h2 className="text-[16px] lg:text-[20px] text-[#1f1f1f] font-yekan-bold">پرفروش ترین</h2>
                </div>
            </SliderBox>
            <SliderBox products={trendProducts} isTrending={true}>
                <div className="children flex gap-x-2 items-center mb-5">
                    <FaFireAlt className="text-xl rotate-y-180 text-red-500"/>
                    <h2 className="text-[16px] lg:text-[20px] text-[#1f1f1f] font-yekan-bold">داغ ترین چند ساعت گذشته</h2>
                </div>
            </SliderBox>
           <Offers offerProducts={offers}/>
        </>
    )
}
export default Home
