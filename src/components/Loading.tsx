import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center mt-8">
      <div className="animate-spin rounded-full border-t-4 border-red-600 h-16 w-16"></div>
    </div>
  );
};

export default Loading;
