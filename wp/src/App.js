import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home} from './pages/home';
import {News} from './pages/news';
import {About} from './pages/about';
import {Store} from './pages/store';
import {NoMatch} from './pages/NoMatch';
import {Layout} from './components/layout';
import {NavigationBar} from './components/NavigationBar';
import {Jumbotron} from './components/Jumbotron';

function App() {
  return (
    <React.Fragment>
      <NavigationBar/>
      <Jumbotron/>
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/news" component={News} />
            <Route exact path="/about" component={About} />
            <Route exact path="/store" component={Store} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
