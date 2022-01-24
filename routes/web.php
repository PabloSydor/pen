<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

use App\Models\Post;
use App\Models\User;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
})->name('inicio');

// Route::get('posts', function () {
//     return view('posts.listado');
// })->name('posts_listado');

// Route::get('posts/{id}', function ($id) {
//     return view('posts.ficha', compact('id'));
// })->where('id', '[0-9]+')->name('posts_ficha');


Route::resource('posts', PostController::class);

Route::get('nueva', [PostController::class, 'nuevoPrueba'])->name('posts.nueva');

Route::get('editar/{id}', [PostController::class, 'editarPrueba'])->name('posts.editar');
