import {configureStore} from "@reduxjs/toolkit";
import {loginReducer} from "./login/loginSlice.js";
import {registerReducer} from "./register/registerSlice.js";
import {modalReducer} from "./modal/modalSlice.js";
import {bannersReducer} from "./banners/bannersSlice.js";
import {megaMenuReducer} from "./megaMenu/megaMenuSlice.js";
import {productsReducer} from "./products/productsSlice.js";
import {categoriesReducer} from "./categories/categoriesSlice.js";
import {brandsReducer} from "./brands/brandsSlice.js";
import {commentsReducer} from "./comments/commentsSlice.js";
import {cartReducer} from "./cart/cartSlice.js";
import {shippingReducer} from "./shipping/shippingSlice.js";

export const store=configureStore({
    reducer:{
        "login":loginReducer,
        "register":registerReducer,
        "modal":modalReducer,
        "banners":bannersReducer,
        "megaMenu":megaMenuReducer,
        "products":productsReducer,
        "categories":categoriesReducer,
        "brands":brandsReducer,
        "comments":commentsReducer,
        "cart":cartReducer,
        "shipping":shippingReducer

    }
})