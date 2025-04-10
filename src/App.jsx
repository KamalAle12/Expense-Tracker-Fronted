import { useState } from 'react'
import Sidebar from './components/Sidebar'
import PendingTasks from './components/PendingTasks'
import RecentExpenses from './components/RecentExpenses'
import QuickActions from './components/QuickActions'
import MonthlyReport from './components/MonthlyReport'

function App() {
  
  return (
    <div className='flex h-screen bg-[#111111] text-white'>
      <Sidebar/>

      <div className='flex-1 flex flex-col'>
        <main className='p-6 overflow-y-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='mt-12'>
               <PendingTasks/>
            </div>
            <div className='mt-12'>
               <RecentExpenses/>
            </div>
          </div>
          <div className='mt-4'>
            <QuickActions/>
          </div>
          <div className='mt-4'>
          <MonthlyReport/>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
