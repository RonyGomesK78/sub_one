// rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';

import playersReducer from './features/playersSlice';
import footballPositionsReducer from './features/footballPositionsSlice';
import footballCategoriesReducer from './features/footballCategoriesSlice';
import users from './features/auth/usersSlice';

const rootReducer = combineReducers({
  players: playersReducer,
  footballPositions: footballPositionsReducer,
  footballCategories: footballCategoriesReducer,
  users,
});

export default rootReducer;
