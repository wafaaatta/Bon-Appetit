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

        return response()->json(['status' => 200, 'content' => 'Utilisateur supprimé avec succées']);
    }

    public function postUser(Request $request)
    {
        $user = new User;
        $user->username = $request->username;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->role = 'user';
        $user->save();

        return response()->json(['status' => 200, 'content' => 'Utilisateur ajouter avec succées']);
    }

    public function editUser($id, Request $request)
    {
        $user = User::find($id);
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->save();

        return response()->json(['status' => 200, 'content' => 'Utilisateur modifier avec succées']);
    }

//     public function login(Request $request) {

//         $validator = Validator::make($request->all(), [
//             'email' => 'required|string|email',
//             'password' => 'required|string',
//         ]);


//         if ($validator->fails()) {
//             throw ValidationException::withMessages($validator->errors()->toArray());
//         }

//         if (!Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
//             throw ValidationException::withMessages(['message' => 'Les informations d\'identification fournies sont incorrectes']);
//         }

//         if(auth('sanctum')->check()){
//             auth()->user()->tokens()->delete();
//          }

//         $user = Auth::user();

//          $token = Auth::user()
//                   ->createToken('app_token',['*'])
//                   ->plainTextToken;

//         return response()->json(['user' => $user, 'token' => $token]);

// }

}
