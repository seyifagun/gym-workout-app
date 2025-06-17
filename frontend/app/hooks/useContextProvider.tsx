import { useContext } from "react"
import { WorkoutsContext } from "../context/workoutContext"
import type { WorkoutsContextType }  from "../context/workoutContext"

export const useWorkoutsContext = (): WorkoutsContextType => {
  const context = useContext(WorkoutsContext)

  if (!context) {
    throw new Error("useWorkoutsContext must be used inside a WorkoutsContextProvider")
  }

  return context
}
