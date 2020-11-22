import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route,BrowserRouter as Router, Switch } from 'react-router-dom';
import add from './pages/add';
import listStudent from './pages/listStudent';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
      <Route exact path="/" component={listStudent} />
      <Route exact path="/home" component={listStudent} />
      <Route exact path="/new" component={add} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
