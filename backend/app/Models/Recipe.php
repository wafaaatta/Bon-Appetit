<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'title',
        'content',
        'picture',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function ingredient()
    {
        return $this->belongsToMany(Ingredient::class, "ingredient_recipe");
    }

    // public function picture()
    // {
    //     return $this->hasOne(Picture::class);
    // }

    // public function category()
    // {
    //     return $this->hasOne(Category::class);
    // }

    // public function comment()
    // {
    //     return $this->hasMany(Comment::class);
    // }
}
