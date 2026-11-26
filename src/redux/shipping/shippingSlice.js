import {createSlice} from "@reduxjs/toolkit";
const shippingSlice=createSlice({
    name:"shipping",
    initialState:{
        shippingOptions:[
            {
                id: 1,
                day: "شنبه",
                date: "۳۰ آبان",
                shippingFee: 249000,
                finalShippingFee: 206000,
                deliveryTimes: [
                    {id: 1, time: "۹-۱۲"},
                    {id: 2, time: "۱۲-۱۶"},
                    {id: 3, time: "۱۹-۲۱"}
                ]
            },
            {
                id: 2,
                day: "یکشنبه",
                date: "۱ آذر",
                shippingFee: 249000,
                finalShippingFee: 200000,
                deliveryTimes: [
                    {id: 1, time: "۹-۱۲"},
                    {id: 2, time: "۱۶-۱۸"},
                    {id: 3, time: "۱۹-۲۱"}
                ]
            },
            {
                id: 3,
                day: "دوشنبه",
                date: "۲ آذر",
                shippingFee: 249000,
                finalShippingFee: 185000,
                deliveryTimes: [
                    {id: 1, time: "۱۰-۱۲"},
                    {id: 2, time: "۱۴-۱۶"},
                    {id: 3, time: "۱۹-۲۱"}
                ]
            },
            {
                id: 4,
                day: "سه‌شنبه",
                date: "۳ آذر",
                shippingFee: 249000,
                finalShippingFee: 170000,
                deliveryTimes: [
                    {id: 1, time: "۹-۱۲"},
                    {id: 2, time: "۱۲-۱۵"},
                    {id: 3, time: "۱۹-۲۱"}
                ]
            },
            {
                id: 5,
                day: "چهارشنبه",
                date: "۴ آذر",
                shippingFee: 249000,
                finalShippingFee: 164000,
                deliveryTimes: [
                    {id: 1, time: "۹-۱۲"},
                    {id: 2, time: "۱۵-۱۸"},
                    {id: 3, time: "۱۹-۲۱"}
                ]
            }
        ],
        shippingInfo:null,
        selectTime:null
    },
    reducers:{
        setShippingInfo:(state,action)=>{
        state.shippingInfo=state.shippingOptions.find(item=>{
            return item.id===action.payload
        })
            state.selectTime=null
        },
        setSelectTime:(state,action)=>{
            state.selectTime=action.payload
        },
        resetShippingInfo:(state)=>{
            state.shippingInfo=null

        },
        resetSelectTime:(state)=>{
            state.selectTime=null
        }
    }
})
export const {setShippingInfo,setSelectTime,resetShippingInfo ,resetSelectTime}=shippingSlice.actions
export const shippingReducer=shippingSlice.reducer