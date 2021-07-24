import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'

const Expenses = ({ items }) => {
  return (
    <Card className='expenses'>
      <ExpenseItem item={items[0]} />
      <ExpenseItem item={items[1]} />
      <ExpenseItem item={items[2]} />
      <ExpenseItem item={items[3]} />
    </Card>
  )
}

export default Expenses
