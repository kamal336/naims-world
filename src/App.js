import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import ManageEvent from './Pages/ManageEvent/ManageEvent';
import MyEvents from './Pages/MyEvents/MyEvents';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';
import AddEvent from './Pages/AddEvent/AddEvent';
import Login from './Pages/Authentication/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Booking from './Pages/Booking/Booking';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
     <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/myevents">
              <MyEvents />
            </PrivateRoute>
            <PrivateRoute path="/eventmanage">
              <ManageEvent />
            </PrivateRoute>
            <PrivateRoute path="/addevent">
              <AddEvent />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/booking/:id">
              <Booking />
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
     </AuthProvider>
  );
}

export default App;
