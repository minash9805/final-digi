import React, {useEffect, useState} from 'react'

const Timer = ({isProductPage}) => {
    const [second, setSecond] = useState(59)
    const [minute, setMinute] = useState(59)
    const [hour, setHour] = useState(24)
    useEffect(() => {
        const timer = setTimeout(() => {
            if (second > 0) {
                setSecond(second - 1)
            } else {
                if (minute > 0) {
                    setMinute(minute - 1)
                    setSecond(59)
                } else {
                    if (hour > 0) {
                        setHour(hour - 1)
                        setMinute(59)
                        setSecond(59)
                    } else {
                        setHour(24)
                        setMinute(59)
                        setSecond(59)
                    }
                }
            }
        }, 1000)
        return () => {
            clearTimeout(timer)
        }
    }, [second, minute, hour]);
    return (
        <>
            {
                !isProductPage ?
                    <div className="">
                        <div className="counter flex items-center gap-x-1 font-shabnam text-[14px]">
                            <div
                                className="size-6 bg-white rounded-sm flex items-center justify-center">{second >= 10 ? second : `0${second}`}</div>
                            <span className="text-white text-[20px]">:</span>
                            <div
                                className="size-6 bg-white rounded-sm flex items-center justify-center">{minute >= 10 ? minute : `0${minute}`}</div>
                            <span className="text-white text-[20px]">:</span>
                            <div
                                className="size-6 bg-white rounded-sm flex items-center justify-center">{hour >= 10 ? hour : `0${hour}`}</div>
                        </div>
                    </div>
                    :
                    <h2 className="font-shabnam text-[12px] text-[#e6123d] font-semibold">{second >= 10 ? second : `0${second}`} : {minute >= 10 ? minute : `0${minute}`} : {hour >= 10 ? hour : `0${hour}`}</h2>
            }
        </>
    )
}
export default Timer
