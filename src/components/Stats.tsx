import React from 'react';
import { TrendingUp, CheckCircle2, Circle } from 'lucide-react';
import { useTask } from '../hooks/useTask';

export function Stats() {
  const { stats } = useTask();

  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-4 text-white animate-fade-in">
        <div className="flex items-center space-x-2 mb-1">
          <TrendingUp className="h-4 w-4" />
          <span className="text-xs font-medium">Progress</span>
        </div>
        <div className="text-2xl font-bold">{stats.completionRate}%</div>
      </div>

      <div className="bg-gradient-to-br from-success-500 to-success-600 rounded-2xl p-4 text-white animate-fade-in delay-75">
        <div className="flex items-center space-x-2 mb-1">
          <CheckCircle2 className="h-4 w-4" />
          <span className="text-xs font-medium">Done</span>
        </div>
        <div className="text-2xl font-bold">{stats.completed}</div>
      </div>

      <div className="bg-gradient-to-br from-warning-500 to-warning-600 rounded-2xl p-4 text-white animate-fade-in delay-150">
        <div className="flex items-center space-x-2 mb-1">
          <Circle className="h-4 w-4" />
          <span className="text-xs font-medium">Active</span>
        </div>
        <div className="text-2xl font-bold">{stats.active}</div>
      </div>
    </div>
  );
}