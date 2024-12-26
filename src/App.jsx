import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Exercises from './components/Exercises';

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="container mt-4">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/exercises" component={Exercises} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;