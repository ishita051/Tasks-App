import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Task, Priority, Filter } from '../types/task';

interface TaskState {
  tasks: Task[];
  filter: Filter;
}

type TaskAction =
  | { type: 'ADD_TASK'; payload: { title: string; description?: string; priority: Priority } }
  | { type: 'TOGGLE_TASK'; payload: string }
  | { type: 'DELETE_TASK'; payload: string }
  | { type: 'SET_FILTER'; payload: Filter }
  | { type: 'CLEAR_COMPLETED' };

const initialState: TaskState = {
  tasks: [],
  filter: 'all',
};

function taskReducer(state: TaskState, action: TaskAction): TaskState {
  switch (action.type) {
    case 'ADD_TASK':
      const newTask: Task = {
        id: Date.now().toString(),
        title: action.payload.title,
        description: action.payload.description,
        completed: false,
        priority: action.payload.priority,
        createdAt: new Date(),
      };
      return {
        ...state,
        tasks: [newTask, ...state.tasks],
      };

    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload
            ? {
                ...task,
                completed: !task.completed,
                completedAt: !task.completed ? new Date() : undefined,
              }
            : task
        ),
      };

    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };

    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      };

    case 'CLEAR_COMPLETED':
      return {
        ...state,
        tasks: state.tasks.filter(task => !task.completed),
      };

    default:
      return state;
  }
}

const TaskContext = createContext<{
  state: TaskState;
  dispatch: React.Dispatch<TaskAction>;
} | null>(null);

interface TaskProviderProps {
  children: ReactNode;
}

export function TaskProvider({ children }: TaskProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskContext() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
}