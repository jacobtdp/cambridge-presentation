import './App.css';

import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import Gavin from './components/Gavin';
import Le from './components/Le';
import Jacob from './components/Jacob';
import Carlita from './components/Carlita';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">

          <Nav />

          <div className="tier-three">
                <ul>
                    <li><Link to="/authors">Authors</Link></li>
                    <li><Link to="/introduction">Introduction</Link></li>
                    <li><Link to="/mechanics">Why Do These Ads Appear?</Link></li>
                    <li><Link to="/surveillance">Surveillance Capitalism -- Does it work?</Link></li>
                    <li><Link to="/questions">Questions for the Future</Link></li>
                    <li><Link to="/detox">(Bonus Content) How to Digitally Disappear</Link></li>
                </ul>
          </div>
          <div className="main-content">
            <Switch>
                <Route path="/authors">
                    {/* <Le /> */}
                </Route>
                <Route path="/introduction">
                    <Gavin />
                </Route>
                <Route path="/mechanics">
                    <Le />
                </Route>
                <Route path="/surveillance">
                    <Jacob />
                </Route>
                <Route path="/questions">
                    <Carlita />
                </Route>
                <Route path="/detox">
                    {/* <Le /> */}
                </Route>
            </Switch>
          </div>

          <Sidebar />

        </header>
      </div>
    </Router>
  );
}

export default App;
