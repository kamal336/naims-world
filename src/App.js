import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Admin from './Pages/Admin/Admin';
import Home from './Pages/Home/Home/Home';
import ManageEvent from './Pages/ManageEvent/ManageEvent';
import MyEvents from './Pages/MyEvents/MyEvents';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';
import AddEvent from './Pages/AddEvent/AddEvent';
import Login from './Pages/Authentication/Login/Login';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/myevents">
          <MyEvents />
        </Route>
        <Route path="/eventmanage">
          <ManageEvent />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/addevent">
          <AddEvent />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
