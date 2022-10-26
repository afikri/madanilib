<?php

namespace App\Http\Controllers\Api;

use App\Models\Spatial;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SpatialController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $spatials = Spatial::all();
        return response()->json($spatials, 200);
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
     * @param  \App\Modes\Spatial  $spatial
     * @return \Illuminate\Http\Response
     */
    public function show(Spatial $spatial)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Modes\Spatial  $spatial
     * @return \Illuminate\Http\Response
     */
    public function edit(Spatial $spatial)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Modes\Spatial  $spatial
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Spatial $spatial)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Modes\Spatial  $spatial
     * @return \Illuminate\Http\Response
     */
    public function destroy(Spatial $spatial)
    {
        //
    }
}
