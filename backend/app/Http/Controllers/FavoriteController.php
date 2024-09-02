<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Favorite;

class FavoriteController extends Controller
{
    public function getFavorites($userId) {
        $favorites = Favorite::where('user_id', $userId)->get();
        return $favorites;
    }

    public function postFavorite(Request $request, $userId, $recipeId) {
        $favorite = new Favorite;
        $favorite->user_id = $userId;
        $favorite->recipe_id = $recipeId;
        $favorite->save();

        return response()->json(['status' => 200, 'content' => 'Recette ajoutée aux favoris avec succès']);
    }

    public function deleteFavorite(Request $request, $id) {
        $favorite = Favorite::find($id);

        if ($favorite->user_id !== $request->user()->id) {
            return response()->json(['status' => 403, 'content' => 'Vous n\'êtes pas autorisé à supprimer cette recette de vos favoris']);
        }

        $favorite->delete();

        return response()->json(['status' => 200, 'content' => 'Recette supprimée des favoris avec succès']);
    }
}
