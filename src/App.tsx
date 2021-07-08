import * as React from "react"
import Routes from "./router"
import { BrowserRouter as Router, Switch, useHistory } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router forceRefresh={true}  >
      <main>
        <Routes />
      </main>
    </Router>
  )
}

export default App
