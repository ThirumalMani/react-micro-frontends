import React, { useState } from "react";

export function MFE() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>MFE Content</h1>
      <h5>Count is {count}</h5>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
