import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

const ExpenseItem = (props) => {
  const { item } = props

  return (
    <div className='expense-item'>
      <ExpenseDate date={item.date} />

      <div className='expense-item__description'>
        <h2>{item.title}</h2>
        <div className='expense-item__price'>${item.amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem
