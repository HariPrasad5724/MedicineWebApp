import "./App.css";
import HeaderNav from "./components/HeaderNav/HeaderNav.js";
import SideBar from "./components/SideBar/SideBar";
import DisplayMedicine from "./components/Home/Display";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Add Search Items
//Deploy backend and call from there must be implelemented
//Navigation must be made properly
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <HeaderNav />
              <SideBar />
            </Route>
            <Route exact path="/Home">
              <HeaderNav />
              <SideBar />
              <DisplayMedicine />
            </Route>
            <Route path="/ListMedicine">
              <HeaderNav />
              <SideBar />
              <DisplayMedicine />
            </Route>
            <Route path="/ListStore">
              <HeaderNav />
              <SideBar />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
