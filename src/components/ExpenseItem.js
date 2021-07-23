import './ExpenseItem.css'

const ExpenseItem = (props) => {
  const { item } = props

  const month = item.date.toLocaleString('en-US', { month: 'long' })
  const day = item.date.toLocaleString('en-US', { day: '2-digit' })
  const year = item.date.getFullYear()

  return (
    <div className='expense-item'>
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>

      <div className='expense-item__description'>
        <h2>{item.title}</h2>
        <div className='expense-item__price'>${item.amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem
