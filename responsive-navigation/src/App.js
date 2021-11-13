import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Blog from './components/Blog'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' component={Home} exact>
            <Home />
          </Route>
          <Route path='/blog' component={Blog} exact>
            <Blog />
          </Route>
          <Route path='/services' component={Services} exact>
            <Services />
          </Route>
          <Route path='/about' component={About} exact>
            <About />
          </Route>
          <Route path='/contact' component={Contact} exact>
            <Contact />
          </Route>
        </Switch>
      </Router>

    </>
  )
}

export default App
