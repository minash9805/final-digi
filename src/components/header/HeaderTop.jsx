import React from 'react'
import headerTop from '/src/assets/images/header.webp'
const HeaderTop = () => {
    return (
        <>
            <div className="header-top">
                <img className="h-9 lg:h-auto object-cover" src={headerTop} alt=""/>
            </div>
        </>
    )
}
export default HeaderTop
