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
        Schema::create('documents', function (Blueprint $table) {
            $table->id();
            //define foreign id
            // $table->foreignId('category_id')->constrained('categories')->onUpdate('cascade')->onDelete('cascade');

            $table->string('category')->nullable();
            $table->string('tags')->nullable();
            $table->string('file_name')->nullable();
            $table->string('file_source')->nullable();
            $table->string('year')->nullable();
            $table->string('folder')->nullable();
            $table->text('doc_description')->nullable();

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
        Schema::dropIfExists('documents');
    }
};
