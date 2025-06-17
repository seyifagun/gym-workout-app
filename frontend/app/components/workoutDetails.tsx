import { useWorkoutsContext } from "../hooks/useContextProvider";


const WorkoutDetails = ({ workout }: { workout: { _id: string, title: string; load: number; reps: number; createdAt: string } }) => {

    const { dispatch } = useWorkoutsContext();
    // Function to handle delete
    const handleClick = async () => {
        const response = await fetch('http://localhost:4114/api/workouts/' + workout._id, {
            method: 'DELETE'
        })
        const json = await response.json();
        
        if(response.ok){
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }
    }
    
    return (
      <div className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>Load (kg): </strong>{workout.load}</p>
        <p><strong>Number of reps: </strong>{workout.reps}</p>
        <p>{workout.createdAt}</p>
        <span className="deleteBtn" onClick={handleClick}>delete</span>
      </div>
    )
  }
  
  export default WorkoutDetails