import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'

const Chart = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value)
  const maximumValue = Math.max(...dataPointValues)

  return (
    <div className='chart'>
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={maximumValue}
        />
      ))}
    </div>
  )
}

export default Chart
