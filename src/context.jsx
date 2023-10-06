import { createContext, useState } from "react";

const Context = createContext({});

function ContextProvider({ children }) {
  const [data, setData] = useState([]);

  return <Context.Provider value={{ data, setData }}>{children}</Context.Provider>;
}

export { Context, ContextProvider };
