// rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';

import playersReducer from './features/playersSlice';
import footballPositionsReducer from './features/footballPositionsSlice';
import footballCategoriesReducer from './features/footballCategoriesSlice';

const rootReducer = combineReducers({
  players: playersReducer,
  footballPositions: footballPositionsReducer,
  footballCategories: footballCategoriesReducer,
});

export default rootReducer;
