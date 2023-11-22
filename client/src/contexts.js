import React, { createContext, useReducer, useContext, useEffect } from 'react';
import axios from 'axios';

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('http://localhost:4000/todos');
        dispatch({ type: 'INITIALIZE_TODOS', data: response.data });
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };


  }, []);
  
  return <StateContext.Provider value={[state, dispatch]}>{children}</StateContext.Provider>;
};

export const useStateValue = () => useContext(StateContext);
