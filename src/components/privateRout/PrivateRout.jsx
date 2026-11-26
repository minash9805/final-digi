import React, {useEffect} from 'react'
import {useSelector} from "react-redux";
import {useNavigate} from "react-router";

const PrivateRout = ({children}) => {
    const {isAuth}=useSelector(state => state.login)
    const navigate=useNavigate()
    useEffect(() => {
        if (!isAuth){
            navigate('/login')
        }
    }, []);
    return (
        children
    )
}
export default PrivateRout
