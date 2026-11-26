import React, {useEffect, useState} from 'react'
import LoginForm from "../components/login/LoginForm.jsx";
import RegisterForm from "../components/login/RegisterForm.jsx";
import {useLocation} from "react-router";
import {useSelector} from "react-redux";

const LoginPage = () => {
    const [login,setLogin]=useState(true)
    const {loading}=useSelector(state => state.login)
    const location=useLocation()
    const from=location.state?.from
    useEffect(() => {
        console.log(from)
    }, [from]);
    return (
        <>
            {loading && (
                <div className="fixed top-5 inset-x-0 z-50 flex justify-center items-center gap-2">
                    <span>در حال اتصال به سرور، لطفا منتظر بمانید</span>
                    <span className="inline-block w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></span>
                </div>
            )}
            <div className="login-form fixed inset-0 flex justify-center items-center">
                {
                    login &&
                    <LoginForm setLogin={setLogin} from={from}/>
                }
                {
                    !login &&
                    <RegisterForm setLogin={setLogin}/>
                }
            </div>
        </>
    )
}
export default LoginPage
