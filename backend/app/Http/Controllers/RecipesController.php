<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;


class RecipesController extends Controller
{
    public function getRecipes()
    {
        $recipes = Recipe::with(['category', 'ingredient'])->get();

        return $recipes;
    }
    public function getRecipe($id)
    {
        $recipe = Recipe::with(['category', 'ingredient'])->get();($id);

        return $recipe;
    }


    public function deleteRecipe($id)
    {
        $recipe = Recipe::find($id);
        $recipe->ingredient()->detach();
        $recipe->delete();

        return response()->json(['status' => 200, 'content' => 'Recette supprimé avec succées']);
    }

    public function postRecipe(Request $request)
    {
        $recipe = new Recipe;
        $recipe->title = $request->title;
        $recipe->content = $request->content;
        $recipe->user_id = $request->user_id;
        $recipe->category_id = 1;
        if ($request->hasFile('picture')) {
            $recipe->picture = $request->file('picture')->store('images/recipes', 'public');
        }
        $recipe->save();

        $lastRecipe = Recipe::orderBy('id', 'desc')->first();
        $recipe_id = $lastRecipe->id;

        return response()->json(['status' => 200, 'content' => 'Recette ajouter avec succées', "recipe_id" => $recipe_id]);
    }

    public function editRecipe($id, Request $request)
    {
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

    public function getRecipesCategory()
    {
        $recipes = Recipe::with(['category', 'ingredient'])
        ->where('category_id', 2)
        ->get();

        return $recipes;
    }
}
