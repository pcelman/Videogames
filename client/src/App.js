import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import Home from "./components/Home"
// import Create from "./components/Create"
// import Detail from "./components/Detail"
import NotFound from "./components/NotFound"


function App() {
  return (
<BrowserRouter>
    <div className="App">
    <Switch>
      <Route exact path ="/"component= {LandingPage}/>
      <Route path = "/home" component = {Home}/>
      {/* <Route path = "/create" component = {Create}/>
      <Route path = "/detail/:id" component = {Detail}/> */}
      <Route path = "/*" component = {NotFound}/>
    </Switch>
    </div>
</BrowserRouter>
  );
}

export default App;
