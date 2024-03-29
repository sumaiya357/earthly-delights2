import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

import useAdmin from '../hooks/useAdmin';

import Navbar from '../pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {

    const {user} = useContext(AuthContext);

    const [isAdmin] = useAdmin(user?.email)
    
    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                  

                    <Outlet></Outlet>
                    
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                     
                       {
                        isAdmin && <>
                         <li><Link to='/dashboard/alluser'>All users</Link></li>
                         </>
                       }

                    
                        <li><Link to='/dashboard/order'> My Orders</Link></li>
                    </ul>

                </div>
            </div>


          
        </div>
    );
};

export default DashboardLayout;