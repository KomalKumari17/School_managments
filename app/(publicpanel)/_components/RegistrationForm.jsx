"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";

const RegistrationForm = () => {
    
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      });
      console.log('Registration successful:', response.data);
      router.push("/login"); // Redirect to login page
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Registration</h1>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            value={name}
            onChange={handleNameChange}
            className="mt-1 p-2 block w-full border-gray-300 rounded-md text-gray-800"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={handleEmailChange}
            className="mt-1 p-2 block w-full border-gray-300 rounded-md text-gray-800"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
          <input
  type="password"
  id="password"
  name="password"
  autoComplete="new-password"
  value={password}
  onChange={handlePasswordChange}
  className="mt-1 p-2 block w-full border-gray-300 rounded-md text-gray-800"
  required
/>

        </div>
        <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-md w-full hover:bg-indigo-600">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
