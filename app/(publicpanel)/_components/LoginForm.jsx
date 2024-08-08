// components/LoginPage.js
"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import {signIn} from 'next-auth/react';

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pending, setPending] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
}
const handlePasswordChange = (e) => {
    setPassword(e.target.value);
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!password || !email)
        {
            setError("Please fill the email and password")
        }
        try{
            setPending(true);
            const res = await signIn("credentials", {email,password, redirect:false})

            if(res.error){
                setError("invalid credentials");
                setPending(false);
                return;
            }
            router.push("/");
        }
        catch(error){
            setPending(false)
            console.log(error.message);
            setError(error.message);
        }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Login</h1>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-200">Email</label>
          <input
  type="email"
  id="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="mt-1 p-2 block w-full border-gray-300 rounded-md text-gray-800 "
  required
/>



        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-200">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="new-password"
            value={password}
            onChange={handlePasswordChange}
            className="mt-1 p-2 block w-full border-gray-300 rounded-md text-gray-700"
            required
/>
        </div>
        <button type="submit" disabled={pending?true:false} className="bg-indigo-500 w-full text-white px-4 py-2 rounded-md hover:bg-indigo-600">{pending? "waiting" : "LogIn"}</button>
      </form>
    </div>
  );
};

export default LoginForm;
