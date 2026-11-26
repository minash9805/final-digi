import React, {useState, useEffect, useRef} from 'react'
import {useNavigate} from "react-router";
import {CiSearch} from "react-icons/ci";
import headerLogo from '/src/assets/images/header-logo.svg'
import headerCenterModal from '/src/assets/images/header-modal.webp'
import clsx from "clsx";
import {GoBell} from "react-icons/go";
import {BsBoxArrowInLeft, BsBoxArrowRight} from "react-icons/bs";
import {SlBasket, SlHandbag, SlDirections, SlHeart} from "react-icons/sl";
import {FaRegUser} from "react-icons/fa";
import {RiArrowDownSFill} from "react-icons/ri";
import {FaArrowTrendUp, FaRegComment, FaBitcoin} from "react-icons/fa6";
import HeaderCenterMobile from "./HeaderCenterMobile.jsx";
import {useDispatch, useSelector} from "react-redux";
import {IoIosArrowBack} from "react-icons/io";
import {RiGeminiLine} from "react-icons/ri";
import {logOut} from "../../redux/login/loginSlice.js";
import Modal from "../modal/Modal.jsx";
import {openModal,closeModal} from "../../redux/modal/modalSlice.js";
import CartItem from "../cart/CartItem.jsx";
import CartBox from "../cart/CartBox.jsx";

