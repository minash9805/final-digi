import React from 'react'
import { IoMdClose } from "react-icons/io";
import {closeModal} from "../../redux/modal/modalSlice.js";
import {useDispatch} from "react-redux";

const Modal = ({children}) => {
    const dispatch=useDispatch()
    return (
        <>
            <div className="fixed inset-0 flex justify-center items-center bg-black/20 z-50">
                <div className=" max-w-[50%] bg-white relative p-4">
                    <IoMdClose onClick={()=>dispatch(closeModal())} className="text-2xl absolute left-3 top-3"/>
                    {children}
                </div>
            </div>
        </>
    )
}
export default Modal
