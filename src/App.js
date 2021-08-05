import './App.css'

import Panel from './views/panel'

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom"

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/">
                <Panel />
            </Route>
        </Switch>
    </Router>
  );
}

export default App
