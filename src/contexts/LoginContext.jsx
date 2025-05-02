import { createContext, useReducer } from "react";

export const LoginContext = createContext()

const initialState = {
  isLogged: false,
  userEmail: '',
  userPsw: ''
}

const reducer = (state, action) => {
  const { type, payload } = action
  
  switch (type) {
    case 'LOGIN-REGISTER': {
      return payload
    };
      
    case 'LOGOUT': {
      return initialState
    };
      default: return state
  }
}

export const LoginContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const login_register = (content) => {dispatch({
    type: 'LOGIN-REGISTER',
    payload: content
  })
  }
  
  const logout = () => {
    dispatch({
    type: 'LOGOUT'
  })}

  return (
    <LoginContext.Provider  value={{state, login_register, logout}}>{children}</LoginContext.Provider>
  )
}