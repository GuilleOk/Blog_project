import { createContext, useReducer } from "react";

const LoginContext = createContext()

const initialState = {
  isLogged: false,
}

export const LoginContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <LoginContext.Provider>{children}</LoginContext.Provider>
  )
}