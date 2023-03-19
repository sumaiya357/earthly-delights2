import { faDeleteLeft, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import ConfirmModal from '../../Shared/ConfirmModal/ConfirmModal';

const Indoors = (props) => {
    const { name, img, price } = props.indoor


    const [deletProduct, setDeletProduct] = useState(null);


    //Cancel Button of Modal
    const closeModal = () => {
        setDeletProduct(null)
    }

    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)


    const handleDeleteProduct = indoor => {
        fetch(`http://localhost:5000/indoors/${indoor._id}`, {
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
                        {/* <button >Buy now!</button> */}
                        {
                                        isAdmin ? 
                                           <></>
                                         :
                                         <button onClick={() => props.handleAddToCart(props.indoor)} className="btn-cart btn btn-success btn-sm text-xs button text-white">Add To Cart
                                         <FontAwesomeIcon className='ml-2' icon={faShoppingCart}></FontAwesomeIcon></button>
                                    }
                    </div>

                    <div>


           {/* snake plant */}
                        {
                            isAdmin && <>
                                <label onClick={() => setDeletProduct(props.indoor)} htmlFor="delet-modal" className="btn btn-error  btn-sm text-white">Delet  <FontAwesomeIcon className='ml-2' icon={faDeleteLeft}></FontAwesomeIcon></label>
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

export default Indoors;