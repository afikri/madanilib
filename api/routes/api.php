<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\RegisterController;
use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\LogoutController;
use App\Http\Controllers\Api\DocumentController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\PublicationController;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

/**
 * route "/register"
 * @method "POST"
 */
Route::post('/register', RegisterController::class);

/**
 * route "/login"
 * @method "POST"
 */
Route::post('/login', LoginController::class);

/**
 * route "/logout"
 * @method "POST"
 */
Route::post('/logout', LogoutController::class);

Route::resource('documents', DocumentController::class);
Route::resource('publications', PublicationController::class);
Route::resource('categories', CategoryController::class);

Route::get('/categories', [PublicationController::class, 'searchByCat']);
