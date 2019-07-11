import React from 'react';
import players from './players';


// App Components
import Header from './components/Header';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Header 
        title={'The Chicago Cubs'}   
        />
      <Gallery players={players} />
      <Footer />
    </div>
  );
}

export default App;
