import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"

import About from "../../pages/About/About"
import AddProduct from "../../pages/AddProduct/AddProduct"
import Home from "../../pages/Home/Home/Home"

import Order from "../../pages/Home/Home/Order/Order"
import ShopAllItems from "../../pages/Home/Home/Shop/ShopAllItems"
import Login from "../../pages/Login/Login"

import SignUp from "../../pages/SignUp/SignUp"
import PrivateRoute from "../PrivateRoute/PrivateRoute"
import DashboardLayout from "../../Layout/DashoardLayout"


import errImg from '../../Assets/Images/errImg4.jpg'
import MyOrder from "../../pages/Home/Home/Order/MyOrder/MyOrder"

import AllUser from "../../pages/Home/Home/Order/AllUser/AllUser"

import Dashboard from "../../pages/Home/Home/Order/Dashboard/Dashboard"
import AdminRoute from "./AdminRoute/AdminRoute"
import AuctionBody from "../../auction/AuctionBody"
import AuctionCards from "../../auction/AuctionCards/AuctionCards"


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
            ,

            {
                path: '/order',
                element: <Order></Order>
            }
            ,

            {
                path: '/addAuction',
                element: <AuctionBody></AuctionBody>
            },
            {
                path: '/auction',
                element: <AuctionCards></AuctionCards>
            }
           
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute> <DashboardLayout></DashboardLayout> </PrivateRoute>,
        children: [
            {
                path:'/dashboard',
                element: <Dashboard></Dashboard>
            }
            ,
            {
                path:'/dashboard/alluser',
                element: <AdminRoute><AllUser></AllUser></AdminRoute>
            }
            ,
             {
                path:'/dashboard/addProduct',
                element: <AddProduct></AddProduct>
             }
            ,
             {
                path:'/dashboard/myorder',
                element: <MyOrder></MyOrder>
             } 
        ]
    },
    {
        path: '/*',
        element: <div  className="grid h-screen place-items-center" >
            {/* <p>Page not found</p> */}
            <figure >
                <img className="object-fill h-96 w-96" src={errImg} alt='errorImage'/>

            </figure>
                 </div>
    }

])

export default router;