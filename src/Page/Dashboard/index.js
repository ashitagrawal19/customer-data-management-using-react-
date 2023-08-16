import React, { useState } from 'react'
import Swal from 'sweetalert2';

import Header from './Header';
import List from './List';
import Add from './Add';
import Edit from './Edit';
 

import { customerData } from '../../data';

function Dashboard() {

    const [customer, setcustomer] = useState(customerData);
    const [selectedcustomer, setSelectedcustomer] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = (id) => {
        const [customero] = customer.filter(customero => customero.id === id);

        setSelectedcustomer(customero);
        setIsEditing(true);
    }

    const handleDelete = (id) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if (result.value) {
                const [customero] = customer.filter(customero => customero.id === id);

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${customero.firstName} ${customero.lastName}'s data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });

                setcustomer(customer.filter(customero => customero.id !== id));
            }
        });
    }


    return (
        <div className='container'>
            {/* List */}
            {!isAdding && !isEditing && (
                <>
                    <Header
                        setIsAdding={setIsAdding}
                    />
                    <List
                        customer={customer}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </>
            )}
            {/* Add */}
            {isAdding && (
                <Add
                    customer={customer}
                    setcustomer={setcustomer}
                    setIsAdding={setIsAdding}
                />
            )}
            {/* Edit */}
            {isEditing && (
                <Edit
                    customer={customer}
                    selectedcustomer={selectedcustomer}
                    setcustomer={setcustomer}
                    setIsEditing={setIsEditing}
                />
            )}
        </div>
    )
}

export default Dashboard;