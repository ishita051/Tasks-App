import React, { useState } from 'react';
import { Check, Trash2, Flag } from 'lucide-react';
import { Task } from '../types/task';
import { useTask } from '../hooks/useTask';

const priorityColors = {
  low: 'text-success-500',
  medium: 'text-warning-500',
  high: 'text-error-500',
};

interface TaskItemProps {
  task: Task;
  className?: string;
  style?: React.CSSProperties;
}

export function TaskItem({ task, className = '', style }: TaskItemProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const { toggleTask, deleteTask } = useTask();

  const handleDelete = async () => {
    setIsDeleting(true);
    // Add a small delay for animation
    setTimeout(() => {
      deleteTask(task.id);
    }, 200);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <div
      className={`group bg-white rounded-2xl border border-gray-200 p-4 hover:shadow-md transition-all duration-200 ${
        task.completed ? 'opacity-75' : ''
      } ${isDeleting ? 'scale-95 opacity-0' : ''} ${className}`}
      style={style}
    >
      <div className="flex items-start space-x-3">
        <button
          onClick={() => toggleTask(task.id)}
          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
            task.completed
              ? 'bg-success-500 border-success-500 text-white'
              : 'border-gray-300 hover:border-primary-500 hover:bg-primary-50'
          }`}
        >
          {task.completed && <Check className="h-3 w-3" />}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-1">
            <h3
              className={`font-medium text-gray-900 transition-all duration-200 ${
                task.completed ? 'line-through text-gray-500' : ''
              }`}
            >
              {task.title}
            </h3>
            <Flag className={`h-3 w-3 ${priorityColors[task.priority]}`} />
          </div>

          <div className="flex items-center space-x-4 text-xs text-gray-500">
            <span>Created {formatDate(task.createdAt)}</span>
            {task.completed && task.completedAt && (
              <span>Done {formatDate(task.completedAt)}</span>
            )}
          </div>
        </div>

        <button
          onClick={handleDelete}
          className="flex-shrink-0 p-2 text-gray-400 hover:text-error-500 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-error-50 rounded-lg"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}