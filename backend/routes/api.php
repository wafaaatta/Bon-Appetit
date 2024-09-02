<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\RecipesController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CommentsController;
use App\Http\Controllers\IngredientController;
use App\Http\Controllers\FavoriteController;

// Public routes

Route::post('/user/login', [UserController::class, 'login']);
Route::post('/user/register', [UserController::class, 'postUser']);
Route::get('/recipes', [RecipesController::class, 'getRecipes']);
Route::get('/recipes/{id}', [RecipesController::class, 'getRecipe']);
Route::post('/recipes', [RecipesController::class, 'postRecipe']);
Route::put('/recipes/{id}', [RecipesController::class, 'editRecipe']);
Route::delete('/recipes/{id}', [RecipesController::class, 'deleteRecipe']);
Route::get('/getRecipeByName/{title}', [RecipesController::class, 'getRecipeByName']);

Route::get('/recipes/{recipeId}/comments', [CommentsController::class, 'getComments']);
Route::post('/recipes/{recipeId}/comments', [CommentsController::class, 'postComment']);
Route::delete('/comments/{id}', [CommentsController::class, 'deleteComment']);
Route::post('/attachIngredient/{id}', [RecipesController::class, 'attachIngredient']);
Route::get('/recipes/categories/{id}', [RecipesController::class, 'getRecipesCategory']);

Route::get('/ingredients', [IngredientController::class, 'getIngredients']);
Route::get('/ingredients/{id}', [IngredientController::class, 'getIngredient']);
Route::post('/ingredients/{id}', [IngredientController::class, 'postIngredient']);
Route::put('/ingredients/{id}', [IngredientController::class, 'editIngredient']);
Route::delete('/ingredients/{id}', [IngredientController::class, 'deleteIngredient']);

Route::get('/categories', [CategoryController::class, 'getCategory']);

Route::get('/ingredients', [IngredientController::class, 'getIngredients']);
Route::get('/ingredients/{id}', [IngredientController::class, 'getIngredient']);


Route::get('/user', [UserController::class, 'getUsers']);
Route::get('/user/{id}', [UserController::class, 'getOneUser']);
Route::put('/user/{id}', [UserController::class, 'editUser']);
Route::delete('/user/{id}', [UserController::class, 'deleteUser']);

Route::post('/recipes', [RecipesController::class, 'postRecipe']);
Route::put('/recipes/{id}', [RecipesController::class, 'editRecipe']);
Route::delete('/recipes/{id}', [RecipesController::class, 'deleteRecipe']);



Route::post('/ingredients', [IngredientController::class, 'postIngredient']);
Route::put('/ingredients/{id}', [IngredientController::class, 'editIngredient']);
Route::delete('/ingredients/{id}', [IngredientController::class, 'deleteIngredient']);

Route::get('/user/{userId}/favorites', [FavoriteController::class, 'getFavorites']);
Route::post('/user/{userId}/favorites/{recipeId}', [FavoriteController::class, 'postFavorite']);
Route::delete('/favorites/{id}', [FavoriteController::class, 'deleteFavorite']);

