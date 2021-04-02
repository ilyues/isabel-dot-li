import React from 'react';
import Home from './Home';
import About from './About';
import Work from './Work';
import ATMobile from './ATMobile';
import ProAct from './ProAct';
import Audacity from './Audacity';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import MyceliYum from './MyceliYum';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/work' component={Work} />
        <Route exact path='/at-mobile' component={ATMobile} />
        <Route exact path='/proact' component={ProAct} />
        <Route exact path='/audacity' component={Audacity} />
        <Route exact path='/myceliyum' component={MyceliYum} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
