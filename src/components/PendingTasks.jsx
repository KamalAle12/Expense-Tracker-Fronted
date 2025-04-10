import React from 'react'
import { CheckCircle, Plane, FileWarning, Calendar, Euro } from 'lucide-react';
const PendingTasks = () => {

  const tasks = [
    {label: "Pending Approval",count: 5, icon: <CheckCircle className='w-4 h-4 text-cyan-400'/>},
    {label: "New Trips Registered", count: 1, icon: <Plane className='w-4 h-4 text-cyan-400'/>},
    {label: "Unreported Expenses", count: 4, icon: <FileWarning className='w-4 h-4 text-cyan-400'/>},
    {label: "Upcoming Expenses", count: 0, icon: <Calendar className='w-4 h-4 text-cyan-400'/>},
    {label: "Unreported Advances", count: "€0.00", icon: <Euro className='w-4 h-4 text-cyan-400'/>},
  ]
  return (
    <div className='bg-[#1c1c1c] p-5 rounded-xl text-white shadow-md w-full'>
      <h2 className='text-lg font-semibold mb-4 border-b border-b-gray-700'>Pending Tasks</h2>
      <ul className='space-y-4'>
        {tasks.map((task, idx)=>(
          <li key={idx} className='flex justify-between items-center text-sm  pb-2'>
            <div className='flex items-center gap-2 text-gray-300'>
              {task.icon}
              <span>{task.label}</span>
            </div>
            <span className='font-medium text-cyan-400'>{task.count}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PendingTasks