<?php

namespace App\Http\Controllers\Api;

use App\Models\External;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ExternalController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $externals = External::all();
        return response()->json($externals,200);
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
     * @param  \App\Models\External  $external
     * @return \Illuminate\Http\Response
     */
    public function show(External $external)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\External  $external
     * @return \Illuminate\Http\Response
     */
    public function edit(External $external)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\External  $external
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, External $external)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\External  $external
     * @return \Illuminate\Http\Response
     */
    public function destroy(External $external)
    {
        //
    }
}
