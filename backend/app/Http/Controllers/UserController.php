<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Laravel\Sanctum\HasApiTokens;

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
        $request->validate([
            'username' => 'required|string|max:255',
            'email' => 'required|unique:users|email',
            'password' => ['required', 'regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/', 'confirmed'],
            'password_confirmation' => 'required|same:password'
        ]);

        $user = User::create($request->all());
        $token = $user->createToken('authToken', ['*']);
            return response()->json(['token' => $token->plainTextToken]);
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


    public function login(Request $request)
    {
        Log::info('Request data:', $request->all());
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required']
        ]);

        if (Auth::attempt($credentials)) {
            if (auth('sanctum')->check()) {
                auth()->user()->tokens()->delete();
            }
            $user = User::where('email', $credentials['email'])->first();
            $token = $user->createToken('authToken', ['*'])
                ->plainTextToken;
            return response()->json(['message' => 'Log successfully',
                'token' => $token,
                'user' => $user
            ]);
        } else {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }
    }
}
