import { faDeleteLeft, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import ConfirmModal from '../../../Shared/ConfirmModal/ConfirmModal';
import { useQuery } from '@tanstack/react-query'
import useAdmin from '../../../../hooks/useAdmin';
import { AuthContext } from '../../../../Context/AuthProvider';

const Product = ( props ) => {
    const { name, img, price } = props.product;
    // const product = props.product;
    const[deletProduct, setDeletProduct] = useState(null);

    
    //Cancel Button of Modal
    const closeModal = () => {
        setDeletProduct(null)
    }

    const {user} = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)


    const{refetch} = useQuery({

    })
    
    const handleDeleteProduct = product => {
      fetch(`http://localhost:5000/products/${product._id}`,{
      method: 'DELETE',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        refetch()
      })
    }

    
  
    return (
        <div>
            <div className="card w-48 glass">
                <figure><img src= {img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> {name} </h2>
                    <p className='font-bold ' >{price} <span className='text-2xl'>৳</span></p>
                    <div className="card-actions justify-start">
                        {/* <button >Buy now!</button> */}
                        <button onClick={() => props.handleAddToCart(props.product)} className="btn-cart btn btn-success btn-sm text-xs button text-white">Add To Cart
                <FontAwesomeIcon className='ml-2' icon={faShoppingCart}></FontAwesomeIcon></button>
                
                    </div>

                    <div>

                    {
                        isAdmin && <>
                        <label onClick={() => setDeletProduct(props.product)} htmlFor="delet-modal" className="btn btn-error  btn-sm text-white">Delet  <FontAwesomeIcon className='ml-2' icon={faDeleteLeft}></FontAwesomeIcon></label>
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
                closeModal = {closeModal}
                >
                    
                </ConfirmModal>
                
            }
        </div>
    );
};

export default Product;