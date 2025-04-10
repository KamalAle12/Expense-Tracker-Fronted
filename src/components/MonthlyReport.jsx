import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const teamData = [
  {name: "P3", spend: 95000},
  {name: "S3", spend: 87000},
  {name: "MB", spend: 78000},
  {name: "IS", spend: 62000},
  {name: "DW", spend: 55000},
  {name: "NJ", spend: 48000},
  {name: "BS", spend: 105000},
];

const dailyData = [
  {name: "Accomodation", percent: 40},
  {name: "Comms", percent: 20},
  {name: "Services", percent: 95},
  {name: "Food", percent: 30},
  {name: "Fool", percent: 15},
];

const MonthlyReport = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      <div className='bg-[#1c1c1c] p-5 rounded-xl shadow-md'>
        <h2 className='text-lg font-semibold mb-4 text-white'>Team Spending Trend</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={teamData}>
            <CartesianGrid strokeDasharray="3 3" stroke='#333'/>
            <XAxis dataKey="name" stroke='#ccc'/>
            <YAxis stroke='#ccc'/>
            <Tooltip contentStyle={{backgroundColor: '#222', border: 'none'}}/>
            <Bar dataKey="spend" fill='#00d9a6'/>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className='bg-[#1c1c1c] p-5 rounded-xl shadow-md'>
        <h2 className='text-lg font-semibold mb-4 text-white'>Day-to-Day Expenses</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={dailyData}>
            <CartesianGrid strokeDasharray="3 3" stroke='#333'/>
            <XAxis dataKey="name" stroke='#ccc'/>
            <YAxis stroke='#ccc'/>
            <Tooltip contentStyle={{backgroundColor: '#222', border: 'nonw'}}/>
            <Bar dataKey="percent" fill='#bb86fc'/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default MonthlyReport