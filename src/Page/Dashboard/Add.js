import React, { useState, useRef, useEffect } from 'react';
import Swal from 'sweetalert2';
//import './Add.css'; // Import your Add.css file

function Add({ customer, setcustomer, setIsAdding }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setphone] = useState('');
    const [date, setDate] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, []);

   
    const isValidPhoneNumber =  /^\d{10}$/;
    const handleAdd = e => {
        e.preventDefault();
        if (!firstName || !lastName || !email || !phone|| !date) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }
        if (!isValidPhoneNumber.test(phone)) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Please enter a valid phone number.',
                showConfirmButton: true
            });
        }
        

        const id = customer.length + 1;
        const newcustomer = {
            id,
            firstName,
            lastName,
            email,
            phone,
            date
        };
        setcustomer([...customer, newcustomer]);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${firstName} ${lastName}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>Customer details</h1>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    ref={textInput}
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
                <label htmlFor="phone">Phone Number</label>
                <input
                    id="phone"
                    type="tel"
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
                    <input type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Add;
