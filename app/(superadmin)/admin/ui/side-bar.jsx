"use client"

import MenuBar from "./MenuBar"

const Sidebar = () => {
  return (
    <div className='h-full border-r inset-0 flex flex-col overflow-y-auto bg-white shadow-sm'>
        <h1 className='text-teal-500 text-4xl font-bold text-center mt-5'>ECoach</h1>
      <MenuBar/>
    </div>
  )
}

export default Sidebar