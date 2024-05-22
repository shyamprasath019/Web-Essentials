// Register.jsx
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Import Firebase authentication method
import { auth } from './firebase'; // Import the Firebase auth instance

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password); // Use Firebase createUserWithEmailAndPassword method
      // Registration successful, redirect user to the desired page
    } catch (error) {
      console.error('Error registering user:', error.message);
      // Handle registration error (e.g., display error message to the user)
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
