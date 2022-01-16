<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\MovieController;
use Illuminate\Support\Facades\Route;



Route::get("/", [HomeController::class, 'index'])->name("home");

Route::get('movies', [MovieController::class, 'index'])->name("movies");
Route::get('movies/{id}', [MovieController::class, 'show'])->name('movies-show');
Route::delete('movies/{id}', [MovieController::class, 'destroy'])->name('movies-destroy');

// Route::resource('movies', ['MovieController'])
// ->only(['index', 'show', 'create', 'edit', 'destroy']);

// Route::resource('libros', 'LibroController')
// ->only(['index', 'show', 'create', 'edit']);


