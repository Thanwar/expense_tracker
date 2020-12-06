import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

// creating the initial state

const initialState = {
  transactions: [],
};

// global context

export const GlobalContext = createContext(initialState);

// provider for the global context

export const GlobalProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(AppReducer, initialState)


    // Actions for transactions

    function delTransaction(id){
      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
      });
    }

    function addTransaction(transaction){
      dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
      });
    }




  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        delTransaction,
        addTransaction
      }}
    >
        {children}
    </GlobalContext.Provider>
  );
};
