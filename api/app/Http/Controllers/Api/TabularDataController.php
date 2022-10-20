<?php

namespace App\Http\Controllers\Api;
use App\Models\TabularData;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class TabularDataController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = TabularData::all();
        return response()->json($data,200);
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
     * @param  \App\Models\TabularData  $tabularData
     * @return \Illuminate\Http\Response
     */
    public function show(TabularData $tabularData)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\TabularData  $tabularData
     * @return \Illuminate\Http\Response
     */
    public function edit(TabularData $tabularData)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\TabularData  $tabularData
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TabularData $tabularData)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TabularData  $tabularData
     * @return \Illuminate\Http\Response
     */
    public function destroy(TabularData $tabularData)
    {
        //
    }
}
