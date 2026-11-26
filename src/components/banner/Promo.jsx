import React from 'react'
import clsx from "clsx";

const Promo = ({promo}) => {
    return (
        <>
          <div className="container-1 w-[95%] lg:w-[85%] mx-auto my-4">
              <div className={clsx("promo grid ", promo.length === 4 ? "lg:grid-cols-4 grid-cols-2 gap-2 lg:gap-x-4" : "grid-cols-1 lg:grid-cols-2 gap-4")}>
                  {
                      promo.map(item => {
                          return <img title={item.title} className={clsx("lg:rounded-2xl rounded-md cursor-pointer",promo.length === 4 ? "lg:max-w-78.5 max-h-29 object-cover lg:max-h-full w-full block" : "w-full lg:w-auto")} src={item.image} alt=""/>
                      })
                  }
              </div>
          </div>
        </>
    )
}
export default Promo
