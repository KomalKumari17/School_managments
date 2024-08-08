import React from 'react'
import MobileNavbar from './mobile-navbar'
import AdminHeader from './AdminHeader'

const Navbar = () => {
  return (
    <div className='p-4 border-b h-full flex items-center bg-white shadow-sm'>
        <MobileNavbar/>
        <AdminHeader/>
    </div>
  )
}

export default Navbar