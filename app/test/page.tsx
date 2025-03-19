"use client";
import React, { useState } from "react";

export default function CounterExample() {
  let count = 0; // Regular variable
  const [stateCount, setStateCount] = useState(0); // State variable

  const incrementCount = () => {
    count += 1; // This will NOT trigger a re-render
    console.log("Regular variable count:", count);
  };

  const incrementStateCount = () => {
    setStateCount((prevCount) => prevCount + 1); // This WILL trigger a re-render
  };

  return (
    <div
      style={{
        padding: "16px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>
        React useState Example
      </h2>
      <p>Regular variable count: {count} (won't update on screen)</p>
      <p>State variable count: {stateCount} (updates correctly)</p>
      <button
        onClick={incrementCount}
        style={{
          marginRight: "8px",
          padding: "8px 12px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Increment Regular Variable
      </button>
      <button
        onClick={incrementStateCount}
        style={{
          padding: "8px 12px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Increment State Variable
      </button>
    </div>
  );
}
