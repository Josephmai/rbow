import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact } from "./components";
function App() {
    return (
        <div className="App">
            <Router>
                <Navigation />
                <Switch>
                    <Route path="/" exact component={() => <Home />} />
                    <Route path="/about" exact component={() => <About />} />
                    <Route path="/contact" exact component={() => <Contact />} />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;


/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          RBOW GROUP
        </p>
        <a
          className="App-link"
          href="https://aws.amazon.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created with React and AWS
        </a>
      </header>
    </div>
  );
}

export default App;
*/