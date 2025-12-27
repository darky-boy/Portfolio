import React, { useState, useEffect } from 'react';

const Terminal = ({ onEnter }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showEnterMessage, setShowEnterMessage] = useState(false);
  const [showEnterButton, setShowEnterButton] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 100; // milliseconds per character
    const pathToType = '/skilled_candidate/portfolio/Om';

    const typeText = () => {
      if (currentIndex < pathToType.length) {
        setDisplayedText(pathToType.substring(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeText, typingSpeed);
      } else {
        // Command finished typing, show enter message after a delay
        setTimeout(() => {
          setShowEnterMessage(true);
          setShowEnterButton(true);
        }, 1000);
      }
    };

    // Start typing after a short delay
    setTimeout(typeText, 1000);
  }, []);

  // Handle Enter key press
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter' && showEnterMessage) {
        onEnter();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [onEnter, showEnterMessage]);

  const handleEnterClick = () => {
    onEnter();
  };

  return (
    <div className="min-h-screen bg-black relative">
      {/* Designer Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <div className="relative z-10 p-4">
        <div className="w-full max-w-6xl mx-auto">
          {/* Terminal Header - Full Width */}
          <div className="bg-gray-900 rounded-t-lg px-6 py-3 flex items-center w-full">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="ml-4 text-gray-300 text-sm font-mono">
              Terminal - Portfolio Access
            </div>
          </div>

          {/* Terminal Body */}
          <div className="bg-black rounded-b-lg p-6 font-mono text-lg">
          <div className="mb-4">
            <span className="text-terminal-red">root@kali:~#</span>
            <span className="text-terminal-brown ml-2">cd</span>
            <span className="text-terminal-white ml-2">{displayedText}</span>
            <span className="cursor-blink text-terminal-white ml-1">_</span>
          </div>

          {showEnterMessage && (
            <div className="mt-4 text-gray-400">
              <p>Press Enter to see portfolio</p>
            </div>
          )}

          {showEnterButton && (
            <div className="mt-6">
              <button
                onClick={handleEnterClick}
                className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded border border-gray-600 transition-colors"
              >
                Enter
              </button>
            </div>
          )}
        </div>

          {/* ASCII Art */}
          <div className="mt-8 flex justify-end">
            <div className="text-gray-600 font-mono text-xs sm:text-sm leading-tight overflow-hidden">
              <pre className="whitespace-pre-wrap">{`
    ________             
    \\_____  \\    _____   
     /   |   \\  /     \\  
    /    |    \\|  Y Y  \\ 
    \\_______  /|__|_|  / 
            \\/       \\/  
                         `}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
