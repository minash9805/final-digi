import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from "react-router";
import {FaArrowRight} from "react-icons/fa6";
import loginFormLogo from "../../assets/images/header-logo.svg";
import {useDispatch, useSelector} from "react-redux";
import {fetchRegister, resetRegister} from "../../redux/register/registerSlice.js";
import toast, {Toaster} from 'react-hot-toast';

const RegisterForm = ({setLogin}) => {
    const [newUser, setNewUser] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: "",
        role: "",
        address: {
            province: "",
            city: "",
            street: "",
            postalCode: "",
            details: ""
        }
    })
    const {user, status, error} = useSelector(state => state.register)
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(fetchRegister(newUser))
    }
    useEffect(() => {
        if (error?.type === "duplicate") {
            toast.error(error?.message, {
                position: "top-left",
                duration: 1500
            });
            setTimeout(() => {
                setLogin(true)
                dispatch(resetRegister())
            }, 2000)

        }
    }, [error]);
    useEffect(() => {
        if (status === "succeeded") {
            toast.success(`خوش امدین ${user.firstName}`, {
                position: "top-left",
                duration: 1500
            });
            setTimeout(() => {
                setLogin(true)
                dispatch(resetRegister())
            }, 2000)
        }
    }, [status]);
    return (
        <>
            <Toaster/>
            <form onSubmit={(e) => handleSubmit(e)}
                  className="lg:border lg:w-100  lg:border-black/20 rounded-md p-7 w-full" action="">
                <div className="loginform-top flex justify-center items-center gap-x-2 relative">
                    <Link to={'/'}>
                        <FaArrowRight className="lg:text-xl absolute top-1 right-4"/>
                    </Link>
                    <img className="w-45 justify-self-center" src={loginFormLogo} alt="login-form-logo"/>
                </div>
                <div className="login-form-bottom px-4 mt-4 lg:mt-10 flex flex-col gap-y-5">
                    <h2 className="font-yekan-bold text-[14px] xs:text-[16px]">ورود یا ثبت ‌نام در دیجی‌کالا</h2>

                    <label className="floating-label">
                        <input onChange={(e) => setNewUser({...newUser, firstName: e.target.value})}
                               value={newUser.firstName} type="text"
                               className="text-[16px] w-full outline-0 rounded-lg input md:input-md lg:input-lg xl:input-xl"/>
                        <span className="text-[12px] xs:text-[16px]">نام و نام خانوادگی</span>
                    </label>
                    <label className="floating-label">
                        <input onChange={(e) => setNewUser({...newUser, phone: e.target.value})} value={newUser.phone}
                               type="text"
                               className="text-[16px] w-full outline-0 rounded-lg input md:input-md lg:input-lg xl:input-xl"/>
                        <span className="text-[12px] xs:text-[16px]">شماره موبایل</span>
                    </label>
                    <label className="floating-label">
                        <input onChange={(e) => setNewUser({...newUser, email: e.target.value})} value={newUser.email}
                               type="text"
                               className="text-[16px] w-full outline-0 rounded-lg input md:input-md lg:input-lg xl:input-xl"/>
                        <span className="text-[12px] xs:text-[16px]">پست الکترونیک</span>
                    </label>
                    <label className="floating-label">
                        <input onChange={(e) => setNewUser({...newUser, password: e.target.value})}
                               value={newUser.password} type="text"
                               className="text-[16px] w-full outline-0 rounded-lg input md:input-md lg:input-lg xl:input-xl"/>
                        <span className="text-[12px] xs:text-[16px]">رمز عبور</span>
                    </label>
                    <button className="px-4 py-3 rounded-md bg-[#EE4056] text-white">ثبت نام در دیجی کالا</button>
                    <h2 className="text-[10px] text-black/50">ورود شما به معنای پذیرش شرایط دیجی‌کالا و قوانین
                        حریم‌خصوصی است</h2>
                    <h2 onClick={() => setLogin(true)}
                        className="cursor-pointer text-[10px] text-[#EE4056] font-yekan-bold text-center -mt-2">ورود به
                        دیجی کالا</h2>
                </div>
            </form>
        </>
    )
}
export default RegisterForm
