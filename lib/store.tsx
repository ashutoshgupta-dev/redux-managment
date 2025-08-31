'use client'
import React from 'react';
import userReducer from './userSlice';
import { configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const store=configureStore({
    reducer:{
        users:userReducer,
    }
})

const ReduxProvider=({children}:{children:React.ReactNode})=>{
    return(
        <>
          <Provider store={store}>
                {children}
          </Provider>
        </>
    )

}

export type RootState = ReturnType<typeof store.getState>
export default ReduxProvider;