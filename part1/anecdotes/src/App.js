import { useState } from 'react'

const Header = () => <h1>Anecdote of the day!</h1>

const Button = ( {handleClick,text} ) => <button onClick={handleClick}>{text}</button>

const MostVotesHeader = () => <h1>Anecdote with most votes!</h1>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const maxValue = anecdotes.length - 1
  const votesArray = Array(8).fill(0)
  const [votes, setVote] = useState(votesArray);

  const largestValue = Math.max(...votes)
  console.log(largestValue)
  const largestValueIndex = votes.indexOf(largestValue)
  console.log(largestValueIndex)

  const handleNext = () => {
    const randomValue = Math.floor(Math.random() * maxValue)
    setSelected(randomValue)
  }

  const handleVote = () => {
    const updateVote = [...votes]
    updateVote[selected] += 1
    setVote(updateVote)
  }

  return (
    <div>
      <Header />

      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>

      <Button handleClick={handleNext} text='Next Anecdote' />
      <Button handleClick={handleVote} text='Vote'/>

      <MostVotesHeader />
      <p>{anecdotes[largestValueIndex]}</p>
      <p>has {votes[largestValueIndex]} votes</p>
    </div>
  )
}

export default App