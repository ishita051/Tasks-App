import { useMemo } from 'react';
import { useTaskContext } from '../context/TaskContext';
import { Task, Priority, Filter } from '../types/task';

export function useTask() {
  const { state, dispatch } = useTaskContext();

  const addTask = (title: string, description?: string, priority: Priority = 'medium') => {
    dispatch({ type: 'ADD_TASK', payload: { title, description, priority } });
  };

  const toggleTask = (id: string) => {
    dispatch({ type: 'TOGGLE_TASK', payload: id });
  };

  const deleteTask = (id: string) => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };

  const setFilter = (filter: Filter) => {
    dispatch({ type: 'SET_FILTER', payload: filter });
  };

  const clearCompleted = () => {
    dispatch({ type: 'CLEAR_COMPLETED' });
  };

  const filteredTasks = useMemo(() => {
    switch (state.filter) {
      case 'active':
        return state.tasks.filter(task => !task.completed);
      case 'completed':
        return state.tasks.filter(task => task.completed);
      default:
        return state.tasks;
    }
  }, [state.tasks, state.filter]);

  const stats = useMemo(() => {
    const total = state.tasks.length;
    const completed = state.tasks.filter(task => task.completed).length;
    const active = total - completed;
    const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

    return { total, completed, active, completionRate };
  }, [state.tasks]);

  return {
    tasks: state.tasks,
    filteredTasks,
    filter: state.filter,
    stats,
    addTask,
    toggleTask,
    deleteTask,
    setFilter,
    clearCompleted,
  };
}