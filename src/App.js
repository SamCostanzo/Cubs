import React from 'react';
import players from './players';


// App Components
// import Header from './components/Header';
import Gallery from './components/Gallery';


function App() {
  return (
    <div className="container">
      <Gallery players={players}/>
    </div>
  );
}

export default App;
