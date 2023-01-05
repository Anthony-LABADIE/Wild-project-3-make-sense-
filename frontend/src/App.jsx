import { BrowserRouter as Router } from "react-router-dom";
import Transition from "./Transition";
import { CurrentDecisionContextProvider } from "./Contexts/DecisionContexts";
import AuthProvider from "./hooks/authContext";

import "./App.css";

function App() {
  return (
    <div className="App">
      <CurrentDecisionContextProvider>
        <Router>
          <AuthProvider>
            <Transition />
          </AuthProvider>
        </Router>
      </CurrentDecisionContextProvider>
    </div>
  );
}

export default App;
