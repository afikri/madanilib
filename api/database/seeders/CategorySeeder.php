<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('categories')->insert([
            [
                "category" => "Bencana",
                "created_at" => now(),
                "updated_at" => now()
            ],
            [
                "category" => "Biofuel",
                "created_at" => now(),
                "updated_at" => now()
            ],
            [
                "category" => "Deforestasi",
                "created_at" => now(),
                "updated_at" => now()
            ],
            [
                "category" => "Gambut",
                "created_at" => now(),
                "updated_at" => now()
            ],
            [
                "category" => "Hutan Alam",
                "created_at" => now(),
                "updated_at" => now()
            ],
            [
                "category" => "Karhutla",
                "created_at" => now(),
                "updated_at" => now()
            ],
            [
                "category" => "Konsesi",
                "created_at" => now(),
                "updated_at" => now()
            ],
            [
                "category" => "Masyarakat Adat",
                "created_at" => now(),
                "updated_at" => now()
            ],
            [
                "category" => "Perhutanan Sosial",
                "created_at" => now(),
                "updated_at" => now()
            ],
            [
                "category" => "Pilpres",
                "created_at" => now(),
                "updated_at" => now()
            ],
            [
                "category" => "Sawit",
                "created_at" => now(),
                "updated_at" => now()
            ],
        ]);
    }
}
