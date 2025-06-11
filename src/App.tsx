import React, { useState, useEffect } from 'react';
import { TaskProvider } from './context/TaskContext';
import { Header } from './components/Header';
import { TaskInput } from './components/TaskInput';
import { TaskList } from './components/TaskList';
import { FilterBar } from './components/FilterBar';
import { Stats } from './components/Stats';
import { EmptyState } from './components/EmptyState';
import { useTask } from './hooks/useTask';

function AppContent() {
  const { tasks, filteredTasks } = useTask();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate app loading
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-xl">
        <Header />
        
        <div className="px-4 pb-6 space-y-6">
          <Stats />
          <TaskInput />
          
          {tasks.length > 0 && (
            <>
              <FilterBar />
              <TaskList tasks={filteredTasks} />
            </>
          )}
          
          {tasks.length === 0 && <EmptyState />}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <TaskProvider>
      <AppContent />
    </TaskProvider>
  );
}

export default App;