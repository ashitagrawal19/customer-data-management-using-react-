import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit({ customer, selectedcustomer, setcustomer, setIsEditing }) {

    const id = selectedcustomer.id;

    const [firstName, setFirstName] = useState(selectedcustomer.firstName);
    const [lastName, setLastName] = useState(selectedcustomer.lastName);
    const [email, setEmail] = useState(selectedcustomer.email);
    const [phone, setphone] = useState(selectedcustomer.phone || '');
    const [date, setDate] = useState(selectedcustomer.date);

   
    const handleUpdate = e => {
        e.preventDefault();

        if (!firstName || !lastName || !email || !phone || !date) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const customeri= {
            id,
            firstName,
            lastName,
            email,
            phone,
            date
        };

        for (let i = 0; i < customer.length; i++) {
            if (customer[i].id === id) {
                customer.splice(i, 1, customeri);
                break;
            }
        }

        setcustomer(customer);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${customeri.firstName} ${customeri.lastName}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
 
        <div className="small-container">
             <div><h1>Information about the about Customer</h1> 
                 
                First Name :{firstName} <br />
           
            
          Last Name:  {lastName} <br/>
          Email:  {email} <br/>
           Phone : {phone} <br/>
          Date:  {date}
            </div>
            <form onSubmit={handleUpdate}>
                <h1>Edit desired customer information </h1>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="phone">phone</label>
                <input
                    id="phone"
                    type="number"
                    name="phone"
                    value={phone}
                    onChange={e => setphone(e.target.value)}
                />
                <label htmlFor="date">Date</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Edit