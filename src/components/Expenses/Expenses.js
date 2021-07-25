import { useState } from 'react'
import ExpenseList from './ExpenseList'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css'

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear)
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = items.filter((expense) => {
    // return expense.date.getFullYear() === Number(filteredYear)
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      <ExpenseList items={filteredExpenses} />
    </Card>
  )
}

export default Expenses
