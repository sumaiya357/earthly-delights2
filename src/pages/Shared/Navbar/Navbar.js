import { faTurnDown } from '@fortawesome/free-solid-svg-icons';

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Category from '../Category/Category';
import useAdmin from '../../../hooks/useAdmin'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user.uid)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }
    const [isAdmin] = useAdmin(user?.email)

    return (
        <div>
            <div className="navbar  bg-green-700 text-primary-content mt-5 ">



                {/* --------------//--------- FOR SMALL SCREEN //--------------//*/}


                <div className="navbar-start  ">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-green-700 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>

                            <li tabIndex={0}>
                                <Link to='/' className="justify-between">
                                    Category
                                    <FontAwesomeIcon icon={faTurnDown}></FontAwesomeIcon>
                                </Link>
                                <ul className="p-2">
                                    <li className='bg-amber-400'><Category></Category></li>
                                </ul>
                            </li>
                            {/* <li><Link to='/about'>About</Link></li> */}



                            {user?.uid ?
                                <>
                                    <li> <Link to='/shop'>Shop</Link></li>
                                    <li><Link to='/articles'>Articles</Link></li>
                                    <li> <Link to='/dashboard'>Dashboard</Link></li>
                                    <li><Link to='/dashboard/order'>Order</Link></li>

                                    <li><button onClick={handleLogOut} >SignOut</button></li>

                                    {
                                        isAdmin ? <>
                                            <li><Link to='/addProduct'>AddProduct</Link></li>
                                            <li><Link to='/addAuction'>Add Auction</Link></li>
                                        </> :
                                            <> </>
                                    }

                                </>
                                :
                                <>
                                    <li><Link to='/login'>Login</Link></li>

                                </>
                            }
                            <li><Link to='/signup'>SignUp</Link></li>
                            <li><Link to='/auction'>Auction</Link></li>

                       
                            
                            <div className="form-control">
                                <input type="text" placeholder="Search" className="input input-bordered" />
                            </div>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Eartly Delights</Link>
                </div>






                {/*---------------//---- FOR LARGE SCREEN //-------------*/}



                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li tabIndex={0}>


                            <Link to='/' className="">
                                Category
                                <FontAwesomeIcon icon={faTurnDown}></FontAwesomeIcon>
                            </Link>
                            <ul className="p-2">
                                <li className='bg-amber-400'><Category></Category></li>
                            </ul>
                        </li>
                        {/* {/* <li><Link to='/about'>About</Link></li> */} 

                        {user?.uid ?
                            <>
                                <li> <Link to='/shop'>Shop</Link></li>
                                <li><Link to='/articles'>Articles</Link></li>
                                <li> <Link to='/dashboard'>Dashboard</Link></li>
                                <li><Link to='/dashboard/order'>Order</Link></li>
                               

                                <li><button onClick={handleLogOut} >SignOut</button></li>

                                {
                                    isAdmin ? <>
                                        <li><Link to='/addProduct'>AddProduct</Link></li>
                                        <li><Link to='/addAuction'>Add Auction</Link></li>
                                    </> :
                                        <> </>
                                }
                            </>
                            :
                            <li><Link to='/login'>Login</Link></li>
                        }
                        <li><Link to='/signup'>SignUp</Link></li>
                        <li><Link to='/auction'>Auction</Link></li>
                        

                      <div className='flex grid grid-cols-1'>
                      {/* <SearchBar setResults = {setResults}></SearchBar>
                       <SearchRes results={results}></SearchRes> */}
                      </div>



                    </ul>
                </div>


                <div className="navbar-end">
                    <label htmlFor="dashboard-drawer" tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;