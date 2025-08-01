import React from 'react';

interface GameWrapperProps {
  children: React.ReactNode;
  onBack: () => void;
  title: string;
}

const GameWrapper: React.FC<GameWrapperProps> = ({ children, onBack, title }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="mb-4 flex items-center text-primary-dark hover:text-primary-darker font-medium"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Subira inyuma
        </button>
        
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">{title}</h1>
        
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default GameWrapper;