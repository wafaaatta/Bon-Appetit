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
        $recipe = Recipe::with(['category', 'ingredient'])->find($id);

        return $recipe;
    }

    public function getRecipeByName($title)
    {
        $recipe = Recipe::with(['category', 'ingredient'])
                        ->where('title', 'like', '%' . $title . '%')
                        ->get();

        return $recipe;
    }


    public function deleteRecipe($id)
    {
        $recipe = Recipe::find($id);
        $recipe->ingredient()->detach();
        $recipe->delete();

        return response()->json(['status' => 200, 'content' => 'Recette supprimée avec succès']);
    }

    public function postRecipe(Request $request)
    {
        $recipe = new Recipe;
        $recipe->title = $request->title;
        $recipe->content = $request->content;
        $recipe->category_id = $request->category_id;
        $recipe->status = "on";
        $recipe->user_id = $request->user_id;
        if ($request->hasFile('picture')) {
            $recipe->picture = $request->file('picture')->store('images/recipes', 'public');
        }
        $recipe->save();

        $lastRecipe = Recipe::orderBy('id', 'desc')->first();
        $recipe_id = $lastRecipe->id;

        return response()->json(['status' => 200, 'content' => 'Recette ajoutée avec succès', "recipe_id" => $recipe_id]);
    }

    public function editRecipe($id, Request $request)
    {
        $recipe = Recipe::find($id);
        $recipe->title = $request->title;
        $recipe->content = $request->content;
        $recipe->category_id = $request->category_id;
        if ($request->hasFile('picture')) {
            if ($recipe->picture) {
                Storage::disk('public')->delete($recipe->picture);
            }

            $recipe->picture = $request->file('picture')->store('images/recipes', 'public');
        }
        $recipe->save();

        return response()->json(['status' => 200, 'content' => 'Recette modifiée avec succès']);
    }

    public function getRecipesCategory($id)
    {
        $recipes = Recipe::with(['category', 'ingredient'])
            ->where('category_id', $id)
            ->get();

        return $recipes;
    }
}
