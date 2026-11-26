import React from 'react'
import OfferCard from "./card/OfferCard.jsx";

const Offers = ({offerProducts}) => {
    return (
        <>
            <div className="offers container-1 w-[95%] lg:w-[85%] mx-auto my-5">
                <h2 className="text-[19px] text-[#0c0c0c] font-yekan-bold mb-4">پیشنهاد ما</h2>
              <div className="flex flex-wrap justify-center gap-3">
                  {
                      offerProducts.map(item => {
                          return <OfferCard key={item.id} {...item}/>
                      })
                  }
              </div>
            </div>
        </>
    )
}
export default Offers
