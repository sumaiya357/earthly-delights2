import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import signup from '../../Assets/Images/loginImg/signup.png';
import useToken from '../../hooks/useToken';
const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    
    const {signIn} = useContext(AuthContext);
    // show error
    const [loginErr, setLoginErr] = useState('')

    const location = useLocation();

    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/'

    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail)


    const handleLogin = data =>{
        console.log(data)
        setLoginErr('')
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user)
            setLoginUserEmail(data.email)
            navigate(from, {replace: true})
        })
        .catch(error =>{ 
            console.log(error.message)
            setLoginErr(error.message)
            
    })}
    return (
        <div className='mt-20 mb-20'>
        {/* className="h-[600px] flex justify-center items-center mb-10"> */}
        {/* <div className='w-96 p-7 '>   */}
        {/* border border-2 border-lime-700 */}
        <div className='  grid grid-cols-1 text-center  md:grid-cols-1 lg:grid-cols-2  p-5'>
            <div  className=' pl-52  '>
                <h2 className='text-4xl text-center text-green-500'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>


                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-lg">Email</span>
                        </label>

                        <input  type="text"{...register("email",{required: "Email Address is required"})} 
                        className="input input-bordered w-full "  />

                        {/* ERROR MESSAGE DISPALYED */}
                        {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}

                    </div>



                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-lg">Password</span>
                        </label>

                        <input  type="password"{...register("password",{required:"Password  is required",
                        minLength: {value: 6, message: "Password must be 6 chararcter or longer "}})}
                         className="input input-bordered w-full "  />

                            {/* ERROR MESSAGE DISPALYED */}
                        {errors.password && <p className='text-red-500 w-full'>{errors.password?.message}</p>}

                        <label className="label">
                            {/* <span className="label-text">Forget Password</span> */}
                        </label>
                    </div>


                    <input className='btn btn-success text-white w-full bg-green-600' value='login' type="submit" />

               {/* login err displYED */}
                    <div>
                          {loginErr && <p className='text-red-600'>{loginErr}</p>}

                    </div>
                    <div className="divider">OR</div>

                    <button className='btn btn-success w-full text-white bg-green-600'>Continue with Google</button>

                </form>
                {/* <p className='mt-5'>Already have an account ? <Link to='/login' className='text-green-500'>Login</Link></p> */}
                
            </div>
            
           <div className=' pl-36 pt-0 w-3/4 '>
           {/* border border-2 border-lime-700 */}
            <figure>
                <img src={signup} alt='SignupImage'/>

            </figure>
            <p className='mt-5 text-xl'>Already have an account ? <Link to='/signup' className='text-green-500'>SignUp</Link></p> 
         </div>

        </div>
        </div>
    );
};

export default Login;