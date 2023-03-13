import { faDeleteLeft, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import ConfirmModal from '../../Shared/ConfirmModal/ConfirmModal';


const Flowers = (props) => {

    const { name, img, price } = props.bonsai;


    const [deletProduct, setDeletProduct] = useState(null);


    //Cancel Button of Modal
    const closeModal = () => {
        setDeletProduct(null)
    }

    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)


    const handleDeleteProduct = bonsai => {
        fetch(`http://localhost:5000/bonsai/${bonsai._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                //   refetch()
            })
    }


    return (
        <div>

            <div className="card w-48 glass">
                <figure><img src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-base ml-1"> {name} </h2>
                    <p className='font-bold ml-1' >{price} <span className='text-2xl'>৳</span></p>
                    <div className="card-actions justify-start">
                        <button onClick={() => props.handleAddToCart(props.bonsai)} className="btn-cart btn btn-success btn-sm text-xs button text-white  ">Add to Cart
                            <FontAwesomeIcon className='ml-2' icon={faShoppingCart}></FontAwesomeIcon></button>
                    </div>

                    <div>   
                    {/* // Adenium*/}
                    
                        {
                            isAdmin && <>
                                <label onClick={() => setDeletProduct(props.bonsai)} htmlFor="delet-modal" className="btn btn-error  btn-sm text-white">Delet  <FontAwesomeIcon className='ml-2' icon={faDeleteLeft}></FontAwesomeIcon></label>
                            </>
                        }

                    </div>
                </div>
            </div>


            {

                deletProduct &&
                <ConfirmModal
                    title={`Are you sure you want to delet?`}
                    message={`If you delete it cannot be undone`}
                    success={handleDeleteProduct}
                    successButton="DELETE"
                    modalData={deletProduct}
                    closeModal={closeModal}
                >

                </ConfirmModal>

            }

        </div>
    );
};

export default Flowers;