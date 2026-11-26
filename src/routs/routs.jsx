
import {createBrowserRouter} from "react-router";
import Layout from "../components/Layout.jsx";
import Home from "../pages/Home.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import Cart from "../pages/Cart.jsx";
import Search from "../pages/Search.jsx";
import ProductDetails from "../pages/ProductDetails.jsx";
import CheckOut from "../pages/CheckOut.jsx";
import Payment from "../pages/Payment.jsx";
import PrivateRout from "../components/privateRout/PrivateRout.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'cart',
                element: <Cart />
            },
            {
                path: 'product/:id',
                element: <ProductDetails />
            }
        ]
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/search',
        element: <Search />
    },
    {
        path: '/checkout',
        element: (
            <PrivateRout>
                <CheckOut />
            </PrivateRout>
        )
    },
    {
        path: '/payment',
        element: (
            <PrivateRout>
                <Payment />
            </PrivateRout>
        )
    }
], {
    basename: '/final-digi'
});

export default router;
