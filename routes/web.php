<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Landing Page (Public)
Route::get('/', function () {
    return Inertia::render('Landing');
})->name('home');

// Service Detail Pages
Route::get('/services/{slug}', function ($slug) {
    $validSlugs = ['social-media', 'paid-ads', 'seo', 'pr-social-listening', 'branding', 'software-ai'];

    if (!in_array($slug, $validSlugs)) {
        abort(404);
    }

    return Inertia::render('ServiceDetail', [
        'slug' => $slug
    ]);
})->name('service.detail');

// Contact Form Submission
Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');

// Admin Dashboard (Protected by admin middleware)
Route::middleware(['auth', 'admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/contacts', [\App\Http\Controllers\Admin\ContactController::class, 'index'])->name('contacts.index');
    Route::delete('/contacts/{contact}', [\App\Http\Controllers\Admin\ContactController::class, 'destroy'])->name('contacts.destroy');
});

require __DIR__.'/auth.php';
