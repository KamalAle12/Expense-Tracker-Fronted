import React from 'react'
import {Home, Wallet, Plane, CheckCircle, Settings, Phone} from "lucide-react";


const navItems = [
  {icon: <Home/>, label: "Home"}, 
  {icon: <Wallet/>, label: "Expenses"}, 
  {icon: <Plane/>, label: "Trips"},
  {icon: <CheckCircle/>, label: "Approvals"},
  {icon: <Settings/>, label: "Settings"}, 
  {icon: <Phone/>, label: "Support"},
]
const Sidebar = () => {
  return (
    <aside className='bg-[#121212] text-white w-64 h-screen p-5 flex flex-col justify-between'>
      <div>
        <div className='flex items-center gap-4 mb-10'>
          <img src="./src/images/avatar.png" className='w-14 h-14 rounded-full' alt="profile" />
          <div>
            <p className='text-lg text-gray-400'>Kamal Ale Magar</p>
          </div>
        </div>
       
        <nav>
          {navItems.map((item)=>(
            <div key={item.label} className='flex items-center gap-3 p-3 my-1 rounded-lg hover:bg-[#1f1f1f] cursor-pointer'>
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </nav>
      </div>
      <p className='text-xl text-cyan-400 font-bold'>EXPENSET</p>
    </aside>
  )
}

export default Sidebar