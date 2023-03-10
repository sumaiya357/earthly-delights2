import React from 'react';

const AllUser = ( props ) => {
    const { name, email, i } = props.user;
    return (
        <div>
            {/* <h3>My Orders</h3>
            <div >
                <table className="table w-full">

                    <tbody>
                           <tr>
                                <th> {i}</th>
                                <td> {name} </td>
                                <td>{email}</td>
                            </tr>

                        
                        
                    </tbody>
                </table>
            </div> */}
        </div>
    );
};

export default AllUser;