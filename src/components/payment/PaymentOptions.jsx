import React, {useState} from 'react'
import PaymentItem from "./PaymentItem.jsx";
import {BiSolidCreditCard} from "react-icons/bi";
import {LuSquareArrowUp} from "react-icons/lu";
import {HiOutlineBanknotes} from "react-icons/hi2";

const PaymentOptions = ({setBtnTitle}) => {
    const [isActive, setIsActive] = useState(1)
    return (
        <>
            <div className="p-4 lg:border lg:border-black/10 rounded-md">
                <h2 className="text-[12px] lg:text-[14px] text-[#5c5c5c] mb-2">نقدی</h2>
                <div className="items flex gap-x-2">
                    <div className="w-full" onClick={() => {setIsActive(1);setBtnTitle("اینترنتی")}}>
                        <PaymentItem titleTop="اینترنتی" titleBottom="با همه کارت های بانکی" item={1} isActive={isActive}>
                            <BiSolidCreditCard/>
                        </PaymentItem>
                    </div>
                    <div className="w-full" onClick={() => {setIsActive(2);setBtnTitle("کیف پول دیجی پی")}}>
                        <PaymentItem titleTop="کیف پول دیجی پی" titleBottom="100 تومان" item={2} isActive={isActive}>
                            <LuSquareArrowUp/>
                        </PaymentItem>
                    </div>
                </div>
                <h2 className="text-[12px] lg:text-[14px] text-[#5c5c5c] mb-3 mt-10">اعتباری دیجی پی</h2>
                <div className="items flex gap-x-3">
                    <div className="w-full" onClick={() => {setIsActive(3);setBtnTitle("چهار قسطه")}}>
                        <PaymentItem titleTop="چهار قسطه" titleBottom={`${Number(20000000).toLocaleString()} تومان`}
                                     item={3} isActive={isActive}>
                            <LuSquareArrowUp/>
                        </PaymentItem>
                    </div>
                  <div className="w-full" onClick={() => {setIsActive(4);setBtnTitle("یک قسطه")}}>
                      <PaymentItem titleTop="یک قسطه" titleBottom="الان بخر، بعدا پرداخت کن" item={4} isActive={isActive}>
                          <LuSquareArrowUp/>
                      </PaymentItem>
                  </div>
                </div>
                <h2 className="text-[12px] lg:text-[14px] text-[#5c5c5c] mb-3 mt-10">سایر اقساطی و اعتباری‌ها</h2>
                <div  className="items flex gap-x-2">
                   <div className="w-full" onClick={() => {setIsActive(5);setBtnTitle("اعتبار وایب")}}>
                       <PaymentItem titleTop="اعتبار وایب" titleBottom="بانک رفاه کارگران" item={5} isActive={isActive}>
                           <HiOutlineBanknotes/>
                       </PaymentItem>
                   </div>
                <div className="w-full" onClick={() => {setIsActive(6);setBtnTitle("کارت های اعتباری")}}>
                    <PaymentItem titleTop="کارت های اعتباری" titleBottom="بانک ها سازمان ها شرکت ها" item={6} isActive={isActive}>
                        <BiSolidCreditCard/>
                    </PaymentItem>
                </div>
                </div>
            </div>
        </>
    )
}
export default PaymentOptions
