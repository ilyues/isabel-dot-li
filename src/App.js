import React from 'react';
import Home from './Home';
import About from './about';
import ATMobile from './ATMobile';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/at-mobile' component={ATMobile} />
        <Route exact path='/proact' component={ATMobile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
