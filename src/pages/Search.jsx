import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import {TbCameraSearch} from "react-icons/tb";
import {useNavigate} from "react-router";
import {FaArrowTrendUp} from "react-icons/fa6";

const Search = () => {
    const navigate=useNavigate()
    return (
        <>
            <div className="search flex items-center gap-x-2 p-4">
                <FaArrowRight onClick={()=>navigate('/')}/>
                <div className="search-input flex gap-x-2 justify-between items-center border border-black/10 rounded-3xl px-4 py-2 text-black/50 text-[14px] w-full">
                    <IoSearch className="text-xl"/>
                    <input placeholder="جستجو در همه کالا ها" className="w-full outline-0" type="text"/>
                    <TbCameraSearch className="text-2xl text-[#431883]/70"/>
                </div>
            </div>
            <div className="popular-searches px-4">
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
                  </div>
            </div>
        </>
    )
}
export default Search
