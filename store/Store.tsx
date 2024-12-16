import React, { FC, useReducer } from 'react';
import { AppContext, initialState, Reducer } from '.';
import { ActionProps, IStoreState } from './types';

export const AppProvider: FC<any> = ({ children }) => {
  const [state, dispatch] = useReducer<React.Reducer<IStoreState, ActionProps>>(
    Reducer,
    initialState,
  );

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
