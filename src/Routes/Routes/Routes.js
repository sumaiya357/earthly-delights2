import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import Home from "../../pages/Home/Home/Home"
import ShopAllItems from "../../pages/Home/Home/OurProducts/ShopAllItems"
import Login from "../../pages/Login/Login"
import Order from "../../pages/Order/Order"
import Shop from "../../pages/Shop/Shop"
import SignUp from "../../pages/SignUp/SignUp"

 const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:  [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: '/shop',
                element: <ShopAllItems></ShopAllItems>
            },

            {
                path: '/order',
                element: <Order></Order>
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
    }
])

export default router;