import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import './App.css';

import Home from './Home';
import Blog from './Blog';
import About from './About';
import NoMatch from './NoMatch';
import Layout from './components/Layout';
import Navigation from './components/Navigation';
import Jumbotron from './components/Jumbotron';

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Jumbotron />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/about" component={About} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
        </Layout>
    </React.Fragment>
  );
}

export default App;
