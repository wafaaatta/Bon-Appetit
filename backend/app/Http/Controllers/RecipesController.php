<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class RecipesController extends Controller
{
    public function getRecipes() {
        $recipes = Recipe::with('ingredient')->get();

        return $recipes;
    }
    public function getRecipe($id) {
        $recipe = Recipe::find($id);

        return $recipe;
    }


    public function deleteRecipe($id) {
        $recipe = Recipe::find($id);
        $recipe->ingredient()->detach();
        $recipe->delete();

        return response()->json(['status' => 200, 'content' => 'Recette supprimée avec succées']);
    }

    public function postRecipe(Request $request) {
        $recipe = new Recipe;
        $recipe->title = $request->title;
        $recipe->content = $request->content;
        $recipe->category_id = $request->category_id;
        $recipe->status = $request->status;
        $recipe->user_id = $request->user_id;
        if ($request->hasFile('picture')) {
            $recipe->picture = $request->file('picture')->store('images/recipes', 'public');
        }
        $recipe->save();

        return response()->json(['status' => 200, 'content' => 'Recette ajoutée avec succées']);
    }

    public function editRecipe($id, Request $request) {
        $recipe = Recipe::find($id);
        $recipe->title = $request->title;
        $recipe->content = $request->content;
        if ($request->hasFile('picture')) {
            if ($recipe->picture) {
                Storage::disk('public')->delete($recipe->picture);
            }

            $recipe->picture = $request->file('picture')->store('images/recipes', 'public');
        }
        $recipe->save();

        return response()->json(['status' => 200, 'content' => 'Recette modifier avec succées']);
    }

    public function attachIngredient(Request $request, $id)
    {
        $recipe = Recipe::find($id);

        if (!$recipe) {
            return response()->json(['message' => 'Recette non trouvée'], 404);
        }

        $recipe->ingredient()->attach($request->ingredient_id);

        return response()->json(['message' => 'Recette ajoutée avec succès']);
    }
}
