<?php

namespace App\Http\Controllers;

use App\Models\Ingredient;
use Illuminate\Http\Request;
use App\Models\Recipe;
use IntlChar;

class IngredientController extends Controller
{
    public function getIngredients()
    {
        $ingredients = Ingredient::all();

        return $ingredients;
    }
    public function getIngredient($id)
    {
        $Ingredient = Ingredient::find($id);

        return $Ingredient;
    }


    public function deleteIngredient($id)
    {
        $Ingredient = Ingredient::find($id);
        $Ingredient->delete();

        return response()->json(['status' => 200, 'content' => 'Ingrédient supprimé avec succès']);
    }

    public function postIngredient(Request $request, String $id)
    {

        $Ingredient = new Ingredient;
        $Ingredient->name = $request->name;
        $Ingredient->save();
        $lastIngredient = Ingredient::orderBy('id', 'desc')->first();
        $ingredient_id = $lastIngredient->id;

        $recipe = Recipe::find($id);

        if (!$recipe) {
            return response()->json(['message' => 'Séance non trouvée'], 404);
        }

        $recipe->ingredient()->attach($ingredient_id);

        return response()->json(['status' => 200, 'content' => 'Ingrédient ajouté avec succès']);
    }

    public function editIngredient($id, Request $request)
    {
        $Ingredient = Ingredient::find($id);
        $Ingredient->name = $request->name;
        $Ingredient->save();

        return response()->json(['status' => 200, 'content' => 'Ingrédient modifié avec succès']);
    }
}
