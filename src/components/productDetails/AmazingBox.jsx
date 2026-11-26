import React from 'react'
import {IoTimerOutline} from "react-icons/io5";
import Timer from "../amazing/Timer.jsx";
import { BiTimer } from "react-icons/bi";
const AmazingBox = () => {
    return (
        <>
          <div className="amazing-desktop hidden lg:block">
              <div className="amazing-box p-4 bg-[#e6123d14] flex items-center gap-x-2 mt-8 justify-between">
                  <h2 className="text-[#e6123d] font-yekan-bold">پیشنهاد شگفت انگیز</h2>

                  <div className="timer flex items-center gap-x-2">
                      <Timer isProductPage={true}/>
                      <BiTimer className="text-[#e6123d]"/>
                  </div>

              </div>
          </div>
            <div className="amazing-mobile bg-[#e6123d14] lg:hidden p-2 text-[#e6123d] font-yekan-bold rounded-2xl border-t-3 border-[#e6123d]/20 relative pb-10 mt-4 flex justify-between px-5">
                <div className="border-t-3 border-[#e6123d] w-25 rounded-r-2xl h-10 absolute -top-0.5 right-0"></div>
                <h2>فروش ویژه</h2>
                <div className="timer flex items-center gap-x-2">
                    <Timer isProductPage={true}/>
                    <BiTimer className="text-[#e6123d]"/>
                </div>
            </div>
        </>
    )
}
export default AmazingBox
