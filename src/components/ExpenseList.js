import ExpenseItem from './ExpenseItem'
import { expenses } from './expenses'

const ExpenseList = () => {
  return (
    <div>
      <ExpenseItem item={expenses[0]} />
      <ExpenseItem item={expenses[1]} />
      <ExpenseItem item={expenses[2]} />
      <ExpenseItem item={expenses[3]} />
    </div>
  )
}

export default ExpenseList
