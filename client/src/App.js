import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';



import About from './components/About'
import CssBaseline from '@material-ui/core/CssBaseline';
import Contact from './components/Contact';
import SWHomeComing from './views/SWHomeComing';
import EventPlanner from './views/EventPlanner';

function App() {
  return (
    
    <div className="App">
      <React.Fragment>
        <CssBaseline />
          <Router>
            <Main path="/"/>
            <About path="/About"/>
            <Contact path="/Contact"/>
            <SWHomeComing path="/SW"/>
            <EventPlanner path="/EventPlanner"/>
            
          </Router>
      </React.Fragment>
    </div>
  );
  
}

export default App;