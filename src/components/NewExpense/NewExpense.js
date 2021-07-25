import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
  const [isOpenForm, setIsOpenForm] = useState(false)

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }

    props.onAddExpense(expenseData)
    setIsOpenForm(false)
  }

  const closeFormHandler = () => {
    setIsOpenForm(false)
  }

  return (
    <div className='new-expense'>
      {!isOpenForm && (
        <button onClick={() => setIsOpenForm(true)}>Add New Expense</button>
      )}
      {isOpenForm && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={closeFormHandler}
        />
      )}
    </div>
  )
}

export default NewExpense
