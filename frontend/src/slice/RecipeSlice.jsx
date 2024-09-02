import { createSlice } from "@reduxjs/toolkit";

const RecipeSlice = createSlice({
    name: 'recipe-slice',
    initialState: {
        currentRecipe: null
    },

    reducers: {
        setRecipe(state, action) {
            state.currentRecipe = action.payload
        }
    }
})


export const { setRecipe } = RecipeSlice.actions
export default RecipeSlice.reducer