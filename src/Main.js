import React from 'react';
import './Main.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Gallery from './Gallery';

const Main = () => {
  return (
    <main>
      <Header></Header>
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/gallery" component={Gallery} />
      </Switch>
      <Footer></Footer>
    </main>
  );
}

export default Main;
