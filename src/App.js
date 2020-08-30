import React from 'react';
import { GlobalStyles } from './styles'

import Stickies from './components/Stickies'

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Stickies />
    </div>
  );
}

export default App;
