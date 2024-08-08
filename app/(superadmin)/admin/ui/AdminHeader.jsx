"use client"

import { signOut } from "next-auth/react";

const AdminHeader = () => {
  const hadleLogout = async() => {
    await signOut();
  }
    return (
      <header className="admin-header bg-white text-gray-600 font-medium py-4 w-full flex justify-between px-12"> 
          <div>
            <h1 className="text-2xl font-bold text-red-800">Admin Panel</h1>
          </div>
          <nav className="space-x-5">
           <a href="/dashboard" className="hover:text-gray-800">Home</a>
              <a href="/posts" className="hover:text-gray-800">Logout</a>
          </nav>
      </header>
    );
  };
  
  export default AdminHeader;
  