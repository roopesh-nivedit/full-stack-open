import { useState } from 'react'

const Header = () => <h1>Give Feedback</h1>

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const StatisticsTitle  = () => <h1>Statistics</h1>

const Statistics = ({ good,neutral,bad,total }) => {
  if (total === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  else {
    const sentiment = good - bad
    const average = sentiment / total
    const positivity = (good / total ) * 100
    
    return (
    <table>
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="Total" value={total} />
      <StatisticLine text="Average" value={average} />
      <StatisticLine text="Positivity" value={positivity + '%'} />
    </table>
    )
  }
}

const StatisticLine = ( {text,value} ) => {
  return (
    <tr>
    <td>{text}</td> <td>{value}</td>
    </tr>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotal(updatedGood + neutral + bad)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setTotal(updatedNeutral + good + bad)
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setTotal(updatedBad + good + neutral)
  }

  return (
    <div>
      <Header />
      
      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />

      <StatisticsTitle />

      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
      
    </div>
  )
}

export default App;
