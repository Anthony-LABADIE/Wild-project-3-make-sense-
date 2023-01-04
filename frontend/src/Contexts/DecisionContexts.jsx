/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from "react";
import PropTypes from "prop-types";
import dataDecision from "../tools/dataDecision";

const CurrentDecisionContext = createContext();

export default CurrentDecisionContext;

export function CurrentDecisionContextProvider({ children }) {
  const [apidecision, setApiDecision] = useState(dataDecision);
  return (
    <CurrentDecisionContext.Provider value={{ apidecision, setApiDecision }}>
      {children}
    </CurrentDecisionContext.Provider>
  );
}
CurrentDecisionContextProvider.propTypes = {
  children: PropTypes.string.isRequired,
};
