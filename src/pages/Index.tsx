
import React, { useEffect } from 'react';

const Index = () => {
  // The HTML content is already being loaded in index.html
  // This component just ensures the page renders correctly in React
  
  useEffect(() => {
    // This component just serves as a React wrapper
    // All functionality is handled by the JavaScript files loaded in index.html
    document.title = "Arcade Leaderboard Hub - 2025";
  }, []);

  return null;
};

export default Index;
