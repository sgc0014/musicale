import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Radio } from "./pages/radio";
import { Home } from "./pages/home";
import { Musiccontroller } from "./components/musicController";
import { Searchbar } from "./components/searchbar.js";
import { Searchresult } from "./pages/searchResult";
import { Layout } from "./components/layout";
import { Playlist } from "./pages/playlist";

function App() {
  return (
    <div className="App">
      <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/radio" component={Radio}></Route>
          <Route path="/playlist" component={Playlist}></Route>
          <Route path="/search/:query" component={Searchresult}></Route>
        </Switch>
        </Layout>
      </Router>

     
    </div>
  );
}

export default App;
