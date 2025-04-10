import React, { act } from 'react'
import {Plus, Camera, FileText, Plane} from 'lucide-react'

const QuickActions = () => {

  const actions = [
    {label: "New Expense", icon: <Plus size={20}/>, bg: 'bg-fuchsia-600'},
    {label: "Add Receipt", icon: <Camera size={20}/>, bg: 'bg-indigo-600'},
    {label: "Create Report", icon: <FileText size={20}/>, bg: 'bg-teal-600'},
    {label: "Create trip", icon: <Plane size={20}/>, bg: 'bg-rose-600'},
  ];

  return (
    <div className='bg-[#1c1c1c] p-5 rounded-xl text-white shadow-md w-full'>
      <h2 className='text-lg font-semibold mb-4'>Quick Access</h2>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        {actions.map((action, idx)=>(
          <button key={idx} className={`flex flex-col items-center justify-center rounded-xl p-4 ${action.bg} text-white hover:scale-105 transition-transform shadow-md`}>
            <div className='mb-2'>{action.icon}</div>
            <span className='text-sm font-medium'>{action.label}</span>
          </button>
        ))}
      </div>
    </div> 
  )
}

export default QuickActions