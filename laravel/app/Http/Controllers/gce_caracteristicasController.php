<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserSantiago;

class gce_caracteristicasController extends Controller
{
    public function getUsuarios()
    {
        // Lógica para mostrar todos los usuarios
        $users = User::all();

        return response()->json($users);
    }

    public function store(Request $request)
    {
        // Lógica para guardar un nuevo usuario
    }

    public function show($id)
    {
        // Lógica para mostrar un usuario específico
    }

    public function update(Request $request, $id)
    {
        // Lógica para actualizar un usuario específico
    }

    public function destroy($id)
    {
        // Lógica para eliminar un usuario específico
    }
}