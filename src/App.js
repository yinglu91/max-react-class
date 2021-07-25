import React, { useState } from 'react'
import NewExpense from './components/NewExpense/NewExpense'
import Expenses from './components/Expenses/Expenses'
import { expenseData } from './data/expenseData'

const App = () => {
  const [expenses, setExpenses] = useState(expenseData)

  const addExpenseHandler = (expense) => {
    console.log(expense)
    setExpenses((preExpenses) => [expense, ...preExpenses])
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  )
}

export default App

// const App = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h2', {}, "Let's get started!"),
//     React.createElement(Expenses, {})
//   )
// }