const HeaderCenter = () => {
    const navigate = useNavigate()
    const [headerModal, setHeaderModal] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const searchRef = useRef(null)
    const {isAuth, user, token} = useSelector(state => state.login)
    const dispatch = useDispatch()
    const {isOpenModal} = useSelector(state => state.modal)
    const {cartProducts}=useSelector(state => state.cart)
    useEffect(() => {
        localStorage.setItem("cartProducts",JSON.stringify(cartProducts))
    }, [cartProducts]);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                searchRef.current &&
                !searchRef.current.contains(event.target)
            ) {
                setHeaderModal(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }

    }, [])
    useEffect(() => {
        localStorage.setItem("user",JSON.stringify(user))
        localStorage.setItem("isAuth",JSON.stringify(isAuth))
        localStorage.setItem("token",token)
    }, [user,token,isAuth]);
    const handleLogOut=()=>{
        dispatch(logOut())
        dispatch(closeModal())
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        localStorage.removeItem("isAuth")
    }
    return (
        <>
            <div className="header-center lg:grid grid-cols-2 p-4 hidden">
                <div className="header-center-right grid gap-x-5 grid-cols-[1fr_3fr] items-center">
                    <div onClick={() => navigate('/')} className="header-center-right-logo w-fit p-2">
                        <img className="cursor-pointer" src={headerLogo} alt=""/>
                    </div>
                    <div ref={searchRef}
                         className={clsx("header-center-right-search-parent relative", headerModal && "h-14")}>
                        <div onClick={() => setHeaderModal(true)}
                             className={clsx("pt-2 px-2", headerModal && "hidden")}>
                            <div
                                className="header-center-right-search flex gap-x-3 bg-[#ECEDEF] p-3 rounded-3xl w-full">
                                <CiSearch className="text-2xl text-black/30"/>
                                <input placeholder="جستجو"
                                       className="outline-0 bg-[#ECEDEF] text-[14px] w-full text-black/70" type="text"/>
                            </div>
                        </div>
                        <div
                            className={clsx("z-50 pt-2 px-2 border border-black/20 pb-4 rounded-2xl absolute w-full bg-white", headerModal ? "block" : "hidden")}>
                            <div
                                className="header-center-right-search flex gap-x-3 bg-[#ECEDEF] p-3 rounded-3xl w-full">
                                <CiSearch className="text-2xl text-black/30"/>
                                <input placeholder="جستجو"
                                       className="outline-0 bg-[#ECEDEF] text-[14px] w-full text-black/70" type="text"/>
                            </div>
                            <h2 className="font-yekan-bold text-[14px] py-4">جستجو های پرطرفدار</h2>
                            <div className="flex flex-wrap gap-2">
                                <div
                                    className="border border-black/20 rounded-2xl flex w-fit px-2 py-1 items-center gap-x-2">
                                    <FaArrowTrendUp/>
                                    <span className="text-[14px]">ساعت مچی زنانه</span>
                                </div>
                                <div
                                    className="border border-black/20 rounded-2xl flex w-fit px-2 py-1 items-center gap-x-2">
                                    <FaArrowTrendUp/>
                                    <span className="text-[14px]">عروسک</span>
                                </div>
                                <div
                                    className="border border-black/20 rounded-2xl flex w-fit px-2 py-1 items-center gap-x-2">
                                    <FaArrowTrendUp/>
                                    <span className="text-[14px]">اسکوتر برقی</span>
                                </div>
                                <div
                                    className="border border-black/20 rounded-2xl flex w-fit px-2 py-1 items-center gap-x-2">
                                    <FaArrowTrendUp/>
                                    <span className="text-[14px]">ساعت هوشمند</span>
                                </div>
                                <div
                                    className="border border-black/20 rounded-2xl flex w-fit px-2 py-1 items-center gap-x-2">
                                    <FaArrowTrendUp/>
                                    <span className="text-[14px]">گوشی شیائومی</span>
                                </div>
                                <div className="pt-2">
                                    <img className="rounded-lg" src={headerCenterModal} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="header-center-left flex items-center gap-x-3 justify-end">
                    <GoBell className="text-2xl"/>
                    {
                        !isAuth &&
                        <button onClick={() => navigate('/login')}
                                className="cursor-pointer flex items-center gap-x-2 border border-black/20 rounded-lg p-3 font-yekan-bold">
                            <BsBoxArrowInLeft className="text-lg "/>
                            <span className="text-[12px]">ورود</span>
                            <div className="w-px h-4 bg-black/50"></div>
                            <span className="text-[12px]">ثبت نام</span>
                        </button>
                    }
                    {
                        isAuth &&
                        <div onClick={() => setIsOpen(!isOpen)}
                             className={clsx("flex justify-center px-2 relative w-fit  rounded-md py-2", isOpen && "bg-red-100")}>
                            <FaRegUser className="text-xl"/>
                            <RiArrowDownSFill className="text-2xl"/>
                            {
                                isOpen &&
                                <div
                                    className="user-info z-50 bg-white w-65 border border-black/20 rounded-lg absolute left-0 top-11 font-yekan-bold">
                                    <div
                                        className="full-name flex items-center justify-between hover:bg-[#ECEDEF] transition-all duration-200 ease-linear rounded-t-lg p-4">
                                        <h2>{user.firstName} {user.lastName}</h2>
                                        <IoIosArrowBack/>
                                    </div>
                                    <div className="w-[80%] h-px bg-gray-100 mx-auto"></div>
                                    <div
                                        className="plus flex justify-between items-center hover:bg-[#ECEDEF] transition-all duration-200 ease-linear p-4">
                                        <div className="plus-right flex items-center gap-x-4">
                                            <RiGeminiLine className="text-2xl text-[#B12BA4]"/>
                                            <h2>پلاس</h2>
                                        </div>
                                        <div
                                            className="plus-left flex items-center text-[#B12BA4] text-[12px] font-bold gap-x-2">
                                            <h2>تمدید</h2>
                                            <IoIosArrowBack/>
                                        </div>
                                    </div>
                                    <div className="w-[80%] h-px bg-gray-100/50 mx-auto"></div>
                                    <div
                                        className="orders flex items-center hover:bg-[#ECEDEF] transition-all duration-200 ease-linear  p-4 gap-x-4">
                                        <SlHandbag className="text-xl"/>
                                        <h2>سفارش ها</h2>
                                    </div>
                                    <div className="w-[80%] h-px bg-gray-100 mx-auto"></div>
                                    <div
                                        className="address flex items-center hover:bg-[#ECEDEF] transition-all duration-200 ease-linear  p-4 gap-x-4">
                                        <SlDirections className="text-2xl"/>
                                        <h2>آدرس ها</h2>
                                    </div>
                                    <div className="w-[80%] h-px bg-gray-100 mx-auto"></div>
                                    <div
                                        className="lists flex items-center hover:bg-[#ECEDEF] transition-all duration-200 ease-linear  p-4 gap-x-4">
                                        <SlHeart className="text-xl"/>
                                        <h2>لیست ها</h2>
                                    </div>
                                    <div className="w-[80%] h-px bg-gray-100 mx-auto"></div>
                                    <div
                                        className="comments flex items-center hover:bg-[#ECEDEF] transition-all duration-200 ease-linear  p-4 gap-x-4">
                                        <FaRegComment className="text-xl"/>
                                        <h2>دیدگاه ها و پرسش ها</h2>
                                    </div>
                                    <div className="w-[80%] h-px bg-gray-100/50 mx-auto"></div>
                                    <div
                                        className="coins flex justify-between items-center hover:bg-[#ECEDEF] transition-all duration-200 ease-linear p-4">
                                        <div className="plus-right flex items-center gap-x-4">
                                            <FaBitcoin className="text-amber-400 text-2xl"/>
                                            <h2>دیجی کوین</h2>
                                        </div>
                                        <div className="plus-left flex items-center text-[12px] gap-x-2">
                                            <h2>ماموریت ها</h2>
                                            <IoIosArrowBack/>
                                        </div>
                                    </div>
                                    <div className="w-[80%] h-px bg-gray-100 mx-auto"></div>
                                    <div onClick={()=>{setIsOpen(false);dispatch(openModal())}}
                                         className="cursor-pointer comments rounded-b-lg flex items-center hover:bg-[#ECEDEF] transition-all duration-200 ease-linear  p-4 gap-x-4">
                                        <BsBoxArrowRight className="text-2xl"/>
                                        <h2>خروج از حساب کاربری</h2>
                                    </div>
                                </div>
                            }
                        </div>
                    }
                    <div className="w-px h-8 bg-black/20"></div>
                    <div className="basket relative hover:bg-rose-100 p-2 rounded-md group">
                        <SlBasket onClick={() => navigate('/cart')} className="cursor-pointer text-2xl rotate-y-180"/>
                        {
                            cartProducts.length>0 &&
                            <>
                                <div className="number size-4.5 rounded-sm bg-[#ef4056] absolute bottom-0 right-0 text-white font-shabnam flex items-center justify-center text-[14px]">{cartProducts.length}</div>
                                <div className="absolute z-50 left-0 top-full hidden group-hover:flex w-130">
                                    <CartBox isAuth={isAuth}/>
                                </div>
                            </>
                        }


                    </div>
                </div>
            </div>


            <div className="header-center-mobile">
                <HeaderCenterMobile/>
            </div>

            {
                isOpenModal &&
                <Modal>
                  <div className="flex flex-col gap-y-5">
                      <h2 className="font-yekan-bold">از حساب کاربری خارج می‌شوید؟</h2>
                      <div className="w-full h-px bg-black/10"></div>
                      <p className="text-[14px] leading-8">با خروج از حساب کاربری، به سبد خرید فعلی‌تان دسترسی نخواهید داشت. هروقت بخواهید می‌توانید مجددا وارد شوید و خریدتان را ادامه دهید.</p>
                  </div>
                    <div className="btns flex justify-end gap-x-2 mt-5">
                        <button onClick={()=>dispatch(closeModal())} className="px-4 py-2 rounded-md border border-[#EE4056] text-[#EE4056]">انصراف</button>
                        <button onClick={handleLogOut} className="px-4 py-2 rounded-md border bg-[#EE4056] text-white">خروج از حساب</button>
                    </div>
                </Modal>
            }
        </>
    )
}
export default HeaderCenter
