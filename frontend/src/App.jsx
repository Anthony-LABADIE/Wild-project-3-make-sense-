import { BrowserRouter as Router } from "react-router-dom";
import Transition from "./Transition";
import { CurrentDecisionContextProvider } from "./Contexts/DecisionContexts";

import "./App.css";

function App() {
  return (
    <div className="App">
      <CurrentDecisionContextProvider>
        <Router>
          <Transition />
        </Router>
      </CurrentDecisionContextProvider>
    </div>
  );
}

export default App;
