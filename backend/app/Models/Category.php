<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    public $fillable = [
        'name',
    ];

    public function recipe()
    {
        return $this->hasMany(Recipe::class, "category_recipe");
    }

}
