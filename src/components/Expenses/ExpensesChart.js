import React from 'react'
import Chart from '../Chart/Chart'

const ExpensesChart = (props) => {
  const monthShortNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const chartDataPoints = monthShortNames.map((monthName) => ({
    label: monthName,
    value: 0,
  }))

  for (const expense of props.expenses) {
    const monthIndex = expense.date.getMonth() // starting at 0 => Jan => 0
    // console.log(monthIndex)
    chartDataPoints[monthIndex].value += expense.amount
  }

  return <Chart dataPoints={chartDataPoints} />
}

export default ExpensesChart
