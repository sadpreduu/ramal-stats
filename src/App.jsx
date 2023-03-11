import logo from './logo.svg';
import React from 'react';
import './App.css';
import Counter from "./counter"

function App() {

  const [counts, setCounts] = useState({});

  function handleCount(id) {
    setCounts((prevCounts) => {
      const newCounts = { ...prevCounts };
      newCounts[id] = (newCounts[id] || 0) + 1;
      return newCounts;
    });
  }

  function handleShowStats() {
    const maxCount = Math.max(...Object.values(counts));
    const mostCounted = Object.keys(counts).filter(
      (key) => counts[key] === maxCount
    );
    alert(`Most Counted: ${mostCounted.join(", ")}`);
  }

  return (
    <div>
      <Counter id={1} onCount={() => handleCount(1)} />
      <Counter id={2} onCount={() => handleCount(2)} />
      <Counter id={3} onCount={() => handleCount(3)} />
      <Counter id={4} onCount={() => handleCount(4)} />
      <Counter id={5} onCount={() => handleCount(5)} />
      <Counter id={6} onCount={() => handleCount(6)} />
      <button onClick={handleShowStats}>Show Statistics</button>
    </div>
  );
}

export default App;
