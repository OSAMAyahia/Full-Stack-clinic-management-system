import { configureStore } from '@reduxjs/toolkit';
import { RootReducer } from './RootReducer';
const initState={}
export const Store=configureStore({reducer:RootReducer},initState)