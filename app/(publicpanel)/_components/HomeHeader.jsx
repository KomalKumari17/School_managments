"use client"
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const HomeHeader = () => {

    const {data: session} = useSession();

    const handleOut = async () => {
        await signOut();
    }
    return (
      <header className="home-header bg-gray-200 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-teal-700 mb-2">E-Coach</h1>
          </div>
          <div className="flex items-center text-gray-900 hover:text-gray-700 space-x-5">
            <a href="/about" className="btn btn-primary">Home</a>
           {
            !session && (<> <Link href="/register" className="btn btn-secondary">Register</Link>
            <Link href="/login" className="btn btn-secondary">LogIn</Link></>)
           }
           {
            session && (<> 
            {/* <Image src={session.user.image} alt={session.user.name} width={30} height={30}/> */}
            <a href="/contact" className="btn btn-secondary">{session.user.name}</a>
            <button onClick={handleOut} className="bg-slate-300 hover:bg-slate-500 hover:text-gray-200  rounded-full px-4 py-2 border-gray-600">LogOut</button></>)
           }
          </div>
        </div>
      </header>
    );
  };
  
  export default HomeHeader;
  