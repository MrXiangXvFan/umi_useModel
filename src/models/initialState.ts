import { useState, useCallback } from 'react';


//useModel相关
export default function() {
  const [counter, setCounter] = useState(0);

  const increment = useCallback(() => setCounter((c) => c + 1), []);
  const decrement = useCallback(() => setCounter((c) => c - 1), []);

  return { counter, increment, decrement };
};