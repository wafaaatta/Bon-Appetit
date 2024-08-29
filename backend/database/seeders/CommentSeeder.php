<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Comment;

class CommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $comments = [
            [
                'user_id' => 1,
                'recipe_id' => 1,
                'content' => 'This is a great recipe!',
            ],
            [
                'user_id' => 2,
                'recipe_id' => 1,
                'content' => 'I love this recipe!',
            ],
            [
                'user_id' => 3,
                'recipe_id' => 1,
                'content' => 'This recipe is amazing!',
            ],
            [
                'user_id' => 1,
                'recipe_id' => 2,
                'content' => 'This is a great recipe!',
            ],
            [
                'user_id' => 2,
                'recipe_id' => 2,
                'content' => 'I love this recipe!',
            ],
            [
                'user_id' => 3,
                'recipe_id' => 2,
                'content' => 'This recipe is amazing!',
            ],
            [
                'user_id' => 1,
                'recipe_id' => 3,
                'content' => 'This is a great recipe!',
            ],
            [
                'user_id' => 2,
                'recipe_id' => 3,
                'content' => 'I love this recipe!',
            ],
            [
                'user_id' => 3,
                'recipe_id' => 3,
                'content' => 'This recipe is amazing!',
            ],
        ];

        foreach ($comments as $comment) {
            Comment::create($comment);
        }
    }
}
