<?php

use App\Http\Controllers\CommentsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\RecipesController;
use App\Http\Controllers\IngredientController;

// Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/user', [UserController::class, 'getUsers']);
Route::get('/user/{id}', [UserController::class, 'getOneUser']);
Route::post('/user', [UserController::class, 'postUser']);
Route::put('/user/{id}', [UserController::class, 'editUser']);
Route::delete('/user/{id}', [UserController::class, 'deleteUser']);

Route::get('/recipes', [RecipesController::class, 'getRecipes']);
Route::get('/recipes/{id}', [RecipesController::class, 'getRecipe']);
Route::post('/recipes', [RecipesController::class, 'postRecipe']);
Route::put('/recipes/{id}', [RecipesController::class, 'editRecipe']);
Route::delete('/recipes/{id}', [RecipesController::class, 'deleteRecipe']);

Route::get('recipes/{recipeId}/comments', [CommentsController::class, 'getComments']);
Route::post('recipes/{recipeId}/comments', [CommentsController::class, 'postComment']);
Route::delete('comments/{id}', [CommentsController::class, 'deleteComment']);
Route::post('/attachIngredient/{id}', [RecipesController::class, 'attachIngredient']);
Route::post('/recipes/categories', [RecipesController::class, 'getRecipesCategory']);

Route::get('/ingredients', [IngredientController::class, 'getIngredients']);
Route::get('/ingredients/{id}', [IngredientController::class, 'getIngredient']);
Route::post('/ingredients/{id}', [IngredientController::class, 'postIngredient']);
Route::put('/ingredients/{id}', [IngredientController::class, 'editIngredient']);
Route::delete('/ingredients/{id}', [IngredientController::class, 'deleteIngredient']);
