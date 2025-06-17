"use client"

import { createContext, useReducer, Dispatch, ReactNode } from 'react'

export type Workout = {
    _id: string
    title: string
    load: number
    reps: number
    createdAt: string
    updatedAt: string
}

// Action type
type Action =
  | { type: "SET_WORKOUTS"; payload: Workout[] }
  | { type: "CREATE_WORKOUT"; payload: Workout }
  | { type: "DELETE_WORKOUT"; payload: Workout};

// State type
type State = {
  workouts: Workout[] | null;
};

// Context value type
export type WorkoutsContextType = State & {
    dispatch: Dispatch<Action>;
};

// Create Context
export const WorkoutsContext = createContext<WorkoutsContextType | undefined>(undefined);


export const workoutsReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_WORKOUTS':
      return { 
        workouts: action.payload 
    }
    case 'CREATE_WORKOUT':
      return { 
        workouts: [action.payload, ...(state.workouts || [])] 
    }
    case 'DELETE_WORKOUT':
      return { 
        workouts: state.workouts ? state.workouts.filter(w => w._id !== action.payload._id) : []
    }
    default:
      return state
  }
};

// Provider props type
type ProviderProps = {
    children: ReactNode;
};

export const WorkoutsContextProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(workoutsReducer, { 
    workouts: null
  })
  
  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      { children }
    </WorkoutsContext.Provider>
  );
};