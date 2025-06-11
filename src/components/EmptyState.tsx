import React from 'react';
import { CheckSquare, Plus } from 'lucide-react';

export function EmptyState() {
  return (
    <div className="text-center py-16 animate-fade-in">
      <div className="bg-gradient-to-br from-primary-100 to-secondary-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckSquare className="h-12 w-12 text-primary-600" />
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        Welcome to TaskFlow
      </h3>
      
      <p className="text-gray-500 mb-6 max-w-sm mx-auto">
        Your beautiful task management app is ready! Start by creating your first task.
      </p>
      
      <div className="bg-primary-50 rounded-2xl p-4 max-w-sm mx-auto">
        <div className="flex items-center space-x-2 text-primary-700">
          <Plus className="h-4 w-4" />
          <span className="text-sm font-medium">
            Tap the input above to add a task
          </span>
        </div>
      </div>
    </div>
  );
}