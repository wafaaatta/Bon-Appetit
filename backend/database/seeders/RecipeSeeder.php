<?php

namespace Database\Seeders;

use App\Models\Recipe;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RecipeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Recipe::factory()->create([
            'user_id' => 1,
            'title' => 'Test Recipe',
            'category_id' => 1,
            'ingredient_id' => 1,
            'content' => 'This is a test recipe.',
            'picture_id' => 1,
            'comment_id' => 1,
        ]);

        Recipe::factory(10)->create();
    }
}
