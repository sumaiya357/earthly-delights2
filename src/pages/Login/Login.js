import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    
    const {signIn} = useContext(AuthContext);
    // show error
    const [loginErr, setLoginErr] = useState('')

    const location = useLocation();

    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/'


    const handleLogin = data =>{
        console.log(data)
        setLoginErr('')
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user)
            navigate(from, {replace: true})
        })
        .catch(error =>{ 
            console.log(error.message)
            setLoginErr(error.message)
            
    })}
    return (
        <div className="h-[600px] flex justify-center items-center">
           <div className='w-96 p-7 '>  {/* border border-2 border-lime-700 */}
                <h2 className='text-4xl text-center text-green-500'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>

                        <input  type="text"{...register("email",{required: "Email Address is required"})} 
                        className="input input-bordered w-full max-w-xs "  />

                        {/* ERROR MESSAGE DISPALYED */}
                        {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}

                    </div>



                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>

                        <input  type="password"{...register("password",{required:"Password  is required",
                        minLength: {value: 6, message: "Password must be 6 chararcter or longer "}})}
                         className="input input-bordered w-full max-w-xs"  />

                            {/* ERROR MESSAGE DISPALYED */}
                        {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}

                        <label className="label">
                            <span className="label-text">Forget Password</span>
                        </label>
                    </div>


                    <input className='btn btn-success text-white w-full bg-green-600' value='login' type="submit" />

               {/* login err displYED */}
                    <div>
                          {loginErr && <p className='text-red-600'>{loginErr}</p>}
                    </div>
                </form>
                <p>New to this site ? <Link to='/signup' className='text-green-500'>Create new account</Link></p>

                <div className="divider">OR</div>

                <button className='btn btn-success w-full text-white bg-green-600'>Continue with Google</button>

            </div>
        </div>
    );
};

export default Login;