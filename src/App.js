import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <div className="container">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              {/* Passing 3 projects to the project page as props */}
              <Projects projects={[
                { title: '3Ds Max', img: '/p1.png' },
                { title: 'E-Cycle', img: '/p2.png' },
                { title: 'Video Animation', img: '/p3.png' }
              ]} />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
