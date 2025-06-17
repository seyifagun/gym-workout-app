"use client"

import {useEffect} from 'react';
import WorkoutDetails from './components/workoutDetails';
import WorkoutForm from './components/workoutForm';
import { useWorkoutsContext } from './hooks/useContextProvider';


export default function Home() {

  //const [workouts, setWorkouts]  = useState<Workout[]>([])
  const {workouts, dispatch} = useWorkoutsContext();

  //triggers when a component is rendered...
  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const res = await fetch("http://localhost:4114/api/workouts");
        const json = await res.json();
  
        if (res.ok) {
          //setWorkouts(json);
          dispatch({type: "SET_WORKOUTS", payload: json});
          console.log("Fetched workouts:", json); // Better logging
        } else {
          console.error("Fetch failed:", json);
        }
      } catch (error) {
        console.error("Error fetching workouts:", error);
      }
    };
    fetchWorkouts();
  }, []);

  return (
    <>
      <div className="home container">
        <div className="workouts">
          {workouts && workouts.map((workout) => (
            <div key={workout._id}>
              <WorkoutDetails workout={{
                _id: workout._id,
                title: workout.title,
                load: workout.load,
                reps: workout.reps,
                createdAt: workout.createdAt
              }} />
            </div>
          ))}
        </div>
        <div className="cards">
          <WorkoutForm />
        </div>
      </div>
    </>
  );
}
