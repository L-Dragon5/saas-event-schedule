<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Partner extends Model
{
    protected $fillable = ['name', 'image', 'url'];
    public $timestamps = false;

    public function schedule() {
        return $this->belongsTo(Schedule::class);
    }
}
