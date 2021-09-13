import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import MainLandingPage from "./MainLandingPage";

function App() {
  return (
    <Router basename="/">
      <Route exact path="/">
        <MainLandingPage />
      </Route>
    </Router>
  );
}

export default App;
