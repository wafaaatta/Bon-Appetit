<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use Illuminate\Http\Request;

class CommentsController extends Controller
{
    public function getComments($recipeId) {
        $comments = Comment::where('recipe_id', $recipeId)->get();
        return response()->json($comments);
    }

    public function postComment(Request $request, $recipeId) {
        $comment = new Comment;
        $comment->recipe_id = $recipeId;
        $comment->content = $request->content;
        $comment->user_id = $request->userId;
        $comment->save();

        return response()->json(['status' => 200, 'content' => 'Commentaire ajouté avec succès']);
    }

    public function deleteComment(Request $request, $id) {
        $comment = Comment::find($id);

        if ($comment->user_id !== $request->user()->id) {
            return response()->json(['status' => 403, 'content' => 'Vous n\'êtes pas autorisé à supprimer ce commentaire']);
        }

        $comment->delete();

        return response()->json(['status' => 200, 'content' => 'Commentaire supprimé avec succès']);
    }
}