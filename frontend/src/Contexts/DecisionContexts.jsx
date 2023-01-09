/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from "react";
import PropTypes from "prop-types";
import dataDecision from "../tools/dataDecision";

const CurrentDecisionContext = createContext();

export default CurrentDecisionContext;

export function CurrentDecisionContextProvider({ children }) {
  const [apidecision, setApiDecision] = useState(dataDecision);
  const [input, setInput] = useState({
    Title: "",
    Description: "",
    Description1: "",
    Description2: "",
    Description3: "",
    Description4: "",
  });
  const login = (data) => {
    setInput({ data });
  };

  const value = {
    input,
    login,
    setInput,
    apidecision,
    setApiDecision,
  };
  return (
    <CurrentDecisionContext.Provider value={value}>
      {children}
    </CurrentDecisionContext.Provider>
  );
}
CurrentDecisionContextProvider.propTypes = {
  children: PropTypes.string.isRequired,
};
