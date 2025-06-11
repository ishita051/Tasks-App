import React from 'react';
import { Filter } from '../types/task';
import { useTask } from '../hooks/useTask';

const filters: { key: Filter; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'active', label: 'Active' },
  { key: 'completed', label: 'Done' },
];

export function FilterBar() {
  const { filter, setFilter, clearCompleted, stats } = useTask();

  return (
    <div className="flex items-center justify-between">
      <div className="flex bg-gray-100 rounded-2xl p-1">
        {filters.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
              filter === key
                ? 'bg-white text-primary-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {stats.completed > 0 && (
        <button
          onClick={clearCompleted}
          className="text-sm text-error-500 hover:text-error-600 font-medium transition-colors duration-200"
        >
          Clear Done
        </button>
      )}
    </div>
  );
}