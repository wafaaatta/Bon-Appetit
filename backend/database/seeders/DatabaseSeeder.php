<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            CategorySeeder::class,
            RecipeSeeder::class,
            CommentSeeder::class,
            FavoriteSeeder::class,
            IngredientSeeder::class,
        ]);

        User::factory()->create([
            'username' => 'Test User',
            'email' => 'test@example.com',
            'role' => 'admin',
            'password' => bcrypt('password')
        ]);

        User::factory(10)->create();
    }
}
