import React from 'react';
import { CheckSquare, Smartphone } from 'lucide-react';

export function Header() {
  return (
    <div className="bg-gradient-to-r from-primary-600 to-secondary-600 px-4 py-6 text-white">
      <div className="flex items-center space-x-3 mb-2">
        <div className="flex items-center space-x-2">
          <CheckSquare className="h-8 w-8" />
          <h1 className="text-2xl font-bold">TaskFlow</h1>
        </div>
        <div className="flex items-center space-x-1 bg-white/20 px-2 py-1 rounded-full text-xs">
          <Smartphone className="h-3 w-3" />
          <span>RN Style</span>
        </div>
      </div>
      <p className="text-primary-100 text-sm">
        Beautifully designed task management with React Native patterns
      </p>
    </div>
  );
}