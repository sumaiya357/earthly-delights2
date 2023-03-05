import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const imgHostKey =process.env.REACT_APP_imgbb_key;
    // console.log(imgHostKey);

    const handleAddProduct = data => {
        // console.log(data)
        const image = data.image[0];
        // console.log(data.image[0])

        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            // console.log(imgData)

            if(imgData.success){
                console.log(imgData.data.url);
                const product = {
                    name: data.name,
                    type:data.type,
                    img: imgData.data.url

                }
                //SAVE Product info to DB
                fetch('http://localhost:5000/addedProducts', {
                    method:'POST',
                    headers:{
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(product)
                })
                .then(res => res.json())
                .then(result=> {
                    toast('Product added successfully')
                    console.log(result);
                })
                
            }
        })
    }
    return (
        <div className='w-96 p-7 '>
            <h2>ADD PRODUCT</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>

                    <input type="text"{...register("name", { required: "UserName required" })}
                        className="input input-bordered w-full max-w-xs " />

                    {/* ERROR MESSAGE DISPALYED */}
                    {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}

                </div>

                



                <div className="form-control w-full max-w-xs">
                    <label className="label">
                    <span className="label-text">Type</span>
                    </label>

                          {/* ----------//DROPDOWN //---------- */}

                    <select className="select  input-bordered w-full max-w-xs"
                    {...register('type')}>
                   

                        <option disabled defaultValue>Select type</option>
                        <option>Flowers</option>
                        <option>Fruits</option>
                        <option>Indoor</option>
                        <option>Bonsai</option>
                        <option>Indoor</option>
                        <option>Indoor</option>
                    </select>

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>

                    <input type="file"{...register("image", { required: "Photo required" })}
                        className="input input-bordered pt-2  w-full max-w-xs " />

                    {/* ERROR MESSAGE DISPALYED */}
                    {errors.image && <p className='text-red-500'>{errors.image?.message}</p>}

                </div>

                <input className='btn btn-success text-white w-full bg-green-600 mt-5' value='Add Product' type="submit" />

                {/* display signup error */}

                {/* {signupErr && <p className='text-red-500 mt-5'>{signupErr}</p>} */}

            </form>
        </div>
    );
};

export default AddProduct;