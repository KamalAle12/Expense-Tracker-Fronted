import React from 'react'

const RecentExpenses = () => {

  const expenses = [
    {
      subject: "Office Supplies",
      employee: "John Smith",
      team: "Marketing",
      teamColor: "bg-purple-600",
      amount: "€150.00",    
    },
    {
      subject: "Business Launch",
      employee: "Sarah Jade",
      team: "Sales",
      teamColor: "bg-red-500",
      amount: "€75.50",    
    },
    {
      subject: "Travel Expenses",
      employee: "Mike Brown",
      team: "Operations",
      teamColor: "bg-pink-600",
      amount: "€450.25",    
    },
    {
      subject: "Client Dinner",
      employee: "Jennifer Lee",
      team: "Marketing",
      teamColor: "bg-purple-600",
      amount: "€120.00",    
    },
    {
      subject: "Hotel",
      employee: "David Wilson",
      team: "Finance",
      teamColor: "bg-green-600",
      amount: "€275.75",    
    },
    
  ]
  return (
    <div className='bg-[#1c1c1c] p-5 rounded-xl shadow-md w-full text-white'>
      <h2 className='text-lg font-semibold mb-4 border-b border-b-gray-700'>Recent Expenses</h2>
      <div className='overflow-x-auto'>
        <table className='w-full text-sm'>
          <thead>
            <tr className='text-left text-gray-400'>
              <th className='py-2'>Subject</th>
              <th className='py-2'>Employee</th>
              <th className='py-2'>Team</th>
              <th className='py-2 text-right
              '>Amount</th>
            </tr>
          </thead>
          <tbody className='text-gray-200'>
            {expenses.map((exp, idx)=>(
              <tr key={idx} className=''>
                <td className='py-3'>{exp.subject}</td>
                <td className='py-3'>{exp.employee}</td>
                <td className='py-3'>
                  <span className={`text-xs px-2 py-1 rounded-full ${exp.teamColor} text-white font-medium`}>
                    {exp.team}
                  </span>
                </td>
                <td className='py-3 text-right font-semibold text-cyan-400'>{exp.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RecentExpenses