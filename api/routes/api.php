<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\RegisterController;
use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\LogoutController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\DocumentController;
use App\Http\Controllers\Api\ExternalController;
use App\Http\Controllers\Api\InternalController;
use App\Http\Controllers\Api\LiteratureController;
use App\Http\Controllers\Api\PressController;
use App\Http\Controllers\Api\PublicationController;
use App\Http\Controllers\Api\SpatialController;
use App\Http\Controllers\Api\TabularDataController;
use App\Http\Controllers\Api\TrainingController;

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
Route::resource('externals', ExternalController::class);
Route::resource('internals', InternalController::class);
Route::resource('literatures', LiteratureController::class);
Route::resource('presses', PressController::class);

Route::resource('spatials', SpatialController::class);
Route::resource('publications', PublicationController::class);
Route::resource('data', TabularDataController::class);
Route::resource('trainings', TrainingController::class);

Route::resource('categories', CategoryController::class);

Route::get('/categories', [PublicationController::class, 'searchByCat']);
