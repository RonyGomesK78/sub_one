import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="animate-spin rounded-full border-t-4 border-red-600 h-16 w-16"></div>
    </div>
  );
};

export default Loading;
