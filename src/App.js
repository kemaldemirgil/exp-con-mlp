// imports...................
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainLanding from "./pages/MainLanding";
import Pricing from "./pages/Pricing";
import Payment from "./pages/Payment";
import "./App.css";

// app...................
function App() {
  return (
    <Router basename="/">
      <Route exact path="/">
        <MainLanding />
      </Route>
      <Route exact path="/pricing">
        <Pricing />
      </Route>
      <Route exact path="/payment">
        <Payment />
      </Route>
    </Router>
  );
}

// exports...................
export default App;
