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

    public function recettes()
    {
        return $this->hasMany(Recette::class, 'category_id');
    }

}
