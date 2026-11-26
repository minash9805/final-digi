import React, {useEffect, useState} from 'react'
import { FaArrowRight } from "react-icons/fa6";
import loginFormLogo from '/src/assets/images/header-logo.svg'
import {Link, useNavigate} from 'react-router'
import {useDispatch, useSelector} from "react-redux";
import {fetchLogin,resetLogin} from "../../redux/login/loginSlice.js";
import toast, { Toaster } from 'react-hot-toast';
const LoginForm = ({setLogin,from}) => {
    const [userInfo,setUserIno]=useState({
        phone:"",
        password:""
    })
    const {isAuth,error}=useSelector(state => state.login)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(fetchLogin(userInfo))
    }
    useEffect(() => {
        if (isAuth){
         if (from==='/cart'){
             navigate('/checkout')
         }else {
             navigate('/')
         }
        }
    }, [isAuth]);
    useEffect(() => {
        if (error?.type==="notFound"){
            toast.error(error.message,{
                position:"top-left",
                duration:1500
            });
            setTimeout(()=>{
                setLogin(false)
                dispatch(resetLogin())
            },2000)
        }
    }, [error]);
    return (
        <>
            <Toaster />
            <form onSubmit={(e)=>handleSubmit(e)} className="lg:border lg:w-100  lg:border-black/20 rounded-md p-7 w-full" action="">
                <div className="loginform-top flex justify-center items-center gap-x-2 relative">
                    <Link to={'/'}>
                        <FaArrowRight className="lg:text-xl absolute top-1 right-4"/>
                    </Link>
                    <img className="w-45 justify-self-center" src={loginFormLogo} alt="login-form-logo"/>
                </div>
                <div className="login-form-bottom px-4 mt-10 flex flex-col gap-y-5">
                    <h2 className="font-yekan-bold text-[14px] xs:text-[16px]">ورود یا ثبت ‌نام در دیجی‌کالا</h2>
                    <h2 className="text-[12px] text-black/60">لطفا شماره موبایل یا ایمیل خود را وارد کنید</h2>
                    <label className="floating-label">
                        <input onChange={(e)=>setUserIno({...userInfo,phone: e.target.value})} value={userInfo.phone} type="text" className="text-[16px] outline-0 w-full rounded-lg input md:input-md lg:input-lg xl:input-xl" />
                        <span className="text-right right-3 text-[12px] xs:text-[16px]">شماره موبایل یا پست الکترونیک</span>
                    </label>
                    <label className="floating-label">
                        <input onChange={(e)=>setUserIno({...userInfo,password: e.target.value})} value={userInfo.password} type="password" className="text-[16px] outline-0 w-full rounded-lg input md:input-md lg:input-lg xl:input-xl" />
                        <span className="text-[12px] xs:text-[16px]">رمز عبور</span>
                    </label>
                    <button type="submit" className="px-4 py-3 rounded-md bg-[#EE4056] text-white">ورود به دیجی کالا</button>
                    <h2 className="text-[10px] text-black/50">ورود شما به معنای پذیرش شرایط دیجی‌کالا و قوانین حریم‌خصوصی است</h2>
                    <h2 onClick={()=>setLogin(false)} className="cursor-pointer text-[10px] text-[#EE4056] font-yekan-bold text-center -mt-2">ثبت نام در دیجی کالا</h2>
                </div>
            </form>
        </>
    )
}
export default LoginForm
