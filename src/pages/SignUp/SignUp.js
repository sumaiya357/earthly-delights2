import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import login from '../../Assets/Images/loginImg/signup.png';
import useToken from '../../hooks/useToken';
import { getAuth, sendEmailVerification, signInWithPopup } from 'firebase/auth';
const SignUp = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const { createUser, updateUser, verifyEmail, provider } = useContext(AuthContext);

    const auth = getAuth();
    // const {user} = useContext(AuthContext)


    // SIGNUP ERROR
    const [signupErr, setSignupErr] = useState('')

    //TOKEN
    const[createdUser, setCreatedUser] = useState('')

    const [token] = useToken(createdUser);

     //navigate to home page after login
     const navigate = useNavigate();
     if(token){
        navigate('/')
     }

    const handleSignUp = (data) => {
        // console.log(data)
        // const name =event.target.name.value;
        // const email =event.target.email.value;
        // const password =event.target.password.value;
        // console.log(name, email, password )
        setSignupErr('');

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User created successfully')
                verifyEmail()
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        userDetails(data.name, data.email)
                        // navigate('/');
                         //got to home page
                    })
                    .catch(err => console.log(err));             
            })
            .catch(error => {
                console.log(error)
                setSignupErr(error.message)
            });

       const userDetails = (name, email) => {
        const userDetails= {
            name,
            email,
        }
               console.log(userDetails)
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userDetails)
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                // getUserToken(email)

                setCreatedUser(email);
                toast.success('SUCCESSFULLY ADDED')
            
            })
            }
    }

    const handleGoogle =() =>{
        signInWithPopup(auth, provider)
        .then((res) =>{
            const user = res.user
            console.log(user)

        })
        .catch(err => console.log(err))
    }


    // const getUserToken = email =>{
    //       fetch(`http://localhost:5000/jwt?email=${email}`)
    //       .then(res => res.json())
    //       .then(data => {
    //        if(data.accesstoken){
    //           localStorage.setItem('accesstoken', data.accesstoken)
    //         //   navigate('/')
    //        }
    //       })
    // }
  


    return (
        <div className='mt-20 mb-20'>
            {/* className="h-[600px] flex justify-center items-center mb-10"> */}
            {/* <div className='w-96 p-7 '>   */}
            {/* border border-2 border-lime-700 */}
            <div className='  grid grid-cols-1 text-center  md:grid-cols-1 lg:grid-cols-2  p-5'>
                <div  className=' pl-52  text-xl'>
                <h2 className='text-4xl text-center text-green-500'>SignUp</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full ">
                        <label htmlFor='name'  id='name' className="label">
                            <span className="label-text text-lg">Name</span>
                        </label>
                        <input type="text"{...register("name", { required: "UserName required" })}
                            className="input input-bordered w-full "
                            // value={user.name} 
                            // onChange={handleInputs}
                           />
                        {/* ERROR MESSAGE DISPALYED */}
                        {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}
                    </div>

                    <div className="form-control w-full ">
                        <label htmlFor='email' id='email' className="label">
                            <span className="label-text text-lg">Email</span>
                        </label>
                       <input type="email"{...register("email", { required: "Email Address is required" })}
                            className="input input-bordered w-full " 
                            // value={user.email} 
                            // onChange={handleInputs}
                            />
                        {/* ERROR MESSAGE DISPALYED */}
                        {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}

                    </div>



                    <div className="form-control w-full   ">
                        <label htmlFor='password' id='password' className="label">
                            <span className="label-text  text-lg">Password</span>
                        </label>
                        <input  type="password"{...register("password", {
                            required: "Password  is required",
                            minLength: { value: 6, message: "Password must be 6 chararcters or longer " },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/, message: "Password must have uppercase,numbers,special char" }
                        })}
                            className="input input-bordered w-full border border-2 border-lime  "
                            // value={user.password} 
                            // onChange={handleInputs}
                             />
                        {/* ERROR MESSAGE DISPALYED */}
                        {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                    </div>


                    <input className='btn btn-success text-white w-full bg-green-600 mt-5' value='SignUp' name='SignUp' id='SignUp' type="submit" />

                    {/* display signup error */}

                    {signupErr && <p className='text-red-500 mt-5'>{signupErr}</p>}

                    <div className="divider">OR</div>

                    <button onClick={handleGoogle} className='btn btn-success w-full text-white bg-green-600'>Continue with Google</button>

                </form>
                
            </div>

            {/* -----IMAGE----- */}
            
           <div className=' pl-36 pt-0 w-3/4'>
            <figure>
                <img src={login}  alt='loginImage'/>

            </figure>
            <p className='mt-5 text-xl '>Already have an account here? <Link to='/login' className='text-green-500'>Login</Link></p> 
         </div>

        </div>
        </div>
    );
};

export default SignUp;