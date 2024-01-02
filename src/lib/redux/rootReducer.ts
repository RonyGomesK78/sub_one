// rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import playersReducer from './features/playersSlice';


const rootReducer = combineReducers({
  players: playersReducer,
});

export default rootReducer;
