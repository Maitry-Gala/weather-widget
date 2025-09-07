import { useState } from 'react'
import './App.css'
import WeatherApp from './WeatherApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        background: "linear-gradient(135deg, #e0f7fa, #bbdefb)",
        padding: "40px 20px",
      }}>
      <WeatherApp/>
    </div>
  );
};

export default App
