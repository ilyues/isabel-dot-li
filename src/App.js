import React from 'react';
import Home from './Home';
import About from './About';
import ATMobile from './ATMobile';
import ProAct from './ProAct';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/at-mobile' component={ATMobile} />
        <Route exact path='/proact' component={ProAct} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
