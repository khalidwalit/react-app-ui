import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { deleteGoal,getGoals } from '../features/goals/goalSlice'

function GoalItem({ goal }) {
  const dispatch = useDispatch()

  useEffect(() => {
    const intervalId = setInterval(() => {  //assign interval to a variaable to clear it
      dispatch(getGoals())
      console.log('gila')
    }, 10000)
 
    return () => {
        clearInterval(intervalId); //This is important
    }
 
 }, [dispatch])
  

  return (
    <div className='goal'>
      <div>{new Date(goal.createdAt).toLocaleString('en-US')}</div>
      <h2>{goal.text}</h2>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default GoalItem
