<?php

namespace App\Http\Controllers\Api;

use App\Models\Internal;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class InternalController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $internals = Internal::all();
        return response()->json($internals,200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Internal  $internal
     * @return \Illuminate\Http\Response
     */
    public function show(Internal $internal)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Internal  $internal
     * @return \Illuminate\Http\Response
     */
    public function edit(Internal $internal)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Internal  $internal
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Internal $internal)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Internal  $internal
     * @return \Illuminate\Http\Response
     */
    public function destroy(Internal $internal)
    {
        //
    }
}
