import { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css'

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterdExpenses = { ...items }

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
    console.log(selectedYear)
  }

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      <ExpenseItem item={items[0]} />
      <ExpenseItem item={items[1]} />
      <ExpenseItem item={items[2]} />
      <ExpenseItem item={items[3]} />
    </Card>
  )
}

export default Expenses
