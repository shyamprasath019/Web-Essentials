// Login.jsx
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth'; // Import Firebase authentication method
import { auth } from './firebase'; // Import the Firebase auth instance

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password); // Use Firebase signInWithEmailAndPassword method
      // Login successful, redirect user to the desired page
    } catch (error) {
      console.error('Error signing in:', error.message);
      // Handle login error (e.g., display error message to the user)
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
