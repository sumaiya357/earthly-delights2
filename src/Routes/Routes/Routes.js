import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"

import About from "../../pages/About/About"
import AddProduct from "../../pages/AddProduct/AddProduct"
import Home from "../../pages/Home/Home/Home"
import ShopAllItems from "../../pages/Home/Home/Shop/ShopAllItems"
import Login from "../../pages/Login/Login"

import SignUp from "../../pages/SignUp/SignUp"
import PrivateRoute from "../PrivateRoute/PrivateRoute"
import DashboardLayout from "../../Layout/DashoardLayout"


import errImg from '../../Assets/Images/errImg4.jpg'

import AllUser from "../../pages/Home/Home/Order/AllUser/AllUser"

import Dashboard from "../../pages/Home/Home/Order/Dashboard/Dashboard"
import AdminRoute from "./AdminRoute/AdminRoute"
import AuctionBody from "../../auction/AuctionBody"
import AuctionCards from "../../auction/AuctionCards/AuctionCards"
import Order from "../../pages/Home/Home/Order/Order/Order"
import { productAndCartLoaded } from "../../loaders/productAndCartLoader"
import Articles from "../../pages/Articles/Articles"



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
                path: '/addAuction',
                element: <AuctionBody></AuctionBody>
            },
            {
                path: '/auction',
                element: <AuctionCards></AuctionCards>
            } ,
            {
               path:'/addProduct',
               element: <AddProduct></AddProduct>
            }
            ,
            {
                path: '/articles',
                element: <Articles></Articles>
            }
           
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute> <DashboardLayout></DashboardLayout> </PrivateRoute>,
        children: [
           
            {
                path:'/dashboard/alluser',
                element: <AdminRoute><AllUser></AllUser></AdminRoute>
            }  ,

            {
                path: '/dashboard/order',
                loader: productAndCartLoaded,
                element: <Order></Order>
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