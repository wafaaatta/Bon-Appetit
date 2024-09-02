import { combineReducers } from '@reduxjs/toolkit';
import SearchSlice from './slice/SearchSlice';
import RecipeSlice from './slice/RecipeSlice';
import AuthSlice from './slice/AuthSlice';

const rootReducer = combineReducers({
    search: SearchSlice,
    recipe_reducer: RecipeSlice,
    auth_reducer: AuthSlice
})


export default rootReducer