import './App.css';
import HeaderNav from './components/HeaderNav/HeaderNav.js';
import SideBar from './components/SideBar/SideBar';
import Movies from './components/Home/Home.jsx';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
      <div>
      <Switch>
      <Route exact path="/">
      <HeaderNav/>
      <SideBar/>
      </Route>
      <Route exact path="/Home">
      <HeaderNav/>
      <SideBar/>
      </Route>
      <Route path="/ListMedicine">
      <HeaderNav/>
      <SideBar/>
      <Movies/>
      </Route>
      <Route path="/SearchMedicine">
      </Route>
      </Switch>
      </div>
      </Router>
     </div>
  );
}

export default App;
