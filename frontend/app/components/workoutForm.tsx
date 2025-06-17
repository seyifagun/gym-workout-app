import { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useContextProvider'

const WorkoutForm = () => {

  const {dispatch} = useWorkoutsContext();
  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState<string | null>(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const workout = {title, load, reps}
    console.log(`${process.env.NEXT_PUBLIC_API_URL}/api/workouts`)
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/workouts`, {
      method: 'POST',
      //converts the workout object to a JSON string
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setEmptyFields([])
      setError(null)
      setTitle('')
      setLoad('')
      setReps('')
      console.log('new workout added:', json)
      dispatch({type: 'CREATE_WORKOUT', payload: json})
    }
  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Workout</h3>

      <label>Excersize Title:</label>
      <input 
        type="text" 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
        value={title}
        className={emptyFields?.includes?.('title' as never) ? 'error' : ''}
      />

      <label>Load (in kg):</label>
      <input 
        type="number" 
        onChange={(e) => setLoad(e.target.value)} 
        value={load}
        className={emptyFields?.includes?.('load' as never) ? 'error' : ''}
      />

      <label>Number of Reps:</label>
      <input 
        type="number" 
        onChange={(e) => setReps(e.target.value)} 
        value={reps} 
        className={emptyFields?.includes?.('reps' as never) ? 'error' : ''}
      />
      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default WorkoutForm