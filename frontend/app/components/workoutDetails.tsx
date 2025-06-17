import { useWorkoutsContext } from "../hooks/useContextProvider";



const WorkoutDetails = ({ workout }: { workout: { _id: string, title: string; load: number; reps: number; createdAt: string } }) => {
  
  const { dispatch } = useWorkoutsContext();

  function getTimeAgo(dateString: string): string {
    const now = new Date();
    const past = new Date(dateString);
    const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);
  
    const intervals = [
      { label: "year", seconds: 31536000 },
      { label: "month", seconds: 2592000 },
      { label: "day", seconds: 86400 },
      { label: "hour", seconds: 3600 },
      { label: "minute", seconds: 60 },
      { label: "second", seconds: 1 },
    ];
  
    for (const interval of intervals) {
      const count = Math.floor(diffInSeconds / interval.seconds);
      if (count >= 1) {
        const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
        return rtf.format(-count, interval.label as Intl.RelativeTimeFormatUnit);
      }
    }
    return "just now";
  }
  
    // Function to handle delete
  const handleClick = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/workouts/`+ workout._id, {
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
      <p>{getTimeAgo(workout.createdAt)}</p>
      <span className="deleteBtn" onClick={handleClick}>delete</span>
    </div>
  )
  }
  
  export default WorkoutDetails