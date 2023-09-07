
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {RootState} from "./store"
import { addUser, selectUsers } from './store/userSlice';
import './App.css';

interface User {
  name: string;
  email: string;
  dob: string;
  city: string;
  pincode: string;
}

function App() {
  const [user, setUser] = useState<User>({
    name: '',
    email: '',
    dob: '',
    city: '',
    pincode: '',
  });

  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleAddUser = () => {
    dispatch(addUser(user));
    setUser({
      name: '',
      email: '',
      dob: '',
      city: '',
      pincode: '',
    });
  };

  return (
    <div className="App">
      <h1>User Registration</h1>
      <div className="registration-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="dob"
          placeholder="Date of Birth"
          value={user.dob}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={user.city}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={user.pincode}
          onChange={handleInputChange}
        />
        <button onClick={handleAddUser}>Register</button>
      </div>
      <div className="user-list">
        <h2>User List</h2>
        <ul>
          {users.map((user: any, index: any) => (
            <li key={index}>
              <strong>Name:</strong> {user.name}, <strong>Email:</strong>{' '}
              {user.email}, <strong>DOB:</strong> {user.dob}, <strong>City:</strong>{' '}
              {user.city}, <strong>Pincode:</strong> {user.pincode}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
