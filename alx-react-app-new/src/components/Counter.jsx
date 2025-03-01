import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // Define inline styles
  const containerStyle = {
    textAlign: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  };

  const buttonStyle = {
    margin: "5px",
    padding: "10px 15px",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const incrementStyle = { ...buttonStyle, backgroundColor: "#4CAF50", color: "white" };
  const decrementStyle = { ...buttonStyle, backgroundColor: "#2196F3", color: "white" };
  const resetStyle = { ...buttonStyle, backgroundColor: "#f44336", color: "white" };

  return (
    <div style={containerStyle}>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>Current Count: {count}</p>
      <button style={incrementStyle} onClick={() => setCount(count + 1)}>Increment</button>
      <button style={decrementStyle} onClick={() => setCount(count - 1)}>Decrement</button>
      <button style={resetStyle} onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
