import React from 'react';
import Home from './Home';
import About from './About';
import Design from './Design';
import Code from './Code';
import ATMobile from './ATMobile';
import ProAct from './ProAct';
import Canva from './Canva';
import HWFA from './HWFA';
import SunburstShack from './SunburstShack';
import Audacity from './Audacity';
import Horizon from './Horizon';
import { Route, Switch, HashRouter, Redirect } from 'react-router-dom';
import MyceliYum from './MyceliYum';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/isabel-dot-li'>
          {' '}
          <Redirect to='/' />{' '}
        </Route>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/design' component={Design} />
        <Route exact path='/code' component={Code} />
        <Route exact path='/at-mobile' component={ATMobile} />
        <Route exact path='/proact' component={ProAct} />
        <Route exact path='/audacity' component={Audacity} />
        <Route exact path='/myceliyum' component={MyceliYum} />
        <Route exact path='/hello-canva' component={Canva} />
        <Route exact path='/how-we-fall-apart' component={HWFA} />
        <Route exact path='/sunburst-shack' component={SunburstShack} />
        <Route exact path='/horizon' component={Horizon} />
        <Route
          path='/figma-edu'
          component={() => {
            window.location.href =
              'https://ilyues.notion.site/ilyues/Figma-Feature-Design-for-Education-a2c139ad85af41d086fbc7b7ea6589a1';
            return null;
          }}
        />
      </Switch>
    </HashRouter>
  );
}

export default App;
