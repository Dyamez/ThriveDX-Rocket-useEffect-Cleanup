import React, { useState } from 'react';
import './App.css';
import RocketLauncher from './RocketLauncher'

function App() {
  let [launch, setLaunch] = useState(true)

  return (
    <main>
      <h1>Learning Cleanup!</h1>
      <button onClick={() => setLaunch(!launch)}> Toggle Launch
      {launch ? "Abort Launch" : "Start Launch" }
      </button>
      {launch ? <RocketLauncher /> : null }
    </main>
  );
}

export default App;