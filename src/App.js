import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

import
  {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import TeamDetails from './components/TeamDetails/TeamDetails';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Service from './components/Service/Service';
import Contact from './components/Contact/Contact';

function App() {

  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/team/details/:teamId">
            <TeamDetails></TeamDetails>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/service">
            <Service></Service>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
