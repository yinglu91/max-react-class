import ExpenseItem from './ExpenseItem'
import Card from './Card'
import { expenseData } from '../data/expenseData'
import './Expenses.css'

const Expenses = () => {
  return (
    <Card className='expenses'>
      <ExpenseItem item={expenseData[0]} />
      <ExpenseItem item={expenseData[1]} />
      <ExpenseItem item={expenseData[2]} />
      <ExpenseItem item={expenseData[3]} />
    </Card>
  )
}

export default Expenses
