import React, { useState } from 'react';
import { Plus, Flag } from 'lucide-react';
import { Priority } from '../types/task';
import { useTask } from '../hooks/useTask';

const priorityColors = {
  low: 'text-success-500 bg-success-50',
  medium: 'text-warning-500 bg-warning-50',
  high: 'text-error-500 bg-error-50',
};

const priorityLabels = {
  low: 'Low',
  medium: 'Medium',
  high: 'High',
};

export function TaskInput() {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');
  const [isExpanded, setIsExpanded] = useState(false);
  const { addTask } = useTask();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTask(title.trim(), undefined, priority);
      setTitle('');
      setPriority('medium');
      setIsExpanded(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="relative">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onFocus={() => setIsExpanded(true)}
          placeholder="Add a new task..."
          className="w-full px-4 py-4 pr-12 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-200 shadow-sm"
        />
        <button
          type="submit"
          disabled={!title.trim()}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-primary-500 text-white p-2 rounded-xl hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>

      {isExpanded && (
        <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm animate-slide-up">
          <div className="flex items-center space-x-2 mb-3">
            <Flag className="h-4 w-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-700">Priority</span>
          </div>
          <div className="flex space-x-2">
            {(Object.keys(priorityColors) as Priority[]).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPriority(p)}
                className={`px-3 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                  priority === p
                    ? priorityColors[p]
                    : 'text-gray-500 bg-gray-50 hover:bg-gray-100'
                }`}
              >
                {priorityLabels[p]}
              </button>
            ))}
          </div>
        </div>
      )}
    </form>
  );
}