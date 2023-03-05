import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import OrderLayout from "../../Layout/OrderLayout"
import About from "../../pages/About/About"
import AddProduct from "../../pages/AddProduct/AddProduct"
import Home from "../../pages/Home/Home/Home"
import MyOrder from "../../pages/Home/Home/Order/MyOrder/MyOrder"
import Order from "../../pages/Home/Home/Order/Order"
import ShopAllItems from "../../pages/Home/Home/Shop/ShopAllItems"
import Login from "../../pages/Login/Login"

import SignUp from "../../pages/SignUp/SignUp"
import PrivateRoute from "../PrivateRoute/PrivateRoute"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('http://localhost:5000/products'),
                element: <Home></Home>
            },

            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/shop',
                loader: () => fetch('http://localhost:5000/products'),
                element: <PrivateRoute><ShopAllItems></ShopAllItems></PrivateRoute>
            },


            {
                path: '/login',
                element: <Login></Login>
            },

            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/order',
        element: <PrivateRoute> <OrderLayout></OrderLayout> </PrivateRoute>,
        children: [
            {
                path:'/order',
                element: <MyOrder></MyOrder>
            }
            ,
            {
                path:'/order/addProduct',
                element: <AddProduct></AddProduct>
            }
        ]
    }

])

export default router;