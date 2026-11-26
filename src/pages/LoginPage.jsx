import React, {useEffect, useState} from 'react'
import LoginForm from "../components/login/LoginForm.jsx";
import RegisterForm from "../components/login/RegisterForm.jsx";
import {useLocation} from "react-router";

const LoginPage = () => {
    const [login,setLogin]=useState(true)
    const location=useLocation()
    const from=location.state?.from
    useEffect(() => {
        console.log(from)
    }, [from]);
    return (
        <>
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
