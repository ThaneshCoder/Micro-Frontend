import  { useState, useEffect } from 'react';

function WordRenderer({words}) {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentWordIndex(prevIndex => (prevIndex + 1) % words.length);
      }, 1000); // Change the interval as needed
  
      return () => clearInterval(interval);
    }, [words]);
  
    return (
      <div>
        {words[currentWordIndex]}
      </div>
    );
}

export default WordRenderer
