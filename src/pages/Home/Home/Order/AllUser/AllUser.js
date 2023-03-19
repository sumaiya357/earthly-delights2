
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react';

import toast from 'react-hot-toast';
import ConfirmModal from '../../../../Shared/ConfirmModal/ConfirmModal';


const AllUser = () => {
    
    // const { user } = useContext(AuthContext)
    
    // const url = `http://localhost:5000/users`;
    
    const { data: users = [], refetch } = useQuery({    
        queryKey: ['users'], //, user?.email
        queryFn: async () =>{
            const res =  await fetch('http://localhost:5000/users',{
                // headers: {
                //      authorization: `bearer ${localStorage.getItem('accesstoken')}`
                // }
            });
            const data =  await res.json();
            return data;
        }
    });

    const[deletProduct, setDeletProduct] = useState(null);

    
    //Cancel Button of Modal
    const closeModal = () => {
        setDeletProduct(null)
    }

    const handleDeleteProduct = product => {
        fetch(`http://localhost:5000/users/${product._id}`,{
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

    const handleMakeAdmin = id => {
               fetch(`http://localhost:5000/users/admin/${id}`, {
                method: 'PUT',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accesstoken')}`
                }
               })
               .then( res => res.json())
               .then(data => {
                // console.log(data);//as a resp modifuesCount is 1 after click
                if(data.modifiedCount > 0){
                    toast.success('Made Admin Successfull')
                    refetch()
                }
               })
    }
    return (
        <div className='mt-10'>
           <h3 className='text-lg mb-10'>All Users</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                            
                        </tr>
                    </thead>
                    {/* onClick={() => handleMakeAdmin(user._id)} */}
                    <tbody>
                        {
                            users.map( (user, i) => <tr key={user._id}>
                                <th> {i+1}</th>
                                <td> {user.name} </td>
                                <td>{user.email}</td>

                                <td>{ user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn  btn-xs btn-primary'>Make Admin</button>}</td>


                               <td>
                               <label onClick={() => setDeletProduct(user)} htmlFor="delet-modal" className="btn btn-error  btn-xs text-white mt-3">Delet  <FontAwesomeIcon className='ml-2' icon={faDeleteLeft }></FontAwesomeIcon></label>
                               </td>
                            </tr>

                            )
                        }   
                    </tbody>
                </table>
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

export default AllUser;