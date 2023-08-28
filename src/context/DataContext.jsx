import { createContext, useState } from "react";
import PropTypes from "prop-types";
export const DataContext = createContext();
const DataContextProvider = ({ children }) => {
  const [data, setData] = useState({});
  const value = { data, setData };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

DataContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataContextProvider;
