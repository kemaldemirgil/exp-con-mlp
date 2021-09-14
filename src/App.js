import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import MainLanding from "./pages/MainLanding";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <Router basename="/">
      <Route exact path="/">
        <MainLanding />
      </Route>
      <Route exact path="/pricing">
        <Pricing />
      </Route>
    </Router>
  );
}

export default App;
