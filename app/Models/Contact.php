<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $fillable = [
        'personal_name',
        'company_name',
        'phone_number',
        'email',
        'services',
        'more_details',
    ];

    protected $casts = [
        'services' => 'array',
    ];
}
