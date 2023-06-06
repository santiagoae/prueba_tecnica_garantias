<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\gce_caracteristicasController;

Route::get('/users', 'gce_caracteristicasController@getUsuarios');
// Route::post('/users', 'UserController@store');
// Route::get('/users/{id}', 'UserController@show');
// Route::put('/users/{id}', 'UserController@update');
// Route::delete('/users/{id}', 'UserController@destroy');