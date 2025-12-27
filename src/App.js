import React, { useState } from 'react';
import Terminal from './components/Terminal';
import Hero from './components/Hero';

function App() {
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleEnter = () => {
    setIsTransitioning(true);
    // Wait for animation to complete before showing hero
    setTimeout(() => {
      setShowPortfolio(true);
    }, 2500);
  };

  if (showPortfolio) {
    return <Hero />;
  }

  return (
    <div className="min-h-screen bg-black">
      <Terminal onEnter={handleEnter} />
      
      {/* Transition Animation */}
      {isTransitioning && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <div className="text-center">
            {/* Pixelated Loading Animation */}
            <div className="mb-8">
              <div className="flex justify-center space-x-4 mb-4">
                <div className="text-white text-4xl animate-bounce" style={{animationDelay: '0s'}}>⚡</div>
                <div className="text-white text-4xl animate-bounce" style={{animationDelay: '0.2s'}}>💻</div>
                <div className="text-white text-4xl animate-bounce" style={{animationDelay: '0.4s'}}>🔒</div>
              </div>
              <div className="text-white text-sm font-pixel mt-2">
                Initializing System...
              </div>
            </div>
            
            <div className="text-white font-pixel text-2xl mb-4">
              <div className="animate-pulse">Loading Portfolio...</div>
            </div>
            <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-white rounded-full animate-progress"></div>
            </div>
            <div className="mt-4 text-gray-300 font-pixel text-sm">
              <div className="animate-typing">Initializing components...</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
