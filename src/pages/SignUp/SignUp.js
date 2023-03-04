import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    
    const {createUser, updateUser} = useContext(AuthContext);
   
    // SIGNUP ERROR
    const [signupErr, setSignupErr] = useState('')

    //navigate to home page after login
    const navigate = useNavigate();

    const handleSignUp = data =>{
        console.log(data)
        setSignupErr('');

        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            toast('User created successfully')
            const userInfo ={
                displayName: data.name
            }
            updateUser(userInfo)
            .then(() => {
                navigate('/'); //got to home page
            })
            .catch(err => console.log(err));
            
        })
        .catch(error => {
            console.log(error)
            setSignupErr(error.message)});
    }


    return (
        <div className="h-[600px] flex justify-center items-center mb-10">
        <div className='w-96 p-7 '>  {/* border border-2 border-lime-700 */}
             <h2 className='text-4xl text-center text-green-500'>SignUp</h2>
             <form onSubmit={handleSubmit(handleSignUp)}>


                 <div className="form-control w-full max-w-xs">
                     <label className="label">
                         <span className="label-text">Name</span>
                     </label>

                     <input  type="text"{...register("name",{required: "UserName required"})} 
                     className="input input-bordered w-full max-w-xs "  />

                   {/* ERROR MESSAGE DISPALYED */}
                   {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}

                 </div>

                 <div className="form-control w-full max-w-xs">
                     <label className="label">
                         <span className="label-text">Email</span>
                     </label>

                     <input  type="email"{...register("email",{required: "Email Address is required"})} 
                     className="input input-bordered w-full max-w-xs "  />

                     {/* ERROR MESSAGE DISPALYED */}
                     {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}

                 </div>



                 <div className="form-control w-full max-w-xs">
                     <label className="label">
                         <span className="label-text">Password</span>
                     </label>

                     <input  type="password"{...register("password",{required:"Password  is required",
                     minLength: {value: 6, message: "Password must be 6 chararcters or longer "},
                    pattern: {value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ , message: "Password must be uppercase,numbers,special char"}})}
                      className="input input-bordered w-full max-w-xs"  />

                         {/* ERROR MESSAGE DISPALYED */}
                     {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}

                   
                 </div>


                 <input className='btn btn-success text-white w-full bg-green-600 mt-5' value='SignUp' type="submit" />
                 
                 {/* display signup error */}
                 
                 {signupErr && <p className='text-red-500 mt-5'>{signupErr}</p>}

             </form>
             <p className='mt-5'>Already have an account ? <Link to='/login' className='text-green-500'>Login</Link></p>

             <div className="divider">OR</div>

             <button className='btn btn-success w-full text-white bg-green-600'>Continue with Google</button>

         </div>
     </div>
    );
};

export default SignUp;