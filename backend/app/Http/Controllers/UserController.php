<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getUsers()
    {
        $users = User::all();

        return $users;
    }
    public function getOneUser($id)
    {
        $user = User::find($id);

        return $user;
    }


    public function deleteUser($id)
    {
        $user = User::find($id);
        $user->delete();

        return response()->json(['status' => 200, 'content' => 'Utilisateur supprimé avec succès']);
    }

    public function postUser(Request $request)
    {
        $user = new User;
        $user->username = $request->username;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->role = 'user';
        $user->save();

        $userId = $user->id;

        return response()->json(['status' => 200, 'content' => 'Utilisateur ajouté avec succès', 'user_id' => $userId]);

    }

    public function editUser($id, Request $request)
    {
        $user = User::find($id);
        $user->username = $request->username;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->save();

        return response()->json(['status' => 200, 'content' => 'Utilisateur modifié avec succès']);
    }

    public function login(Request $request) {

        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);


        if ($validator->fails()) {
            throw ValidationException::withMessages($validator->errors()->toArray());
        }

        if (!Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            throw ValidationException::withMessages(['message' => 'Les informations d\'identification fournies sont incorrectes']);
        }

        if(auth('sanctum')->check()){
            auth()->user()->tokens()->delete();
         }

        $user = Auth::user();

         $token = Auth::user()
                  ->createToken('app_token',['*'])
                  ->plainTextToken;

        return response()->json(['user' => $user, 'token' => $token]);

}

}
