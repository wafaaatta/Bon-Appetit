<?php

namespace App\Http\Controllers;

use App\Models\Ingredient;
use Illuminate\Http\Request;

class IngredientController extends Controller
{
    public function getIngredients() {
        $ingredients = Ingredient::all();

        return $ingredients;
    }
    public function getIngredient($id) {
        $Ingredient = Ingredient::find($id);

        return $Ingredient;
    }


    public function deleteIngredient($id) {
        $Ingredient = Ingredient::find($id);
        $Ingredient->delete();

        return response()->json(['status' => 200, 'content' => 'Recette supprimé avec succées']);
    }

    public function postIngredient(Request $request) {
        $Ingredient = new Ingredient;
        $Ingredient->name = $request->name;
        $Ingredient->save();

        return response()->json(['status' => 200, 'content' => 'Recette ajouter avec succées']);
    }

    public function editIngredient($id, Request $request) {
        $Ingredient = Ingredient::find($id);
        $Ingredient->title = $request->title;
        $Ingredient->content = $request->content;
        $Ingredient->save();

        return response()->json(['status' => 200, 'content' => 'Recette modifier avec succées']);
    }

}
