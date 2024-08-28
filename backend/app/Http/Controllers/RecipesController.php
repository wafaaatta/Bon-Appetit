<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use Illuminate\Http\Request;

class RecipesController extends Controller
{
    public function getRecipes() {
        $recipes = Recipe::all();

        return $recipes;
    }
    public function getRecipe($id) {
        $recipe = Recipe::find($id);

        return $recipe;
    }


    public function deleteRecipe($id) {
        $recipe = Recipe::find($id);
        $recipe->delete();

        return response()->json(['status' => 200, 'content' => 'Recette supprimé avec succées']);
    }

    public function postRecipe(Request $request) {
        $recipe = new Recipe;
        $recipe->title = $request->title;
        $recipe->content = $request->content;
        $recipe->user_id = 2;
        $recipe->ingredient_id = 2;
        $recipe->picture_id = 2;
        $recipe->save();

        return response()->json(['status' => 200, 'content' => 'Recette ajouter avec succées']);
    }

    public function editRecipe($id, Request $request) {
        $recipe = Recipe::find($id);
        $recipe->title = $request->title;
        $recipe->content = $request->content;
        $recipe->save();

        return response()->json(['status' => 200, 'content' => 'Recette modifier avec succées']);
    }
}
