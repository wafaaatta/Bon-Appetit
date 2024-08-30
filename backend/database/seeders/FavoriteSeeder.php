<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Favorite;

class FavoriteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $favorites = [
            ['user_id' => 1, 'recipe_id' => 1],
            ['user_id' => 1, 'recipe_id' => 2],
            ['user_id' => 1, 'recipe_id' => 3],
            ['user_id' => 2, 'recipe_id' => 4],
            ['user_id' => 2, 'recipe_id' => 5],
            ['user_id' => 2, 'recipe_id' => 6],
            ['user_id' => 3, 'recipe_id' => 7],
            ['user_id' => 3, 'recipe_id' => 8],
            ['user_id' => 3, 'recipe_id' => 9],
            ['user_id' => 4, 'recipe_id' => 10],
            ['user_id' => 4, 'recipe_id' => 11],
            ['user_id' => 4, 'recipe_id' => 12],
        ];

        foreach ($favorites as $favorite) {
            Favorite::create($favorite);
        }
    }
}
