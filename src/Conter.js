import React, { useState } from 'react';
function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);

    const decrement = () => setCount(count - 1);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>  {count}</h1>
            <button onClick={increment} style={{ marginRight: '20px', padding: '20px 20px' }}>
                Zwiększ liczbę
            </button>
            <button onClick={decrement} style={{ padding: '20px 20px' }}>
                Zmniejsz liczbę
            </button>
        </div>
    );
}

export default Counter;