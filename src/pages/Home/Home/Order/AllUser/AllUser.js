
import { useQuery } from '@tanstack/react-query'

import toast from 'react-hot-toast';


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

    const handleMakeAdmin = id => {
               fetch(`http://localhost:5000/users/admin/${id}`, {
                method: 'PUT',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accesstoken')}`
                }
               })
               .then( res => res.json())
               .then(data => {
                // console.log(data);
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
                                <td>{ user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
                                <td><button className='btn btn-xs btn-error'>Delete</button></td>
                            </tr>

                            )
                        }   
                    </tbody>
                </table>
            </div>
            
            
        </div>
    );
};

export default AllUser;