<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('internals', function (Blueprint $table) {
            $table->id();
            $table->string('category')->nullable();
            $table->string('tags')->nullable();
            $table->string('date')->nullable();
            $table->string('activity')->nullable();
            $table->string('organizer')->nullable();
            $table->string('target')->nullable();            
            $table->string('participant')->nullable();
            $table->string('objective')->nullable();
            $table->string('links')->nullable();
            $table->string('types')->nullable();
            $table->text('key_res')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('internals');
    }
};
