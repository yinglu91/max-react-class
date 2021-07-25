import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpenseList.css'

const ExpenseList = ({ items }) => {
  if (items.length === 0) {
    return <h2 className='expenses-list__fallback'>No expenses found.</h2>
  }

  return (
    <ul className='expenses-list'>
      {items.map((expense) => (
        <ExpenseItem key={expense.id} item={expense} />
      ))}
    </ul>
  )
}

export default ExpenseList
