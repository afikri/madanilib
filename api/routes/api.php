<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\RegisterController;
use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\LogoutController;

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
