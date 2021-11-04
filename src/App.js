import React from 'react';
import Home from './Home';
import About from './About';
import Work from './Work';
import ATMobile from './ATMobile';
import ProAct from './ProAct';
import Canva from './Canva';
import HWFA from './HWFA';
import SunburstShack from './SunburstShack';
import Audacity from './Audacity';
import Horizon from './Horizon';
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
        <Route exact path='/hello-canva' component={Canva} />
        <Route exact path='/how-we-fall-apart' component={HWFA} />
        <Route exact path='/sunburst-shack' component={SunburstShack} />
        <Route exact path='/horizon' component={Horizon} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
